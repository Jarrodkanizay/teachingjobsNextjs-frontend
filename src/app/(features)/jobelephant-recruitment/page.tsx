import Image from 'next/image';
import type { Metadata } from 'next';
import Link from 'next/link';
import PricingTable from '@/components/PricingTable';
export const metadata: Metadata = {
  title: 'JobElephant Recruitment', //Option 1 replaces the %s in layout.tsx
  // title: {
  //   absolute: '  Teaching Jobs: Academic, research and science positions locally and globally.', //Option 2 overrides the title in layout.tsx
  // },
  description:
    'Please choose a different region to view pricing. All prices are in USD. Aside from the employer logo and ad success analytics, the ads run for a maximum of sixty days each.u',
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
    cta: 'Get a Free Featured Job Listing Everytime',
    currencySymbol: '',
    basic: 'Post Your Job Now',
    basicPrice: 111,
    business: 'exclusive to JobElephant Memebers',
    businessPrice: 1,
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
  
  I would like to post my Institutional Profile. 
            
  ---Please Post the following for me…
            
  
            `);
  }

  return (
    <>
      <main className="">
        <div className="blurb text-left ">
          {/* Hero banner */}
          <div className="hero max-h-fit bg-white ">
            <div className=" mx-auto">
              <div className="hero-content flex-col lg:flex-row gap-12">
                <Image
                  width={500}
                  height={500}
                  src="https://academicjobs.s3.amazonaws.com/img/_misc/jobelephant-puzzle.png"
                  className="lg:max-w-lg rounded-lg mb-8 lg:mb-0 bg-white"
                  alt="jobelephant puzzle"
                />
                <div>
                  <h1 className="text-xl text-[#265882]">
                    <span className="text-4xl md:text-7xl font-bold text-right pb-4 text-[#c1d72e]">
                      Welcome to <br /> the JobElephant <br /> client
                      center!&nbsp;
                    </span>{' '}
                    <br />
                  </h1>

                  {/* {/* <p className="pt-6 font-bold">
                  Get a Free Featured Job Listing Everytime
                  </p> */}
                  <p className=" font-bold text-[#265882] text-xl">
                    Making it easy for you to post all your jobs on
                    TeachingJobs.com <br />
                    Your #1 college and university job board... for price, reach
                    and results
                  </p>
                  {/* <a href="#pricing-table-cards" className="btn btn-aj">
                    Post a Job
                  </a> */}

                  <Link
                    target="_blank"
                    href="https://cportal.jobelephant.com/login"
                    className="btn text-white mt-1 bg-[#265882]"
                  >
                    Post Your Job Now
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className=" mx-auto bg-slate-200">
            <div className="hero-content flex-col lg:flex-row md:gap-8 max-w-screen-lg mx-auto">
              <p className="p-8  md:text-2xl font-bold  text-gray-600">
                Get YOUR FREE college or university PROFILE on TeachingJobs with
                your first job listing!
              </p>
              <Link
                href={`mailto:${emailAJ}?subject=${'Institutional Profile Details'}&body=${createMessage(
                  pricing.business,
                  pricing.businessPrice
                )}`}
                className="btn btn-aj"
              >
                Send Profile Details Now
              </Link>
            </div>
          </div>

          {/* Hero Banner */}

          {/* Pricing Card 1 */}
          <div className="hero max-h-fit bg-white ">
            <div className="max-w-screen-xl mx-auto">
              <div className="hero-content flex-col lg:flex-row gap-12">
                <div
                  id="pricing-table-cards"
                  className=" flex-1 mt-8 mb-8  bg-white shadow-xl rounded-3xl  md:max-w-screen-lg mx-auto p-8"
                >
                  <div className="mb-7 pb-7 flex items-center border-b border-gray-300">
                    {/* <Image  width="150"
            height="150"
            alt=""
              src="https://res.cloudinary.com/williamsondesign/abstract-1.jpg"
             
              className="rounded-3xl w-20 h-20"
            /> */}

                    <div className="ml-5">
                      <span className="block text-6xl md:text-[5.3rem] font-semibold text-[#c1d72e]">
                        Our Gift to You
                      </span>
                      <span className="block md:text-3xl font-semibold">
                        {pricing.cta}
                      </span>
                      <span>
                        <span className="font-medium text-gray-500 text-xl align-top">
                          {pricing.currencySymbol}&thinsp;
                        </span>
                        <span className="md:text-5xl font-bold text-[#265882]">
                          Stand Out Above the Rest
                        </span>{' '}
                      </span>
                    </div>
                  </div>

                  {/* <ul className="mb-7 font-medium text-gray-500">
            <li className="flex text-lg mb-2">
              <Image  width="20"
            height="20"
            alt="" src="https://res.cloudinary.com/williamsondesign/check-grey.svg" />
              <span className="ml-3">
                The Offical <span className="text-black">Academic Job Board</span>
              </span>
            </li>
            <li className="flex text-lg mb-2">
              <Image  width="20"
            height="20"
            alt="" src="https://res.cloudinary.com/williamsondesign/check-grey.svg" />
              <span className="ml-3">
                <span className="text-black">Modern and Bold </span>to the dated and old job boards
              </span>
            </li>
            <li className="flex text-lg mb-2">
              <Image  width="20"
            height="20"
            alt="" src="https://res.cloudinary.com/williamsondesign/check-grey.svg" />
              <span className="ml-3 text-black">
                The #1 <span className="text-gray-500">Exclusive Academic Social Network that fills all university positions</span>
              </span>
            </li>
            {/* <li className="flex text-lg mb-2">
              <Image  width="20"
            height="20"
            alt="" src="https://res.cloudinary.com/williamsondesign/check-grey.svg" />
              <span className="ml-3">
                Edit job postings
                <span className="text-black"> anytime </span>
              </span>
            </li> */}
                  {/* </ul> */}

                  <Link
                    target="_blank"
                    href="https://cportal.jobelephant.com/login"
                    className="btn text-white mt-4 bg-[#265882]"
                  >
                    Post Your Job Now
                  </Link>
                </div>

                <div className="md:w-1/3">
                  <Image
                    width={1280}
                    height={500}
                    src="https://academicjobs.s3.amazonaws.com/img/_misc/Get-On-Top.png"
                    className="lg:max-w-xl rounded-3xl shadow-2xl mb-8 lg:mb-0 bg-white"
                    alt="Get On Top"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="hero max-h-fit bg-[#c1d72e] py-8">
          <div className=" mx-auto">
            <div className="hero-content flex-col lg:flex-row gap-8 max-w-screen-lg">
              <Image
                width={1200}
                height={400}
                src="https://academicjobs.s3.amazonaws.com/img/_misc/Uni-San-Diego.jpeg"
                className="lg:max-w-lg rounded-xl shadow-2xl mb-8 lg:mb-0 bg-white"
                alt="San Diego"
              />
              <div className="content-grid">
                <h2 className="text-xl font-normal text-[#265882]">
                  <span className="text-6xl font-bold text-right pb-4 text-[#265882] ">
                    You Get&nbsp;
                  </span>{' '}
                  <br />
                  'Priority Employer Branding'
                </h2>
                <p className="pt-6 font-bold">
                  When you have a job listing on TeachingJobs
                </p>

                {/* <a href="https://jobelephant.com/what-we-do/college-university/" className="btn mt-8 bg-[#265882] text-white">
                    JobElephant Website
                  </a> */}
              </div>
            </div>
          </div>
        </div>

        <div className=" bg-white p-4 ">
          <Image
            width={1280}
            height={380}
            src="https://academicjobs.s3.amazonaws.com/img/_misc/Jobelephant-Universities.png"
            alt="Jobelephant Universities"
            className=" rounded-xl mx-auto md:max-w-screen-2xl my-12 "
          />
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

        <section className="w-full mx-auto text-center ">
          <picture className=" min-w-full max-w-2xl mx-auto">
            <Image
              width={800}
              height={380}
              src="https://academicjobs.s3.amazonaws.com/img/_misc/proudly-working-with.png"
              alt="proudly working with job elephant"
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
