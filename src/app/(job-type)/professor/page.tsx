import type { Metadata } from 'next';
import SearchResults from '@/components/SearchResults';
import JobSearchBox from '@/components/JobSearchBox';
import professor from '@/data/professor.json';
import Link from 'next/link';
import JobFilter from '@/components/JobFilter';

export const metadata: Metadata = {
  // title: 'About', //Option 1 replaces the %s in layout.tsx
  title: {
    absolute: '  Academic Professor Jobs', //Option 2 overrides the title in layout.tsx
  },
  description:
    'Academic professor jobs can cover a wide range of topics and disciplines, depending on the field of specialization and the institution. ',
  keywords: 'Academic professor Jobs. professor positions',
};
export default function myPage() {
  return (
    <main className="content-grid">
      <div className="bg-slate-200 full-width">
        <div className="hero-content flex-col lg:flex-row mx-auto items-start py-12">
          <h1 className="md:text-6xl font-bold m-0 md:text-right text-gray-500 pb-4">
            Professor Jobs
          </h1>

          <div className="">
            <p className="px-7 mb-4 mt-1">
              Discover your perfect professor position through the world’s best
              job board! At Teaching Jobs we offer the most renowned professor
              jobs at the top universities. A career as an academic professor
              will provide you with the chance to engage with partners
              domestically and internationally, work with some of the brightest
              minds, and use top-notch facilities and resources.
            </p>
            <p className="px-7 md:flex hidden">
              The No.1 job board for professors, Teaching Jobs, provides an
              extensive list of opportunities for the future of your career,
              carefully sectioning the top professor jobs to find the best
              position for you!
            </p>
            <p className="px-7 md:flex hidden">Find all the best jobs here…</p>
          
          </div>
        </div>
      </div>

      <div className="bg-white flex flex-col  ">
        <ul className=" text-left columns-1 md:columns-4 pt-4 pl-8 md:gap-2  h-auto w-full text-transform: capitalize">
          {professor.map(({ Title, Name }, key) => (
            <li
              className={`pb-2 flex ${' md:break'} ${' font-bold text-gray-400'}`}
              key={key}
            >
              <Link href={`/professor/${Name?.replace(/\s+/g, '-')}/`}>
                {Name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <JobSearchBox q="professor" forceClass="my-6" />

      <section className="jobs_grid job_post_search_container">
        <div className="filters_panel">
          <div className="filters_content">
            <JobFilter />
          </div>
        </div>
        <div className="listings_panel">
          <div className="listings_content">
            {/* <SearchResults1 q={{ q: q, l: l || '', filter1 }} /> */}
            <SearchResults q={{ q: 'professor' || 0 }} />
          </div>
        </div>
      </section>
    </main>
  );
}
