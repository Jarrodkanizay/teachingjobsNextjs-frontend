'use client';
import React from 'react';
import SearchResults3 from '@/components/SearchResults3';
import SearchResults from '@/components/SearchResults';
import AdvancedSearchBar from '@/components/AdvancedSearchBar';
import Link from 'next/link';
import JobFilter from '@/components/JobFilter';
import { toURLParams, loadFromURLParams } from '@/utils/urlParams';
import { useSearchParams } from 'next/navigation';
// import { universityJobsData } from '@/data/universityJobsData';
//import JobTypeFaces from '@/components/JobTypeFaces';
export default function Page() {
  const searchParams = loadFromURLParams(useSearchParams());
  const size = 180;
  const items = [
    {
      src: '/home/academic-faculty-positions.png',
      alt: 'Academic Faculty Positions',
      label: 'Faculty',
      //link: `/faculty`,
      link: `/faculty?r=Global&filter0=[{"category":"master_category_job_type","filter":"Academic / Faculty"}]`,
    },
    {
      src: '/home/academic-executive-positions.png',
      alt: 'Academic Executive Positions',
      label: 'Executive',
      link: `/executive?r=Global&filter0=[{"category":"master_category_job_type","filter":"Executive"}]`,
      // link: `/executive?r=Global&filter0=[{"category":"master_category_job_type","filter":"Executive"}]`,
    },
    {
      src: '/home/academic-human-resource-positions.png',
      alt: 'Academic Human Resource Positions',
      label: 'HR Jobs',
      //link: `/hr-jobs`,
      link: `/hr-jobs?r=Global&filter0=[{"category":"master_category_job_type","filter":"Human Resources"}]`,
    },
    {
      src: '/home/academic-phd-positions.png',
      alt: 'Academic PhD Positions',
      label: 'PhD Jobs',
      //link: `/phd`,
      link: `/phd?r=Global&filter0=[{"category":"PositionType","filter":"Student / Phd Jobs"}]`,
    },
    {
      src: '/home/academic-staff-positions.png',
      alt: 'Academic Staff Positions',
      label: 'Staff/Admin',
      //link: `/admin`,
      link: `/admin?r=Global&filter0=[{"category":"master_category_job_type","filter":"Staff / Administration"}]`,
    },
  ];

  function getH1tag(country) {
    if (country === "United States" || country === "global") {
      return `Higher Ed`;
    } else {
      return `Academic`;
    }
  }

  function getCountryName(country) {
    if (country === "United States" || country === "United Kingdom") {
      return `in the ${country}`;
    } else if (country === "global") {
      return "around the world";
    } else {
      return `in ${country}`;
    }
  }
  return (
    <>
      <main>
        <div className="w-full gradient-aj py-4 mb-4 mt-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {/* <h1 className="text-white">University & {getH1tag(searchParams.r)} Jobs</h1>
            <p>
              Seek all university & higher ed jobs at top universities {getCountryName(searchParams.r)}
              . You can find all university lecturer, professor,
              academic instructors, here…
            </p> */}
          </div>
        </div>
        {/* <JobTypeFaces items={items} size={size} /> */}
        <AdvancedSearchBar forceClass="block" type="advancedSearch" />
        <section class="w-full justify-center">
          {/* <div class="filters_panel">
            <div class="filters_content">
             <JobFilter />
            </div>
          </div> */}
          <div class="w-full">
            <div class="listings_content">
              <SearchResults3 />
            </div>
          </div>
        </section>
    
  
      </main>
    </>
  );
}
