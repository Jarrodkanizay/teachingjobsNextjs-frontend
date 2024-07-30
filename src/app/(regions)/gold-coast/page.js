import Image from 'next/image';
import Link from 'next/link';
import JobSearchBox from '@/components/JobSearchBox';
import JobFilter from '@/components/JobFilter';
import SearchResults from '@/components/SearchResults';
import AusUniLogos from '@/components/AusUniLogos';
import Australia from '@/components/topUnis/Australia';
import LocationSearchHeader from '@/components/LocationSearchHeader';
export const metadata = {
 
  title: 'Teaching Jobs Gold Coast',
  description: "Don’t miss this chance to work in one of the best Teaching environments in the world. Apply now for your dream Teaching job in Gold Coast! " ,
 keywords:"Gold Coast Teaching Jobs Australia, Gold Coast TeachingJobs",
};

export default function myPage() {
  return (
    
    <div className="">
    <LocationSearchHeader 
      location = "Teaching Jobs Gold Coast" 
      description='Explore a world of opportunities with Queensland school jobs. Join one of the largest employers in the state and find your perfect role in teaching or
       support services. Shape the future in a dynamic educational environment. Apply now and make a difference!'>
    </LocationSearchHeader>

<JobSearchBox l="gold coast" />
      <SearchResults q={{ q: "", l:"Gold Coast"  }} />
    </div> 
  );
}