//import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import JobSearchBox from '@/components/JobSearchBox';
import JobFilter from '@/components/JobFilter';
//import { useParams } from 'next/navigation'
export const metadata = {
  title: {
    absolute: 'Teaching Jobs Asia',
  },
  description:
    'Looking for academic jobs in Asia? Browse our listings of Asia university jobs and find your next career opportunity in this diverse and dynamic region.',
  keywords:
    'Teaching Jobs Asia. Asia university jobs, academic jobs in Asia, TeachingJobs',
};
export default function Page() {
  return (
    <div>
      <div className="content-grid mx-auto">
        <div
          id="section"
          className=" full-width py-4  full-width m bg-slate-200"
        >
          <div className="md:hero-content flex-col lg:flex-row mx-auto md:items-start py-12  ">
            <h1 className="text-3xl font-normal md:text-right text-gray-400 m-0 pb-8 px-7 md:px-0 ">
              <span className="md:text-6xl font-bold  md:text-right text-gray-500 pb-4 ">
                Top Australian Universities:
              </span>{' '}
              <br />{' '}
            </h1>

            <div>
              <p className="px-7 mb-4 mt-1"></p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-1  mt-10 w-1/2 mx-auto  ">
        <p class="mb-2">Bond University - QLD</p>
        <p class="mb-2">Griffith University - QLD</p>
        <p class="mb-2">Queensland University of Technology - QLD</p>
        <p class="mb-2">The University of Queensland - QLD</p>
        <p class="mb-2">University of the Sunshine Coast - QLD</p>
        <p class="mb-2">Central Queensland University - QLD</p>
        <p class="mb-2">University of Southern Queensland - QLD</p>
        <p class="mb-2">
          James Cook University The University of Queensland - QLD
        </p>
        <p class="mb-2">The Australian National University - ACT</p>
        <p class="mb-2">Deakin University – VIC</p>
        <p class="mb-2">La Trobe University - VIC</p>
        <p class="mb-2">Federation University Australia - VIC</p>
        <p class="mb-2">The University of South Australia - SA</p>
        <p class="mb-2">Flinders University - SA</p>
        <p class="mb-2">Edith Cowan University - WA</p>
        <p class="mb-2">The University of Western Australia - WA</p>
        <p class="mb-2">University of Wollongong - NSW</p>
        <p class="mb-2">University of New England - NSW</p>
        <p class="mb-2">Macquarie University - NSW</p>
        <p class="mb-2">Southern Cross University - NSW</p>
      </div>
    </div>
  );
}
