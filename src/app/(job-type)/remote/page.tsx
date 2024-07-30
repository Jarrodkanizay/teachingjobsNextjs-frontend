import Link from 'next/link';
import type { Metadata } from 'next';
import SearchResults from '@/components/SearchResults';
import JobSearchBox from '@/components/JobSearchBox';
import JobFilter from '@/components/JobFilter';
import SearchResults1 from '@/components/SearchResults1';

export const metadata: Metadata = {
  // title: 'About', //Option 1 replaces the %s in layout.tsx
  title: {
    absolute: '  Teaching Remote Jobs', //Option 2 overrides the title in layout.tsx
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
            Teaching Remote Jobs
          </h1>

          <div className="">
            <p className="px-7 mb-4 mt-1">
              Seek all remote teaching jobs through Australia’s No.1 job board.
              Discover flexibility to align your professional pursuits with your
              lifestyle choices. Find the ideal remote job transcending
              geographical boundaries. Join us in embracing a future where your
              workspace is as flexible as your ambitions
            </p>
            <p className="px-7 md:flex hidden">
              The best job board in Australia will help you find your dream
              remote position. Redefine your career through our comprehensive
              remote job platform, unleashing boundless possibilities wherever
              you choose your path to be.
            </p>
          
          </div>
        </div>
      </div>
      <JobSearchBox q="remote" forceClass="my-6" />

      <section className="jobs_grid job_post_search_container">
        <div className="filters_panel">
          <div className="filters_content">
            <JobFilter />
          </div>
        </div>
        <div className="listings_panel">
          <div className="listings_content">
            {/* <SearchResults1 q={{ q: q, l: l || '', filter1 }} /> */}
            <SearchResults q={{ q: '' || 0 }} />

            {/* <SearchResults1
              q={{
                filter1: [{ category: 'remote', filter: 'onsite' }],
                q: '',
                l: '',
              }}/>   */}
        </div>
        </div>
      </section>
    </main>
  );
}
