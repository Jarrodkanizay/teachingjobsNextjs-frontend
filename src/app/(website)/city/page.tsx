// src/app/city/page.tsx
import { useState, useEffect } from 'react';
import { cityData } from '@/data/cityData';
import Link from 'next/link';
import Image from 'next/image';
import HeroBanner from '@/components/HeroBanner';
// import { formatDate } from '@/utils/utilityScripts';
import PaginationControls from '@/components/PaginationControls';
import SearchFilter from '@/components/searchAndFilter/SearchAndFilter';

// import CityLogo from '@/components/CityLogo';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title:
    'Helpful Advice on the Best Cities to study and work at as an academic', //Option 1 replaces the %s in layout.tsx
  // title: {
  //   absolute: 'Helpful Career Advice, Blogs and Collaboration Tools', //Option 2 overrides the title in layout.tsx
  // },
  description:
    'Unlock your academic career potential with our expertly curated list of city data, insightful information about all the best cities to work and study at!',
  keywords:
    'academic career opportunities, best cities for education and work, expert guide to academic cities, top cities for students and professionals, study and work destinations guide, unlock academic potential, curated list of educational cities, global academic city rankings, career advancement in top academic cities, insightful academic city reviews, comprehensive guide to studying abroad, best places for academic growth, international education city guide, academic city comparison, where to study and work globally, exploring academic opportunities worldwide, choosing the right city for your studies, expert recommendations for academic cities, navigating your academic career globally, ultimate guide to global study locations',
};

export default function CityInfo({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const routeName = 'city';
  const routePath = `/${routeName}/`;
  const topListCount = 6; // Number of items to show in the top list

  // const [searchTerm, setSearchTerm] = useState('');
  // const [filteredData, setFilteredData] = useState(cityData);

  // Pagination setting
  const page = searchParams['page'] ?? '1';
  const per_page = 12;
  const offset = page === '1' ? topListCount : 0;
  // const start = (Number(page) - 1) * Number(per_page) + offset; // 5, 12, 24 ...
  const start = (Number(page) - 1) * Number(per_page); // 5, 12, 24 ...
  const end = start + Number(per_page);
  const entries = cityData.slice(start, end);

  //   const page = parseInt(searchParams['page'] as string) || 1;
  // const per_page = 12;
  // const offset = page === 1 ? 6 : 0; // Adjust if needed
  // const start = (page - 1) * per_page + offset;
  // const end = start + per_page;
  // const paginatedEntries = filteredData.slice(start, end);

  return (
    <main className="content-grid">
      <HeroBanner
        h1="Discover the World's Leading Cities for Academic Excellence and Innovation"
        h2="Expert Academic Guidance and Resources for Students, Researchers, and Academics"
        para1="Embark on a journey through the world's most renowned cities, where academic dreams are turned into reality, and the pathways to intellectual achievement are as diverse as they are enriching. In these hubs of knowledge and innovation, students, researchers, and professors alike find a treasure trove of resources, mentorship, and inspiration."
        // para2="From the historic universities of Europe to the cutting-edge research institutions in North America and Asia, each city offers unique opportunities to delve deeper into your field, collaborate with leading experts, and contribute to groundbreaking discoveries. Whether you're seeking to expand your academic horizons, pursue rigorous research, or find a community of like-minded scholars, our guide to the world's academic cities opens the door to endless possibilities for growth, learning, and professional development. Explore with us and discover the ultimate academic pathway that aligns with your aspirations and goals."
        src="/cities/cities-of-the-world-for-academics.jpg"
        alt="The World's Leading Cities for Academic Excellence and Innovation"
        btnPrimaryText="Find Jobs in Your City"
        btnPrimaryURL="/jobs"
        reorder={false}
      />
      {/* <CityLogo /> */}
      {/* <Image
        src={getCityLogo('Melbourne', 'Australia')}
        alt="People immersed in academic blogs at our vibrant Academic Hub"
        width={800}
        height={800}
      /> */}
      <h2 className="underline-full mb-8 text-2xl sm:text-3xl">
        Top Cities for Higher Ed Jobs
      </h2>

      {cityData ? (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            {cityData.slice(0, topListCount).map((post, index) => (
              <article
                key={index}
                className="card card-side bg-slate-100 shadow-xl flex flex-col lg:flex-row"
              >
                <figure className="rounded-b-none rounded-t-lg lg:rounded-l-lg lg:rounded-r-none overflow-hidden">
                  <Link href={routePath + post.slug}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={post.image_url}
                      alt={post.alt}
                      className="w-full h-full object-cover"
                    />
                  </Link>
                </figure>
                <div className="card-body lg:max-w-[380px]">
                  <h2 className="card-title grow line-clamp-3 m-0 mb-8">
                    <Link
                      href={routePath + post.slug}
                      className="hover:text-blue-900 text-xl"
                    >
                      {post.title}
                    </Link>
                  </h2>
                  <p className="h-[100px] relative line-clamp-3 m-0">
                    {post.description}
                    <div className="blog-gradient"> </div>
                  </p>
                  <div className="card-actions justify-end">
                    <Link
                      href={routePath + post.slug}
                      className="btn btn-aj btn-sm"
                    >
                      More about {post.city}
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

          {cityData.length > topListCount ? (
            <>
              <h2
                id="pagination"
                className="underline-full mt-16 mb-8 text-2xl sm:text-3xl"
              >
                Explore Cities in Academia
              </h2>{' '}
            </>
          ) : null}
          <SearchFilter />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mb-8">
            {/* {cityData.slice(topListCount).map((post, index) => ( */}
            {entries.map((post, index) => (
              <article
                key={index}
                className={`filter-item card bg-slate-100 shadow-xl image-full items-stretch relative`}
                style={{
                  backgroundImage: `url(${post.image_url})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
                data-city={post.city}
                // data-categories={post.categories}
                data-region={post.region}
                data-country={post.country}
                data-universities={post.uniList}
                data-nobel-laureates={post.nobelList}
              >
                <figure className="aspect-w-16 aspect-h-9">
                  <Link href={routePath + post.slug}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={post.image_url}
                      alt={post.alt}
                      // width={1600}
                      // height={900}
                    />
                  </Link>
                </figure>
                <div className="card-body p-6">
                  <h2 className="card-title line-clamp-3 leading-tight">
                    <Link
                      href={routePath + post.slug}
                      className="text-white hover:text-blue-900 text-lg"
                    >
                      {post.title}
                    </Link>
                  </h2>
                  <div className="card-actions justify-end mt-auto">
                    <Link
                      href={routePath + post.slug}
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
            hasNextPage={end < cityData.length}
            hasPrevPage={start > topListCount}
            pagePath={routeName}
            itemCount={cityData.length}
            limitPerPage={per_page}
          />
        </>
      ) : (
        <div>
          Something went wrong loading our City content. Please try reloading?
        </div>
      )}
    </main>
  );
}
