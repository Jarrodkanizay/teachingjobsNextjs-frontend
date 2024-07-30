import type { Metadata } from 'next';
import Link from 'next/link';
import category from '@/data/category.json';
import position from '@/data/position';
import hr from '@/data/hr.json';
import research from '@/data/research.json';
import lecturer from '@/data/lecturer.json';
import industry from '@/data/industry.json';
import executive from '@/data/executive.json';
import student from '@/data/student.json';
import admin from '@/data/admin.json';
import professor from '@/data/professor.json';
import { regionData as asiaPositions } from '@/data/asiaPositions';
import { regionData as africaPositions } from '@/data/africaPositions';
import { regionData as canadaPositions } from '@/data/canadaPositions';
import { regionData as europePositions } from '@/data/europePositions';
import { regionData as indiaPositions } from '@/data/indiaPositions';
import { regionData as middleeastPositions } from '@/data/middleeastPositions';
import { regionData as newzealandPositions } from '@/data/newzealandPositions';
import { regionData as southamericaPositions } from '@/data/southamericaPositions';
import { regionData as ukPositions } from '@/data/ukPositions';
import USA from '@/components/topUnis/USA';

export const metadata: Metadata = {
  // title: 'About', //Option 1 replaces the %s in layout.tsx
  title: {
    absolute: '  Sitemap Academic Jobs', //Option 2 overrides the title in layout.tsx
  },
  description:
    'Discover academic job board sitemap committed to equity and accessibility, with thousands of jobs to explore ',
  keywords: 'Sitemap Academic Jobs, AcademicJobs Sitemap',
};
export default function myPage() {
  return (
    <>
      <div className="min-h-screen content-grid">
        <div className="w-full h-full text-2xl pd-1 space-y-6">
          <div className="blurb text-left py-8 content-gridtext-xl">
            <h1 className="">TeachingJobs Sitemap</h1>
            <div className="newLine mb-4">
              <p className="font-semibold"></p>
              <p className="font-semibold"></p>
            </div>
            <div className="newLine">
              <p className="px-7">
                The sitemap of Teachings Job provides an overview of the pages
                and links on the website. Whether you are a job seeker or an
                employer, you can find everything.
              </p>
              <p className=""></p>
            </div>
          </div>
          <div className=" mt-4 pb-8">
            <ul className="faculty-container flex  gap-4 items-center justify-center text-[#e74b7f] ">
              <li className="mb-2 hover:underline">
                <a href="/jobs/online/"> Online </a>
              </li>
              <li className="mb-2 hover:underline">
                <a href="/jobs/remote/"> Remote</a>
              </li>
              <li className="mb-2 hover:underline">
                <a href="/jobs/full-time/">Full-Time</a>
              </li>
              <li className="mb-2 hover:underline">
                <a href="/jobs/part-time/"> Part-Time</a>
              </li>
              <li className="mb-2 hover:underline">
                <a href="/jobs/casual/"> Casual</a>
              </li>
            </ul>
          </div>
          <div className=" pt-12">
            <div className="blurb text-left pt-12 ">
              <h1 className=" font-bold text-lg md:text-3xl py-4 px-6 bg-[#e74b7f] text-white rounded-full  shadow-xl border-4">
                # 1 TEACHING JOBS SITE
              </h1>
              <div className="newLine mb-4">
                <p className="font-semibold"></p>
                <p className="font-semibold"></p>
              </div>
              <div className="newLine">
                <p className=" px-7 text-[#e74b7f] text-2xl font-bold">
                  Find all Australian Teaching Career opportunities here
                </p>
                <p className=" px-7 text-[#334680]  text-xl pt-4">
                  Kindergarten Jobs | Primary School Jobs | Secondary School
                  Jobs
                </p>
                <p className=" px-7"></p>
              </div>
            </div>
            <div className="bg-white flex flex-col  ">
              <h2 className="text-1xl font-bold py-1 px-7 border-2 border-[#text-blue-900] text-[#text-blue-900] rounded-3xl shadow-md  mt-20 ">
                Choose Teaching Job Types
              </h2>
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
                  <a href="/relief-teaching-jobs/">relief teaching jobs</a>
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
            <div className="bg-white flex flex-col  ">
              <h2 className="text-1xl font-bold py-1 px-7 border-2 border-[#text-blue-900] text-[#text-blue-900] rounded-3xl shadow-md  mt-20 ">
                Choose Teaching Jobs by City
              </h2>
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
                  <a href="/darwin/">darwin</a>
                </li>
              </ul>
              <div className="newLine"></div>
            </div>
            <div className="bg-white flex flex-col  ">
              <h2 className="text-1xl font-bold py-1 px-7 border-2 border-[#text-blue-900] text-[#text-blue-900] rounded-3xl shadow-md  mt-20 ">
                Choose Teaching Jobs by State
              </h2>
              <ul className=" mb-8 text-left columns-1 md:columns-4  md:gap-2 py-2 pl-8 h-auto w-full text-transform: capitalize">
                <li className="pb-2 flex  ">
                  <a href="/victoria/">victoria</a>
                </li>
                <li className="pb-2 flex  ">
                  <a href="/NSW/">NSW</a>
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
            <h2 className="text-1xl font-bold py-1 px-7 border-2 border-[#e74b7f] text-[#e74b7f] rounded-3xl mt-20 shadow-md">
              Top Teaching Jobs at Schools
            </h2>
            <div className="cate-group section23 ">
              <div className="widget__text-block">
                <div className="faculty-container grid-cols-2 grid md:grid-cols-4 gap-8 py-2 px-7">
                  <div className="column">
                    <ul className="">
                      <li className="mb-1 mt-4">
                        <a className="text-[#e74b7f] font-bold" href="/USA/">
                          NSW
                        </a>
                      </li>
                      <ul className="innerUL">
                        <li className="mb-2 ">
                          <a href="/employers/sceggs-darlinghurst/15840/">
                            SCEGGS Darlinghurst
                          </a>
                        </li>
                        <li className="mb-2 ">
                          <a href="/employers/ascham-School/11527/">
                            Ascham School
                          </a>
                        </li>
                        <li className="mb-2 ">
                          <a href="/employers/al-noori-muslim-school/15858/">
                            AL Noori Muslim school
                          </a>
                        </li>
                        <li className="mb-2 ">
                          <a href="/employers/sydney-grammar-school/11556/">
                            Sydney Grammar school
                          </a>
                        </li>
                        <li className="mb-2 ">
                          <a href="/employers/presbyterian-ladies-college-sydney/15839/">
                            Presbyterian Ladies College Sydney
                          </a>
                        </li>
                        <li className="mb-2 ">
                          <a href="/employers/meriden-school/15835/">
                            Meriden school
                          </a>
                        </li>
                        <li className="mb-2 ">
                          <a href="/employers/brisbane-girls-grammar-school/15844/">
                            Brisbane girls grammar-school
                          </a>
                        </li>
                        <li className="mb-2 ">
                          <a href="/employers/redeemer-baptist-school/15838/">
                            Redeemer Baptist school
                          </a>
                        </li>
                        <li className="mb-2 ">
                          <a href="/employers/red-bend-catholic-college/1040/">
                            Red Bend Catholic college
                          </a>
                        </li>
                        <li className="mb-2 ">
                          <a href="/employers/brisbane-grammar-school/15837">
                            Brisbane Grammar school
                          </a>
                        </li>
                        <li className="mb-2 ">
                          <a href="/employers/queenwood/15859">Queenwood</a>
                        </li>
                      </ul>
                    </ul>
                  </div>
                  <div className="column">
                    <ul className="">
                      <li className="mb-1 mt-4">
                        <a
                          className="text-[#e74b7f] font-bold"
                          href="/Australia/"
                        >
                          Victoria
                        </a>
                      </li>
                      <ul className="innerUL">
                        <li className="mb-2 ">
                          <a href="/employers/victoria-state-government-education-and-training/19/">
                            Victoria State Government Education and Training
                          </a>
                        </li>
                        <li className="mb-2 ">
                          <a href="/employers/presbyterian-ladies-college/15842/">
                            Presbyterian Ladies College
                          </a>
                        </li>
                        <li className="mb-2 ">
                          <a href="/employers/st-aloysius-college/15841/">
                            St Aloysius College
                          </a>
                        </li>
                        <li className="mb-2 ">
                          <a href="/employers/ballarat-clarendon-college/15836/">
                            Ballarat Clarendon College
                          </a>
                        </li>
                        <li className="mb-2 ">
                          <a href="/employers/korowa-anglican-girls-school/15845/">
                            Korowa Anglican girls school
                          </a>
                        </li>
                        <li className="mb-2 ">
                          <a href="/employers/camberwell-grammar-school/15846/">
                            Camberwell Grammar school
                          </a>
                        </li>
                        <li className="mb-2 ">
                          <a href="/employers/st-andrews-christian-college/15856/">
                            St Andrews Christian College
                          </a>
                        </li>
                        <li className="mb-2 ">
                          <a href="/employers/haileybury-college/15855/">
                            Haileybury College
                          </a>
                        </li>
                        <li className="mb-2 ">
                          <a href="/employers/christ-church-grammar-school/15860/">
                            Christ Church Grammar school
                          </a>
                        </li>
                        <li className="mb-2 ">
                          <a href="/employers/huntingtower-school/15834/">
                            Huntingtower school
                          </a>
                        </li>
                        <li className="mb-2 ">
                          <a href="/employers/belmont-christian-college/15898/">
                            Belmont Christian College
                          </a>
                        </li>
                        <li className="mb-2 ">
                          <a href="/employers/lighthouse-christian-college-cranbourne/15843/">
                            Lighthouse Christian College Cranbourne
                          </a>
                        </li>
                        <li className="mb-2 ">
                          <a href="/employers/">Fintona girls school</a>
                        </li>
                      </ul>
                    </ul>
                  </div>
                  <div className="column">
                    <ul className="">
                      <li className="mb-1 mt-4">
                        <a className="text-[#e74b7f] font-bold" href="/UK/">
                          Queensland
                        </a>
                      </li>
                      <ul className="innerUL">
                        <li className="mb-2 ">
                          <a href="/employers/queensland-government-department-of-education/18/">
                            Queensland - Government - Department of Education
                          </a>
                        </li>
                        <li className="mb-2 ">
                          <a href="/employers/catholic-education-services-diocese-of-cairns/60/">
                            Catholic - Education services Diocese of Cairns
                          </a>
                        </li>
                        <li className="mb-2 ">
                          <a href="/employers/townsville-catholic-education-office/35/">
                            Townsville Catholic Education Office
                          </a>
                        </li>
                        <li className="mb-2 ">
                          <a href="/employers/somerville-house/15847/">
                            Somerville House
                          </a>
                        </li>
                      </ul>
                      <li className="mb-1 mt-4">
                        <a className="text-[#e74b7f] font-bold" href="/Europe/">
                          ACT
                        </a>
                      </li>
                      <ul className="innerUL">
                        <li className="mb-2 ">
                          <a href="/employers/act-government-department-of-education/20/">
                            ACT Government - Department of Education
                          </a>
                        </li>
                        <li className="mb-2 ">
                          <a href="/employers/orana-steiner-school/14803/">
                            Orana Steiner school
                          </a>
                        </li>
                      </ul>
                    </ul>
                  </div>
                  <div className="column">
                    <ul className="">
                      <li className="mb-1 mt-4">
                        <a className="text-[#e74b7f] font-bold" href="/Europe/">
                          Western Australia
                        </a>
                      </li>
                      <ul className="innerUL">
                        <li className="mb-2 ">
                          <a href="/employers/international-school-of-western-australia/15848/">
                            International School of Western Australia
                          </a>
                        </li>
                        <li className="mb-2 ">
                          <a href="/employers/st-hildas-anglican-school-for-girls/11459/">
                            St Hildas Anglican school for girls
                          </a>
                        </li>
                      </ul>
                      <li className="mb-1 mt-4">
                        <a className="text-[#e74b7f] font-bold" href="/Europe/">
                          South Australia
                        </a>
                      </li>
                      <ul className="innerUL">
                        <li className="mb-2 ">
                          <a href="/employers/government-of-south-australia-department-for-education/17/">
                            Government of South Australia Department for
                            Education
                          </a>
                        </li>
                      </ul>
                      <li className="mb-1 mt-4">
                        <a
                          className="text-[#e74b7f] font-bold"
                          href="/northern-territory/"
                        >
                          Northern Territory
                        </a>
                      </li>
                      <ul className="innerUL">
                        <li className="mb-2 ">
                          <a href="/employers/northern-territory-department-of-education/21/">
                            Northern Territory Department of Education
                          </a>
                        </li>
                      </ul>
                      <li className="mb-1 mt-4">
                        <a className="text-[#e74b7f] font-bold" href="/Europe/">
                          Tasmania
                        </a>
                      </li>
                      <ul className="innerUL">
                        <li className="mb-2 ">
                          <a href="/employers/tasmanian-government-education/12/">
                            Tasmanian Government Education
                          </a>
                        </li>
                      </ul>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
