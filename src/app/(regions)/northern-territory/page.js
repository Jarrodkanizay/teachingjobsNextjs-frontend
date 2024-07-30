import Image from 'next/image';
import Link from 'next/link';
import JobSearchBox from '@/components/JobSearchBox';
import JobFilter from '@/components/JobFilter';
import SearchResults from '@/components/SearchResults';
import AusUniLogos from '@/components/AusUniLogos';
import Australia from '@/components/topUnis/Australia';
import LocationSearchHeader from '@/components/LocationSearchHeader';

export const metadata = {
 
  title: 'Teaching Jobs northern territory',
  description: "Are you searching for a teaching job in the NT? Visit our website at Teaching Jobs, to see our available employment positions for teaching jobs in the northern territory " ,
 keywords:"Northern terriorty teaching jobs .  northern territory teaching positions",
};

export default function myPage() {
  return (

    <div className="">
    <LocationSearchHeader 
      location = "Teaching Jobs Northern Territory" 
      description='Northern Australia is a vast region that encompasses the northern part of Australia, including the Northern Territory and parts of Western Australia and Queensland.
       The region is known for its unique landscapes, diverse cultures, and rich history.If you are interested in teaching jobs in Northern Australia, the Northern Territory Department of
        Education is the largest employer in the region and offers a range of career opportunities in public education. The department provides a variety of teaching positions, including full-time,
         part-time, and casual positions. It also offers a range of attractive professional and personal benefits to its employees.'>
    </LocationSearchHeader>   

<JobSearchBox l="northern territory" />
      <SearchResults q={{ q: "", l:"NT"  }} />
    </div> 
  );
}