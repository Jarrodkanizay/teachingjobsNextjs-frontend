import Image from 'next/image';
import Link from 'next/link';
import JobSearchBox from '@/components/JobSearchBox';
import JobFilter from '@/components/JobFilter';
import SearchResults from '@/components/SearchResults';
import AusUniLogos from '@/components/AusUniLogos';
import Australia from '@/components/topUnis/Australia';
import LocationSearchHeader from '@/components/LocationSearchHeader';

export const metadata = {
 
  title: 'Teaching Jobs Sydney',
  description: "Are you searching for a teaching job in the Sydney? Visit our website at Teaching Jobs, to see our available employment positions for teaching jobs in Sydney" ,
 keywords:"teaching Jobs Sydney, teaching positions Sydney",
};

export default function myPage() {
  return (

    <div className="">
    <LocationSearchHeader 
      location = "Teaching Jobs Sydney" 
      description='Find all Sydney School Positions on Teaching Jobs Today. The New South Wales Education Standards Authority (NESA), an independent statutory body distinct from any educational authority,
      is where one must register in order to teach in the state. Teachers in all New South Wales schools and colleges are registered with the NESA. Teachers who are currently registered in other states or
      territories may be eligible for mutual recognition. We hope that this information may be useful to you as you look for Sydney teaching opportunities. Best of luck!'>
    </LocationSearchHeader>

    <JobSearchBox l="sydney" />
      <SearchResults q={{ q: "", l:"sydney"  }} />
    </div> 
  );
}