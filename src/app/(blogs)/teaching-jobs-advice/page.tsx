import { useState } from 'react';
import { blogData } from '@/data/blogData';
import Image from 'next/image';
import Link from 'next/link';
// import { BlogPostTypes } from '@/types/types';
import HeroBanner from '@/components/HeroBanner';
import { formatDate } from '@/utils/utilityScripts';
import PaginationControls from '@/components/PaginationControls';

import type { Metadata } from 'next';

// - **For Kindergarten Teachers**: Cultivate a love for learning with innovative teaching strategies and classroom management techniques that nurture young learners' potential.

// - **For Primary School Teachers**: Enhance your teaching methods with engaging lesson plans and digital tools that cater to diverse learning styles, ensuring every child finds their path to success.

// - **For High School Teachers**: Equip students with the knowledge and skills they need to excel, using approaches that blend academic rigor with real-world relevance and prepare them for the challenges ahead.

// Join our community of dedicated educators and leverage our resources to make a difference in your teaching career and the lives of your students.

export const metadata: Metadata = {
  title:
    'Elevating Your Teaching Career: Collaborative Growth and Professional Insights', //Option 1 replaces the %s in layout.tsx
  // title: {
  //   absolute: 'Helpful Career Advice, Blogs and Collaboration Tools', //Option 2 overrides the title in layout.tsx
  // },
  description:
    'Unlock your academic career potential with our expertly curated career advice, insightful blogs, and innovative collaboration tools. Dive into a world of opportunities and guidance tailored for academics seeking to advance their careers. Explore now and take the next step in your academic journey!',
  keywords: 'About Academicjobs, About Teaching Jobs, Academicjobs About',
};

export default function BlogPosts({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  // function formatDate(input: string) {
  //   const date = new Date(input);
  //   const options = { year: 'numeric', month: 'long', day: 'numeric' };
  //   return date.toLocaleDateString('en-US', options);
  // }
  if (!blogData) {
    return <div>Loading...</div>;
  }
  const topListCount = 6;
  const showDates = false;

  // Pagination setting
  const routeName = 'teaching-jobs-advice';
  const routePath = `/${routeName}/`;

  const page = searchParams['page'] ?? '1';
  const per_page = 12;
  const offset = page === '1' ? topListCount : 0;
  const start = (Number(page) - 1) * Number(per_page) + offset; // 5, 12, 24 ...
  const end = start + Number(per_page);
  const entries = blogData.slice(start, end);

  return (
    <main className="content-grid">
      <HeroBanner
        h1="Elevating Your Teaching Career: Collaborative Growth and Professional Insights"
        para1="Unlock the full potential of your teaching career with our dedicated support for educators at every level—from kindergarten to high school. In the dynamic world of education, advancing your career is about more than securing the next position; it's about forging meaningful relationships, collaborating on educational initiatives, and accessing insights that set the stage for enduring success."
        para2="Whether you're igniting young minds in kindergarten, inspiring curiosity in primary school, or preparing high school students for their future, our tailored career advice, tips, and insights from experienced educators are here to empower your journey."
        src="/blogs/career-assistance-networking-and-collaboration-for-teachers.jpg"
        alt="People immersed in academic blogs at our vibrant Academic Hub"
        // btnPrimaryText="Join our Talent Pool"
        // btnPrimaryURL="/talent-pool"
        reorder={false}
      />

      <h2 className="underline-full mb-8">
        Top Career Help for Teachers, Students & Parents
      </h2>

      {blogData ? (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {blogData.slice(0, topListCount).map((post, index) => (
              <article key={index} className="card bg-slate-100 shadow-xl">
                <figure>
                  <Link
                    href={
                      post.customSlug ? post.customSlug : routePath + post.slug
                    }
                  >
                    <Image
                      src={post.image_url}
                      alt={post.alt}
                      width={800}
                      height={800}
                    />
                  </Link>
                </figure>

                <div className="card-body">
                  <h2 className="card-title grow line-clamp-4 m-0 min-h-[130px]">
                    <Link
                      href={
                        post.customSlug
                          ? post.customSlug
                          : routePath + post.slug
                      }
                      className="hover:text-blue-900 text-2xl"
                    >
                      {post.title}
                    </Link>
                  </h2>
                  <h3>By {post.author}</h3>
                  {showDates ? (
                    <>
                      <p>
                        <time className="mr-4">
                          {formatDate(post.published_at)}
                        </time>
                        {post.updated_at !== '' ? (
                          <span className="text-slate-400">
                            Updated: <time>{formatDate(post.updated_at)}</time>
                          </span>
                        ) : null}
                      </p>
                    </>
                  ) : null}
                  <p className="h-[130px] relative line-clamp-4 m-0">
                    {post.summary}
                    <div className="blog-gradient"> </div>
                  </p>
                  <div className="card-actions justify-end">
                    <Link
                      href={
                        post.customSlug
                          ? post.customSlug
                          : routePath + post.slug
                      }
                      className="btn btn-aj btn-sm"
                    >
                      Read more
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 px-8 mt-10">
            <iframe
              className=" aspect-video  rounded-3xl"
              src="https://www.youtube.com/embed/bEEmo_KhOOk?si=yiNtzXaYyASiWU8W"
              title="YouTube video player"
            ></iframe>

            <iframe
              className=" aspect-video rounded-3xl"
              src="https://www.youtube.com/embed/hSbjVkmSIrc?si=qeq_VAZ3ZEQpWhjh"
              title="YouTube video player"
            ></iframe>

            <iframe
              className=" aspect-video rounded-3xl"
              src="https://www.youtube.com/embed/yn-ctFDfI60?si=REwYQIJFPBm6NnXm"
              title="YouTube video player"
            ></iframe>
          </div> */}

          {entries.length > 0 ? (
            <>
              <h2 id="pagination" className="underline-full mt-16 mb-8">
                Teaching Recruitment & Career Blog Posts
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mb-8">
                {entries.map((post, index) => (
                  <article
                    key={index}
                    className="card bg-slate-100 shadow-xl image-full items-stretch relative"
                    style={{
                      backgroundImage: `url(${post.image_url})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  >
                    <figure className="aspect-w-16 aspect-h-9">
                      <Link
                        href={
                          post.customSlug
                            ? post.customSlug
                            : routePath + post.slug
                        }
                      >
                        <Image
                          src={post.image_url}
                          alt={post.alt}
                          width={800}
                          height={800}
                        />
                      </Link>
                    </figure>
                    <div className="card-body p-6">
                      <h2 className="card-title line-clamp-3 leading-tight">
                        <Link
                          href={
                            post.customSlug
                              ? post.customSlug
                              : routePath + post.slug
                          }
                          className="text-white hover:text-blue-900 text-lg"
                        >
                          {post.title}
                        </Link>
                      </h2>
                      <div className="card-actions justify-end mt-auto">
                        <Link
                          href={
                            post.customSlug
                              ? post.customSlug
                              : routePath + post.slug
                          }
                          className="btn btn-aj btn-sm"
                        >
                          Read more
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
              <PaginationControls
                hasNextPage={end < blogData.length}
                hasPrevPage={start > topListCount}
                pagePath={routeName}
                itemCount={blogData.length}
                limitPerPage={per_page}
              />
            </>
          ) : null}
        </>
      ) : (
        <div>Something went wrong loading the Blogs.</div>
      )}
    </main>
  );
}
