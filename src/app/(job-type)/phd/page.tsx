import type { Metadata } from 'next';
import SearchResults from '@/components/SearchResults';
import JobSearchBox from '@/components/JobSearchBox';
import Link from 'next/link';
import JobFilter from '@/components/JobFilter';

export const metadata: Metadata = {
  // title: 'About', //Option 1 replaces the %s in layout.tsx
  title: {
    absolute: 'PHD Jobs', //Option 2 overrides the title in layout.tsx
  },
  description:
    'Discover flexible and fulfilling on-campus employment opportunities for Ph.D. candidates. Explore a myriad of PhD positions across diverse departments at your university. Take the next step in your career, apply today, and cultivate valuable work experience and skills.  ',
  keywords: 'PhD Jobs , PhD academic Jobs',
};
export default function myPage() {
  return (
    <main className="PHD Jobs">
      <div className="bg-slate-200 full-width">
        <div className="hero-content flex-col lg:flex-row mx-auto items-start py-12">
          <h1 className="md:text-6xl font-bold m-0 md:text-right text-gray-500 pb-4">
            PHD Jobs
          </h1>

          <div className="">
            <p className="px-7 mb-4 mt-1">
              Seek your perfect PhD position through the world’s best job board!
              At Teaching Jobs we offer PhD positions at the most renowned
              universities across the globe. PhD opportunities will provide you
              with the chance to engage with partners domestically and
              internationally, work with some of the brightest minds, and use
              top-notch facilities and resources.
            </p>
            <p className="px-7 md:flex hidden">
              The No.1 job board for academics, Teaching Jobs, provides an
              extensive list of opportunities for the future of your career,
              carefully sectioning the top Higher Ed fellowships, scholarships,
              and programmes.
            </p>
            <p className="px-7 md:flex hidden">
              Find all the best PhD positions here…
            </p>

          
          </div>
        </div>
      </div>

      <JobSearchBox q="phd" forceClass="my-6" />

      <section className="jobs_grid job_post_search_container">
        <div className="filters_panel">
          <div className="filters_content">
            <JobFilter />
          </div>
        </div>
        <div className="listings_panel">
          <div className="listings_content">
            {/* <SearchResults1 q={{ q: q, l: l || '', filter1 }} /> */}
            <SearchResults q={{ q: 'phd' || 0 }} />
          </div>
        </div>
      </section>
    </main>
  );
}
