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
}
export default function JobSearchBox({ q, l, forceClass }: MyComponentProps) {
  const searchParams = useSearchParams();
  const keyWordRef = useRef<HTMLInputElement>(null);
  const locationRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (keyWordRef.current && searchParams.has('q')) {
      keyWordRef.current.value = decodeURIComponent(
        searchParams.get('q') || ''
      );
    }
    if (locationRef.current && searchParams.has('l')) {
      locationRef.current.value = decodeURIComponent(
        searchParams.get('l') || ''
      );
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
    <div className={`search-panel py-4 ${forceClass}`}>
      <div className="container lg:max-w-screen-lg px-4 mx-auto ">
        <form onSubmit={handleFormSubmit}>
          <div className="join mx-auto w-full border border-gray-200 shadow-md flex flex-col md:flex-row">
            <input
              type="text"
              className="input input-bordered join-item w-full md:text-left text-center"
              placeholder="Keywords"
              ref={keyWordRef}
            />
            <input
              type="text"
              className="input input-bordered join-item w-full md:text-left text-center"
              placeholder="Location"
              ref={locationRef}
            />
            <button
              type="submit"
              className="indicator md:w-fit w-full bg-amber-500 md:bg-0 justify-center items-center animate-pulse"
            >
              <div className="btn join-item bg-amber-500 md:border md:border-gray-300 md:shadow-md border-0 text-white animate-pulse ">
                Search
              </div>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
