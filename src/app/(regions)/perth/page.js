import Image from 'next/image';
import Link from 'next/link';
import JobSearchBox from '@/components/JobSearchBox';
import JobFilter from '@/components/JobFilter';
import SearchResults from '@/components/SearchResults';
import AusUniLogos from '@/components/AusUniLogos';
import Australia from '@/components/topUnis/Australia';
import LocationSearchHeader from '@/components/LocationSearchHeader';

export const metadata = {
 
  title: 'Teaching Jobs Perth',
  description: "On Teaching Jobs Perth You can filter by discipline, level, type, location, and more. You can also sign up for email alerts to get notified of new opportunities as they arise. " ,
 keywords:"Teaching Jobs Perth, teaching positions Perth",
};

export default function myPage() {
  return (

    <div className="">
    <LocationSearchHeader 
      location = "Teaching Jobs Perth" 
      description='Find all Perth School Positions on Teaching Jobs Today. You need to be registered with the Teacher Registration Board of Western Australia (TRBWA), a separate and independent statutory
       body from any educational authority, in order to teach in Western Australia. Teachers are registered with the TRBWA for all schools and colleges in Western Australia. For educators who are currently 
       registered in different states or territories, mutual recognition may be applicable. With any luck, this material will be useful to you as you look for teaching opportunities in Perth. Hope all goes well!'>
    </LocationSearchHeader>

    <JobSearchBox l="perth" />
      <SearchResults q={{ q: "", l:"Perth"  }} />
    </div> 

  );
}