import type { Metadata } from 'next';
import JobSearchBoxHome from '@/components/JobSearchBoxHome';
import Top7JobTypes from '@/components/Top7JobTypes';
import JobLocationTypeLinks from '@/components/links/JobLocationTypeLinks';
import LinkList from '@/components/LinkList';
import LinkListWithHeadings from '@/components/LinkListWithHeadings';
// import { useState, useEffect } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import Logo from '@/components/brand/Logo';
// import JobCategoryAndLocationLinks from '@/components/links/JobCategoryAndLocationLinks';
// import AusUniLogos from '@/components/AusUniLogos';
// import AmericaUniLogos from '@/components/AmericaUniLogos';
// import { getContentRegion } from '@/actions/getContentRegion';

export const metadata: Metadata = {
  // title: 'About', //Option 1 replaces the %s in layout.tsx
  title: {
    absolute: '  Teaching Jobs: All School Jobs in Australia.', //Option 2 overrides the title in layout.tsx
  },
  description:
    'Looking for Teaching Jobs in Australia? Visit our website at Teaching Jobs, to see our range of teaching jobs available near Melbourne, Sydney, Perth and all major cities.',
  keywords:
    'Teaching Jobs Education Jobs School Jobs Teacher Principals Early Childhood Educator',
};

const jobTypes = [
  { name: `Graduate Teacher`, href: `/graduate-teacher-jobs` },
  { name: `Teachers Aide`, href: `/teacher-aide-jobs` },
  { name: `Library Services`, href: `/library-services-jobs` },
  { name: `Information Management`, href: `/information-management-jobs` },
  { name: `Schools Management`, href: `/schools-management-jobs` },
  { name: `Vocational Management`, href: `/vocational-management-jobs` },
  { name: `Principal`, href: `/principal-jobs` },
  { name: `Student Services`, href: `/student-services-jobs` },
  { name: `Early Childhood`, href: `/early-childhood-jobs` },
  { name: `Primary`, href: `/primary-jobs` },
  { name: `Secondary`, href: `/secondary-jobs` },
  { name: `Tertiary`, href: `/tertiary-jobs` },
  { name: `Vocational`, href: `/vocational-jobs` },
  { name: `Special Needs Aide`, href: `/special-needs-aide-jobs` },
  { name: `Tutoring`, href: `/tutoring-jobs` },
  { name: `Training Assessment`, href: `/training-assessment-jobs` },
  { name: `Relief Teaching`, href: `/relief-teaching-jobs` },
  { name: `Administrative`, href: `/administrative-jobs` },
];

const jobsByState = [
  { name: `NSW`, href: `/nsw` },
  { name: `Northern Territory`, href: `/northern-territory` },
  { name: `Queensland`, href: `/queensland` },
  { name: `South Australia`, href: `/south-australia` },
  { name: `Tasmania`, href: `/tasmania` },
  { name: `Victoria`, href: `/victoria` },
  { name: `Western Australia`, href: `/western-australia` },
];

const schoolTypes = [
  { name: `Public`, href: `/public-school-jobs` },
  { name: `Private`, href: `/private-school-jobs` },
  { name: `Catholic`, href: `/catholic-school-jobs` },
  { name: `Independent`, href: `/independent-public-school-jobs` },
  { name: `Christian`, href: `/christian-school-jobs` },
  { name: `Steiner`, href: `/steiner-school-jobs` },
  { name: `Montessori`, href: `/montessori-school-jobs` },
  // { name: `Independent`, href: `/independent-public-school-jobs` },
];

const jobsBySchoolAndState = [
  {
    name: `NSW`,
    href: `/nsw`,
    employers: [
      {
        name: `SCEGGS Darlinghurst`,
        href: `/employers/sceggs-darlinghurst/15840`,
      },
      { name: `Ascham School`, href: `/employers/ascham-School/11527` },
      {
        name: `AL Noori Muslim school`,
        href: `/employers/al-noori-muslim-school/15858`,
      },
      {
        name: `Sydney Grammar school`,
        href: `/employers/sydney-grammar-school/11556`,
      },
      {
        name: `Presbyterian Ladies College Sydney`,
        href: `/employers/presbyterian-ladies-college-sydney/15839`,
      },
      { name: `Meriden school`, href: `/employers/meriden-school/15835` },
      {
        name: `Brisbane girls grammar-school`,
        href: `/employers/brisbane-girls-grammar-school/15844`,
      },
      {
        name: `Redeemer Baptist school`,
        href: `/employers/redeemer-baptist-school/15838`,
      },
      {
        name: `Red Bend Catholic college`,
        href: `/employers/red-bend-catholic-college/1040`,
      },
      {
        name: `Brisbane Grammar school`,
        href: `/employers/brisbane-grammar-school/15837`,
      },
      { name: `Queenwood`, href: `/employers/queenwood/15859` },
    ],
  },
  {
    name: `Victoria`,
    href: `/victoria`,
    employers: [
      {
        name: `Victoria State Government Education and Training`,
        href: `/employers/victoria-state-government-education-and-training/19`,
      },
      {
        name: `Presbyterian Ladies College`,
        href: `/employers/presbyterian-ladies-college/15842`,
      },
      {
        name: `St Aloysius College`,
        href: `/employers/st-aloysius-college/15841`,
      },
      {
        name: `Ballarat Clarendon College`,
        href: `/employers/ballarat-clarendon-college/15836`,
      },
      {
        name: `Korowa Anglican girls school`,
        href: `/employers/korowa-anglican-girls-school/15845`,
      },
      {
        name: `Camberwell Grammar school`,
        href: `/employers/camberwell-grammar-school/15846`,
      },
      {
        name: `St Andrews Christian College`,
        href: `/employers/st-andrews-christian-college/15856`,
      },
      {
        name: `Haileybury College`,
        href: `/employers/haileybury-college/15855`,
      },
      {
        name: `Christ Church Grammar school`,
        href: `/employers/christ-church-grammar-school/15860`,
      },
      {
        name: `Huntingtower school`,
        href: `/employers/huntingtower-school/15834`,
      },
      {
        name: `Belmont Christian College`,
        href: `/employers/belmont-christian-college/15898`,
      },
      {
        name: `Lighthouse Christian College Cranbourne`,
        href: `/employers/lighthouse-christian-college-cranbourne/15843`,
      },
      { name: `Fintona girls school`, href: `/employers/` },
    ],
  },
  {
    name: `Queensland`,
    href: `/queensland`,
    employers: [
      {
        name: `Queensland - Government - Department of Education`,
        href: `/employers/queensland-government-department-of-education/18`,
      },
      {
        name: `Catholic - Education services Diocese of Cairns`,
        href: `/employers/catholic-education-services-diocese-of-cairns/60`,
      },
      {
        name: `Townsville Catholic Education Office`,
        href: `/employers/townsville-catholic-education-office/35`,
      },
      { name: `Somerville House`, href: `/employers/somerville-house/15847` },
    ],
  },
  {
    name: `ACT`,
    href: `/act`,
    employers: [
      {
        name: `ACT Government - Department of Education`,
        href: `/employers/act-government-department-of-education/20`,
      },
      {
        name: `Orana Steiner school`,
        href: `/employers/orana-steiner-school/14803`,
      },
    ],
  },
  {
    name: `Western Australia`,
    href: `/western-australia`,
    employers: [
      {
        name: `International School of Western Australia`,
        href: `/employers/international-school-of-western-australia/15848`,
      },
      {
        name: `St Hildas Anglican school for girls`,
        href: `/employers/st-hildas-anglican-school-for-girls/11459`,
      },
    ],
  },
  {
    name: `South Australia`,
    href: `/south-australia`,
    employers: [
      {
        name: `Government of South Australia Department for Education`,
        href: `/employers/government-of-south-australia-department-for-education/17`,
      },
    ],
  },
  {
    name: `Northern Territory`,
    href: `/northern-territory`,
    employers: [
      {
        name: `Northern Territory Department of Education`,
        href: `/employers/northern-territory-department-of-education/21`,
      },
      {
        name: `Marrara Christian College`,
        href: `/employers/marrara-christian-college/16073`,
      },
      {
        name: `Araluen Christian College`,
        href: `/employers/araluen-christian-college/12146`,
      },
    ],
  },
  {
    name: `Tasmania`,
    href: `/tasmania`,
    employers: [
      {
        name: `Tasmanian Government Education`,
        href: `/employers/tasmanian-government-education/12`,
      },
    ],
  },
];
export default async function myPage() {
  // const contentRegion = await getContentRegion();

  //console.log(process.env.NODE_ENV, process.env.REACT_APP_ENV);
  // let showJobElephant = true;
  // showJobElephant = false;

  return (
    <main className="content-grid">
      <div className="full-width md:h-[400px] h-[229px] bg-gradient-to-br from-pink-600 via-pink-400 to-pink-700">
        <Top7JobTypes />
      </div>
      <div className="flex flex-col items-center justify-center ">
        <div className="w-full md:w-3/6  flex flex-col items-top mt-[6rem]">
          <JobSearchBoxHome />
        </div>
      </div>
      <ul className=" mb-4 text-center justify-center flex gap-4  mt-8 h-auto w-full text-transform: capitalize text-gray-500 flex-wrap">
        <li className="pb-2 flex hover:underline ">
          <a href="/melbourne">melbourne</a>
        </li>
        <li className="pb-2 flex  hover:underline">
          <a href="/sydney">sydney</a>
        </li>
        <li className="pb-2 flex md:break hover:underline">
          <a href="/brisbane">brisbane</a>
        </li>
        <li className="pb-2 flex md:break hover:underline">
          <a href="/gold-coast">gold coast</a>
        </li>

        <li className="pb-2 flex  hover:underline">
          <a href="/canberra">canberra</a>
        </li>
        <li className="pb-2 flex md:break hover:underline">
          <a href="/perth">perth</a>
        </li>
        <li className="pb-2 flex md:break hover:underline">
          <a href="/adelaide">adelaide</a>
        </li>
        <li className="pb-2 flex md:break hover:underline">
          <a href="/darwin">darwin</a>
        </li>
      </ul>
      <JobLocationTypeLinks
        positionLinks={[
          { name: 'Science', href: '/science-teacher-jobs' },
          { name: 'Maths', href: '/maths-teacher-jobs' },
          { name: 'English', href: '/english-teacher-jobs' },
          { name: 'Art', href: '/art-teacher-jobs' },
          { name: 'Music', href: '/music-teacher-jobs' },
          { name: 'History', href: '/history-teacher-jobs' },
          { name: 'Physical Education', href: '/pe-teacher-jobs' },
        ]}
      />
      <div
        id="section"
        className="bg-slate-200 full-width py-12 mb-16 mt-8 md:mt-12"
      >
        <div className="md:hero-content flex flex-col lg:flex-row mx-auto md:items-start py-12">
          <h1 className="text-2xl font-normal sm:text-right text-gray-400 m-0 pb-8  md:px-0">
            <span className="md:text-6xl font-bold text-gray-500 pb-4 ">
              Teaching Jobs Australia:
              <br />
            </span>{' '}
            All School and Teaching Positions{' '}
          </h1>

          <div>
            <p className="md:px-7 mb-2 mt-1 text-gray-600">
              As Australia’s no 1 teaching job board, we curate the most
              comprehensive job listings for school and education jobs. Whether
              you are a passionate teacher, principal, school administrator, or
              early childhood educator, you can find your ideal job
              opportunities here at TeachingJobs. Find your next teaching
              position now and be a catalyst for the growth and development of
              future generations.
            </p>
            {/* <p className="md:px-7 text-[#334680] font-bold">
              Early Childhood Jobs | Primary School Jobs | Secondary School Jobs
            </p> */}
          </div>
        </div>
      </div>

      <LinkList title="Choose Job Type" items={jobTypes} />

      <LinkList title="Find Teaching Jobs by State" items={jobsByState} />

      <LinkList title="Choose School Type" items={schoolTypes} />

      <LinkListWithHeadings
        title="Top Teaching Jobs by School"
        items={jobsBySchoolAndState}
      />
    </main>
  );
}
