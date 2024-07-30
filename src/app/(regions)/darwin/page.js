import Image from 'next/image';
import Link from 'next/link';
import JobSearchBox from '@/components/JobSearchBox';
import JobFilter from '@/components/JobFilter';
import SearchResults from '@/components/SearchResults';
import AusUniLogos from '@/components/AusUniLogos';
import Australia from '@/components/topUnis/Australia';
import LocationSearchHeader from '@/components/LocationSearchHeader';

export const metadata = {
 
  title: 'Teaching Jobs Darwin',
  description: "Don’t miss this chance to work in one of the best Teaching environments in the world. Apply now for your dream Teaching job in Darwin! " ,
 keywords:"Darwin Teaching Jobs Australia, Darwin TeachingJobs",
};

export default function myPage() {
  return (

    <div className="">
    <LocationSearchHeader 
      location = "Teaching Jobs Darwin" 
      description='Find all Darwin School Positions on Teaching Jobs Today. The Teacher Registration Board of the Northern Territory (TRBNT), an independent statutory body distinct from any educational authority,
       is where you must register if you want to teach in the Northern Territory. Teachers are registered with the TRBNT for all Northern Territory colleges and schools. Teachers who are currently registered in other
        states or territories may be eligible for mutual recognition. With this material, we hope to assist you in your quest for Darwin teaching possibilities. Best of luck!'>
    </LocationSearchHeader>   

    <JobSearchBox l="darwin" />
      <SearchResults q={{ q: "", l:"Darwin"  }} />
    </div>

  );
}