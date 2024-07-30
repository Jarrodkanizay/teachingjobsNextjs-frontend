// import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import HeroBanner from '@/components/HeroBanner';
import UK from '@/components/topUnis/UK';

export const metadata = {
  // title: 'About', //Option 1 replaces the %s in layout.tsx
  title: {
    absolute: 'The Best Universities to work for in the UK', //Option 2 overrides the title in layout.tsx
  },
  description:
    'Browse through our comprehensive list of universities from around the world and find the best one for you. Whether you want to study in Australia, Canada, UK, USA, or anywhere else, we have the information you need to make an informed decision.',
  keywords: 'Find Universities. Find employers, Find institutions',
};

const countryRegion = 'United Kingdom';
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
                src="/academic-job-postings/top-universities-worldwide.jpg"
                width={1280}
                height={380}
                className="object-none h-60 w-96  rounded-xl shadow-2xl mb-8 lg:mb-0"
                alt="UK Top Academic Employers"
              />
              <div>
                <h1 className="text-3xl font-bold text-aj">
                  Find the best UK universities to work for here... Use
                  university rankings to search for jobs in higher education.
                </h1>

                <p className="py-1">
                  All academic positions in the UK can be found through the No.1
                  job board, Teaching Jobs. The 'find employers' page helps you
                  explore all academic careers and current job openings, at the
                  world’s top colleges and universities.
                </p>
                <p className="py-1">
                  Our employer rankings help you to find amazing academic jobs
                  at the university of your choice. You can see details about
                  employers, like their mission, vision, values, history,
                  achievements, and culture.
                </p>
                <p className="py-1">
                  Use the UK university rankings in your search for the perfect
                  academic position…
                </p>
                <div className="card-actions flex ">
                  <Link href="/academic-talent-pool" className="btn btn-aj">
                    Join our Talent Pool
                  </Link>
                  <Link href="https://postmyjob.online/" className="btn btn-aj">
                    Create Institutional Profile
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*    
    <div className="bg-gradient-to-b to-white from-orange-100 m-8 mb-12 rounded-3xl  max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 p-7 ">
          <ul>
            <li className='mb-1 mt-4 text-[#e74b7f] font-bold'>California</li>
            <li><Link href="/employers/stanford-university/3101/">Stanford University</Link></li>
            <li><Link href="/employers/california-institute/4133/">California Institute
              of Technology</Link></li>
            <li><Link href="/employers/university-of-california-san-francisco/3683/">University
              of California - San Francisco</Link></li>
            <li><Link href="/employers/university-of-southern-california/3672/">University
              of Southern California</Link></li>
            <li><Link href="/employers/university-of-california-berkeley/3105/">University
              of California - Berkeley</Link></li>
            <li><Link href="/employers/university-of-california-los-angeles/3136/">University
              of California - Los Angeles</Link></li>
            <li><Link href="/employers/university-of-california-san-diego/3149/">University
              of California - San Diego</Link></li>
            <li><Link href="/employers/university-of-california-davis/3498/">University
              of California - Davis</Link></li>
            <li><Link href="/employers/university-of-california-irvine/3689/">University
              of California - Irvine</Link></li>
            <li><Link href="/employers/university-of-california-santa-barbara/5407/">University
              of California - Santa Barbara</Link></li>
            <li><Link href="/employers/university-of-california-santa-cruz/3252/">University
              of California - Santa Cruz</Link></li>
            <li><Link href="/employers/university-of-california-riverside/3268/">University
              of California - Riverside</Link></li>
            <li><Link href="/employers/california-state-university-stanislaus/3414/">California
              State University Stanislaus</Link></li>
            <li><Link href="/employers/cal-poly-pomona/3728/">Cal Poly Pomona</Link></li>
            <li><Link href="/employers/california-state-university-monterey-bay/3313/">California
              State University, Monterey Bay</Link></li>
            <li><Link href="/employers/caltech/3128/">Caltech</Link>
            </li>
            <li><Link href="/employers/grossmont-cuyamaca-community-college-district/3858/">Grossmont–Cuyamaca
              Community College District</Link></li>
            <li><Link href="/employers/northeastern-university/3285/">Northeastern
              University</Link>
            </li>
            <li><Link href="/employers/loyola-marymount-university/3637/">Loyola
              Marymount University</Link></li>
            <li><Link href="/employers/palomar-college/3612/">Palomar College</Link></li>
            <li><Link href="/employers/san-diego-state-university/3693/">San Diego State
              University</Link></li>
            <li><Link href="/employers/saint-mary-s-college-of-california/3729/">Saint
              Mary's College of California</Link></li>
            <li><Link href="/employers/university-of-california-office-of-the-president/3731/">University
              of California Office of the President</Link></li>
          </ul>
          <ul>
            <li className='mb-1 mt-4 text-[#e74b7f] font-bold'>Massachusetts</li>
            <li><Link href="/employers/massachusetts-institute-of-technology/3103/">Massachusetts
              Institute of Technology</Link></li>
            <li><Link href="/employers/harvard-university/3100/">Harvard University</Link>
            </li>
            <li><Link href="/employers/boston-university/3190/">Boston University</Link>
            </li>
            <li><Link href="/employers/boston-college/3604/">Boston College</Link>
            </li>
            <li><Link href="/employers/tufts-university/3460/">Tufts University</Link>
            </li>
            <li><Link href="/employers/northeastern-university/3285/">Northeastern
              University</Link>
            </li>
            <li><Link href="/employers/brandeis-university/3617/">Brandeis
              University</Link></li>
            <li><Link href="/employers/anna-jaques-hospital/3235/">Anna Jaques
              Hospital</Link></li>
            <li><Link href="/employers/dana-farber-cancer-institute/3108/">Dana-Farber
              Cancer Institute</Link></li>
            <li className='mb-1 mt-4 text-[#e74b7f] font-bold'>Georgia</li>
            <li><Link href="/employers/emory-university/3372/">Emory University</Link>
            </li>
            <li><Link href="/employers/georgia-institute-of-technology/3154/">Georgia
              Institute of Technology</Link></li>
            <li className='mb-1 mt-4 text-[#e74b7f] font-bold'>Florida</li>
            <li><Link href="/employers/university-of-miami/5475/">University of
              Miami</Link>
            </li>
            <li><Link href="/employers/miami-university/3350/">Miami University</Link>
            </li>
            <li><Link href="/employers/university-of-florida/3394/">University of
              Florida</Link>
            </li>
            <li className='mb-1 mt-4 text-[#e74b7f] font-bold'>North
              Carolina</li>
            <li><Link href="/employers/duke-university/3139/">Duke University</Link>
            </li>
            <li><Link href="/employers/university-of-north-carolina/5503/">University of
              North Carolina</Link>
            </li>
            <li><Link href="/employers/the-university-of-north-carolina-at-chapel-hill/3679/">University
              of North Carolina at Chapel Hill</Link>
            </li>
            <li><Link href="/employers/university-of-north-carolina-wilmington/3253/">University
              of North Carolina Wilmington</Link>
            </li>
          </ul>
          <ul>
            <li className='mb-1 mt-4 text-[#e74b7f] font-bold'>New york</li>
            <li><Link href="/employers/columbia-university/3127/">Columbia University</Link></li>
            <li><Link href="/employers/new-york-university-nyu/3144/">New York
              University NYU</Link></li>
            <li><Link href="/employers/Cornell-University/3138/">Cornell University</Link>
            </li>
            <li><Link href="/employers/Brown-University/3308/">Brown University</Link>
            </li>
            <li><Link href="/employers/University-of-Rochester/5527/
                                                        ">University of Rochester</Link></li>
            <li><Link href="/employers/fordham-university/3685/">Fordham University</Link>
            </li>
            <li><Link href="/employers/hofstra-university/3545/">Hofstra University</Link>
            </li>
            <li><Link href="/employers/princeton-university/3104/">Princeton
              University</Link>
            </li>
            <li><Link href="/employers/rutgers-the-state-university-of-new-jersey/3255/">Rutgers,
              The State University of New Jersey</Link>
            </li>
            <li><Link href="/employers/st-john-s-university/3375/">St. John's
              University</Link>
            </li>
            <li><Link href="/employers/stony-brook-university/3456/">Stony Brook
              University</Link>
            </li>
            <li><Link href="/employers/university-at-buffalo/3609/
                                    "> University at Buffalo</Link></li>
            <li className='mb-1 mt-4 text-[#e74b7f] font-bold'>Pennsylvania</li>
            <li><Link href="/employers/university-of-pennsylvania/3131/
                                                        ">University of Pennsylvania</Link>
            </li>
            <li><Link href="/employers/carnegie-mellon-university/3146/
                                                        ">Carnegie Mellon University</Link>
            </li>
            <li><Link href="/employers/bucknell-university/3309/
                                        ">Bucknell University</Link>
            </li>
            <li><Link href="/employers/duquesne-university/3330/
                        ">Duquesne University</Link>
            </li>
            <li className='mb-1 mt-4 text-[#e74b7f] font-bold'>Illinois</li>
            <li><Link href="/employers/University-of-Chicago/3126/
                                                        ">University of Chicago</Link></li>
            <li><Link href="/employers/Northwestern-University/3143/
                                                        ">Northwestern University</Link></li>
            <li><Link href="/employers/northern-illinois-university/3415/
                                                            ">Northern Illinois University</Link></li>
            <li><Link href="/employers/university-of-illinois-at-urbana-champaign/3164/
                                                            ">University of Illinois at Urbana-Champaign</Link></li>
            <li className='mb-1 mt-4 text-[#e74b7f] font-bold'>Michigan</li>
            <li><Link href="/employers/university-of-michigan/3142/
                                                                ">University of Michigan</Link></li>
            <li><Link href="/employers/michigan-state-university/3654/
                                                                    ">Michigan State University</Link></li>
            <li><Link href="/employers/wayne-state-university/3499/
                                                                        "> Wayne State University</Link></li>
          </ul>
          <ul>
            <li className='mb-1 mt-4 text-[#e74b7f] font-bold'> All States</li>
            <li><Link href="/employers/yale-university/3125/">Yale University</Link>
            </li>
            <li><Link href="/employers/university-of-washington/3145/
                                        ">University of Washington</Link></li>
            <li><Link href="/employers/johns-hopkins-university/3130/
                                                        ">Johns Hopkins University</Link></li>
            <li><Link href="/employers/dartmouth-college/3327/">Dartmouth College</Link>
            </li>
            <li><Link href="/employers/rice-university/5067/">Rice University</Link>
            </li>
            <li><Link href="/employers/vanderbilt-university/5603/
                                                        ">Vanderbilt University</Link></li>
            <li><Link href="/employers/washington-university-in-st-louis/3655/
                                                        ">Washington University in St. Louis</Link></li>
            <li><Link href="/employers/university-of-notre-dame/3879/
                                                        ">University of Notre Dame</Link></li>
            <li><Link href="/employers/university-of-virginia/3484/
                                                        ">University of Virginia</Link></li>
            <li><Link href="/employers/georgetown-University/3522/
                                                        ">Georgetown University</Link></li>
            <li><Link href="/employers/university-of-texas-at-austin/3166/
                                                        ">University of Texas at Austin</Link></li>
            <li><Link href="/employers/university-of-wisconsin-madison/3404/
                                                        ">University of Wisconsin - Madison</Link></li>
            <li><Link href="/employers/university-of-mississippi-medical-center/3109/
                                                        ">University of Mississippi Medical Center</Link></li>
            <li><Link href="/employers/university-of-minnesota-twin-cities/3684/
                                                            ">University of Minnesota Twin Cities</Link></li>
            <li><Link href="/employers/the-ohio-state-university/3669/
                                                                "> The Ohio State University</Link></li>
            <li><Link href="/employers/university-of-cincinnati/3393/
                                                                    "> University of Cincinnati</Link></li>
            <li><Link href="/employers/university-of-tennessee-knoxville/3401/
                                                                    "> University of Tennessee, Knoxville</Link></li>
            <li><Link href="/employers/university-of-alabama-at-birmingham/3387/
                                                                            "> University of Alabama at
              Birmingham</Link></li>
            <li><Link href="/employers/indiana-university-purdue-university-indianapolis/3658/
                                                                                        "> Indiana University
              Purdue University Indianapolis</Link></li>
            <li><Link href="/employers/the-university-of-iowa/3483/
                                                                                            "> The University of
              Iowa</Link></li>
            <li><Link href="/employers/university-of-kentucky/3510/
                                                                                                "> University of
              Kentucky</Link></li>
            <li><Link href="/employers/oregon-state-university/3813/
                                                                                                    "> Oregon State
              University</Link>
            </li>
            <li><Link href="/employers/university-of-nebraska-medical-center/3712/
                                                                                                        ">
              University of Nebraska Medical Center</Link></li>
            <li><Link href="/employers/washington-state-university/3722/
                                                                                                            ">
              Washington State University</Link></li>
            <li><Link href="/employers/university-of-maryland-baltimore-county/3775/
                                                                                                                ">
              University of Maryland, Baltimore County</Link></li>
          </ul>
        </div>
      </div> */}

      <div className="content-grid mt-4">
        <h2 id="section2" className="">
          UNITED KINGDOM
        </h2>
        <div className="container mx-auto ">
          <UK id="section2" heading="" />
        </div>
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
      <section className="container mx-auto px-4 mt-12">
        <div className="alert mb-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="stroke-info shrink-0 w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          <span>
            ​​Try out Teaching Jobs today, not because we are number 1 but for
            the best customer service and support you will ever experience.
          </span>
          <div>
            <Link href="/contact-us" className="btn btn-sm btn-aj">
              Experience the Difference
            </Link>
          </div>
        </div>
      </section>

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
