import Link from 'next/link';
import type { Metadata } from 'next';
import SearchResults1 from '@/components/SearchResults1';
import JobSearchBox from '@/components/JobSearchBox';
import JobFilter from '@/components/JobFilter';


export const metadata: Metadata = {
  // title: 'About', //Option 1 replaces the %s in layout.tsx
  title: {
    absolute: '  Full-Time', //Option 2 overrides the title in layout.tsx
  },
  description:
    'If you are looking for Teaching jobs online, you can browse through our job board to find the latest opportunities in this flexible and rewarding field.   ',
  keywords: 'Teaching Jobs Online. online positions',
};
export default function myPage() {
  return (
    <main className="content-grid">
      {/* <div className="bg-slate-200 full-width">
      <h1>Teaching Full-Time Jobs</h1>
      <p>
      Seek all full-time uni jobs through Australia’s No.1 job board. Are you ready to take the next leap in your career journey? We are actively seeking a dedicated and passionate professional to join our dynamic team in a full-time role. </p>
      <p className="px-7 md:flex hidden">
      The best job board in Australia will help you find your dream full-time position. If you thrive in a collaborative environment, possess a strong work ethic, and are eager to take on new challenges, we invite you to apply. This is more than just a job – it's a chance to grow and excel in a supportive and innovative workplace. Join us on this exciting journey and let's build a successful future together.</p>
      <Link
                      href={'/Teaching-talent-pool'}
                      className="btn btn-aj btn-sm w-2/3 md:w-1/4 mx-auto my-2"
                    >
                     Join Our Talent Pool
                    </Link>
                    </div> */}

      <div className="bg-slate-200 full-width">
        <div className="hero-content flex-col lg:flex-row mx-auto items-start py-12">
          <h1 className="md:text-6xl font-bold m-0 md:text-right text-gray-500 pb-4">
            Teaching Full-Time Jobs
          </h1>

          <div className="">
            <p className="px-7 mb-4 mt-1">
              Seek all full-time teaching jobs through Australia’s No.1 job
              board. Are you ready to take the next leap in your career journey?
              We are actively seeking a dedicated and passionate professional to
              join our dynamic team in a full-time role.{' '}
            </p>
            <p className="px-7 md:flex hidden">
              The best job board in Australia will help you find your dream
              full-time position. If you thrive in a collaborative environment,
              possess a strong work ethic, and are eager to take on new
              challenges, we invite you to apply. This is more than just a job –
              it's a chance to grow and excel in a supportive and innovative
              workplace. Join us on this exciting journey and let's build a
              successful future together.
            </p>
          </div>
        </div>
      </div>
      <JobSearchBox q="full-time" forceClass="my-6" />

      <section className="jobs_grid job_post_search_container">
        <div className="filters_panel">
          <div className="filters_content">
            <JobFilter />
          </div>
        </div>
        <div className="listings_panel">
          <div className="listings_content">
            <SearchResults1
              q={{
                filter1: [{ category: 'job_type', filter: 'Full time' }],
                q: '',
                l: '',
              }}
            />
            {/* <SearchResults1 q={{ q: q, l: l || '', filter1 }} /> */}
            {/* <SearchResults q={{ q: '' || 0 }} /> */}
            {/* <SearchResults q={{ q: 'full-time' || 0 }} /> */}
            <SearchResults1
              q={{
                filter1: [{ category: 'job_type', filter: 'Full Time' }],
                q: '',
                l: '',
              }}/>
          </div>
        </div>
      </section>
    </main>
  );
}
