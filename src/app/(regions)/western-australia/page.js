import Image from 'next/image';
import Link from 'next/link';
import JobSearchBox from '@/components/JobSearchBox';
import JobFilter from '@/components/JobFilter';
import SearchResults from '@/components/SearchResults';
import AusUniLogos from '@/components/AusUniLogos';
import Australia from '@/components/topUnis/Australia';
import LocationSearchHeader from '@/components/LocationSearchHeader';

export const metadata = {
 
  title: 'Teaching Jobs western australia',
  description: "Visit our job board today at Teaching Jobs, to see all of our employment and job vacancies available including public, private and catholic teaching jobs in Western Australia. " ,
 keywords:"western australia teaching jobs. western austrlaia teaching positions",
};

export default function myPage() {
  return (
    <div className="">
    <LocationSearchHeader 
      location = "Teaching Jobs Western Australia" 
      description='Western Australia is a state located in the western part of Australia. It is the largest state in the country, covering an area of 2,529,875 square kilometers. 
      The state is home to a diverse range of flora and fauna, including 13,000 species of wildflowers. Western Australia is known for its mining industry, which is the state’s largest industry, 
      and it is also a significant producer of wheat, wool, and other agricultural products.Western Australia has a well-established education system that provides quality education to students. 
      The Department of Education is the largest employer in the state, providing a range of career opportunities in public education. The department offers a variety of teaching positions, including full-time,
      part-time, and casual positions. The department also provides a range of attractive professional and personal benefits to its employees'>
    </LocationSearchHeader>   

    <JobSearchBox l="Western Australia" />
      <SearchResults q={{ q: "", l:"western australia"  }} />
    </div>
  );
}