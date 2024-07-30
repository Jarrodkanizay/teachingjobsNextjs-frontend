'use client';
import { useEffect, useState } from 'react';
import {
  keepPreviousData,
  queryOptions,
  useQuery,
} from '@tanstack/react-query';
import JobList from '@/components/JobList';
import { BaseApi } from '@/lib/store/Base';
import { BsHandbag } from 'react-icons/bs';
import Link from 'next/link';
import JobFilter from '@/components/JobFilter';
import SearchLightbulbIcon from '@/components/icons/SearchLightbulbIcon';
import SearchListResultsLoader from '@/components/loaders/SearchListResultsLoader';
import { useStore } from '@/lib/store/store';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { toURLParams, loadFromURLParams } from '@/utils/urlParams';
export default function SearchResults2({p={},
  filterOff = false,
  searchMessage = 'Jobs Found',
}) {
  const router = useRouter();
  console.log("loadFromURLParams(searchParams)", loadFromURLParams(useSearchParams()))
  const searchParams = loadFromURLParams(useSearchParams())

  const [page, setPage] = useState(0);
  let searchParams1 = {}
  //alert(JSON.stringify(p))
  if (Object.keys(p).length !== 0) {
    searchParams1 = { ...searchParams, ...p }
  } else {
    searchParams1 = { ...searchParams }
  }
  const { employer_id=-1, r = "", q = "", l = "", lon = 0, lat = 0, filter0 = [], currentMiddleCategory, category } = searchParams1
  let filter1 = [...filter0]
  const filteredData = filter1.filter(item => {
    return item.category !== "region"
  });
  if (r === 'global' || r === 'Global' || r == null || r == '') {
    filter1 = [...filteredData];
  } else {
    filter1 = [...filteredData, { category: 'region', filter: r  }];
  }
  //filter1 = [...filteredData, { category: "region", filter: r || "Global" }]

  //const { q, l, lon, lat, category, country, currentMiddleCategory, filter1, setRegion, setFilter1, setCategory, setCountry, setCurrentMiddleCategory } = useStore();
  //console.log('==============SearchResults2222222', q);
  //alert(q);
  const {
    isPending,
    isError,
    isSuccess,
    error,
    data,
    isFetching,
    isPlaceholderData,
  } = useQuery({
    queryKey: ['jobs', currentMiddleCategory,
      category,
      filter1, page, q, l, lon, lat,  employer_id],
    queryFn: async () => {
      const response = await BaseApi.post('/jobs', {
        currentMiddleCategory,
        category,
        filter1, page, q, l, lon, lat, employer_id
      });
      console.log(response.data);
      console.log('response.data.data', response.data.data);
      return response.data.data;
    },
    // enabled: q && Object.keys(q).length > 0,
    placeholderData: keepPreviousData,
  });
  console.log('data', data);
  const {
    isPending: isPendingQty,
    isError: isErrorQty,
    isSuccess: isSuccessQty,
    error: errorQty,
    data: dataQty,
    isFetching: isFetchingQty,
    isPlaceholderData: isPlaceholderDataQty,
  } = useQuery({
    queryKey: ['qty', currentMiddleCategory,
      category,
      filter1, page, q, l, lon, lat, employer_id
    ],
    queryFn: async () => {
      const response = await BaseApi.post('/jobQty', {
        currentMiddleCategory,
        category,
        filter1, page, q, l, lon, lat, employer_id
      });
      console.log(response.data);
      console.log('response.data.data', response.data.data);
      return response.data.data;
    },
    enabled: data?.jobs?.length > 0,
  });
  let content;
  const handlePageChange = (direction) => {
    if (direction === 'prev') {
      setPage((prevPage) => Math.max(prevPage - 1, 0));
    } else if (direction === 'next') {
      setPage((prevPage) => prevPage + 1);
    }
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };
  if (isFetching) {
    content = <SearchListResultsLoader />;
  } else if (isSuccess && data.jobs.length > 0) {
    if (data.jobs.length > 0) {
      console.log('data', data);
      content = (
        <>
          <div className="max-w-screen-md mx-auto">
            <div className="flex justify-center items-center gap-2 my-4 text-sm font-bold text-gray-500 border-2 p-2 rounded-xl mb-8 ">
              <SearchLightbulbIcon dimensions={22} />
              {dataQty && <span>{`${dataQty} ${searchMessage}`}</span>}
            </div>
            <JobList
              data={data}
              handlePageChange={handlePageChange}
              page={page}
              isPlaceholderData={isPlaceholderData}
            />
          </div>
        </>
      );
    } else {
      content = (
        <p className="text-center text-2xl font-bold py-10">
          Found No Job, Pls use other keywords.
        </p>
      );
    }
  } else {
    content = (
      <div className="container mx-auto">
        <p className="text-center text-xl font-bold mt-12 px-8">
          Sorry! We couldn't find any jobs matching&nbsp;your&nbsp;request.
        </p>
        <p className="text-center text-md py-10 px-8">
          Please consider expanding your search and joining our Talent&nbsp;Pool
          to get notified of jobs matching your&nbsp;unique&nbsp;skills.
        </p>
        <p className="text-center">{/* <JoinTalentPoolButton /> */}</p>
      </div>
    );
  }
  return <>{content}</>;
}
