'use client';
import { NextPage } from 'next';
import { useRouter } from 'next/navigation';
import { useRef } from 'react';
import { useStore } from '@/lib/store/store';
import { countryMappings, countryMappings1 } from '@/lib/data/data';
import useURLParams from '@/utils/urlParams';
import JobKeywordSearchBlock from '@/components/JobKeywordSearchBlock';
export default function JobSearchBox() {
  const countryMap = {
    UK: 'United Kingdom',
    Australia: 'Australia',
    Canada: 'Canada',
    USA: 'United States',
  };
  const keyWordRef = useRef("");
  const cfRef = useRef(null);
  const linkRef = useRef(null);
  const router = useRouter();
  let region = 'Australia';
  const { r = 'Global' } = useURLParams();
  const onEditorStateSelect = (category, filter, link) => {
    keyWordRef.current = filter
    // if (link) {
    //   linkRef.current = link;
    //   return
    // }
    // linkRef.current = null;
    // cfRef.current = { category, filter }
    // console.log(category, filter)
  };
  const onInputChange = (inputText) => {
    keyWordRef.current = inputText
   
  };

  const handleFormSubmit = async () => {
    event.preventDefault();
    const a = {};
  
    if (linkRef.current) {
      const url = linkRef.current;
      //alert(url); // Just for debugging purposes
      window.open(url, '_blank');
      return
    }
    let q3 = ""
    //if (cfRef.current) {
    //   q3 = `&filter0=[{"category":"${cfRef.current.category}","filter":"${cfRef.current.filter}"}]`
    // } else {
    //   if (keyWordRef?.current?.trim()) {
    //     q3 = `&q=${keyWordRef?.current?.trim()}`
    //   }
    // }
    //router.push(`/jobs-advanced-search?r=${country}&${q3}`);
    console.log({ "keyWordRef.current": keyWordRef.current })
    router.push(`/jobs?q=${keyWordRef.current}`);
  };
  return (
    <form className="flex flex-col gap-1 items-center md:items-end w-full" onSubmit={handleFormSubmit}>
      <div className="relative flex flex-col md:flex-row md:gap-2 md:gap-0 mx-18 w-full mt-5 md:border rounded-t-lg md:rounded-lg p-2 md:shadow-md">
        <div className="relative z-50 flex-grow flex items-center"> {/* Ensure the container is flex and items-center */}
          <JobKeywordSearchBlock
            forceClass="mb-6"
            onSelect={onEditorStateSelect}
            onInputChange={onInputChange}
            className="w-full"
             />
        </div>
        <button
          //className="px-4 py-2 bg-[#e74b7f] text-white md:rounded-md rounded-b-lg hover:text-blue-900 animate-pulse font-bold shadow-md"
          className="h-[50px] ml-auto px-4 py-2 bg-[#e74b7f] w-full md:w-auto text-white rounded-md rounded-b-lg hover:bg-orange-600 animate-pulse font-bold shadow-md"
          type="submit"

        >
          Search
        </button>
      </div>

    
    </form>
  );
}
