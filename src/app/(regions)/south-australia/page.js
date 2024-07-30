
import Image from 'next/image';
import Link from 'next/link';
import JobSearchBox from '@/components/JobSearchBox';
import JobFilter from '@/components/JobFilter';
import SearchResults from '@/components/SearchResults';
import AusUniLogos from '@/components/AusUniLogos';
import Australia from '@/components/topUnis/Australia';
import LocationSearchHeader from '@/components/LocationSearchHeader';

export const metadata = {
 
  title: 'Teaching Jobs South Australia',
  description: "At Teaching Jobs, we have a wide range of job vacancies & employments for teaching in Adelaide. Visit our job board for private and public jobs. Apply online now! " ,
 keywords:"aidelaide teaching jobs . south australia teaching jobs",
};

export default function myPage() {
  return (
    <div className="">
    <LocationSearchHeader 
      location = "Teaching Jobs South Australia" 
      description='If you’re looking for teaching jobs in Adelaide, TeachingJobs has you covered. We are Australia’s #1 education jobsite with the most comprehensive collection
       of education jobs available online. We take pride in connecting top educators with fulfilling positions that allow them to inspire, lead and enlighten.Wherever you are in
        Adelaide, from Mount Osmond to Woodville South, TeachingJobs has a varied range of positions ready for you to browse. Regardless of whether you’re looking for a primary teaching
         job in Adelaide, a casual relief teaching position or a school aide job, we have plenty of rewarding employment openings just waiting for you to apply.'>
    </LocationSearchHeader>   

    <JobSearchBox l="south australia" />
      <SearchResults q={{ q: "", l:"south australia"  }} />
    </div>
  );
}