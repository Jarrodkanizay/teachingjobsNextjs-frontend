'use client';
import { NextPage } from 'next';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useRef } from 'react';
import Autocomplete, { usePlacesWidget } from 'react-google-autocomplete';
import { useStore } from '@/lib/store/store';
export default function JobSearchBox({
  forceClass,
}) {
  const { setQ, setL, setLon, setLat } = useStore();
  const keyWordRef = useRef(null);
  const locationRef = useRef(null);
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    setQ(keyWordRef.current?.value.trim() || '')
  };
  return (
    <div className={`search-panel py-4 ${forceClass}`}>
      <div className="container lg:max-w-screen-lg px-4 mx-auto ">
        <form onSubmit={handleFormSubmit} className="flex flex-col gap-2">
          <div className="join mx-auto w-full border border-gray-200 shadow-md flex flex-col md:flex-row">
            <Autocomplete
              className="input input-bordered join-item w-full md:text-left text-center"
              style={{ width: '100%' }}
              ref={locationRef}
              apiKey="AIzaSyCKEfoOIPz8l_6A8BByD3b3-ncwza8TNiA"
              onPlaceSelected={(place) => {
                console.log('Selected Place:', place);
                const lat = place.geometry.location.lat();
                const lon = place.geometry.location.lng();
                console.log('lat:', lat);
                console.log('lon:', lon);
                setLon(lon)
                setLat(lat)
              }}
              options={{
                types: ['geocode', 'establishment'],
              }}
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
