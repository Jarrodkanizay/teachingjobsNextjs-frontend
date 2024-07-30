import Image from 'next/image';
import type { Metadata } from 'next';
import Link from 'next/link';
import SearchResults from '@/components/SearchResults';
import JobSearchBox from '@/components/JobSearchBox';
import JobFilter from '@/components/JobFilter';
import industry from '@/data/industry.json';

const countryRegion = 'World';

function countryRegionPlural() {
  return countryRegion.toLowerCase().endsWith('s')
    ? `${countryRegion}'`
    : `${countryRegion}'s`;
}

export const metadata: Metadata = {
  title: 'Industry Jobs in Academia', //Option 1 replaces the %s in layout.tsx
  // title: {
  //   absolute: '  Teaching Jobs: Academic, research and science positions locally and globally.', //Option 2 overrides the title in layout.tsx
  // },
  description:
    'Industry Jobs in Academia greatly improve the exerience of academics, Teaching Jobs is the top Industry jobs platform, allowing higher education institutions to find the right people for their industries. ',
  keywords: 'Industry Jobs in Academia, Academic Industry Platform',
};
export default function myPage() {
  return (
    <>
      <main>
        {/* Hero banner */}
        <div
          className="hero h-screen max-h-[480px] md:max-h-[400px]"
          style={{
            backgroundImage:
              'url(/student-jobs-on-campus/close-up-of-scientist-looking-at-blood-sample.jpg)',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div className="hero-overlay bg-opacity-70"></div>
          <div className="hero-content text-white">
            <div className="max-w-2xl">
              <h1 className="mb-5  text-white md:text-2xl text-2xl font-normal">
                <span className="text-5xl font-bold text-[#e74b7f]">
                  Teaching Jobs in Industry{' '}
                </span>
                <br />
                The World’s #1 Job Board for connecting the brightest minds to
                cutting-edge institutions.
              </h1>
              <div className="md:flex ">
                <Link
                  href="/industry/info"
                  className="btn  btn-aj text-lg font-bold item-center justify-center text-center md:mb-0 mb-2"
                >
                  Learn about Industry
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
        </div>

        <div className="bg-gray-200 flex flex-col  rounded-md">
          <ul className=" text-left columns-1 md:columns-4 pt-2 pl-8 md:gap-2  h-auto w-full text-transform: capitalize  max-w-screen-2xl mx-auto">
            {industry.map(({ Title, Name }, key) => (
              <li
                className={`pb-4 flex ${' md:break'} ${' font-bold text-gray-500'}`}
                key={key}
              >
                <Link href={`/industry/${Name?.replace(/\s+/g, '-')}/`}>
                  {Name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:flex bg-gray-800 shadow-xl rounded-2xl mb-4 max-w-screen-lg mx-auto mt-4 p-4 gap-8 ">
          <Image
            className=" rounded-xl md:w-2/3  "
            width={880}
            height={380}
            alt=""
            src="https://academicjobs.s3.amazonaws.com/img/_misc/maxresdefault.png"
          />

          <div className="w-1/3">
            <div className="md:grid  flex gap-4 text-gray-200 mt-3">
              {/* Card 2 */}
              <div className="md:flex  ">
                <div className="icon-ai ">
                  <p className="text-purple-500 font-bold px-2">✓</p>
                </div>

                <div className="items-center text-center">
                  <p className="text-md font-bold  ">
                    No. 1 Higher Ed Job Board
                  </p>
                </div>
              </div>
              {/* Card 3 */}
              <div className="md:flex ">
                <div className="icon-ai ">
                  <p className="text-purple-500 font-bold px-2">✓</p>
                </div>

                <div className=" items-center text-center ">
                  <p className="text-md font-bold ">
                    Best Educators Talent Pool
                  </p>
                </div>
              </div>

              {/* Card 1 */}
              <div className=" md:flex ">
                <div className="icon-ai ">
                  <p className="text-purple-500 font-bold px-2">✓</p>
                </div>

                <div className=" items-center text-center">
                  <p className="text-md font-bold ">
                    A.I. Powered Applicant Matching
                  </p>
                </div>
              </div>

              <Link
                href="/industry/recruitment"
                className="text-md font-bold underline text-sky-500 mb-4 "
              >
                See Industry Recruitment Information
              </Link>

              {/* End Cards */}
            </div>

            <Link
              href="/recruitment"
              className="btn  btn-aj ml-4 text-lg font-bold p-2"
            >
              Post Job
            </Link>
          </div>
        </div>
        <JobSearchBox q="industry" forceClass="my-6" />

        <section className="jobs_grid job_post_search_container">
          <div className="filters_panel">
            <div className="filters_content">
              <JobFilter />
            </div>
          </div>
          <div className="listings_panel">
            <div className="listings_content">
              {/* <SearchResults1 q={{ q: q, l: l || '', filter1 }} /> */}
              <SearchResults q={{ q: 'industry' || 0 }} />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
