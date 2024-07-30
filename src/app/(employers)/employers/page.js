// import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import HeroBanner from '@/components/HeroBanner';
import USA from '@/components/topUnis/USA';
import Australia from '@/components/topUnis/Australia';
import Africa from '@/components/topUnis/Africa';
import Asia from '@/components/topUnis/Asia';
import Canada from '@/components/topUnis/Canada';
import UK from '@/components/topUnis/UK';
import SA from '@/components/topUnis/SA';
import NZ from '@/components/topUnis/NZ';
import ME from '@/components/topUnis/ME';
import India from '@/components/topUnis/India';
import Europe from '@/components/topUnis/Europe';

export const metadata = {
  // title: 'About', //Option 1 replaces the %s in layout.tsx
  title: {
    absolute: 'Find Teaching Employers', //Option 2 overrides the title in layout.tsx
  },
  description:
    'Browse through our comprehensive list of universities from around the world and find the best one for you. Whether you want to study in Australia, Canada, UK, USA, or anywhere else, we have the information you need to make an informed decision.',
  keywords: 'Find Universities. Find employers, Find institutions',
};

export default function myPage() {
  return (
    <main className=" mx-auto">
      {/* Hero banner */}
      <HeroBanner
        bgColorClass="bg-slate-200"
        h1="Find the best  Schools to work for here..."
        h2="Seek The Best Teaching Jobs Here"
        para1="Search for Teaching career opportunities by Schools on the number 1 Teaching job board. Discover Teaching positions at the top schools with current openings through our 'Top Schools' page."
        src="/employers/top-universities-world-wide.jpg"
        alt="People immersed in Teaching blogs at our vibrant Teaching Hub"
        // btnPrimaryText="Join our Talent Pool"
        // btnPrimaryURL="/talent-pool"
        reorder={false}
        imgRight={false}
      />

<h2 className="underline-full mt-6 max-w-screen-xl mx-auto ">Top Schools to work for</h2>
      <div className="cate-group section23 ">
        <div className="widget__text-block">
          <div className="max-w-screen-xl mx-auto faculty-container grid-cols-2 grid md:grid-cols-4 gap-8 py-2 px-7">
            <div className="column">
              <ul className="">
                <li className="mb-1 mt-4">
                  <Link href="/USA/" className="text-[#e74b7f] font-bold">
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
                      Red Bend Catholic College
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
                  <Link href="/Australia/" className="text-[#e74b7f] font-bold">
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
                    <Link href="/employers/">
                      Fintona girls school
                    </Link>
                  </li>
                </ul>
              </ul>
            </div>
            <div className="column">
              <ul className="">
                <li className="mb-1 mt-4">
                  <Link href="/UK/" className="text-[#e74b7f] font-bold">
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
                  <Link href="/Europe/" className="text-[#e74b7f] font-bold">
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
                  <Link href="/Europe/" className="text-[#e74b7f] font-bold">
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
                  <Link href="/Europe/" className="text-[#e74b7f] font-bold">
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
                  <Link href="/northern-territory/" className="text-[#e74b7f] font-bold">
                    Nothern Territory
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
                  <Link href="/Europe/" className="text-[#e74b7f] font-bold">
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
    </main>
  );
}
