'use client';
import { NextPage } from 'next';
import { useRouter } from 'next/navigation';
import { useRef } from 'react';
import { useStore } from '@/lib/store/store';
import { countryMappings, countryMappings1 } from '@/lib/data/data';
export default function JobSearchBox() {
  const keyWordRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  let region = 'Australia';
  const { setRegion, setSearchJobCriteria } = useStore();
  const handleFormSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const a: { q?: string; l?: string } = {};
    if (keyWordRef.current && keyWordRef.current.value.trim()) {
      a.q = keyWordRef.current.value.trim();
    }
    if (region !== 'Global') {
      const location = (countryMappings1 as any)[region]?.searchLocation || '';
      const params = new URLSearchParams({
        l: '',
        q: encodeURIComponent(a.q || ''),
      });
      router.push(`/jobs?${params.toString()}`);
    } else {
      try {
        const response = await fetch(
          'https://api.geoapify.com/v1/ipinfo?apiKey=ea0e191c22a94bf39e0e58ffbe2d6b66'
        );
        const result = await response.json();
        const country = result.country.name;
        setRegion((countryMappings1 as any)[country.toLowerCase()]);
        const qValue = a.q || '';
        const lValue = (countryMappings1 as any)[
          (countryMappings as any)[country.toLowerCase()]
        ]?.searchLocation;
        router.push(`/jobs?q=${qValue}&l=${lValue}`);
      } catch (error) {
        console.log('Error:', error);
      }
    }
  };
  return (
    <form
      className="flex flex-col gap-1 items-center md:items-end w-full"
      onSubmit={handleFormSubmit}
    >
      <div className="flex flex-col md:gap-2 md:flex-row md:gap-0 mx-18 w-full mt-5 md:border rounded-t-lg md:rounded-lg p-2 md:shadow-md">
        <input
          type="text"
          className="flex-grow px-4 py-2 focus:outline-none border rounded-t-lg md:rounded-lg shadow-md md:border-none md:shadow-none text-base bg-white animate-pulse text-center md:text-left"
          placeholder="Enter Keywords"
          ref={keyWordRef}
        />
        <button
          className="px-4 py-2 bg-[#e74b7f] text-white md:rounded-md rounded-b-lg hover:text-blue-900 animate-pulse font-bold shadow-md"
          type="submit"
        >
          Search 
        </button>
      </div>
      {/* <button
        className=" text-gray-400 text-base md:pr-6 font-bold hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-l from-green-400 via-green-400 to-sky-300"
        onClick={async (event: React.FormEvent) => {
          event.preventDefault();
          const a: { q?: string; l?: string } = {};
          if (keyWordRef.current && keyWordRef.current.value.trim()) {
            a.q = keyWordRef.current.value.trim();
          }
          setRegion('Global');
          const params = new URLSearchParams({
            l: '',
            q: encodeURIComponent(a.q || ''),
          });
          router.push(`/jobs?${params.toString()}`);
        }}
      >
        Or Search Globally
      </button> */}
    </form>
  );
}
