import type { Metadata } from 'next';
import SearchResults from '@/components/SearchResults';
import JobSearchBox from '@/components/JobSearchBox';
import JobFilter from '@/components/JobFilter';
import lecturer from '@/data/lecturer.json';
import Link from 'next/link';
export const metadata: Metadata = {
  title: {
    absolute: 'Academic Lecturer Jobs',
  },
  description:
    'To find out more about the academic lecturer jobs available in higher education, browse our list of current lecturer job vacancies on this page. ',
  keywords: 'Academic Lecturer Jobs. Lecturer positions',
};
export default function Page() {
  return (
    <main className="">
      {/* <div className="bg-slate-200 full-width">
        <div className="hero-content flex-col lg:flex-row mx-auto items-start py-12">
          <h1 className="md:text-6xl font-bold m-0 md:text-right text-gray-500 pb-4">
            Lecturing Jobs
          </h1>
          <div>
            <p className="px-7 mb-4 mt-1">
            Discover your perfect lecturing position through the world’s best job board! At Teaching Jobs we offer the most renowned lecturing jobs at the top universities. A career as an academic lecturer will provide you with the chance to engage with partners domestically and internationally, work with some of the brightest minds, and use top-notch facilities and resources.

            </p>
            <p className="px-7 md:flex hidden">
            The No.1 job board for lecturers, Teaching Jobs, provides an extensive list of opportunities for the future of your career, carefully sectioning the top Higher Ed lecturing jobs to find the best position for you.</p>
            <p className="px-7 md:flex hidden">
            Find all the best lecturing jobs here…</p>
            <Link
                      href={'/academic-talent-pool'}
                      className="btn btn-aj btn-sm w-2/3 md:w-1/4 mx-auto my-2"
                    >
                     Join Our Talent Pool
                    </Link>
          </div>
        </div>
      </div> */}

      <div
        className="hero h-screen max-h-[480px] md:max-h-[400px] mx-auto"
        style={{
          backgroundImage:
            'url(/student-jobs-on-campus/female-scientist_place-her-to-the-right.jpeg)',
          backgroundSize: '',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="hero-overlay bg-opacity-70 "></div>
        <div className="hero-content text-white ">
          <div className="max-w-2xl mx-auto">
            <h1 className="mb-5  text-white md:text-2xl text-2xl font-normal">
              <span className="text-5xl font-bold text-[#e74b7f]">
                Academic Lecturer Jobs{' '}
              </span>
              <br />
            </h1>

            <p className="font-bold">
              The No.1 job board for lecturers, Teaching Jobs, provides an
              extensive list of opportunities for the future of your career,
              carefully sectioning the top Higher Ed lecturing jobs to find the
              best position for you.
            </p>
            <p className="font-bold">Find all the best lecturing jobs here…</p>
            <Link
              href="/lecturer/guest-lecturing"
              className="btn  btn-aj text-lg font-bold item-center justify-center text-center md:mb-0 mb-2"
            >
              Guest Lecturing Jobs
            </Link>
            <Link
              href="/academic-talent-pool"
              className="btn ml-2 btn-aj text-lg font-bold item-center justify-center text-center"
            >
              Join Talent Pool
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-gray-200 flex flex-col  content-grid rounded">
        <ul className=" text-left columns-1 md:columns-4 pt-4 pl-8 md:gap-2  h-auto w-full text-transform: capitalize">
          {lecturer.map(({ Title, Name }, key) => (
            <li
              className={`pb-2 flex ${' md:break'} ${' font-bold text-gray-500'}`}
              key={key}
            >
              <Link href={`/lecturer/${Name?.replace(/\s+/g, '-')}/`}>
                {Name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <JobSearchBox q="lecturer" forceClass="my-6" />

      <section className="jobs_grid job_post_search_container">
        <div className="filters_panel">
          <div className="filters_content">
            <JobFilter />
          </div>
        </div>
        <div className="listings_panel">
          <div className="listings_content">
            {/* <SearchResults1 q={{ q: q, l: l || '', filter1 }} /> */}
            <SearchResults q={{ q: 'lecturer' || 0 }} />
          </div>
        </div>
      </section>
    </main>
  );
}
