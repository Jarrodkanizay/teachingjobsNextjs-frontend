import Link from 'next/link';
import type { Metadata } from 'next';
import SearchResults from '@/components/SearchResults';
import JobSearchBox from '@/components/JobSearchBox';
import JobFilter from '@/components/JobFilter';
import SearchResults1 from '@/components/SearchResults1';

export const metadata: Metadata = {
  // title: 'About', //Option 1 replaces the %s in layout.tsx
  title: {
    absolute: ' Teaching part-time Jobs', //Option 2 overrides the title in layout.tsx
  },
  description:
    'If you are looking for Teaching jobs online, you can browse through our job board to find the latest opportunities in this flexible and rewarding field.   ',
  keywords: 'Teaching Jobs Online. online positions',
};
export default function myPage() {
  return (
    <main className="content-grid">
      {/* <h1>Teaching part-time Jobs</h1>
      <p>
      Seek all part-time uni jobs through Australia’s best job board. Discover flexibility to align your professional pursuits with your lifestyle choices. Join us in embracing a future where your workspace is as adaptable as your ambitions. From part-time positions to vibrant on-site roles, we've curated diverse part-time opportunities just for you.</p>
      <p className="px-7 md:flex hidden">
      All of the best professional casual jobs in Australia. Through higher ed jobs part-time, individuals can actively contribute to the advancement of knowledge, the cultivation of learning environments, and the overall growth of the Teaching landscape while simultaneously expanding their professional horizons.</p>
      <Link
                      href={'/Teaching-talent-pool'}
                      className="btn btn-aj btn-sm w-2/3 md:w-1/4 mx-auto my-2"
                    >
                     Join Our Talent Pool
                    </Link> */}

      <div className="bg-slate-200 full-width">
        <div className="hero-content flex-col lg:flex-row mx-auto items-start py-12">
          <h1 className="md:text-6xl font-bold m-0 md:text-right text-gray-500 pb-4">
            Teaching part-time Jobs
          </h1>

          <div className="">
            <p className="px-7 mb-4 mt-1">
              Seek all part-time teaching jobs through Australia’s best job board.
              Discover flexibility to align your professional pursuits with your
              lifestyle choices. Join us in embracing a future where your
              workspace is as adaptable as your ambitions. From part-time
              positions to vibrant on-site roles, we've curated diverse
              part-time opportunities just for you.
            </p>
            <p className="px-7 md:flex hidden">
              All of the best professional jobs in Australia. Through
              higher ed jobs part-time, individuals can actively contribute to
              the advancement of knowledge, the cultivation of learning
              environments, and the overall growth of the Teaching landscape
              while simultaneously expanding their professional horizons.
            </p>
          
          </div>
        </div>
      </div>
      <JobSearchBox q="part-time" forceClass="my-6" />

      <section className="jobs_grid job_post_search_container">
        <div className="filters_panel">
          <div className="filters_content">
            <JobFilter />
          </div>
        </div>
        <div className="listings_panel">
          <div className="listings_content">
            {/* <SearchResults1 q={{ q: q, l: l || '', filter1 }} /> */}
            <SearchResults1
              q={{
                filter1: [{ category: 'job_type', filter: 'Part Time' }],
                q: '',
                l: '',
              }}/>          
            </div>
        </div>
      </section>
    </main>
  );
}
