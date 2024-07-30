'use client';
import { NextPage } from 'next';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useRef } from 'react';
import { useSearchParams } from 'next/navigation';

interface MyComponentProps {
  q?: string;
  l?: string;
  forceClass?: string;
  type?: string;
}
export default function JobSearchBox({ q, l, forceClass,type }: MyComponentProps) {
  const searchParams = useSearchParams();
  const keyWordRef = useRef<HTMLInputElement>(null);
  const locationRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (keyWordRef.current && searchParams.has('q')) {
      keyWordRef.current.value = searchParams.get('q') || '';
    }
    if (locationRef.current && searchParams.has('l')) {
      locationRef.current.value = searchParams.get('l') || '';
    }
    if (keyWordRef.current && q) keyWordRef.current.value = q;
    if (locationRef.current && l) locationRef.current.value = l;
  }, []);
  const router = useRouter();
  const handleFormSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const params = new URLSearchParams({
      l: encodeURIComponent(locationRef.current?.value.trim() || ''),
      q: encodeURIComponent(keyWordRef.current?.value.trim() || ''),
    });
    router.push(`/jobs?${params.toString()}`);
  };
  return (
    <form onSubmit={handleFormSubmit} className={`${forceClass}`}>
      <input
        type="text"
        className="w-full input input-md input-bordered focus:outline-none focus:border-orange-500 mb-1"
        placeholder="Keywords"
        ref={keyWordRef}
      />
      <input
        type="text"
        className="w-full input input-md input-bordered focus:outline-none focus:border-orange-500 mb-1"
        placeholder="Location"
        ref={locationRef}
      />
      <button
        type="submit"
        className="btn indicator border-0 w-full bg-amber-500  justify-center items-center animate-pulse"
      >
        <div className="join-item border-0 text-white animate-pulse ">
          Search
        </div>
      </button>
      {type != 'advancedSearch' && (
        <button
          className=" self-end underline text-gray-400 text-base md:pr-6 font-bold hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-l from-green-400 via-green-400 to-sky-300"
          onClick={async (e) => {
            e.preventDefault();
            const params = new URLSearchParams({
              // lon: encodeURIComponent(lonlat.current?.lon),
              // lat: encodeURIComponent(lonlat.current?.lat),
              q: encodeURIComponent(keyWordRef.current?.value.trim() || ''),
            });
            router.push(`/jobs-advanced-search?${params.toString()}`);
          }}
        >
          Advanced Search
        </button>
      )}
    </form>
  );
}
