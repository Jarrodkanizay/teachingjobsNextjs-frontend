import { blogData } from '@/data/blogData';
import { BlogPostTypes } from '@/types/types';
import HeroBanner from '@/components/HeroBanner';
import { formatDate } from '@/utils/utilityScripts';
import TalentPool from '@/components/TalentPoolCTA'; 

type Params = {
  slug: string;
};

type BlogPostPageProps = {
  params: Params;
};

export async function generateMetadata({ params }: any) {
  const blog = await blogData.find((post) => post.slug === params.slug);

  if (!blog) {
    throw new Error(`No blog post found for slug: ${params.slug}`);
  }

  return {
    title: blog.title,
    description: blog.summary,
    keywords: blog.keywords,
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogData.find((post) => post.slug === params.slug);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <main className="blog-post content-grid">
      <HeroBanner
        h1={post.title || ''}
        para1={post.summary || ''}
        src={post.image_url || ''}
        alt={post.alt || ''}
        reorder={false}
      />
      <h3>By {post.author}</h3>
      {/* <p>
        <time className="mr-4">{formatDate(post.published_at)}</time>
        {post.updated_at !== '' ? (
          <span className="text-slate-400">
            Updated: <time>{formatDate(post.updated_at)}</time>
          </span>
        ) : null}
      </p> */}
      <div
        className={`text-2-cols mt-8 prose`}
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
       <TalentPool  />
    </main>
  );
}
