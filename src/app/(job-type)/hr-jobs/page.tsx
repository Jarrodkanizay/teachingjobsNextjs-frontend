import type { Metadata } from 'next';
import SearchResults from '@/components/SearchResults';
import JobSearchBox from '@/components/JobSearchBox';
import hr from '@/data/hr.json';
import Link from 'next/link';
import HeroBanner from '@/components/HeroBanner';
import JobFilter from '@/components/JobFilter';

export const metadata: Metadata = {
  // title: 'About', //Option 1 replaces the %s in layout.tsx
  title: {
    absolute: '  Higher Ed HR jobs', //Option 2 overrides the title in layout.tsx
  },
  description:
    'Welcome to the top job board for Teaching Jobs, listing higher education jobs available in international colleges and universities daily. Use filters such as city, employment type, and institution name to help your job search ',
  keywords: 'Find Teaching Jobs, Seek Teaching Jobs, Teaching Jobs Search',
};
export default function myPage() {
  return (
    <main className="content-grid">
      <HeroBanner
        //   bgColorClass?: string; //Optional Tailwind CSS background color class
        h1="Transform Your Hiring Strategy: Use Quick Post Technology to save time and money"
        h2="Job Seekers: Find the best University & College Staff Positions"
        para1="Discover your perfect human resource position through the world’s
        best job board! At Teaching Jobs we offer the most renowned HR
        jobs at the top universities."
        btnPrimaryText="Post a Job Now"
        btnPrimaryURL="/post-a-job"
        btnSecondaryText="Join Our Talent Pool"
        btnSecondaryURL="/academic-talent-pool"
        src="/hr/what-does-human-resources-hr.jpg"
        alt="Academic and Higher Education Quick Job Post Technology"
        reorder={false}
      />
      {/* <Stats /> */}

      <h2 className="underline-full mb-4 text-center">
        The place HR professional come to find and post jobs
      </h2>
      <div className="text-2-cols mb-8">
        <p className="px-7 mb-4 mt-1">
          Most importantly, we are passionate about the HR profession and use
          our knowledge and expertise to find you your ideal HR job. We have
          created a network of HR professionals, join our{' '}
          <Link className="link link-aj" href="/academic-talent-pool">
            Talent Pool
          </Link>{' '}
          to be a part of the action.
        </p>
        <p className="px-7 md:flex hidden">
          The No.1 job board for HR professionals in universities. So, if you
          are looking to advance your career, we can help you achieve your
          ambitions – both in the short term as well as throughout your lifelong
          career.
        </p>
      </div>

      <div className="bg-white flex flex-col  ">
        <ul className=" text-left columns-1 md:columns-4 pt-4 pl-8 md:gap-4  h-auto w-full text-transform:capitalize">
          {hr.map(({ Title, Name }, key) => (
            <li
              className={`btn btn-outline btn-secondary rounded-full mb-4 flex font-bold`}
              key={key}
            >
              <Link href={`/hr-jobs/${Name?.replace(/\s+/g, '-')}/`}>
                {Name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="md:flex hidden grid grid-cols-1 lg:grid-cols-3 gap-4 mt-8">
        <iframe
          className=" aspect-video  "
          src="https://www.youtube.com/embed/zA4K1-QmrO4?si=FeSGIGczCj2ZZkwL"
          title="YouTube video player"
        ></iframe>
        <iframe
          className=" aspect-video "
          src="https://www.youtube.com/embed/pqjW3uCtswE?si=CxYxWGXqILlP4TlQ"
          title="YouTube video player"
        ></iframe>
        <iframe
          className=" aspect-video "
          src="https://www.youtube.com/embed/xiCacfu7Y7Y?si=iC3XrZQZ6o1cCluc"
          title="YouTube video player"
        ></iframe>
      </div>
      <JobSearchBox q="hr" forceClass="my-6" />

      <section className="jobs_grid job_post_search_container">
        <div className="filters_panel">
          <div className="filters_content">
            <JobFilter />
          </div>
        </div>
        <div className="listings_panel">
          <div className="listings_content">
            {/* <SearchResults1 q={{ q: q, l: l || '', filter1 }} /> */}
            <SearchResults q={{ q: 'hr' || 0 }} />
          </div>
        </div>
      </section>
    </main>
  );
}
