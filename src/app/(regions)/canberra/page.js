import Image from 'next/image';
import Link from 'next/link';
import JobSearchBox from '@/components/JobSearchBox';
import JobFilter from '@/components/JobFilter';
import SearchResults from '@/components/SearchResults';
import AusUniLogos from '@/components/AusUniLogos';
import Australia from '@/components/topUnis/Australia';
import LocationSearchHeader from '@/components/LocationSearchHeader';

export const metadata = {
 
  title: 'Teaching Jobs Canberra',
  description: "Are you searching for a teaching job in the Canberra? Visit our website at Teaching Jobs, to see our available employment positions for teaching jobs in Canberra " ,
 keywords:"Teaching Jobs Canberra, teaching positions Canberra",
};

export default function myPage() {
  return (


    <div className="">
    <LocationSearchHeader 
      location = "Teaching Jobs Canberra" 
      description='Find all Canberra School Positions on Teaching Jobs Today. A registration with the Teacher Quality Institute (TQI), an autonomous statutory body distinct from any educational authority,
       is a prerequisite for teaching in the Australian Capital Territory. All ACT schools and institutions register teachers with the TQI. For teachers who are currently registered in other states or territories,
        mutual recognition may be applicable. In your pursuit of teaching opportunities in Canberra, we hope this material is useful. Wishing you luck!'>
    </LocationSearchHeader>

    <JobSearchBox l="canberra" />
      <SearchResults q={{ q: "", l:"Canberra"  }} />
    </div> 

  );
}