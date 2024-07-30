import type { Metadata } from 'next';
import SearchResults from '@/components/SearchResults';
import JobSearchBox from '@/components/JobSearchBox';
import Link from 'next/link';
import JobFilter from '@/components/JobFilter';
import SearchResults1 from '@/components/SearchResults1';

export const metadata: Metadata = {
  // title: 'About', //Option 1 replaces the %s in layout.tsx
  title: {
    absolute: '  Teaching Executive Jobs', //Option 2 overrides the title in layout.tsx
  },
  description:
    'If you are looking for Teaching jobs online, you can browse through our job board to find the latest opportunities in this flexible and rewarding field.   ',
  keywords: 'Teaching Jobs Online. online positions',
};
export default function myPage() {
  return (
    <main className="content-grid">
      <div className="bg-slate-200 full-width">
        <div className="hero-content flex-col lg:flex-row mx-auto items-start py-12">
          <h1 className="md:text-6xl font-bold m-0 md:text-right text-gray-500 pb-4">
            Online Teaching Jobs
          </h1>

          <div className="">
            <p className="px-7 mb-4 mt-1">
              Seek all online teaching jobs through Australia’s No.1 job board.
              Whether you’re a student, graduate, or professional. Engaging in
              Teaching online jobs, particularly in higher education, involves a
              spectrum of roles—from teaching and research to administration,
              customer service, events management, marketing, IT, and library
              curation.
            </p>
            <p className="px-7 md:flex hidden">
              The best job board in Australia will help you find your dream
              online position. Through higher ed jobs online, individuals can
              actively contribute to the advancement of knowledge, the
              cultivation of learning environments, and the overall growth of
              the Teaching landscape while simultaneously expanding their
              professional horizons.
            </p>
          </div>
        </div>
        
      </div>
      <JobSearchBox q="online" forceClass="my-6" />

      <section className="jobs_grid job_post_search_container">
        <div className="filters_panel">
          <div className="filters_content">
            <JobFilter />
          </div>
        </div>
        <div className="listings_panel">
          <div className="listings_content">
          <SearchResults q={{ q: '' || 0 }} />

          {/* <SearchResults1
              q={{
                filter1: [{ category: 'online', filter: 1 }],
                q: '',
                l: '',
              }}/>   */}
          </div>
        </div>
      </section>
    </main>
  );
}
