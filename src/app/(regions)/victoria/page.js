import Image from 'next/image';
import Link from 'next/link';
import JobSearchBox from '@/components/JobSearchBox';
import JobFilter from '@/components/JobFilter';
import SearchResults from '@/components/SearchResults';
import AusUniLogos from '@/components/AusUniLogos';
import Australia from '@/components/topUnis/Australia';
import LocationSearchHeader from '@/components/LocationSearchHeader';

export const metadata = {
 
  title: 'Teaching Jobs Victoria',
  description: "Teaching Jobs in Victoria are now available through our job board at Teaching Jobs. Browse our website to see the available employment positions throughout Victoria. " ,
 keywords:"victoria teaching jobs. melbourne teaching jobs",
};

export default function myPage() {
  return (

    <div className="">
    <LocationSearchHeader 
      location = "Teaching Jobs Victoria" 
      description='If you’re on the hunt for teaching jobs in Victoria, TeachingJobs is able to provide you with Australia’s largest resource of employment opportunities. We take the stress out of finding
       a new teaching job by providing you with an unbeatable selection of exciting job vacancies at your fingertips.By making a profile with us, you’ll be kept up to date on all the latest openings in your 
       area and be the first to know about any new positions. Demonstrate your qualifications, skills and experience to recruiters and get yourself noticed. Whether you’re looking for something in the inner-north 
       of Melbourne or the south-east of Victoria, we have plenty of jobs waiting for the perfect candidate.'>
    </LocationSearchHeader>   


    <JobSearchBox l="victoria" />
      <SearchResults q={{ q: "", l:"victoria"  }} />
    </div> 

  );
}