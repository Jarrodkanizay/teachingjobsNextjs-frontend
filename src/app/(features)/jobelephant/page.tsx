import Image from 'next/image';
import type { Metadata } from 'next';
import Link from 'next/link';
import PricingTable from '@/components/PricingTable';
export const metadata: Metadata = {
  title: 'TeachingJobs Partnered with JobElephant', //Option 1 replaces the %s in layout.tsx
  // title: {//
  //   absolute: '  Teaching Jobs: Academic, research and science positions locally and globally.', //Option 2 overrides the title in layout.tsx
  // },
  description:
    'To alter pricing, select a different area. All prices are shown in USD. The employer logo and ad success indicators are included in the live ads, which run for up to 60 days.',
  keywords: 'Post Teaching Jobs, Post a Job TeachingJobs',
};

type PricingTypes = {
  cta: string;
  currencySymbol: string;
  basic: string;
  basicPrice: number;
  business: string;
  businessPrice: number;
  enterprise: string;
  enterprisePrice: number;
};

export default function Page() {
  const pricing: PricingTypes = {
    cta: 'Buy Single Job Post',
    currencySymbol: '',
    basic: "Let's Do It,   Post Now",
    basicPrice: 111,
    business: 'exclusive to JobElephant',
    businessPrice: 1418,
    enterprise: '10 Job Pack',
    enterprisePrice: 2520,
  };

  const emailAJ = 'jobelephant@academicjobs.com';

  const subjectBasic = `I would like to buy a Single Job listing`;
  const subjectBusiness = `I would like to buy a Single Job listing`;
  const subjectEnterprise = `I would like to buy a Single Job listing`;

  function formatNumberWithCommas(number: number) {
    return number.toLocaleString();
  }

  function createMessage(productName: string, price: number) {
    return encodeURIComponent(`Hi Teaching Jobs,
  
  I would like to purchase the ${productName}. Please send me an
  invoice for $${formatNumberWithCommas(price)}.
            
  ---Please Post the following for me…
            
  
            `);
  }

  return (
    <>
      <main className="">
        <div className="blurb text-left pb-4">
          {/* Hero banner */}
          <div className="hero max-h-fit bg-slate-200 py-8">
            <div className=" mx-auto">
              <div className="hero-content flex-col lg:flex-row gap-8">
                <Image
                  width={300}
                  height={300}
                  src="https://academicjobs.s3.amazonaws.com/img/_misc/jobelephant-puzzle.png"
                  className="lg:max-w-lg rounded-lg shadow-2xl mb-8 lg:mb-0 bg-white"
                  alt="jobelephant puzzle"
                />
                <div>
                  <h1 className="text-xl font-normal">
                    <span className="text-7xl font-bold text-right pb-4">
                      Welcome!&nbsp;
                    </span>{' '}
                    <br />
                    you've landed on the new TeachingJobs JobElephant portal
                  </h1>
                  <p className="pt-6">
                    We've just made it easier for all JobElephant staff to post
                    a job for all your clients
                  </p>
                  <p className="pb-6 font-bold">
                    Simply email all your jobs through the link bellow
                  </p>
                  {/* <a href="#pricing-table-cards" className="btn btn-aj">
                    Post a Job
                  </a> */}
                  <Link href="/jobelephant/post-job" className="btn btn-aj">
                    Post A Job
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Banner */}

          <div className="">&nbsp;</div>

          {/* Pricing Card 1 */}
          <div className="hero max-h-fit bg-white py-8">
            <div className="max-w-screen-lg mx-auto">
              <div className="hero-content flex-col lg:flex-row gap-12">
                <div
                  id="pricing-table-cards"
                  className="md:w-1/2 flex-1 mt-8 mb-8 p-8 bg-white shadow-xl rounded-3xl  md:max-w-screen-sm mx-auto"
                >
                  <div className="mb-7 pb-7 flex items-center border-b border-gray-300">
                    <Image
                      width="150"
                      height="150"
                      alt=""
                      src="https://res.cloudinary.com/williamsondesign/abstract-1.jpg"
                      className="rounded-3xl w-20 h-20"
                    />
                    <div className="ml-5">
                      <span className="block text-2xl font-semibold">
                        {pricing.cta}
                      </span>
                      <span>
                        <span className="font-medium text-gray-500 text-xl align-top">
                          {pricing.currencySymbol}&thinsp;
                        </span>
                        <span className="text-3xl font-bold">
                          exclusive to JobElephant
                        </span>{' '}
                      </span>
                    </div>
                  </div>
                  <ul className="mb-7 font-medium text-gray-500">
                    <li className="flex text-lg mb-2">
                      <Image
                        width="20"
                        height="20"
                        alt=""
                        src="https://res.cloudinary.com/williamsondesign/check-grey.svg"
                      />
                      <span className="ml-3">
                        30 day single
                        <span className="text-black"> job listing</span>
                      </span>
                    </li>
                    <li className="flex text-lg mb-2">
                      <Image
                        width="20"
                        height="20"
                        alt=""
                        src="https://res.cloudinary.com/williamsondesign/check-grey.svg"
                      />
                      <span className="ml-3">
                        <span className="text-black">Free </span>employer
                        account
                      </span>
                    </li>
                    <li className="flex text-lg mb-2">
                      <Image
                        width="20"
                        height="20"
                        alt=""
                        src="https://res.cloudinary.com/williamsondesign/check-grey.svg"
                      />
                      <span className="ml-3">
                        Ad
                        <span className="text-black"> performance metrics</span>
                      </span>
                    </li>
                    <li className="flex text-lg mb-2">
                      <Image
                        width="20"
                        height="20"
                        alt=""
                        src="https://res.cloudinary.com/williamsondesign/check-grey.svg"
                      />
                      <span className="ml-3">
                        Edit job postings
                        <span className="text-black"> anytime </span>
                      </span>
                    </li>
                  </ul>

                  <a
                    href="/jobelephant/post-job"
                    className="flex justify-center items-center bg-aj rounded-xl py-5 px-4 text-center text-white text-3xl font-bold "
                  >
                    {pricing.basic}
                  </a>
                </div>

                <div className="md:w-1/2">
                  <h1 className="text-5xl font-semibold  text-[#e74b7f] ">
                    {' '}
                    THIS IS NEW... <br /> don't panic!
                  </h1>
                  <h4 className=" text-gray-700 text-3xl mt-4 font-normal">
                    We are about to launch our new 'recruiter center'. In the
                    meantime, send through your new job using the simple form
                    button...
                  </h4>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-xl mx-auto">
            <div className="hero-content flex-col lg:flex-row"></div>
          </div>
        </div>

        <div className="hero max-h-fit bg-[#c1d72e] py-8">
          <div className=" mx-auto">
            <div className="hero-content flex-col lg:flex-row gap-8 max-w-screen-lg">
              <Image
                width={1200}
                height={400}
                src="https://academicjobs.s3.amazonaws.com/img/_misc/Web+capture_11-1-2024_161925_jobelephant.com.jpeg"
                className="lg:max-w-lg rounded-lg shadow-2xl mb-8 lg:mb-0 bg-white"
                alt="jobelephant"
              />
              <div className="content-grid">
                <h2 className="text-xl font-normal text-[#265882]">
                  <span className="text-3xl font-bold text-right pb-4 text-[#265882] ">
                    Any university can use JobElephant, here's how:&nbsp;
                  </span>{' '}
                  <br />
                  Use JobElephant to load jobs on TeachingJobs!
                </h2>
                <p className="pt-6">
                  Working with JobElephant to create and place your recruitment
                  ads means you have an expert consulting partner that
                  understands your resources and budgets, ensuring effective
                  campaigns for each open position.
                </p>

                <a
                  target="_blank"
                  href="https://jobelephant.com"
                  className="btn mt-8 bg-[#265882] text-white"
                >
                  JobElephant Website
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="hero max-h-fit bg-slate-200 py-8">
          <div className=" mx-auto max-w-screen-lg">
            <div className="hero-content flex-col lg:flex-row gap-8">
              <Image
                width={300}
                height={300}
                src="https://academicjobs.s3.amazonaws.com/img/_misc/1690109738395.jpg"
                className="lg:max-w-lg rounded-full shadow-2xl mb-8 lg:mb-0 bg-white"
                alt="AI Powered Recruitment Platform"
              />
              <div>
                <h1 className="text-3xl font-normal">
                  <span className="text-3xl font-bold text-right pb-4">
                    It is a pleasure working with JobElephant &nbsp;
                  </span>{' '}
                  <br />
                  and their amazing staff.
                </h1>
                <p className="pt-6 italic">
                  "TeachingJobs have partnered with JobElephant to give amazing
                  ‘job listings exposure’ to their higher education clients,
                  which in turn produces great academic and staff candidates. If
                  you are a university or college looking for a great
                  advertising partner, then JobElephant is a brilliant choice.""
                </p>
                <p className="pt-6 font-bold">
                  Jarrod Kanizay C.E.O - TeachingJobs.com
                </p>
                {/* <a href="#pricing-table-cards" className="btn btn-aj">
                    Post a Job
                  </a> */}
              </div>
            </div>
          </div>
        </div>
        <div className=" bg-white p-4 mt-16">
          <Image
            width={1280}
            height={380}
            src="https://academicjobs.s3.amazonaws.com/img/_misc/Jobelephant-Universities.png"
            alt="academicjobs university logos "
            className=" Jobelephant Universities mx-auto"
          />
        </div>

        <section className="w-full mx-auto text-center ">
          <picture className=" min-w-full max-w-2xl mx-auto">
            <Image
              width={800}
              height={380}
              src="https://academicjobs.s3.amazonaws.com/img/_misc/proudly-working-with.png"
              alt="proudly working with"
              className="mx-auto bg-gray-200"
            />
          </picture>
        </section>

        <h2 className="underline-full m-4 text-center mt-4 mb-4">
          Our latest Job Elephant listings
        </h2>
        <div className="cate-group section23 m-4">
          <div className="widget__text-block m-4">
            <div className="faculty-container grid-cols-1 grid md:grid-cols-4 gap-4 py-2 px-7">
              <div className="column">
                <ul className="">
                  <li className="mb-1 mt-4 hover:underline">
                    <Link
                      href="/jobs/assistant-associate-professor-of-environmental-toxicology-tenure-track-appointment/78925/"
                      className="text-blue-500 font-bold"
                    >
                      Assistant/Associate Professor of Environmental Toxicology
                      (tenure track appointment)
                    </Link>
                  </li>
                  <ul className="innerUL">
                    <li>
                      <Link href="">University of California Davis</Link>
                    </li>
                    <li>
                      <Link href="">Davis, CA, USA</Link>
                    </li>
                    <li>
                      <Link href="">Feb 14, 2024</Link>
                    </li>
                    <Link
                      href="https://apptrkr.com/get_redirect.php?id=4867143"
                      className="btn btn-sm btn-aj mt-4"
                    >
                      More Info
                    </Link>
                  </ul>
                </ul>
              </div>
              <div className="column">
                <ul className="">
                  <li className="mb-1 mt-4 hover:underline">
                    <Link
                      href="/jobs/disability-support-programs-and-services-dsps-full-time-tenure-track-counselor/82203"
                      className="text-blue-500 font-bold"
                    >
                      Disability Support Programs and Services (DSPS) Full-Time
                      Tenure Track Counselor
                    </Link>
                  </li>
                  <ul className="innerUL">
                    <li>
                      <Link href="">Cuesta College</Link>
                    </li>
                    <li>
                      <Link href="">
                        San Luis Obispo County, California,USA
                      </Link>
                    </li>
                    <li>
                      <Link href="">Feb 19, 2024</Link>
                    </li>
                    <Link
                      href="https://apptrkr.com/get_redirect.php?id=4938583"
                      className="btn btn-sm btn-aj mt-4"
                    >
                      More Info
                    </Link>
                  </ul>
                </ul>
              </div>
              <div className="column">
                <ul className="">
                  <li className="mb-1 mt-4 hover:underline">
                    <Link
                      href="/jobs/postdoctoral-fellow-in-comparative-radiobiology-translational-radiopharmaceutical-development-and-boron-neutron-capture-therapy-bnct-/82181"
                      className="text-blue-500 font-bold"
                    >
                      Postdoctoral Fellow in Comparative Radiobiology,
                      Translational Radiopharmaceutical Development, and Boron
                      Neutron Capture Therapy (BNCT)
                    </Link>
                  </li>
                  <ul className="innerUL">
                    <li>
                      <Link href="">University of Missouri System</Link>
                    </li>
                    <li>
                      <Link href="">Columbia, Missouri, USA</Link>
                    </li>
                    <li>
                      <Link href="">Mar 11, 2024</Link>
                    </li>
                    <Link
                      href="https://apptrkr.com/get_redirect.php?id=4922759"
                      className="btn btn-sm btn-aj mt-4"
                    >
                      More Info
                    </Link>
                  </ul>
                </ul>
              </div>
              <div className="column">
                <ul className="">
                  <li className="mb-1 mt-4 hover:underline">
                    <Link
                      href="/jobs/assistant-to-associate-dean-of-undergrad-programs/82206"
                      className="text-blue-500 font-bold"
                    >
                      Assistant to Associate Dean of Undergrad Programs
                    </Link>
                  </li>
                  <ul className="innerUL">
                    <li>
                      <Link href="">Oregon State University</Link>
                    </li>
                    <li>
                      <Link href="">Corvallis, OR, USA</Link>
                    </li>
                    <li>
                      <Link href="">Apr 16, 2024</Link>
                    </li>
                    <Link
                      href="https://apptrkr.com/get_redirect.php?id=4929143"
                      className="btn btn-sm btn-aj mt-4"
                    >
                      More Info
                    </Link>
                  </ul>
                </ul>
              </div>
            </div>
            <div className="faculty-container grid-cols-1 grid md:grid-cols-4 gap-4 py-2 px-7">
              <div className="column">
                <ul className="">
                  <li className="mb-1 mt-4 hover:underline">
                    <Link
                      href="/jobs/career-advisor-senior-career-advisor/82180"
                      className="text-blue-500 font-bold"
                    >
                      Career Advisor/Senior Career Advisor
                    </Link>
                  </li>
                  <ul className="innerUL">
                    <li>
                      <Link href="">University of the Pacific</Link>
                    </li>
                    <li>
                      <Link href="">Stockton, CA, USA</Link>
                    </li>
                    <li>
                      <Link href="">Mar 11, 2024</Link>
                    </li>
                    <Link
                      href="https://apptrkr.com/get_redirect.php?id=4921373"
                      className="btn btn-sm btn-aj mt-4"
                    >
                      More Info
                    </Link>
                  </ul>
                </ul>
              </div>
              <div className="column">
                <ul className="">
                  <li className="mb-1 mt-4 hover:underline">
                    <Link
                      href="/jobs/information-technology-faculty/82182"
                      className="text-blue-500 font-bold"
                    >
                      Information Technology Faculty
                    </Link>
                  </li>
                  <ul className="innerUL">
                    <li>
                      <Link href="">North Central State College</Link>
                    </li>
                    <li>
                      <Link href="">
                        2441 Kenwood Circle, Mansfield, OH, USA
                      </Link>
                    </li>
                    <li>
                      <Link href="">Mar 15, 2024</Link>
                    </li>
                    <Link
                      href="https://apptrkr.com/get_redirect.php?id=4931492"
                      className="btn btn-sm btn-aj mt-4"
                    >
                      More Info
                    </Link>
                  </ul>
                </ul>
              </div>
              <div className="column">
                <ul className="">
                  <li className="mb-1 mt-4 hover:underline">
                    <Link
                      href="/jobs/associate-vice-provost-for-teaching-and-learning/82571"
                      className="text-blue-500 font-bold"
                    >
                      Associate Vice Provost for Teaching and Learning
                    </Link>
                  </li>
                  <ul className="innerUL">
                    <li>
                      <Link href="">Oregon State University</Link>
                    </li>
                    <li>
                      <Link href="">Corvallis, OR, USA</Link>
                    </li>
                    <li>
                      <Link href=""> Feb 20, 2024</Link>
                    </li>
                    <Link
                      href="https://apptrkr.com/get_redirect.php?id=4931492"
                      className="btn btn-sm btn-aj mt-4"
                    >
                      More Info
                    </Link>
                  </ul>
                </ul>
              </div>
              <div className="column">
                <ul className="">
                  <li className="mb-1 mt-4 hover:underline">
                    <Link
                      href="/jobs/program-coordinator-pre-professional-programs/82178"
                      className="text-blue-500 font-bold"
                    >
                      Program Coordinator- Pre-Professional Programs
                    </Link>
                  </li>
                  <ul className="innerUL">
                    <li>
                      <Link href="">Southern Utah University</Link>
                    </li>
                    <li>
                      <Link href="">Cedar City, UT, USA</Link>
                    </li>
                    <li>
                      <Link href="">Mar 10, 2024</Link>
                    </li>
                    <Link
                      href="https://apptrkr.com/get_redirect.php?id=4918224"
                      className="btn btn-sm btn-aj mt-4"
                    >
                      More Info
                    </Link>
                  </ul>
                </ul>
              </div>

              <div className="column">
                <ul className="">
                  <li className="mb-1 mt-4 hover:underline">
                    <Link
                      href="/jobs/administrative-assistant-ii-student-affairs/84768"
                      className="text-blue-500 font-bold"
                    >
                      Administrative Assistant II - Student Affairs
                    </Link>
                  </li>
                  <ul className="innerUL">
                    <li>
                      <Link href="">Southern Utah University</Link>
                    </li>
                    <li>
                      <Link href="">Cedar City, UT, USA</Link>
                    </li>
                    <li>
                      <Link href="">Mar 1, 2024</Link>
                    </li>
                    <Link
                      href="https://apptrkr.com/get_redirect.php?id=4968144"
                      className="btn btn-sm btn-aj mt-4"
                    >
                      More Info
                    </Link>
                  </ul>
                </ul>
              </div>
              <div className="column">
                <ul className="">
                  <li className="mb-1 mt-4 hover:underline">
                    <Link
                      href="/jobs/video-technician-summer-2024/84765"
                      className="text-blue-500 font-bold"
                    >
                      Video Technician summer 2024
                    </Link>
                  </li>
                  <ul className="innerUL">
                    <li>
                      <Link href="">Southern Utah University</Link>
                    </li>
                    <li>
                      <Link href="">Cedar City, UT, USA</Link>
                    </li>
                    <li>
                      <Link href="">Mar 1, 2024</Link>
                    </li>
                    <Link
                      href="https://apptrkr.com/get_redirect.php?id=4968138"
                      className="btn btn-sm btn-aj mt-4"
                    >
                      More Info
                    </Link>
                  </ul>
                </ul>
              </div>
              <div className="column">
                <ul className="">
                  <li className="mb-1 mt-4 hover:underline">
                    <Link
                      href="https://www.academicjobs.com/jobs/clinical-positions-in-cardiology-central-coast-2023-2024/73047/"
                      className="text-blue-500 font-bold"
                    >
                      Assistant Controller (71101)
                    </Link>
                  </li>
                  <ul className="innerUL">
                    <li>
                      <Link href="">Pratt Institute</Link>
                    </li>
                    <li>
                      <Link href="">Brooklyn, NY, USA</Link>
                    </li>
                    <li>
                      <Link href="">Mar 1, 2024</Link>
                    </li>
                    <Link
                      href="https://apptrkr.com/get_redirect.php?id=4970008"
                      className="btn btn-sm btn-aj mt-4"
                    >
                      More Info
                    </Link>
                  </ul>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
