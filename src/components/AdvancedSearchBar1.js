'use client';
import React, { useState, useEffect, useRef } from 'react';
import { filterType } from '@/utils/data';
import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { BaseApi } from '@/lib/store/Base';
import JobKeywordSearchBlock from '@/components/JobKeywordSearchBlock';
import { regionData } from '@/data/africaPositions';
import Autocomplete, { usePlacesWidget } from 'react-google-autocomplete';
import { toURLParams, loadFromURLParams } from '@/utils/urlParams';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';

export default function Page({ p = {}, forceClass = '' }) {
  const router = useRouter();
  const searchParams = loadFromURLParams(useSearchParams());
  const {
    r = '',
    q = '',
    l = '',
    lon = 0,
    lat = 0,
    filter0 = [],
    currentMiddleCategory,
  } = searchParams;
  let filter1 = [...filter0];
  const filteredData = filter1.filter((item) => {
    return item.category !== 'region';
  });
  filter1 = [...filteredData, { category: 'region', filter: r || 'Global' }];
  // const { region, setQ, setL, setLon, setLat, q, l, lon, lat, category, country, currentMiddleCategory, filter1, setRegion, setFilter1, setCategory, setCountry, setCurrentMiddleCategory } = useStore();
  // let region1
  // if (region.length > 0 && region != "Global") region1 = region
  const keyWordRef = useRef(null);
  const [page, setPage] = useState(0);
  const [selectedFilters, setSelectedFilters] = useState([]);
  // useEffect(() => {
  //   if (p?.filter1) {
  //     setFilter1(p.filter1)
  //   }
  //   if (p?.q) setQ(p?.q)
  // }, []);
  //alert()
  const filterType1 = {
    JobType: true,
    ExecutiveJobs: false,
    AdministrationSupportJobs: false,
    HRJobs: false,
    StaffAdministration: false,
    FacultyDepartmentJobs: false,
    AcademicPositionType: false,
    PositionType: true,
    thirdcategory: false,
  };
  const filterType = {
    Country: false,
    State: true,
    InstitutionName: true,
    EmploymentType: true,
    SalaryRange: true,
    OnsiteRemote: true,
  };
  const [filterTypes1, setfilterTypes1] = useState(filterType1);
  const [filterTypes, setfilterTypes] = useState(filterType);
  const onEditorStateChange1 = (suggestion) => {};
  const [category, setCategory] = useState('');
  //const [currentMiddleCategory, setCurrentMiddleCategory] = useState('');
  const [filter2, setfilter2] = useState([]);
  //alert(r)
  useEffect(() => {
    //alert(category)
    //setCurrentMiddleCategory('')
    //setSearchJobQuery({ filter1 })
    setfilterTypes1((p) => ({ ...p, ExecutiveJobs: false }));
    setfilterTypes1((p) => ({ ...p, PositionType: false }));
    setfilterTypes1((p) => ({ ...p, HRJobs: false }));
    setfilterTypes1((p) => ({ ...p, AdministrationSupportJobs: false }));
    setfilterTypes1((p) => ({ ...p, FacultyDepartmentJobs: false }));
    setfilterTypes1((p) => ({ ...p, AcademicPositionType: false }));
    setfilterTypes1((p) => ({ ...p, thirdcategory: false }));
    
    if (r === 'global')
      setfilterTypes((p) => ({ ...p, Country: true }));
    if (category === 'AcademicPositionType')
      setfilterTypes1((p) => ({ ...p, thirdcategory: true }));
    if (filter1?.some((obj) => obj.filter?.includes('Executive '))) {
      setfilterTypes1((p) => ({ ...p, ExecutiveJobs: true }));
    }
    if (filter1?.some((obj) => obj.filter?.includes('Human Resources'))) {
      setfilterTypes1((p) => ({ ...p, HRJobs: true }));
    }
    if (
      filter1?.some((obj) => obj.filter?.includes('Staff / Administration'))
    ) {
      setfilterTypes1((p) => ({ ...p, AdministrationSupportJobs: true }));
    }
    if (filter1?.some((obj) => obj.filter?.includes('Academic / Faculty'))) {
      setfilterTypes1((p) => ({ ...p, AcademicPositionType: true }));
      setfilterTypes1((p) => ({ ...p, PositionType: true }));
    }
  }, [JSON.stringify(filter1)]);

  useEffect(() => {
    setfilter2(filter1);
  }, [category]);
  // useEffect(() => {
  //   console.log("keywordSuggestion21", q);
  // }, [q]);
  // useEffect(() => {
  //   if (region == 'Global') setfilterTypes((p) => ({ ...p, Country: true }));
  // }, []);
  const {
    isPending: isPendingQty,
    isError: isErrorQty,
    isSuccess: isSuccessQty,
    error: errorQty,
    data: filters,
    isFetching: isFetchingQty,
    isPlaceholderData: isPlaceholderDataQty,
  } = useQuery({
    queryKey: ['filter', { category, filter2, q, l, lon, lat }],
    queryFn: async () => {
      const response = await BaseApi.post('/filters', {
        currentMiddleCategory,
        category,
        filter1,
        q,
        l,
        lon,
        lat,
      });
      return response.data.data;
    },
    enabled: category !== '',
  });

  const filterValues9 = {
    Country: 'Country',
    State: 'State',
    City: 'City',
    JobType: 'Job Type',
    PositionType: 'Position Type',
    ExecutiveJobs: 'Executive Jobs',
    AdministrationSupportJobs: 'Staff/Administration Jobs',
    HRJobs: 'HR Specialty',
    FacultyDepartmentJobs: 'Faculty/Department',
    AcademicPositionType: 'Faculty/Department',
    EmploymentType: 'Employment Type',
    InstitutionName: 'Institution Name',
    SalaryRange: 'Salary Range',
    OnsiteRemote: 'Onsite/Remote',
    thirdcategory: 'thirdcategory',
  };

  const [isShowFilter, setIsShowFilter] = useState(false);
  const handleCheckboxChange = (filter) => {
    const isChecked = selectedFilters.includes(filter);
    let updatedFilters;
    if (!Array.isArray(searchParams.filter1)) {
      searchParams.filter1 = []; // Initialize as an array if it's not already
    }
    const currentURL = window.location.pathname;
    if (isChecked) {
      updatedFilters = selectedFilters.filter((item) => item !== filter);
      const updatedFilter1 = filter1.filter((f) => f.filter !== filter);
      router.push(
        `${currentURL}?${toURLParams({
          ...searchParams,
          currentMiddleCategory: filter,
          filter0: updatedFilter1,
        })}`,
        { scroll: false }
      );
    } else {
      updatedFilters = [...selectedFilters, filter];
      router.push(
        `${currentURL}?${toURLParams({
          ...searchParams,
          currentMiddleCategory: filter,
          filter0: [...searchParams.filter0, { category, filter }],
        })}`,
        { scroll: false }
      );
    }
    setSelectedFilters(updatedFilters);
  };

  return (
    <>
      <div
        className={`mx-auto bg-white rounded-xl shadow-xl p-4 max-w-5xl  flex flex-col ${forceClass}`}
      >
        <div className="w-full pt-2">
          <div className=" mx-auto">
            <div className="max-w-screen-xl">
              <div className={` py-4`}>
                <div className="lg:max-w-screen-lg mx-auto">
                  <div className="join mx-auto w-full shadow-xl flex flex-col md:flex-row">
                    <Autocomplete
                      className="input input-bordered join-item w-full md:text-left text-center rounded-xl"
                      style={{ width: '100%' }}
                      apiKey="AIzaSyCKEfoOIPz8l_6A8BByD3b3-ncwza8TNiA"
                      onPlaceSelected={(place) => {
                        const lat = place.geometry.location.lat();
                        const lon = place.geometry.location.lng();
                        const currentURL = window.location.pathname;
                        router.push(
                          `${currentURL}?${toURLParams({
                            ...searchParams,
                            lon,
                            lat,
                          })}`,
                          { scroll: false }
                        );
                      }}
                      options={{
                        types: ['geocode', 'establishment'],
                      }}
                    />
                  </div>
                  {filter1.length > 0 && (
                    <div className="md:flex md:flex-wrap pb-2 p-2">
                      {filter1.map(({ category1, filter }, i) => (
                        <button
                          key={i}
                          className="btn btn-xs bg-sky-900 text-white mr-2"
                          onClick={() => {
                            const updatedFilter = filter1.filter(
                              (_, index) => index !== i
                            );
                            setPage(0);
                            const currentURL = window.location.pathname;
                            router.push(
                              `${currentURL}?${toURLParams({
                                ...searchParams,
                                filter0: updatedFilter,
                              })}`,
                              { scroll: false }
                            );
                            setCategory('');
                            setSelectedFilters(
                              selectedFilters.filter((item) => item !== filter)
                            );
                          }}
                        >
                          {`${filter} X`}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-4 flex-wrap p-2 border-b border-grey">
          {Object.entries(filterTypes1).map(([filterType, showYN], i) => (
            <React.Fragment key={i}>
              <button
                key={i}
                className={`px-2 py-1 text-gray-500 border rounded-md text-sm font-bold ${category === filterType
                  ? 'bg-amber-500 text-white border-amber-500'
                  : ' border-gray-500'
                  }
                  ${showYN ? 'block' : 'hidden'}
                  ${filterType === 'JobType'
                    ? 'bg-[#f4a10c]  md:w-auto text-white  animate-pulse font-bold shadow-md '
                    : ' border-gray-500'
                  }
                  
                  `}
                onClick={() => {
                  if (category === filterType) {
                    setIsShowFilter((prev) => !prev);
                  } else {
                    setIsShowFilter(true);
                  }
                  setCategory(filterType);
                }}
              >
                {filterValues9[filterType] === 'thirdcategory'
                  ? `${currentMiddleCategory} Specialty`
                  : filterValues9[filterType]}
              </button>
            </React.Fragment>
          ))}
        </div>
        <div className="flex gap-4 flex-wrap p-2">
          {Object.entries(filterTypes).map(
            (
              [filterType, showYN],
              i // 中层大目录下
            ) => (
              <React.Fragment key={i}>
                <button
                  key={i}
                  className={`px-2 py-1 text-gray-500 border rounded-md text-sm font-bold ${
                    category === filterType
                      ? 'bg-amber-500 text-white border-amber-500'
                      : 'bg-white border-gray-500'
                  }
                  ${showYN ? 'block' : 'hidden'}`}
                  onClick={() => {
                    if (category === filterType) {
                      setIsShowFilter((prev) => !prev);
                    } else {
                      setIsShowFilter(true);
                    }
                    setCategory(filterType);
                  }}
                >
                  {filterValues9[filterType] === 'thirdcategory'
                    ? currentMiddleCategory
                    : filterValues9[filterType]}
                </button>
              </React.Fragment>
            )
          )}
          {/* <JobKeywordSearchBlock
              field="Enter a keyword"
              customKey="Enter a keyword"
              label="Enter a keyword"
              forceClass="mb-6"
              onChange={onEditorStateChange1}
            /> */}
        </div>
        {isShowFilter && (
          <>
            <div className="p-2 w-full max-h-64 overflow-y-scroll custom-scrollbar rounded-xl">
              {filters?.length > 0 && // 低层小目录b
                filters.map(({ filter, job_count }, i) => (
                  <label
                    key={i}
                    className="block text-left text-gray-500 text-sm p-2"
                  >
                    <input
                      type="checkbox"
                      value={filter}
                      checked={selectedFilters.includes(filter)}
                      onChange={() => handleCheckboxChange(filter)}
                      className="mr-2"
                    />
                    {`${filter ? filter : 'Others'} (${job_count})`}
                  </label>
                ))}
            </div>
          </>
        )}
      </div>
    </>
  );
}
