import HeroBanner from '@/components/HeroBanner';
import { BlogPostTypes } from '@/types/types';

const BlogPost = ({
  post = {
    status: 'published',
    title: '',
    slug: '',
    author: '',
    published_at: '',
    updated_at: '',
    image_url: '',
    alt: '',
    summary: '',
    tags: [],
    keywords: '',
    content: '',
  },
  columns = 3,
}: BlogPostTypes) => {
  let content: string[] = [];

  if (post.content) {
    content = post.content.split('\n');
  } else {
    content = [];
  }

  return (
    <main className="blog-post content-grid">
      <HeroBanner
        h1={post.title || ''}
        para1={post.summary || ''}
        src={post.image_url || ''}
        alt={post.alt || ''}
      />
      <h3>By {post.author}</h3>
      <time className="mb-8">{post.published_at || ''}</time>
      <div className={`text-${columns.toString()}-cols`}>
        {content.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </main>
  );
};

export default BlogPost;
