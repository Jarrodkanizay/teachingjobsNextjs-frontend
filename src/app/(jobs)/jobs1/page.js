'use client';
import React, { useState, useEffect, useLayoutEffect, useRef } from 'react';
//import JobsForm from '@/components/JobsForm';
import SearchResults1 from '@/components/SearchResults1';
import { useSearchParams } from 'next/navigation';
import JobSearchBox from '@/components/JobSearchBox';
import JobFilter from '@/components/JobFilter';
import JobSearchBox2 from '@/components/JobSearchBox2';
import { filterType } from '@/utils/data';
import Link from 'next/link';
import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { BaseApi } from '@/lib/store/Base';
//import { useRouter } from 'next/router';
//import { useRouter } from 'next/navigation';
// export const metadata = {
//   title: 'find-jobs',
//   description:
//     'Discover academic jobs at all universities today! Explore your next academic positions through visiting our higher ed jobs, with new academic jobs added daily.',
//   keywords: [
//     'Teaching Jobs',
//     'Higher Ed Jobs',
//     'Academic positions',
//     'University Jobs',
//     'College Jobs',
//   ],
// };
export default function Page() {
  const searchParams = useSearchParams();
  //const allSearchParams = Object.fromEntries(searchParams1);
  //console.log("searchParams2qqqqq==================", Object.fromEntries(useSearchParams().entries()))
  //const query = Object.fromEntries(useSearchParams().entries());
  const q = decodeURIComponent(searchParams.get('q') || '');
  const l = decodeURIComponent(searchParams.get('l') || '');
  // const {
  //   data: filters,
  //   isLoading: filtersIsLoading,
  //   isSuccess: filtersIsSuccess,
  // } = useGetFiltersQuery(
  //   { category, filter1, q, l, mode: "normal" },
  //   { skip: !category }
  //   );
  const [filterTypes, setfilterTypes] = useState(filterType);
  const [category, setCategory] = useState('');
  const [filter1, setfilter] = useState([]);
  const [page, setPage] = useState(0);
  const {
    isPending: isPendingQty,
    isError: isErrorQty,
    isSuccess: isSuccessQty,
    error: errorQty,
    data: filters,
    isFetching: isFetchingQty,
    isPlaceholderData: isPlaceholderDataQty,
  } = useQuery({
    queryKey: ['filter', { category, filter1, q, l }],
    queryFn: async () => {
      //{ ...filter1, category,mode: "normal" }
      const response = await BaseApi.post('/filters', {
        category,
        filter1,
        q,
        l,
        mode: 'normal',
      });
      console.log(response.data);
      console.log('response.data.data', response.data.data);
      return response.data.data;
    },
    enabled: category !== '',
  });
  const filterValues9 = {
    Country: 'Country',
    State: 'State',
    City: 'City',
    'Job Type(i.e. Faculty, Human Resources)': 'Job Type',
    'Faculty/Department(i.e. Science, Business)': 'Faculty/Department',
    'Academic Position Type(i.e. Lecturer, Fellow)': 'Academic Position Type',
    'Executive Jobs(i.e. Directors, Registrars)': 'Executive Jobs',
    'Employment Type(i.e. Full-time, casual)': 'Employment Type',
    'Institution Name': 'Institution Name',
    'Salary Range in AUD': 'Salary Range in AUD',
    'Onsite/Remote': 'Onsite/Remote',
  };
  //const region = useSelector((state) => state.posts.region);
  //const [query, setQuery] = useState(Object.fromEntries(useSearchParams().entries()));
  const [isShowFilter, setIsShowFilter] = useState(false);
  //const filter1 = useSelector((state) => state.posts.filter1);
  //alert(location?.state?.filter1)
  ///console.log('router.query', searchParams);
  return (
    <main>
      <div className="w-full bg-gray-100 py-4 mb-4 mt-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-screen-xl mx-auto ">
            <JobSearchBox forceClass="hidden md:block" />
            <JobSearchBox2 forceClass="block md:hidden" />
          </div>
        </div>
      </div>
      <div className=" mx-auto max-w-5xl  flex flex-col hidden md:block ">
        {
          // 顶层已选X  top
          filter1.length > 0 && (
            <div className="md:flex md:gap-4 md:flex-wrap pb-2">
              {filter1.map(({ category, filter }, i) => (
                <button
                  key={i}
                  className="btn  btn-xs text-blue-900 text-white "
                  onClick={() => {
                    const updatedFilter = filter1.filter(
                      (_, index) => index !== i
                    );
                    setPage(0);
                    setfilter(updatedFilter);
                    //dispatch(setfilter(updatedFilter));
                  }}
                >
                  {`${filter} X`}
                </button>
              ))}
            </div>
          )
        }
        <div className="flex gap-4 flex-wrap">
          {filterTypes?.length > 0 && // 中层大目录m
            filterTypes.map((filterType, i) => (
              <button
                key={i}
                className={`px-2 py-1 text-gray-500  border  rounded-md text-sm font-bold ${category === filterType
                  ? 'text-blue-900 text-white border-orange-500'
                  : 'bg-white border-gray-500'
                  }`}
                onClick={() => {
                  if (category === filterType) {
                    setIsShowFilter((prev) => !prev);
                  } else {
                    setIsShowFilter(true);
                  }
                  console.log(filterType);
                  setCategory(filterType);
                }}
              >
                {filterValues9[filterType]}
              </button>
            ))}
        </div>
        {isShowFilter && (
          <div className="grid md:grid-cols-4 gap-1 grid-cols-2 pl-6 py-2">
            {filters?.length > 0 && // 低层小目录b
              filters.map(({ filter, job_count }, i) => (
                <button
                  key={i}
                  className="text-left text-gray-500 text-sm truncate"
                  onClick={() => {
                    setPage(0);
                    setfilter([...filter1, { category, filter }]);
                    //dispatch(setfilter([...filter1, { category, filter }]));
                    setIsShowFilter(false);
                  }}
                >{`${filter ? filter : 'Others'}  (${job_count})`}</button>
              ))}
            {filters?.length == 23 && (
              <button
                className="btn btn-primary btn-xs"
                onClick={() => {
                  // navigate(`/advanced-search/${category}`);
                  navigate(`/advanced-search/${category}`, {
                    state: { filter1 },
                  });
                }}
              >
                Show All
              </button>
            )}
          </div>
        )}
      </div>
      <section class="jobs_grid job_post_search_container">
        <div class="filters_panel">
          <div class="filters_content">
            <JobFilter />
          </div>
        </div>
        <div class="listings_panel">
          <div class="listings_content">
            <SearchResults1 q={{ q: q, l: l || '', filter1 }} />
          </div>
        </div>
      </section>
    </main>
  );
}
