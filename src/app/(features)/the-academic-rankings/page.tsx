import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

const countryRegion = 'World';

function countryRegionPlural() {
  return countryRegion.toLowerCase().endsWith('s')
    ? `${countryRegion}'`
    : `${countryRegion}'s`;
}

export const metadata: Metadata = {
  title:
    'Fastest growing Academic Job Board with the best customer service & support', //Option 1 replaces the %s in layout.tsx
  // title: {
  //   absolute: '  Teaching Jobs: Academic, research and science positions locally and globally.', //Option 2 overrides the title in layout.tsx
  // },
  description:
    'With our advanced AI technologies that greatly improve the job posting process, Teaching Jobs is the top AI recruitment platform, enabling higher education institutions, the research and development (R&D) industry, and many other industries discover people. ',
  keywords:
    'Academic Recruitment Platform, AI Recruitment, Number 1 AI Recruitment Platform',
};
export default function myPage() {
  return (
    <>
      <main>
        {/* Hero banner */}
        <div>
          <figure>
            <Image
              width={2000}
              height={534}
              src="https://academicjobs.s3.amazonaws.com/img/banner/LinkenedInProfileBanner+(3).png"
              alt="Experience the Real-World in Academic Settings"
              className="w-full "
            />
          </figure>
          <div className="hero-overlay bg-gray-200 bg-opacity-70"></div>
          <div className=" ">
            <div className=" mx-auto">
              <h1 className="mt-[-20rem] text-2xl  md:text-8xl font-bold text-center text-sky-500 ">
                The Academic Rankings{' '}
                <span className="text-lg text-white ">
                  {' '}
                  <br />
                  The best thing a human being can do is to help another human
                  being know more.
                </span>
              </h1>
              <div className="text-center">
                <Link
                  href="https://www.academicjobs.com/the-academic-rankings/find-my-rank"
                  className="bg-[#e74b7f] text-white p-4 rounded-3xl font-bold "
                >
                  FIND YOUR ACADEMIC RANK….
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-sky-200 mb-8  py-8 px-4">
          <div className="container mx-auto"></div>
        </div>
        {/* <h2 className="text-4xl font-bold mb-20 mt-20 text-sky-600 text-center ">
        WHY DO YOU NEED A RANKING?
            </h2> */}

        {/* Main Content */}
        <section className="container mx-auto px-4 mt-12">
          <div className="card card-side bg-slate-100 shadow-xl my-16 px-6 grid sm:grid-cols-1 md:grid-cols-2">
            <figure>
              <Image
                width={2000}
                height={534}
                src="https://academicjobs.s3.amazonaws.com/img/banner/grow+yourself+globally.avif"
                alt="Experience the Real-World in Academic Settings"
                className="w-full lg:max-w-lg rounded-xl m-6"
              />
            </figure>
            <div className="card-body w-full p-4">
              <h2 className="card-title font-bold text-[#e74b7f] text-3xl pb-2">
                GROW YOURSELF GLOBALLY
              </h2>
              <p className="max-w-screen-sm">
                The academic field is one of the most competitive arenas to be
                involved in, both locally and globally. By establishing an
                individual rank for an academic, you can position yourself as a
                top professor in the field, or as an individual who can move up
                the ranks overtime. This helps academics further develop their
                career and/or legitimately establish themselves as a leader in
                academia through a globally recognised system.
              </p>
              <div className="card-actions justify-center md:justify-end mt-4">
                <Link
                  className="bg-gray-500 py-2 text-white px-4 rounded-3xl font-bold"
                  href="https://www.academicjobs.com/the-academic-rankings/my-academic-rank"
                >
                  Develop Your Network
                </Link>
              </div>
            </div>
          </div>

          <div className="card card-side bg-slate-100 shadow-xl my-16 px-6 grid sm:grid-cols-1 md:grid-cols-2">
            <figure className="lg:order-1">
              <Image
                width={2000}
                height={534}
                src="https://academicjobs.s3.amazonaws.com/img/banner/collaboration+over+competition+.jpg"
                alt="Choose from diverse campus roles"
                className="w-full lg:max-w-lg rounded-xl m-6"
              />
            </figure>
            <div className="card-body w-full p-4">
              <h2 className="card-title font-bold text-[#e74b7f] text-3xl pb-2">
                COLLABORATION OVER COMPETITION
              </h2>
              <p className="max-w-screen-sm">
                By providing a rank for you, we can set a benchmark that
                encourages collaboration. Having a number in the academic field
                allows you to find others with a similar rank, acknowledging a
                similar skill set, academic history, and research expertise.
                This knowledge can encourage collaborations on academic
                projects, expanding both members knowledge set and creativity.
              </p>

              <div className="card-actions justify-center md:justify-end mt-4">
                <Link
                  className="bg-gray-500 py-2 text-white px-4 rounded-3xl font-bold"
                  href="https://www.academicjobs.com/the-academic-rankings/my-academic-rank"
                >
                  Earn Extra Cash
                </Link>
              </div>
            </div>
          </div>
          {/* Flexible Part-Time Opportunities for Academics Card */}
          <div className="card card-side bg-sky-50 shadow-xl my-16 px-6 grid sm:grid-cols-1 md:grid-cols-2">
            <figure>
              <Image
                width={2000}
                height={534}
                src="https://academicjobs.s3.amazonaws.com/img/banner/analyse+your+academic+competition.png"
                alt="Work Part-Time with Flexible Opportunities for Academics"
                className="w-full lg:max-w-lg rounded-xl m-6"
              />
            </figure>
            <div className="card-body w-full p-4">
              <h2 className="card-title font-bold text-[#e74b7f] text-3xl pb-2">
                ANALYSE YOUR ACADEMIC PROGRESS
              </h2>
              <p className="max-w-screen-sm">
                Academics are known to engage in large depths of analysis behind
                their journals, reports, and projects. A legitimate rank of the
                members of academia can allow for further analysis on the
                performance of modern-day academics and their improvement over
                the years. In turn, this analysis can describe positive trends
                on the future of academia and promote further success in the
                field.
              </p>
              <div className="card-actions justify-center md:justify-end mt-4">
                <Link
                  className="bg-gray-500 py-2 text-white px-4 rounded-3xl font-bold mt-4"
                  href="https://www.academicjobs.com/the-academic-rankings/my-academic-rank"
                >
                  Search Academic Rankings
                </Link>
              </div>
            </div>
          </div>

          {/* Build Your Network with On-Campus Employment Card */}
          <div className="card card-side bg-sky-50 shadow-xl my-16 px-6 grid sm:grid-cols-1 md:grid-cols-2">
            <figure className="lg:order-1">
              <Image
                width={2000}
                height={534}
                src="https://academicjobs.s3.amazonaws.com/img/banner/2+embrace+indiviudality+.png"
                alt="Build Your Network with On-Campus Employment"
                className="w-full lg:max-w-lg rounded-xl m-6"
              />
            </figure>
            <div className="card-body w-full p-4">
              <h2 className="pt-4 card-title font-bold text-[#e74b7f] text-3xl pb-2">
                EMBRACE YOUR INDIVIDUALITY
              </h2>
              <p className="max-w-screen-sm">
                Set yourself apart from your university ranking. Academics often
                find themselves stuck in a partnership with their university.
                This may sometimes be great, but your true talent may go
                unrecognised under the universities rank which lends itself to
                the academic output and students results rather than your own
                work. Your own personal rank acts as an identifier of your
                success and establishment, putting you on the forefront as an
                academic, and not just a university professor.
              </p>
              <div className="card-actions justify-center md:justify-start mt-4">
                <Link
                  className="bg-gray-500 py-2 text-white px-4 rounded-3xl font-bold mt-4"
                  href="https://www.academicjobs.com/the-academic-rankings/my-academic-rank"
                >
                  View Skills
                </Link>
              </div>
            </div>
          </div>
        </section>

        <div>
          <div className="bg-opacity-70 bg-gray-400"></div>
          <div className="text-center py-8 bg-gray-200">
            <div className="max-w-2xl mx-auto">
              <h2 className="mb-5 text-2xl md:text-4xl font-bold text-3xl pb-2">
                WHY DO YOU NEED A RANKING?
              </h2>
              <p className="mb-5 text-sm md:text-lg">
                The academic field is one of the most competitive arenas to be
                involved in, both locally and globally. By establishing an
                individual rank for an academic, you can position yourself as a
                top professor in the field, or as an individual who can move up
                the ranks overtime.
              </p>
              <p className="mb-5 text-sm md:text-lg">
                This helps academics further develop their career and/or
                legitimately establish themselves as a leader in academia
                through a globally recognised system.
              </p>
              <Link
                className="bg-gray-500 py-2 text-white px-4 rounded-3xl font-bold mt-4"
                href="https://www.theacademicrankings.com/"
              >
                The Academic Rankings
              </Link>
            </div>
          </div>
        </div>

        {/* Breakout Section */}
        {/* <div className="bg-sky-200 mb-8  py-8 px-4">
          <div className="container mx-auto">
            <div className="flex mt-16 text-left gap-16 bg-sky-200 p-4 w-full mb-8">
              <div className="p-4 rounded-3xl bg-white">
                <h2 className="text-4xl font-bold mb-8 mt-8 text-sky-600 ">
                  WE SEE YOU{' '}
                </h2>

                <h2 className="text-4xl font-bold mb-8 text-sky-600 ">
                  LET YOUR ACADEMIC RANKING TAKE YOU HIGHER{' '}
                </h2>
                <p className="pb-2">Are you looking for a change in scenery?</p>
                <p className="pb-2">
                  Do you want to collaborate with others with similar interests?
                </p>
                <p className="pb-2">
                  Do you wish to develop your own interest areas alongside
                  teaching others?
                </p>
              </div>
              <div className="p-4 rounded-3xl bg-white pt-16">
                <h2 className="text-3xl  font-bold mb-8 text-sky-700">
                  THE IMPORTANCE OF THE ACADEMIC RANKING: HOW A NUMBER CAN
                  CHANGE YOUR CAREER{' '}
                </h2>
                <div className="text-col-2">
                  <p className="mb-4">
                    A rank can help you establish yourself as a leader in the
                    academic workforce
                  </p>
                  <p className="mb-4">
                    Having a numeral position in your career can help you find
                    other academics to collaborate with
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl text-left font-bold mb-8 text-sky-700">
              {countryRegionPlural()} #1 Job Board for Academic Rankings{' '}
            </h2>
            <div className="text-col-2">
              <p className="mb-4">
                Teaching Jobs stands out as the {countryRegionPlural()} premier
                platform for Academic Rankings, celebrated for linking students
                with valuable on-campus employment opportunities. Our platform
                is meticulously crafted to meet the specific needs of
                Academicemployment within academic settings.
              </p>
              <p className="mb-4">
                Facilitating ideal matches between students and various campus
                roles. Whether its part-time positions or work-study
                opportunities, we connect you with roles that enhance your
                academic experience and provide practical work skills. Opt for
                Teaching Jobs for unrivaled access to the{' '}
                {countryRegionPlural()} most sought-after Academicpositions in
                academia.
              </p>
            </div>
          </div>
        </div> */}

        <section>
          <h3 className="container mx-auto text-center py-8 px-4">
            Want opportunities delivered to you?{' '}
            <Link
              href="https://www.academicjobs.com/academic-talent-pool"
              className="bg-gray-500 py-2 text-white px-4 rounded-3xl font-bold mt-4"
            >
              Join our Talent Pool
            </Link>
          </h3>
        </section>
      </main>
    </>
  );
}
