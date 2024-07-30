'use client';
import { NextPage } from 'next';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useRef } from 'react';
import { useSearchParams } from 'next/navigation';
import Autocomplete, { usePlacesWidget } from 'react-google-autocomplete';
export default function JobSearchBox({
  q,
  l,
  forceClass,
  type,
}) {
  const searchParams = useSearchParams();
  const keyWordRef = useRef(null);
  const locationRef = useRef(null);
  const lonlat = useRef({ lon: 0, lat: 0 });
  useEffect(() => {
    if (keyWordRef.current && searchParams.has('q')) {
      keyWordRef.current.value = decodeURIComponent(
        searchParams.get('q') || ''
      );
    }
    // if (locationRef.current && searchParams.has('l')) {
    //   locationRef.current.value = decodeURIComponent(
    //     searchParams.get('l') || ''
    //   );
    // }
    if (keyWordRef.current && q) keyWordRef.current.value = q;
    //if (locationRef.current && l) locationRef.current.value = l;
  }, []);
  const router = useRouter();
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const params = new URLSearchParams({
      lon: encodeURIComponent(lonlat.current?.lon),
      lat: encodeURIComponent(lonlat.current?.lat),
      q: encodeURIComponent(keyWordRef.current?.value.trim() || ''),
    });
    if (type === 'advancedSearch') {
      router.push(`/Australia/jobs-advanced-search?${params.toString()}`);
    } else {
      router.push(`/jobs?${params.toString()}`);
    }
  };
  const updateSearchParams = (newParams) => {
   
    //alert(searchParams.toString())
    const params = new URLSearchParams(searchParams);
    Object.entries(newParams).forEach(([key, value]) => {
      params.set(key, value);
    });
    return params;
  };
  return (
    <div className={`search-panel py-4 ${forceClass}`}>
      <div className="container lg:max-w-screen-lg px-4 mx-auto ">
        <form onSubmit={handleFormSubmit} className="flex flex-col gap-2">
          <div className="join mx-auto w-full border border-gray-200 shadow-md flex flex-col md:flex-row">
            <input
              type="text"
              className="input input-bordered join-item w-full md:text-left text-center"
              placeholder="Keywords"
              ref={keyWordRef}
            />
            <Autocomplete
              className="input input-bordered join-item w-full md:text-left text-center"
              // defaultValue="Start typing job location & allow Google to auto-complete"
              //defaultValue={employer?.location}
              style={{ width: '100%' }}
              ref={locationRef}
              apiKey="AIzaSyCKEfoOIPz8l_6A8BByD3b3-ncwza8TNiA"
              onPlaceSelected={(place) => {
                console.log('Selected Place:', place);
                const lat = place.geometry.location.lat();
                const lon = place.geometry.location.lng();
                console.log('lat:', lat);
                console.log('lon:', lon);
                lonlat.current = { lon, lat };
                const updatedParams = updateSearchParams({
                  lon: encodeURIComponent(lon.toString()),
                  lat: encodeURIComponent(lat.toString()),
                  q: encodeURIComponent(keyWordRef.current?.value.trim() || ''),
                });
                //alert(updatedParams.toString())
                router.push(`/australia/jobs-advanced-search?${updatedParams.toString()}`);
              }}
              // onPlaceSelected={(selected, a, c) => {
              //   console.log(selected,a,c);
              //   setValue("location", selected)
              // }}
              options={{
                types: ['geocode', 'establishment'],
                //componentRestrictions: { country: "Australia" },
              }}
            //onPlaceSelected={(place) =>
            //formik.setFieldValue("countryAnother", place.formatted_address)
            //}
            //onChange={(e) => setValue('location', e.target.value)}
            />
            {/* <input
              type="text"
              className="input input-bordered join-item w-full md:text-left text-center"
              placeholder="Location"
              ref={locationRef}
            /> */}
            <button
              type="submit"
              className="indicator md:w-fit w-full bg-amber-500 md:bg-0 justify-center items-center animate-pulse"
            >
              <div className="btn join-item bg-amber-500 md:border md:border-gray-300 md:shadow-md border-0 text-white animate-pulse ">
                Search
              </div>
            </button>
          </div>
          {type != 'advancedSearch' && (
            <button
              className=" self-end underline text-gray-400 text-base md:pr-6 font-bold hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-l from-green-400 via-green-400 to-sky-300"
              onClick={async (e) => {
                e.preventDefault();
                const updatedParams = updateSearchParams({
                  lon: encodeURIComponent(lonlat.current.lon.toString()),
                  lat: encodeURIComponent(lonlat.current.lat.toString()),
                  q: encodeURIComponent(keyWordRef.current?.value.trim() || ''),
                });
                router.push(`/Australia/jobs-advanced-search?${updatedParams.toString()}`);
              }}
            >
              Advanced Search
            </button>
          )}
        </form>
      </div>
    </div>
  );
}
