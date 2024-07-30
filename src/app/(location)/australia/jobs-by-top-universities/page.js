// import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import HeroBanner from '@/components/HeroBanner';
import Australia from '@/components/topUnis/Australia';

export const metadata = {
  // title: 'About', //Option 1 replaces the %s in layout.tsx
  title: {
    absolute: 'The Best Universities to Work for in Australia', //Option 2 overrides the title in layout.tsx
  },
  description:
    'Browse through our comprehensive list of universities from around the world and find the best one for you. Whether you want to study in Australia, Canada, UK, USA, or anywhere else, we have the information you need to make an informed decision.',
  keywords: 'Find Universities. Find employers, Find institutions',
};

const countryRegion = 'Australia';
function countryRegionPlural() {
  return countryRegion.toLowerCase().endsWith('s')
    ? `${countryRegion}'`
    : `${countryRegion}'s`;
}
export default function myPage() {
  return (
    <main>
      {/* Hero banner */}
      <section>
        <div className="hero max-h-fit bg-slate-200 py-8 mx-auto">
          <div className="container mx-auto">
            <div className="hero-content flex-col xl:flex-row gap-8 mx-auto max-w-full">
              <Image
                width={1280}
                height={380}
                src="/academic-job-postings/university-of-sydney.jpg"
                className="object-none h-60 w-96  rounded-xl shadow-2xl mb-8 lg:mb-0"
                alt="university of sydney"
              />
              <div>
                <h1 className="text-3xl font-bold text-aj">
                  Find the best Australian universities to work for here... Use
                  university rankings to search for jobs in higher education.
                </h1>

                <p className="py-1">
                  All uni jobs in Australia can be found through the No.1 job
                  board, Teaching Jobs. The 'find employers' page helps you
                  explore all academic careers and current job openings, at the
                  world’s top colleges and universities.
                </p>
                <p className="py-1">
                  Our employer rankings help you to find amazing academic
                  positions at the university of your choice. You can see
                  details about employers, like their mission, vision, values,
                  history, achievements, and culture.
                </p>
                <p className="py-1">
                  Use the Australian university rankings in your search for the
                  perfect academic job…
                </p>
                <div className="card-actions flex ">
                  <Link href="/academic-talent-pool" className="btn btn-aj">
                    Join our Talent Pool
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="md:flex bg-gray-800 shadow-xl rounded-2xl mb-4 max-w-screen-lg mx-2 md:auto mt-4 p-4 gap-8 md:mx-auto ">
        <Image
          className=" rounded-xl md:w-2/3  "
          width={880}
          height={380}
          alt=""
          src="https://academicjobs.s3.amazonaws.com/img/_misc/maxresdefault.png"
        />

        <div className="md:w-1/3">
          <div className="md:grid  flex gap-4 text-gray-200 mt-3">
            {/* Card 2 */}
            <div className="md:flex  ">
              <div className="icon-ai ">
                <p className="text-purple-500 font-bold px-2">✓</p>
              </div>

              <div className="items-center text-center">
                <p className="text-md font-bold  ">No. 1 Higher Ed Job Board</p>
              </div>
            </div>
            {/* Card 3 */}
            <div className="md:flex ">
              <div className="icon-ai ">
                <p className="text-purple-500 font-bold px-2">✓</p>
              </div>

              <div className=" items-center text-center ">
                <p className="text-md font-bold ">Best Educators Talent Pool</p>
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

            {/* <Link href="/industry/recruitment"  className="text-md font-bold underline text-sky-500 mb-4 ">
         See Industry Recruitment Information
           </Link> */}

            {/* End Cards */}
          </div>

          <Link
            href="/recruitment"
            className="btn  btn-aj ml-4 text-lg font-bold p-2 mt-4"
          >
            Post A Job
          </Link>
        </div>
      </div>

      {/* <div className="bg-gradient-to-b to-white from-orange-100 m-8 rounded-3xl  max-w-screen-xl mx-auto">
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 p-7 mt-4 mb-16">

                  <ul>
                    <li className='mt-4 mb-1 text-[#e74b7f] font-bold'>ACT</li>
                    <li><Link href="/employers/australian-national-university/3739/">Australian National
                      University</Link></li>
                    <li><Link href="/employers/university-of-canberra/3821/">University of Canberra</Link>
                    </li>
                    <li className='mt-4 mb-1 text-[#e74b7f] font-bold'>New South Wales</li>

                    <li><Link href="/employers/the-university-of-sydney/3171/">The
                      University of Sydney</Link></li>
                    <li><Link href="/employers/university-of-new-south-wales-unsw-/3738/">University of New
                      South Wales</Link></li>
                    <li><Link href="/employers/charles-sturt-university/3855/">Charles Sturt University</Link>
                    </li>
                    <li><Link href="/employers/australian-catholic-university/3853/" >Australian Catholic
                      University</Link></li>
                    <li><Link href="/employers/southern-cross-university/3862/">Southern Cross
                      University</Link></li>
                    <li><Link href="/employers/university-of-technology-sydney/3864/">University of
                      Technology, Sydney</Link></li>
                    <li><Link href="/employers/macquarie-university/3881/">Macquarie
                      University</Link>
                    </li>
                    <li><Link href="/employers/university-of-new-england/3209/">University of New England
                      England</Link></li>
                    <li><Link href="/employers/university-of-newcastle/3863/">University of Newcastle</Link>
                    </li>
                    <li><Link href="/employers/university-of-western-sydney/3865/">University of Western
                      Sydney</Link></li>
                    <li><Link href="/employers/university-of-wollongong/3866/">University of Wollongong</Link>
                    </li>
                  </ul>
                  <ul>
                    <li className='mt-4 mb-1 text-[#e74b7f] font-bold'>Victoria</li>
                    <li><Link href="/employers/university-of-melbourne/3170/
                                        ">The University of Melbourne</Link>
                    </li>
                    <li><Link href="/employers/monash-university/3182/
                                        ">Monash University</Link>
                    </li>
                    <li><Link href="/employers/victoria-university/3871/
                                    ">Victoria University</Link>
                    </li>
                    <li><Link href="/employers/university-of-divinity/3872/
                                    ">University of Divinity</Link>
                    </li>
                    <li><Link href="/employers/swimburne-university-of-technology/10541/
                                    ">Swinburne University of Technology</Link>
                    </li>
                    <li><Link href="/employers/rmit-university/3869/
                                    ">RMIT University</Link>
                    </li>
                    <li><Link href="/employers/la-trobe-university/3868/
                                    ">La Trobe University</Link>
                    </li>
                    <li><Link href="/employers/deakin-university/3856/
                                    ">Deakin University</Link>
                    </li>
                    <li><Link href="/employers/federation-university/3787/
                                    ">Federation University Australia</Link></li>
                    <li className='mt-4 mb-1 text-[#e74b7f] font-bold'>Tasmania</li>
                    <li><Link href="/employers/university-of-tasmania/3867/
                                    ">The University of Tasmania</Link>
                    </li>
                  </ul>
                  <ul>
                    <li className='mt-4 mb-1 text-[#e74b7f] font-bold'>Queensland</li>
                   
                    <li><Link href="/employers/university-of-queensland/3172/">The
                      University of Queensland</Link></li>
                    <li><Link href="/employers/cquniversity/3854/">CQUniversity</Link>
                    </li>

                    <li><Link href="/employers/griffith-university/3860/">Griffith
                      University</Link>
                    </li>
                    <li><Link href="/employers/james-cook-university/3857/">James
                      Cook University</Link>
                    </li>
                    <li><Link href="/employers/university-of-southern-queensland/3861/">University of
                      Southern Queensland</Link>
                    </li>
                    <li><Link href="/employers/university-of-sunshine-coast/3859/">University of Sunshine
                      Coast</Link></li>
                      <li className='text-amber-400 font-bold'><Link href="/employers/bond-university/3785/
                                    ">Bond University</Link></li>
                    <li className='text-[#003463] font-bold' ><Link href="/">Queensland
                      University of Technology</Link>
                    </li>
                   
                    <li className='mt-4 mb-1 '><Link href="/find-jobs/northern-territory/" className='text-[#e74b7f] font-bold'>Northern
                      Territory</Link></li>
                    <li><Link href="/employers/charles-darwin-university/3880/">Charles Darwin
                      University</Link>
                    </li>
                  </ul>
                  <ul>
                    <li className='mt-4 mb-1 text-[#e74b7f] font-bold'>South
                      Australia</li>
                    <li><Link href="/employers/the-university-of-adelaide/3737/">The
                      University of Adelaide</Link>
                    </li>
                    <li><Link href="/employers/carnegie-mellon-university/3146/">Carnegie Mellon
                      University</Link> </li>
                    <li><Link href="/employers/torrens-university-australia/3875/">Torrens University
                      Australia</Link></li>
                    <li><Link href="/employers/university-of-south-australia/3874/">University of South
                      Australia</Link></li>
                    <li><Link href="/employers/flinders-university/3873/">Flinders
                      University</Link>
                    </li>
                    <li className='mt-4 mb-1 text-[#e74b7f] font-bold'>Western
                      Australia</li>
                    <li><Link href="/employers/university-of-western-australia/3173/">The University of
                      Western Australia</Link></li>
                    <li><Link href="/employers/university-of-notre-dame/3879/">University of Notre Dame</Link>
                    </li>
                    <li><Link href="/employers/murdoch-university/3878/">Murdoch
                      University</Link>
                    </li>
                    <li><Link href="/employers/edith-cowan-university/3877/">Edith
                      Cowan University</Link>
                    </li>
                    <li><Link href="/employers/curtin-university/3876/">Curtin
                      University</Link>
                    </li>
                  </ul>
                </div>
              </div> */}
      <div className="content-grid">
        <Australia id="section1" />
      </div>
      <section>
        <h3 className="container mx-auto text-center py-8 px-4 items-end">
          {' '}
          <Link className="border rounded-3xl  p-4" href="/employers/">
            View All
          </Link>
        </h3>
      </section>
      {/* Contact us CTA */}
      <section className="container mx-auto px-4 mt-12"></section>

      <section>
        <h3 className="container mx-auto text-center py-8 px-4 items-end">
          If you're interested in a great experience while saving time & money…{' '}
          <Link className="btn btn-aj" href="https://postmyjob.online/">
            Post a Job Today
          </Link>
        </h3>
      </section>
    </main>
  );
}
