import Link from 'next/link';
import type { Metadata } from 'next';
import SearchResults from '@/components/SearchResults';
import JobSearchBox from '@/components/JobSearchBox';
import JobFilter from '@/components/JobFilter';

export const metadata: Metadata = {
  // title: 'About', //Option 1 replaces the %s in layout.tsx
  title: {
    absolute: ' Post Doc Jobs', //Option 2 overrides the title in layout.tsx
  },
  description:
    'In Post Doc, you will have the opportunity to work with talented and dedicated staff, students, alumni, and stakeholders, contribute to the vision and mission.  ',
  keywords: 'Academic Postdoc Jobs, Postdoc TeachingJobs',
};
export default function myPage() {
  return (
    <main className="content-grid">
      <div className="bg-slate-200 full-width">
        <div className="hero-content flex-col lg:flex-row mx-auto items-start py-12">
          <h1 className="md:text-6xl font-bold m-0 md:text-right text-gray-500 pb-4">
            Postdoc Positions
          </h1>

          <div className="">
            <p className="px-7 mb-4 mt-1">
              Discover your ideal postdoctoral position through the world’s best
              job board! At Teaching Jobs, we offer postdoc opportunities at the
              most prestigious universities worldwide. Engage with domestic and
              international partners, collaborate with brilliant minds, and
              access state-of-the-art facilities and resources in a fulfilling
              postdoctoral experience.
            </p>
            <p className="px-7 md:flex hidden">
              The No.1 job board for academics, Teaching Jobs, offers a
              comprehensive list of opportunities to shape the trajectory of
              your career. We carefully categorise top Higher Ed fellowships,
              scholarships, and programs, making it your go-to resource for
              advancing in academia.
            </p>
            <p className="px-7 md:flex hidden">
              Explore all the finest postdoctoral positions right here...
            </p>
          
          </div>
        </div>
      </div>

      {/* <h1>
              Academic Postdoc Jobs
              </h1>
              <p>
              View all of the Post Doc jobs that respectable universities now have available on TeachingJobs. Our academic institutions are constantly seeking the greatest, you can apply for fantastic global academic Post Doc positions through our website.</p> */}
      <JobSearchBox q="postdoc" forceClass="my-6" />

      <section className="jobs_grid job_post_search_container">
        <div className="filters_panel">
          <div className="filters_content">
            <JobFilter />
          </div>
        </div>
        <div className="listings_panel">
          <div className="listings_content">
            {/* <SearchResults1 q={{ q: q, l: l || '', filter1 }} /> */}
            <SearchResults q={{ q: 'postdoc' || 0 }} />
          </div>
        </div>
      </section>
    </main>
  );
}
