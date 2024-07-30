import Image from 'next/image';
import type { Metadata } from 'next';
import Link from 'next/link';

const countryRegion = 'World';

function countryRegionPlural() {
  return countryRegion.toLowerCase().endsWith('s')
    ? `${countryRegion}'`
    : `${countryRegion}'s`;
}

export const metadata: Metadata = {
  title: 'Industry Jobs in Academia Recruitment ', //Option 1 replaces the %s in layout.tsx
  // title: {
  //   absolute: '  Teaching Jobs: Academic, research and science positions locally and globally.', //Option 2 overrides the title in layout.tsx
  // },
  description:
    'View our insanely smart Academics for your Industry Jobs in Higher Education.',
  keywords: 'Academic Industry Jobs Recruitment',
};
export default function myPage() {
  return (
    <>
      <main className="">
        {/* Hero banner */}
        <div
          className="hero h-screen max-h-[480px] md:max-h-[400px]"
          style={{
            backgroundImage:
              'url(/student-jobs-on-campus/close-up-of-scientist-looking-at-blood-sample.jpg)',
            backgroundSize: 'cover',
            backgroundRepeat: 'repeat',
          }}
        >
          <div className="hero-overlay bg-opacity-70 p-4"></div>
          <div className=" text-white p-4">
            <h1 className="mb-5 text-2xl text-white md:text-4xl font-bold">
              <span className="text-[#e74b7f] md:text-7xl text-4xl">
                {' '}
                Industry Jobs for Academics{' '}
              </span>{' '}
              <br /> "Get YOUR next crazy SMART employee HERE."
            </h1>
            <Link className="btn btn-aj" href="/post-a-job">
              Post A Job
            </Link>
          </div>
        </div>

        <div className="content-grid">
          <div className="card card-side bg-slate-100 shadow-xl my-16 px-6 grid sm:grid-cols-1 md:grid-cols-2">
            <figure>
              <Image
                width={2000}
                height={534}
                src="https://academicjobs.s3.amazonaws.com/img/_misc/young-man-apron-working-with-plants-greenery.jpg"
                alt="Choose from diverse campus roles"
                className="w-full lg:max-w-lg rounded-xl m-6"
              />
            </figure>

            <div className="card-body w-full">
              <h2 className="card-title uppercase">
                We work with our clients to create a better future.
              </h2>
              <p className="max-w-screen-sm">
                Connect with the Global top academic talent on the No. 1
                Academic Job Board. Posting jobs is simple and affordable,
                targeting both local and global candidates. Access thousands of
                top academics without the high costs. We offer the most
                affordable job listing fees, paired with a comprehensive talent
                pool. Meaning better results with an exceptional recruiter
                experience.
              </p>

              <div className="card-actions justify-center md:justify-end">
                <Link className="btn btn-aj" href="/recruitment">
                  Recruitment
                </Link>
              </div>
            </div>
          </div>
          {/* Flexible Part-Time Opportunities for Academics Card */}
          <div className="card card-side bg-sky-50 shadow-xl my-16 px-6 grid sm:grid-cols-1 md:grid-cols-2">
            <figure className="lg:order-1">
              <Image
                width={2000}
                height={534}
                src="https://academicjobs.s3.amazonaws.com/img/_misc/ice_main_1280p.jpg"
                alt="Work Part-Time with Flexible Opportunities for Academics"
                className="w-full lg:max-w-lg rounded-xl m-6"
              />
            </figure>
            <div className="card-body w-full">
              <h2 className="card-title uppercase">
                Ambitous Academics and their transition to industry.
              </h2>
              <p className="max-w-screen-sm">
                With the most comprehensive Academic Talent Pool, you can
                identify the most sought-after candidates and make informed
                decisions about who will join your organization.
              </p>
              <div className="card-actions justify-center md:justify-start">
                <Link className="btn btn-aj" href="/recruitment">
                  Search for Academics
                </Link>
              </div>
            </div>
          </div>

          {/* Breakout Section */}

          <div className="bg-sky-100 mb-8 mt-16 py-8 px-4 full-width">
            <div className="container mx-auto">
              <h2 className="text-3xl text-center font-bold mb-8 text-sky-600">
                #1 Job Board for for ALL University&nbsp;Positions
              </h2>
              <p className="mb-4 text-center max-w-[500px] mx-auto">
                Teaching Jobs doesn't just find academics, we specialize in
                finding the best in academia for Industry positions.
              </p>
            </div>
          </div>

          <section className="container mx-auto px-4 mt-12">
            {/* Gain Real-World Experience in Academic Settings Card */}
            <div className="card card-side bg-slate-100 shadow-xl my-16 px-6 grid sm:grid-cols-1 md:grid-cols-2">
              <figure>
                <Image
                  width={2000}
                  height={534}
                  src="https://academicjobs.s3.amazonaws.com/img/_misc/female-scientist_place-her-to-the-right.png"
                  alt="Experience the Real-World in Academic Settings"
                  className="w-full lg:max-w-lg rounded-xl m-6"
                />
              </figure>
              <div className="card-body w-full">
                <h2 className="card-title">
                  Helpful tools and AI make it easy to list
                </h2>
                <p className="max-w-screen-sm">
                  Revolutionize your hiring process with Teaching Jobs. Our
                  platform combines genuine customer service with advanced AI
                  technology, making the recruitment experience efficient and
                  enjoyable.
                </p>
                <div className="card-actions justify-center md:justify-end">
                  <Link className="btn btn-aj" href="/ai-recruitment">
                    More Info
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
                  src="https://academicjobs.s3.amazonaws.com/img/_misc/miller_nemea_AP-scaled.jpg"
                  alt="Build Your Network with On-Campus Employment"
                  className="w-full lg:max-w-lg rounded-xl m-6"
                />
              </figure>
              <div className="card-body w-full">
                <h2 className="card-title">
                  Access to thousands of top academics
                </h2>
                <p className="max-w-screen-sm">
                  With the most comprehensive Academic Talent Pool, you can
                  identify the most sought-after candidates and make informed
                  decisions about who will join your organization.
                </p>
                <div className="card-actions justify-center md:justify-start">
                  <Link className="btn btn-aj" href="/recruitment">
                    Develop Your Network
                  </Link>
                </div>
              </div>
            </div>
          </section>
          {/* <div className="bg-teal-100 mb-8 mt-16 py-8 px-4">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-sky-600">
              Let Teaching Jobs buy your next beer or help fund your
              higher&nbsp;education…
            </h2>
            <div className="text-col-2">
              <p className="mb-4">
                Unlock Your Potential with Campus Employment Opportunities from
                Teaching Jobs. Our platform is tailored to help students like
                you find the ideal on-campus job that complements your academic
                schedule. Academic Rankings can provide the cash you need
                to go out, buy a new gadget or pay eduction expenses?
              </p>
              <p className="mb-4">
                With Teaching Jobs, you get access to a wide array of
                student-focused positions that not only provide a source of
                income but also enhance your university experience. From library
                aides to research assistants, we connect you to roles that align
                with your study goals and personal interests.
              </p>
              <blockquote>
               The best thing a human being can do is to help another human being know more.
              </blockquote>
              <p className="mb-4">
                Maximize Your College Experience with Teaching Jobs. We
                understand the unique needs of Academiclife, and our service is
                designed to simplify your job search on campus. Whether you're
                looking to develop professional skills, build your network, or
                manage your educational expenses, Teaching Jobs is your go-to
                resource.
              </p>
            </div>
          </div>
        </div> */}
        </div>

        <section>
          <h3 className="container mx-auto text-center py-8 px-4">
            Want opportunities delivered to you?{' '}
            <Link href="/post-a-job" className="btn btn-aj">
              Post A Job
            </Link>
          </h3>
        </section>
      </main>
    </>
  );
}
