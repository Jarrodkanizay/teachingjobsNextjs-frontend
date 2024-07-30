import Image from 'next/image';
import Link from 'next/link';
import JobSearchBox from '@/components/JobSearchBox';
import JobFilter from '@/components/JobFilter';
import SearchResults from '@/components/SearchResults';
import AusUniLogos from '@/components/AusUniLogos';
import Australia from '@/components/topUnis/Australia';
import LocationSearchHeader from '@/components/LocationSearchHeader';

export const metadata = {
 
  title: 'Teaching Jobs Tasmania',
  description: "Are you searching for a teaching job in the Tasmania? Visit our website at Teaching Jobs, to see our available employment positions for teaching jobs in the Tasmania." ,
 keywords:"tasmania teaching jobs. tasmania teaching positions",
};

export default function myPage() {
  return (

    <div className="">
    <LocationSearchHeader 
      location = "Teaching Jobs Tasmania" 
      description='To teach in Tasmania, you must be registered with the Teachers Registration Board (TRB), an independent statutory authority separate from any educational authority.
       The TRB registers teachers for all Tasmanian schools and colleges. Mutual recognition may apply for teachers who are currently registered in other states or territories. We hope
      this information helps you in your search for teaching opportunities in Tasmania. Good luck!'>
    </LocationSearchHeader>   

    <JobSearchBox l="tasmania" />
      <SearchResults q={{ q: "", l:"tasmania"  }} />
    </div>
  );
}