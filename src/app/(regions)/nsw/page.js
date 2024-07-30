import Image from 'next/image';
import Link from 'next/link';
import JobSearchBox from '@/components/JobSearchBox';
import JobFilter from '@/components/JobFilter';
import SearchResults from '@/components/SearchResults';
import AusUniLogos from '@/components/AusUniLogos';
import Australia from '@/components/topUnis/Australia';
import LocationSearchHeader from '@/components/LocationSearchHeader';

export const metadata = {
 
  title: 'Teaching Jobs NSW',
  description: "Do you wish to apply for a teaching job in NSW? Visit our website today at Teaching Jobs, to see all our available positions throughout NSW. Apply online now! " ,
 keywords:"nsw teaching jobs . new south whales teaching positions",
};

export default function myPage() {
  return (

    <div className="">
    <LocationSearchHeader 
      location = "Teaching Jobs NSW" 
      description='If you’re looking for the latest job opportunities in the education sector, look no further than Teaching Jobs. Finding the right teaching jobs in 
      NSW can be difficult and time-consuming, but we go out of our way to make your job hunt as smooth and painless as possible. By making an online profile on our site, 
      you’ll be the first to know about exciting new employment opportunities and NSW teacher jobs. By entering your preferences, you are able to filter out jobs that don’t match 
      your criteria and only be shown vacancies that align with your skills, qualifications and goals.'>
    </LocationSearchHeader>   

    <JobSearchBox l="new south wales" />
      <SearchResults q={{ q: "", l:"new south wales"  }} />
    </div> 
  );
}