import Image from 'next/image';
import Link from 'next/link';
import JobSearchBox from '@/components/JobSearchBox';
import JobFilter from '@/components/JobFilter';
import SearchResults from '@/components/SearchResults';
import AusUniLogos from '@/components/AusUniLogos';
import Australia from '@/components/topUnis/Australia';
import LocationSearchHeader from '@/components/LocationSearchHeader';

export const metadata = {
  title: 'Teaching Jobs Adelaide',
  description:
    'Don’t miss this chance to work in one of the best Teaching environments in the world. Apply now for your dream Teaching job in Adelaide! ',
  keywords: 'Adelaide Teaching Jobs Australia, Adelaide TeachingJobs',
};

export default function myPage() {
  return (
    <div className="">
    <LocationSearchHeader 
      location = "Teaching Jobs Adelaide" 
      description='Seek your teaching jobs in Adelaide now, it’s important to meet the mandatory requirements such as holding a relevant university qualification, 
      a current South Australian teacher registration, and a working with children check. Additionally, there’s a focus on continuous learning and development,
       with expectations for teachers to engage in ongoing training and adhere to the latest educational standards.'>
    </LocationSearchHeader>

    <JobSearchBox l="Adelaide" />
      <SearchResults q={{ q: '', l: 'Adelaide' || 0 }} />
    </div>
   
  );
}
"Teacher - Secondary - Various Teaching Opportunities - Capricornia (Rockhampton Campus) School of Distance Education"
