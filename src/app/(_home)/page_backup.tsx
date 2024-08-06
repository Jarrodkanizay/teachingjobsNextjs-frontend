import Link from 'next/link';
import type { Metadata } from 'next';
import JobSearchBoxHome from '@/components/JobSearchBoxHome';
import JobCategoryAndLocationLinks from '@/components/links/JobCategoryAndLocationLinks';
import Top7JobTypes from '@/components/Top7JobTypes';
import { getContentRegion } from '@/actions/getContentRegion';
// import { useState, useEffect } from 'react';
// import Image from 'next/image';
// import Logo from '@/components/brand/Logo';
// import AusUniLogos from '@/components/AusUniLogos';
// import AmericaUniLogos from '@/components/AmericaUniLogos';

export const metadata: Metadata = {
  // title: 'About', //Option 1 replaces the %s in layout.tsx
  title: {
    absolute: '  Teaching Jobs: All School Jobs in Australia.', //Option 2 overrides the title in layout.tsx
  },
  description:
    'Looking for Teaching Jobs in Australia? Visit our website at Teaching Jobs, to see our range of teaching jobs available near Melbourne, Sydney, Perth and all major cities.',
  keywords: 'Teaching Jobs. TeachingJobs, Teacher Jobs, Teacher positions',
};

export default async function myPage() {
  const contentRegion = await getContentRegion();

  //console.log(process.env.NODE_ENV, process.env.REACT_APP_ENV);
  // let showJobElephant = true;
  // showJobElephant = false;

  return (
    <main className="content-grid">
      <div className="full-width md:h-[400px] h-[229px] bg-gradient-to-br from-pink-600 via-pink-400 to-pink-700">
        <Top7JobTypes />
      </div>

      <div className="flex flex-col items-center justify-center ">
        {/* <div className="h-[15vh] flex flex-col items-end justify-end mb-8">
          <Link href={`/`}>
            <Logo width={300} height={170} />
          </Link>
        </div> */}
        {/* Job Search Form */}
        <div className="w-full md:w-3/6  flex flex-col items-top mt-[6rem]">
          <JobSearchBoxHome />
        </div>
      </div>

      <ul className=" mb-4 text-center justify-center flex gap-4  mt-8 h-auto w-full text-transform: capitalize text-gray-500 flex-wrap">
        <li className="pb-2 flex hover:underline ">
          <a href="/melbourne/">melbourne</a>
        </li>
        <li className="pb-2 flex  hover:underline">
          <a href="/sydney/">sydney</a>
        </li>
        <li className="pb-2 flex md:break hover:underline">
          <a href="/brisbane/">brisbane</a>
        </li>
        <li className="pb-2 flex md:break hover:underline">
          <a href="/gold-coast/">gold coast</a>
        </li>

        <li className="pb-2 flex  hover:underline">
          <a href="/canberra/">canberra</a>
        </li>
        <li className="pb-2 flex md:break hover:underline">
          <a href="/perth/">perth</a>
        </li>
        <li className="pb-2 flex md:break hover:underline">
          <a href="/adelaide/">adelaide</a>
        </li>
        <li className="pb-2 flex md:break hover:underline">
          <a href="/darwin/">darwin</a>
        </li>
      </ul>

      <JobCategoryAndLocationLinks />

      <div
        id="section"
        className="bg-slate-200 full-width py-12 mb-16 mt-8 md:mt-12"
      >
        <div className="md:hero-content flex flex-col lg:flex-row mx-auto md:items-start py-12">
          <h1 className="text-2xl font-normal sm:text-right text-gray-400 m-0 pb-8  md:px-0">
            <span className="md:text-6xl font-bold text-gray-500 pb-4 ">
              TEACHING JOBS AUSTRALIA <br />
            </span>{' '}
            All Schools and Teaching Positions{' '}
          </h1>

          <div>
            <p className="md:px-7 mb-2 mt-1 text-gray-600">
              Find all Australian Teaching Career opportunities here, we make it
              easy. It is time to shine in 2024, with finding your opportunities
              on TeachingJobs Today!
            </p>
            <p className="md:px-7 text-[#334680] font-bold">
              Early Childhood Jobs | Primary School Jobs | Secondary School Jobs
            </p>
          </div>
        </div>
      </div>

      {/* <h2 className="underline-full mt-6">Top Teaching Jobs Today</h2>
      <div className="cate-group section23 ">
        <div className="widget__text-block">
          <div className="faculty-container grid-cols-1 grid md:grid-cols-4 gap-4 py-2 px-7 ">
            <div className="column ">
              <ul className="">
                <li className="mb-1 mt-4 ">
                  <a
                    className="text-blue-500 font-bold"
                    href="/jobs/middle-leader---the-arts/66672/"
                  >
                    Middle Leader - The Arts
                  </a>
                </li>
                <ul className="innerUL">
                  <li className="mb-2 ">
                    <a href="/">Columba Catholic College </a>
                  </li>
                  <li className="mb-2 ">
                    <a href="/">Charters Towers, QLD</a>
                  </li>
                  <li className="mb-2 ">
                    <a href="/"> Mar 18, 2024</a>
                  </li>
                </ul>
              </ul>
            </div>
            <div className="column">
              <ul className="">
                <li className="mb-1 mt-4"></li>
                <li className="mb-1 mt-4">
                  <a
                    className="text-blue-500 font-bold"
                    href="/jobs/primary-teacher-(hpe)/64334/"
                  >
                    Primary Teacher (HPE)
                  </a>
                </li>
                <ul className="innerUL">
                  <li className="mb-2 ">
                    <a href="/">St Joseph's Catholic School </a>
                  </li>
                  <li className="mb-2 ">
                    <a href="/">Mount Isa, QLD</a>
                  </li>
                  <li className="mb-2 ">
                    <a href="/">Mar 24, 2024</a>
                  </li>
                </ul>
              </ul>
            </div>
            <div className="column">
              <ul className="">
                <li className="mb-1 mt-4">
                  <a
                    className="text-blue-500 font-bold"
                    href="/jobs/secondary-teacher-(english)/64027/"
                  >
                    Secondary Teacher (English)
                  </a>
                </li>
                <ul className="innerUL">
                  <li className="mb-2 ">
                    <a href="/">Columba Catholic College</a>
                  </li>
                  <li className="mb-2 ">
                    <a href="/">Charters Towers, QLD</a>
                  </li>
                  <li className="mb-2 ">
                    <a href="/"> Mar 22, 2024</a>
                  </li>
                </ul>
              </ul>
            </div>
            <div className="column">
              <ul className="">
                <li className="mb-1 mt-4">
                  <a
                    className="text-blue-500 font-bold"
                    href="/jobs/secondary-teacher-(english---humanities)/66671/"
                  >
                    Secondary Teacher (English &amp; Humanities) (71101)
                  </a>
                </li>
                <ul className="innerUL">
                  <li className="mb-2 ">
                    <a href="/">Good Shepherd Catholic College</a>
                  </li>
                  <li className="mb-2 ">
                    <a href="/">Mount Isa, QLD</a>
                  </li>
                  <li className="mb-2 ">
                    <a href="/">Mar 18, 2024</a>
                  </li>
                </ul>
              </ul>
            </div>
          </div>
          <div className="faculty-container grid-cols-1 grid md:grid-cols-4 gap-4 py-2 px-7">
            <div className="column">
              <ul className="">
                <li className="mb-1 mt-4">
                  <a
                    className="text-blue-500 font-bold"
                    href="/jobs/primary-teacher/63526/"
                  >
                    Primary Teacher
                  </a>
                </li>
                <ul className="innerUL">
                  <li className="mb-2 ">
                    <a href="/">St Francis Catholic School</a>
                  </li>
                  <li className="mb-2 ">
                    <a href="/">Ayr, QLD</a>
                  </li>
                  <li className="mb-2 ">
                    <a href="/">Mar 16, 2024</a>
                  </li>
                </ul>
              </ul>
            </div>
            <div className="column">
              <ul className="">
                <li className="mb-1 mt-4">
                  <a
                    className="text-blue-500 font-bold"
                    href="/jobs/primary-secondary-teacher---internal-relief/66688/"
                  >
                    Primary/Secondary Teacher - Internal Relief
                  </a>
                </li>
                <ul className="innerUL">
                  <li className="mb-2 ">
                    <a href="/">St Joseph's Catholic School</a>
                  </li>
                  <li className="mb-2 ">
                    <a href="/">Cloncurry QLD</a>
                  </li>
                  <li className="mb-2 ">
                    <a href="/">Mar 29, 2024</a>
                  </li>
                </ul>
              </ul>
            </div>
            <div className="column">
              <ul className="">
                <li className="mb-1 mt-4">
                  <a
                    className="text-blue-500 font-bold"
                    href="/jobs/foundation-principal/64922/"
                  >
                    Secondary Teacher (Junior Woodwork and Metalwork &amp;
                    Senior Furnishings)
                  </a>
                </li>
                <ul className="innerUL">
                  <li className="mb-2 ">
                    <a href="/">Good Shepherd Catholic College</a>
                  </li>
                  <li className="mb-2 ">
                    <a href="/">Mount Isa, QLD</a>
                  </li>
                  <li className="mb-2 ">
                    <a href="/">Mar 29, 2024</a>
                  </li>
                </ul>
              </ul>
            </div>
            <div className="column">
              <ul className="">
                <li className="mb-1 mt-4">
                  <a className="text-blue-500 font-bold" href="/">
                    Primary Teacher (Prep)
                  </a>
                </li>
                <ul className="innerUL">
                  <li className="mb-2 ">
                    <a href="/">St John Bosco Catholic School</a>
                  </li>
                  <li className="mb-2 ">
                    <a href="/">Collinsville, QLD</a>
                  </li>
                  <li className="mb-2 ">
                    <a href="/">Mar 29, 2024</a>
                  </li>
                </ul>
              </ul>
            </div>
          </div>
          <div className="faculty-container grid-cols-1 grid md:grid-cols-4 gap-4 py-2 px-7">
            <div className="column">
              <ul className="">
                <li className="mb-1 mt-4">
                  <a
                    className="text-blue-500 font-bold"
                    href="/jobs/middle-leader---science/66666/"
                  >
                    Middle Leader - Science
                  </a>
                </li>
                <ul className="innerUL">
                  <li className="mb-2 ">
                    <a href="/">Columba Catholic College</a>
                  </li>
                  <li className="mb-2 ">
                    <a href="/">Charters Towers, QLD</a>
                  </li>
                  <li className="mb-2 ">
                    <a href="/">Mar 18, 2024</a>
                  </li>
                </ul>
              </ul>
            </div>
            <div className="column">
              <ul className="">
                <li className="mb-1 mt-4">
                  <a
                    className="text-blue-500 font-bold"
                    href="/jobs/primary-teacher/66673/"
                  >
                    Primary Teacher
                  </a>
                </li>
                <ul className="innerUL">
                  <li className="mb-2 ">
                    <a href="/">St John Bosco Catholic School</a>
                  </li>
                  <li className="mb-2 ">
                    <a href="/">Collinsville, QLD</a>
                  </li>
                  <li className="mb-2 ">
                    <a href="/">Mar 18, 2024</a>
                  </li>
                </ul>
              </ul>
            </div>
            <div className="column">
              <ul className="">
                <li className="mb-1 mt-4">
                  <a
                    className="text-blue-500 font-bold"
                    href="/jobs/primary-teachers-(multiple-positions)/64336/"
                  >
                    Primary Teachers (multiple positions)
                  </a>
                </li>
                <ul className="innerUL">
                  <li className="mb-2 ">
                    <a href="/">St Joseph's Catholic School</a>
                  </li>
                  <li className="mb-2 ">
                    <a href="/">Mount Isa, QLD</a>
                  </li>
                  <li className="mb-2 ">
                    <a href="/">Mar 24, 2024</a>
                  </li>
                </ul>
              </ul>
            </div>
            <div className="column">
              <ul className="">
                <li className="mb-1 mt-4">
                  <a
                    className="text-blue-500 font-bold"
                    href="/jobs/middle-leader---inclusive-practices/66667/"
                  >
                    Middle Leader - Inclusive Practices
                  </a>
                </li>
                <ul className="innerUL">
                  <li className="mb-2 ">
                    <a href="/">St Joseph's Catholic School</a>
                  </li>
                  <li className="mb-2 ">
                    <a href="/">Cloncurry, QLD</a>
                  </li>
                  <li className="mb-2 ">
                    <a href="/">Mar 18, 2024</a>
                  </li>
                </ul>
              </ul>
            </div>
            <div className="column">
              <ul className="">
                <li className="mb-1 mt-4">
                  <a
                    className="text-blue-500 font-bold"
                    href="/jobs/primary-teacher-(lote)/62733/"
                  >
                    Primary Teacher (LOTE)
                  </a>
                </li>
                <ul className="innerUL">
                  <li className="mb-2 ">
                    <a href="/">St Francis Catholic School</a>
                  </li>
                  <li className="mb-2 ">
                    <a href="/">Ayr, QLD</a>
                  </li>
                  <li className="mb-2 ">
                    <a href="/">Mar 8, 2024</a>
                  </li>
                </ul>
              </ul>
            </div>
            <div className="column">
              <ul className="">
                <li className="mb-1 mt-4">
                  <a
                    className="text-blue-500 font-bold"
                    href="/jobs/primary-teacher-(year-6)/62636/"
                  >
                    Primary Teacher (Year 6)
                  </a>
                </li>
                <ul className="innerUL">
                  <li className="mb-2 ">
                    <a href="/">St Michael's Catholic School</a>
                  </li>
                  <li className="mb-2 ">
                    <a href="/">Palm Island, QLD</a>
                  </li>
                  <li className="mb-2 ">
                    <a href="/">Mar 7, 2024</a>
                  </li>
                </ul>
              </ul>
            </div>
            <div className="column">
              <ul className="">
                <li className="mb-1 mt-4">
                  <a
                    className="text-blue-500 font-bold"
                    href="/jobs/middle-leader---mathematics/66670/"
                  >
                    Middle Leader - Mathematics
                  </a>
                </li>
                <ul className="innerUL">
                  <li className="mb-2 ">
                    <a href="/">Good Shepherd Catholic College</a>
                  </li>
                  <li className="mb-2 ">
                    <a href="/">Mount Isa, QLD</a>
                  </li>
                  <li className="mb-2 ">
                    <a href="/">Mar 18, 2024</a>
                  </li>
                </ul>
              </ul>
            </div>
            <div className="column">
              <ul className="">
                <li className="mb-1 mt-4">
                  <a
                    className="text-blue-500 font-bold"
                    href="/jobs/hospitality,-food-and-fibre-teacher-(secondary)/66664/"
                  >
                    Hospitality, Food and Fibre Teacher (Secondary)
                  </a>
                </li>
                <ul className="innerUL">
                  <li className="mb-2 ">
                    <a href="/">Ryan Catholic College</a>
                  </li>
                  <li className="mb-2 ">
                    <a href="/">Townsville, QLD</a>
                  </li>
                  <li className="mb-2 ">
                    <a href="/">Mar 31, 2024</a>
                  </li>
                </ul>
              </ul>
            </div>
          </div>
        </div>
      </div> 

      <Link className="text-[#e74b7f] mt-4 mb-4 px-2 font-bold" href="/jobs/">
        view more top jobs →
      </Link>*/}

      <div className="bg-white flex flex-col  ">
        <h2 className="underline-full mt-6 ">Choose Job Types</h2>
        <ul className=" mb-8 text-left columns-1 md:columns-4  md:gap-2 py-2 pl-8 h-auto w-full text-transform: capitalize">
          <li className="pb-2 flex  ">
            <a href="/graduate-teacher/">graduate teacher</a>
          </li>
          <li className="pb-2 flex  ">
            <a href="/library-services/">library services</a>
          </li>
          <li className="pb-2 flex  ">
            <a href="/information-management/">information management</a>
          </li>
          <li className="pb-2 flex  ">
            <a href="/schools-management/">schools management</a>
          </li>
          <li className="pb-2 flex  ">
            <a href="/vocational-management/">vocational management</a>
          </li>
          <li className="pb-2 flex  ">
            <a href="/principal/">principal</a>
          </li>
          <li className="pb-2 flex  ">
            <a href="/student-services/">student services</a>
          </li>
          <li className="pb-2 flex  ">
            <a href="/early-childhood/">early childhood</a>
          </li>
          <li className="pb-2 flex  ">
            <a href="/primary/">primary</a>
          </li>
          <li className="pb-2 flex  ">
            <a href="/secondary/">secondary</a>
          </li>
          <li className="pb-2 flex  ">
            <a href="/tertiary/">tertiary</a>
          </li>
          <li className="pb-2 flex  ">
            <a href="/vocational/">vocational</a>
          </li>
          <li className="pb-2 flex  ">
            <a href="/special-needs-aides/">special needs aides</a>
          </li>
          <li className="pb-2 flex  ">
            <a href="/tutoring/">tutoring</a>
          </li>
          <li className="pb-2 flex  ">
            <a href="/training-assessment/">training assessment</a>
          </li>
          <li className="pb-2 flex  ">
            <a href="/relief-teaching/">relief teaching</a>
          </li>
          <li className="pb-2 flex  ">
            <a href="/administrative/">administrative</a>
          </li>
        </ul>
        <div className="newLine"></div>
      </div>

      {/* <div className="bg-white flex flex-col  ">
        <h2 className="underline-full mt-6 ">Choose Teaching Jobs by City</h2>
        <ul className=" mb-8 text-left columns-1 md:columns-4  md:gap-2 py-2 pl-8 h-auto w-full text-transform: capitalize">
          <li className="pb-2 flex  ">
            <a href="/melbourne/">melbourne</a>
          </li>
          <li className="pb-2 flex  ">
            <a href="/sydney/">sydney</a>
          </li>
          <li className="pb-2 flex md:break ">
            <a href="/brisbane/">brisbane</a>
          </li>
          <li className="pb-2 flex md:break ">
            <a href="/gold-coast/">gold coast</a>
          </li>
          <li className="pb-2 flex  ">
            <a href="/canberra/">canberra</a>
          </li>
          <li className="pb-2 flex md:break ">
            <a href="/perth/">perth</a>
          </li>
          <li className="pb-2 flex md:break ">
            <a href="/adelaide/">adelaide</a>
          </li>
          <li className="pb-2 flex md:break ">
            <a href="/darwin/">darwin</a>
          </li>
        </ul>
        <div className="newLine"></div>
      </div> */}

      <div className="bg-white flex flex-col  ">
        <h2 className="underline-full mt-6 ">Choose Teaching Jobs by State</h2>
        <ul className=" mb-8 text-left columns-1 md:columns-4  md:gap-2 py-2 pl-8 h-auto w-full text-transform: capitalize">
          <li className="pb-2 flex  ">
            <a href="/victoria/">victoria</a>
          </li>
          <li className="pb-2 flex  ">
            <a href="/nsw/">NSW</a>
          </li>
          <li className="pb-2 flex md:break ">
            <a href="/queensland/">queensland</a>
          </li>
          <li className="pb-2 flex  ">
            <a href="/south-australia/">south australia</a>
          </li>
          <li className="pb-2 flex md:break ">
            <a href="/western-australia/">western australia</a>
          </li>
          <li className="pb-2 flex  ">
            <a href="/northern-territory/">northern territory</a>
          </li>
          <li className="pb-2 flex md:break ">
            <a href="/tasmania/">tasmania</a>
          </li>
        </ul>
        <div className="newLine"></div>
      </div>

      <h2 className="underline-full mt-6">Top Teaching Jobs at Schools</h2>
      <div className="cate-group section23 ">
        <div className="widget__text-block">
          <div className="faculty-container grid-cols-2 grid md:grid-cols-4 gap-8 py-2 px-7">
            <div className="column">
              <ul className="">
                <li className="mb-1 mt-4">
                  <Link href="/nsw/" className="text-[#e74b7f] font-bold">
                    NSW
                  </Link>
                </li>
                <ul className="innerUL">
                  <li className="mb-2 ">
                    <Link href="/employers/sceggs-darlinghurst/15840/">
                      SCEGGS Darlinghurst
                    </Link>
                  </li>
                  <li className="mb-2 ">
                    <Link href="/employers/ascham-School/11527/">
                      Ascham School
                    </Link>
                  </li>
                  <li className="mb-2 ">
                    <Link href="/employers/al-noori-muslim-school/15858/">
                      AL Noori Muslim school
                    </Link>
                  </li>
                  <li className="mb-2 ">
                    <Link href="/employers/sydney-grammar-school/11556/">
                      Sydney Grammar school
                    </Link>
                  </li>
                  <li className="mb-2 ">
                    <Link href="/employers/presbyterian-ladies-college-sydney/15839/">
                      Presbyterian Ladies College Sydney
                    </Link>
                  </li>
                  <li className="mb-2 ">
                    <Link href="/employers/meriden-school/15835/">
                      Meriden school
                    </Link>
                  </li>
                  <li className="mb-2 ">
                    <Link href="/employers/brisbane-girls-grammar-school/15844/">
                      Brisbane girls grammar-school
                    </Link>
                  </li>
                  <li className="mb-2 ">
                    <Link href="/employers/redeemer-baptist-school/15838/">
                      Redeemer Baptist school
                    </Link>
                  </li>
                  <li className="mb-2 ">
                    <Link href="employers/red-bend-catholic-college/1040/">
                      Red Bend Catholic college
                    </Link>
                  </li>
                  <li className="mb-2 ">
                    <Link href="/employers/brisbane-grammar-school/15837">
                      Brisbane Grammar school
                    </Link>
                  </li>
                  <li className="mb-2 ">
                    <Link href="/employers/queenwood/15859">Queenwood</Link>
                  </li>
                </ul>
              </ul>
            </div>
            <div className="column">
              <ul className="">
                <li className="mb-1 mt-4">
                  <Link href="/victoria/" className="text-[#e74b7f] font-bold">
                    Victoria
                  </Link>
                </li>
                <ul className="innerUL">
                  <li className="mb-2 ">
                    <Link href="/employers/victoria-state-government-education-and-training/19/">
                      Victoria State Government Education and Training
                    </Link>
                  </li>
                  <li className="mb-2 ">
                    <Link href="/employers/presbyterian-ladies-college/15842/">
                      Presbyterian Ladies College
                    </Link>
                  </li>
                  <li className="mb-2 ">
                    <Link href="/employers/st-aloysius-college/15841/">
                      St Aloysius College
                    </Link>
                  </li>
                  <li className="mb-2 ">
                    <Link href="/employers/ballarat-clarendon-college/15836/">
                      Ballarat Clarendon College
                    </Link>
                  </li>
                  <li className="mb-2 ">
                    <Link href="/employers/korowa-anglican-girls-school/15845/">
                      Korowa Anglican girls school
                    </Link>
                  </li>
                  <li className="mb-2 ">
                    <Link href="/employers/camberwell-grammar-school/15846/">
                      Camberwell Grammar school
                    </Link>
                  </li>
                  <li className="mb-2 ">
                    <Link href="/employers/st-andrews-christian-college/15856/">
                      St Andrews Christian College
                    </Link>
                  </li>
                  <li className="mb-2 ">
                    <Link href="/employers/haileybury-college/15855/">
                      Haileybury College
                    </Link>
                  </li>
                  <li className="mb-2 ">
                    <Link href="/employers/christ-church-grammar-school/15860/">
                      Christ Church Grammar school
                    </Link>
                  </li>
                  <li className="mb-2 ">
                    <Link href="/employers/huntingtower-school/15834/">
                      Huntingtower school
                    </Link>
                  </li>
                  <li className="mb-2 ">
                    <Link href="/employers/belmont-christian-college/15898/">
                      Belmont Christian College
                    </Link>
                  </li>
                  <li className="mb-2 ">
                    <Link href="/employers/lighthouse-christian-college-cranbourne/15843/">
                      Lighthouse Christian College Cranbourne
                    </Link>
                  </li>
                  <li className="mb-2 ">
                    <Link href="/employers/">Fintona girls school</Link>
                  </li>
                </ul>
              </ul>
            </div>
            <div className="column">
              <ul className="">
                <li className="mb-1 mt-4">
                  <Link
                    href="/queensland/"
                    className="text-[#e74b7f] font-bold"
                  >
                    Queensland
                  </Link>
                </li>
                <ul className="innerUL">
                  <li className="mb-2 ">
                    <Link href="/employers/queensland-government-department-of-education/18/">
                      Queensland - Government - Department of Education
                    </Link>
                  </li>
                  <li className="mb-2 ">
                    <Link href="/employers/catholic-education-services-diocese-of-cairns/60/">
                      Catholic - Education services Diocese of Cairns
                    </Link>
                  </li>
                  <li className="mb-2 ">
                    <Link href="/employers/townsville-catholic-education-office/35/">
                      Townsville Catholic Education Office
                    </Link>
                  </li>
                  <li className="mb-2 ">
                    <Link href="/employers/somerville-house/15847/">
                      Somerville House
                    </Link>
                  </li>
                </ul>
                <li className="mb-1 mt-4">
                  <Link href="/" className="text-[#e74b7f] font-bold">
                    ACT
                  </Link>
                </li>
                <ul className="innerUL">
                  <li className="mb-2 ">
                    <Link href="/employers/act-government-department-of-education/20/">
                      ACT Government - Department of Education
                    </Link>
                  </li>
                  <li className="mb-2 ">
                    <Link href="/employers/orana-steiner-school/14803/">
                      Orana Steiner school
                    </Link>
                  </li>
                </ul>
              </ul>
            </div>
            <div className="column">
              <ul className="">
                <li className="mb-1 mt-4">
                  <Link
                    href="/western-australia/"
                    className="text-[#e74b7f] font-bold"
                  >
                    Western Australia
                  </Link>
                </li>
                <ul className="innerUL">
                  <li className="mb-2 ">
                    <Link href="/employers/international-school-of-western-australia/15848/">
                      International School of Western Australia
                    </Link>
                  </li>

                  <li className="mb-2 ">
                    <Link href="/employers/st-hildas-anglican-school-for-girls/11459/">
                      St Hildas Anglican school for girls
                    </Link>
                  </li>
                </ul>
                <li className="mb-1 mt-4">
                  <Link
                    href="/south-australia/"
                    className="text-[#e74b7f] font-bold"
                  >
                    South Australia
                  </Link>
                </li>
                <ul className="innerUL">
                  <li className="mb-2 ">
                    <Link href="/employers/government-of-south-australia-department-for-education/17/">
                      Government of South Australia Department for Education
                    </Link>
                  </li>
                </ul>
                <li className="mb-1 mt-4">
                  <Link
                    href="/northern-territory/"
                    className="text-[#e74b7f] font-bold"
                  >
                    Northern Territory
                  </Link>
                </li>
                <ul className="innerUL">
                  <li className="mb-2 ">
                    <Link href="/employers/northern-territory-department-of-education/21/">
                      Northern Territory Department of Education
                    </Link>
                  </li>
                </ul>
                <ul className="innerUL">
                  <li className="mb-2 ">
                    <Link href="/employers/marrara-christian-college/16073/">
                      Marrara Christian College
                    </Link>
                  </li>
                </ul>
                <ul className="innerUL">
                  <li className="mb-2 ">
                    <Link href="/employers/araluen-christian-college/12146/">
                      Araluen Christian College
                    </Link>
                  </li>
                </ul>
                <li className="mb-1 mt-4">
                  <Link href="/tasmania/" className="text-[#e74b7f] font-bold">
                    Tasmania
                  </Link>
                </li>
                <ul className="innerUL">
                  <li className="mb-2 ">
                    <Link href="/employers/tasmanian-government-education/12/">
                      Tasmanian Government Education
                    </Link>
                  </li>
                </ul>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="card-actions flex mt-4 mx-auto">
        <Link href="/academic-talent-pool" className="btn btn-aj">
          Join our Talent Pool
        </Link>
      </div> */}
    </main>
  );
}
