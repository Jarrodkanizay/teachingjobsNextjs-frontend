import Image from 'next/image';
import Link from 'next/link';
import JobSearchBox from '@/components/JobSearchBox';
import JobFilter from '@/components/JobFilter';
import SearchResults from '@/components/SearchResults';
import AusUniLogos from '@/components/AusUniLogos';
import Australia from '@/components/topUnis/Australia';
import LocationSearchHeader from '@/components/LocationSearchHeader';

export const metadata = {
 
  title: 'Academic Jobs Queensland',
  description: "Teaching Jobs have teaching jobs in QLD available throughout the state. Visit our website to see the employment positions available in private, public and catholic schools. " ,
 keywords:"queensland teaching jobs . queensland teaching positions",
};

export default function myPage() {
  return (

    <div className="">
    <LocationSearchHeader 
      location = "Teaching Jobs Queensland" 
      description='Looking for a new challenge? Looking for teaching jobs in Queensland? TeachingJobs is Australia’s leading jobsite for 
      employment resources for education professionals, providing an unbeatable selection of job vacancies across various positions. Covering all
       types of schools from Christian to Catholic, kindergarten to secondary and everything in between, we have an extensive selection of jobs available
        for all education professionals.The perfect QLD teacher jobs can be difficult to come by when taking into consideration your personal preferences,
         skills and qualifications. Sign up to TeachingJobs today and we will do all the hard work for you and notify you of any available positions that match
          your criteria. This way, you won’t miss out on any dream education jobs you’ve been searching for and can be confident that no opportunities are passing you by.'>
    </LocationSearchHeader>   

    <JobSearchBox l="queensland" />
      <SearchResults q={{ q: "", l:"queensland"  }} />
    </div> 

  );
}