import Image from 'next/image';
import Link from 'next/link';
import JobSearchBox from '@/components/JobSearchBox';
import JobFilter from '@/components/JobFilter';
import SearchResults from '@/components/SearchResults';
import AusUniLogos from '@/components/AusUniLogos';
import Australia from '@/components/topUnis/Australia';
import LocationSearchHeader from '@/components/LocationSearchHeader';
export const metadata = {
 
  title: 'Teaching Jobs Brisbane',
  description: "Don’t miss this chance to work in one of the best Teaching environments in the world. Apply now for your dream Teaching job in Brisbane! " ,
 keywords:"Adelaide Teaching Jobs Australia, Adelaide TeachingJobs",
};

export default function myPage() {
  return (

    <div className="">
      <LocationSearchHeader 
      location = "Teaching Jobs Brisbane" 
      description='Find all Brisbane School Positions on Teaching Jobs Today. Being registered with the Queensland College of Teachers (QCT), an independent statutory body distinct from any educational authority, 
      is a requirement for teaching in Queensland. Teachers in all Queensland colleges and schools are registered with the QCT. Teachers who are now registered in other states or territories may be eligible for mutual recognition.
       We hope that this information will be useful to you as you look for teaching opportunities in Brisbane. I wish you luck!'>
    </LocationSearchHeader>

    <JobSearchBox l="brisbane" />
      <SearchResults q={{ q: "", l:"Brisbane" }} />
    </div> 
  );
};

