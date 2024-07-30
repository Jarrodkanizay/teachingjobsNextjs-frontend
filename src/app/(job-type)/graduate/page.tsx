import Link from 'next/link';
import type { Metadata } from 'next';
import SearchResults from '@/components/SearchResults';
import JobSearchBox from '@/components/JobSearchBox';
import JobFilter from '@/components/JobFilter';

export const metadata: Metadata = {
  // title: 'About', //Option 1 replaces the %s in layout.tsx
  title: {
    absolute: '  Graduate Jobs', //Option 2 overrides the title in layout.tsx
  },
  description:
    'Looking for a flexible and rewarding job ? Browse hundreds of graduate jobs in various roles and departments at your university. Apply today and gain valuable work experience and skills.',
  keywords: 'Graduate Jobs , Graduate academic Jobs',
};
export default function myPage() {
  return (
    <main className="content-grid">
      <div className="bg-slate-200 full-width">
        <div className="hero-content flex-col lg:flex-row mx-auto items-start py-12">
          <h1 className="md:text-6xl font-bold m-0 md:text-right text-gray-500 pb-4">
            {' '}
            Graduate Jobs
          </h1>

          <div className="">
            <p className="px-7 mb-4 mt-1">
              Seek your perfect graduate position through the world’s best job
              board! At Teaching Jobs we offer the most renowned graduate jobs
              at the top universities. For young professionals looking for
              industry experience, on-field training, personality development
              and course credit, at Teaching Jobs we aim to help find the most
              exciting opportunities for new graduates.
            </p>
            <p className="px-7 md:flex hidden">
              The No.1 job board for graduates, Teaching Jobs, provides an
              extensive list of opportunities for the next step of your career,
              carefully sectioning the top jobs to find the best position for
              you!
            </p>
            <p className="px-7 md:flex hidden">
              Find all the best graduate jobs here…
            </p>
          
          </div>
        </div>
      </div>
      <JobSearchBox q="graduate" forceClass="my-6" />

      <section className="jobs_grid job_post_search_container">
        <div className="filters_panel">
          <div className="filters_content">
            <JobFilter />
          </div>
        </div>
        <div className="listings_panel">
          <div className="listings_content">
            {/* <SearchResults1 q={{ q: q, l: l || '', filter1 }} /> */}
            <SearchResults q={{ q: 'graduate' || 0 }} />
          </div>
        </div>
      </section>
    </main>
  );
}
