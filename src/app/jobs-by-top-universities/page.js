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
    absolute: 'The Best Universities to work for Globally', //Option 2 overrides the title in layout.tsx
  },
  description:
    'Explore top universities globally, including Australia, Canada, UK, USA, and beyond, to make an informed choice for your studies.',
  keywords: 'Find Universities. Find employers, Find institutions',
};

export default function myPage() {
  return (
    <main className=" mx-auto">
      {/* Hero banner */}
      <HeroBanner
        bgColorClass="bg-slate-200"
        h1="Find the best universities and colleges to work for here..."
        h2="Use university rankings to search for jobs in higher education."
        para1="Search for higher ed career opportunities by university rankings worldwide on the number 1 academic job board. Discover academic positions at the world's top universities with current openings through our 'Top Universities' page."
        src="/employers/top-universities-world-wide.jpg"
        alt="People immersed in academic blogs at our vibrant Academic Hub"
        btnPrimaryText="Join our Talent Pool"
        btnPrimaryURL="/talent-pool"
        reorder={false}
        imgRight={false}
      />

      <div className="content-grid">
        <div className="max-w-[650px] mx-auto">
          <h4 className="underline-full">Explore universities by region</h4>
          <p>
            Discover top university jobs through our detailed employer rankings,
            selecting your ideal academic career at prestigious institutions.
            Learn about employers' missions, visions, values, histories,
            achievements, and cultures to find your perfect match.
          </p>
        </div>
        <ul className="md:flex flex-wrap gap-8 my-12 justify-center items-center max-w-[980px] mx-auto">
          <li className="region">
            <a href="#section" className="scroll-smooth md:scroll-auto ">
              United States <span className="flag">🇺🇸</span>
            </a>
          </li>
          <li className="region">
            <a href="#section1" className="scroll-smooth md:scroll-auto">
              Australia <span className="flag">🇦🇺</span>
            </a>
          </li>
          <li className="region">
            <a href="#section2" className="scroll-smooth md:scroll-auto">
              United Kingdom <span className="flag">🇬🇧</span>
            </a>
          </li>
          <li className="region">
            <a href="#section3" className="scroll-smooth md:scroll-auto">
              Asia <span className="flag">🐉</span>
            </a>
          </li>
          <li className="region">
            <a href="#section3" className="scroll-smooth md:scroll-auto">
              Canada <span className="flag">🇨🇦</span>
            </a>
          </li>
          <li className="region">
            <a href="#section4" className="scroll-smooth md:scroll-auto">
              Europe <span className="flag">🇪🇺</span>
            </a>
          </li>
          <li className="region">
            <a href="#section5" className="scroll-smooth md:scroll-auto">
              South America <span className="flag">🏔️</span>
            </a>
          </li>
          <li className="region">
            <a href="#section6" className="scroll-smooth md:scroll-auto">
              New Zealand <span className="flag">🇳🇿</span>
            </a>
          </li>
          <li className="region">
            <a href="#section7" className="scroll-smooth md:scroll-auto">
              Middle East <span className="flag">🐪</span>
            </a>
          </li>
          <li className="region">
            <a href="#section8" className="scroll-smooth md:scroll-auto">
              India <span className="flag">🇮🇳</span>
            </a>
          </li>
          <li className="region">
            <a href="#section9" className="scroll-smooth md:scroll-auto">
              Africa <span className="flag">🐘</span>
            </a>
          </li>
        </ul>

        <USA id="section" heading="UNITED STATES" />

        <h2 id="section1" className="-full">
        AUSTRALIA
          </h2>
        <Australia id="section1" heading="" />

        <h2 id="section9" className="-full">
        AFRICA
          </h2>
        <Africa id="section9"heading="" />

        <h2 id="section3" className="-full">
        ASIA
          </h2>
        <Asia id="section3" heading="" />

        <h2 id="section3" className="-full">
        CANADA
          </h2>
        <Canada id="section3" heading="" />

        <h2 id="section2" className="-full">
        UNITED KINGDOM
          </h2>
        <UK id="section2" heading="" />

        <h2 id="section5" className="-full">
        SOUTH AMERICA
          </h2>
        <SA id="section5" heading="" />
 
        
        <div>
          <h2 id="section6" className="-full">
            NEW ZEALAND
          </h2>
          <NZ heading="" />
        </div>

        <div>
          <h2 id="section7" className="-full">
            MIDDLE EAST
          </h2>
          <ME heading="" />
        </div>

        <div>
          <h2 id="section8" className="-full">
            INDIA
          </h2>
          <India heading="" />
        </div>
       
        <div>
          <h2 id="section4" className="-full">
            EUROPE
          </h2>
          <Europe heading="" />
        </div>
      </div>
    </main>
  );
}
