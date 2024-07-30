import Image from 'next/image';
import Link from 'next/link';
import JobSearchBox from '@/components/JobSearchBox';
import JobFilter from '@/components/JobFilter';
import SearchResults from '@/components/SearchResults';
import AusUniLogos from '@/components/AusUniLogos';
import Australia from '@/components/topUnis/Australia';
import LocationSearchHeader from '@/components/LocationSearchHeader';
export const metadata = {
  title: 'Teaching Jobs Melbourne',
  description: "Are you searching for a teaching job in the melbourne? Visit our website at Teaching Jobs, to see our available employment positions for teaching jobs in melbourne " ,
  keywords:"Melbourne Teaching Jobs Australia, Melbourne TeachingJobs",
};

export default function myPage() {
  return (

    <div className="">
    <LocationSearchHeader 
      location = "Teaching Jobs Melbourne" 
      description='Find all Melbourne School Positions on Teaching Jobs Today. To teach in Victoria, you must be registered with the Victorian Institute of Teaching (VIT),
      an independent statutory authority separate from any educational authority. The VIT registers teachers for all Victorian schools and colleges. Mutual recognition may
      apply for teachers who are currently registered in other states or territories.We hope this information helps you in your search for teaching opportunities in Melbourne. Good luck!'>
    </LocationSearchHeader>


    <JobSearchBox l="melbourne" />
      <SearchResults q={{ q: "", l:"vic" }} />
    </div> 

  );
}