import SearchResults from '@/components/SearchResults';
import JobSearchBox from '@/components/JobSearchBox';
import admin from '@/data/admin.json';
import Link from 'next/link';
import type { Metadata } from 'next';
import JobFilter from '@/components/JobFilter';

export const metadata: Metadata = {
  // title: 'About', //Option 1 replaces the %s in layout.tsx
  title: {
    absolute: 'University Admin and Staff Jobs', //Option 2 overrides the title in layout.tsx
  },
  description:
    'As an University admin and staff workers will have the opportunity to work with diverse and talented people, contribute to the academic excellence and innovation of your institution.  ',
  keywords:
    'University Admin and Staff Jobs, Admin and Support Teaching Jobs, Academic Staff Jobs, University Admin Jobs',
};
export default function myPage() {
  return (
    <main className="content-grid">
      <div className="bg-slate-200 full-width">
        <div className="hero-content flex-col lg:flex-row mx-auto items-start py-12">
          <h1 className="md:text-6xl font-bold m-0 md:text-right text-gray-500 pb-4">
            Campus Staff Jobs
          </h1>

          <div className="">
            <p className="px-7 mb-4 mt-1">
              Find all university staff jobs on academic jobs. Search University
              administration staff and support roles at the best universities.
              Seek your perfect admin position through the world’s best job
              board! At Teaching Jobs we offer the most renowned Higher Ed jobs
              at the top universities. Positions in admin will provide you with
              the chance to engage with some of the brightest minds, and use
              top-notch facilities and resources.
            </p>
            <p className="px-7 md:flex hidden">
              The No.1 job board, Teaching Jobs, provides an extensive list of
              opportunities for the future of your career, carefully sectioning
              the top admin jobs to find the best position for you!
            </p>
            <p className="px-7 md:flex hidden">
              Find all the best staff jobs here…
            </p>
          
          </div>
        </div>
      </div>

      <div className="bg-white flex flex-col  ">
        <ul className=" text-left columns-1 md:columns-4 pt-4 pl-8 md:gap-2  h-auto w-full text-transform: capitalize">
          {admin.map(({ Title, Name }, key) => (
            <li
              className={`pb-2 flex ${' md:break'} ${' font-bold text-gray-400'}`}
              key={key}
            >
              <Link href={`/staff-jobs/${Name?.replace(/\s+/g, '-')}/`}>
                {Name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <JobSearchBox q="admin" forceClass="my-6" />

      <section className="jobs_grid job_post_search_container">
        <div className="filters_panel">
          <div className="filters_content">
            <JobFilter />
          </div>
        </div>
        <div className="listings_panel">
          <div className="listings_content">
            {/* <SearchResults1 q={{ q: q, l: l || '', filter1 }} /> */}
            <SearchResults q={{ q: 'admin' || 0 }} />
          </div>
        </div>
      </section>
    </main>
  );
}
