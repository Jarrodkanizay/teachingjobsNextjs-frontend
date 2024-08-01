'use client';
import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { BaseApi } from '@/lib/store/Base';
import { toURLParams, loadFromURLParams } from '@/utils/urlParams';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import Autocomplete from 'react-google-autocomplete';
// import JobAlertsForm from '@/components/profile/JobAlertsForm';

const GOOGLE_GEOCODING_API_URL =
  'https://maps.googleapis.com/maps/api/geocode/json';

export default function Page({ p = {}, forceClass = '', sidebarView = false }) {
  const router = useRouter();
  const searchParams = loadFromURLParams(useSearchParams());
  let searchParams1 = {};
  if (Object.keys(p).length !== 0) {
    searchParams1 = { ...searchParams, ...p };
  } else {
    searchParams1 = { ...searchParams };
  }
  const {
    q = '',
    lon = 0,
    lat = 0,
    currentMiddleCategory,
    r: paramR,
    filter0: searchFilter0,
  } = searchParams1;
  const r = paramR || 'Global';
  const [filter0, setFilter0] = useState(
    searchFilter0 && searchFilter0.length > 0
      ? searchFilter0
      : p.filter1 && p.filter1.length > 0
      ? p.filter1
      : []
  );
  const filter0Ref = useRef(filter0); // Use useRef to keep a reference to filter0
  const l = p.l || searchParams.l || '';

  useEffect(() => {
    filter0Ref.current = filter0; // Update the ref whenever filter0 changes
  }, [filter0]);

  const updateURLParams = async () => {
    if (l && l.toLowerCase() !== 'tasmania') {
      try {
        const response = await axios.get(GOOGLE_GEOCODING_API_URL, {
          params: {
            address: l,
            key: 'AIzaSyCKEfoOIPz8l_6A8BByD3b3-ncwza8TNiA',
          },
        });
        const { results } = response.data;
        if (results.length > 0) {
          const { lat, lng } = results[0].geometry.location;
          const currentURL = window.location.pathname;
          const newSearchParams = {
            ...searchParams1,
            r,
            l,
            lon: lng,
            lat,
            filter0: filter0Ref.current, // Use the ref to get the latest value
          };
          router.replace(`${currentURL}?${toURLParams(newSearchParams)}`, {
            scroll: false,
          });
        } else {
          console.warn('No results found for the specified location');
        }
      } catch (error) {
        console.error('Error fetching coordinates:', error);
      }
    }
  };

  useEffect(() => {
    if (l) {
      updateURLParams();
    } else {
      const currentURL = window.location.pathname;
      const newSearchParams = {
        ...searchParams1,
        currentMiddleCategory,
        r,
        l,
        lon,
        lat,
        filter0: filter0Ref.current, // Use the ref to get the latest value
      };
      router.replace(`${currentURL}?${toURLParams(newSearchParams)}`, {
        scroll: false,
      });
    }
  }, [l, filter0]);

  let filter1 = [...filter0];
  console.log(101, { filter1 })
  // const filteredData = filter1.filter((item) => item.category !== 'region');
  // if (!r || r === 'global' || r === 'Global') {
  //   filter1 = [...filteredData];
  // } else {
  //   filter1 = [...filteredData, { category: 'region', filter: r }];
  // }

  const keyWordRef = useRef(null);
  const [page, setPage] = useState(0);
  const [selectedFilters, setSelectedFilters] = useState([]);

  useEffect(() => {
    const initialFilters = filter1.map(({ category, filter }) => ({
      category,
      filter,
    }));
    setSelectedFilters(initialFilters);
  }, []); // Remove isUrlLoaded dependency

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
  const [filter2, setfilter2] = useState([]);

  useEffect(() => {
    console.log({ filter1 })
    setfilterTypes1((p) => ({ ...p, ExecutiveJobs: false }));
    setfilterTypes1((p) => ({ ...p, PositionType: false }));
    setfilterTypes1((p) => ({ ...p, HRJobs: false }));
    setfilterTypes1((p) => ({ ...p, AdministrationSupportJobs: false }));
    setfilterTypes1((p) => ({ ...p, FacultyDepartmentJobs: false }));
    setfilterTypes1((p) => ({ ...p, AcademicPositionType: false }));
    setfilterTypes1((p) => ({ ...p, thirdcategory: false }));
    if (r === 'global' || r === 'Global' || r === '' || r === null)
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
    if (filter1?.some((obj) => obj.filter?.includes('Teaching and Lecturing'))) {
      setfilterTypes1((p) => ({ ...p, AcademicPositionType: true }));
      setfilterTypes1((p) => ({ ...p, PositionType: true }));
    }
  }, [JSON.stringify(filter1)]);

  useEffect(() => {
    setfilter2(filter1);
  }, [category]);

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
      try {
        const response = await BaseApi.post('/filters', {
          currentMiddleCategory,
          category,
          filter1,
          q,
          l,
          lon,
          lat,
        });
        return response.data.data || [];
      } catch (error) {
        console.error('Error fetching filters:', error);
        return [];
      }
    },
    enabled: category !== '',
  });

  const filterValues9 = {
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
  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleCheckboxChange = (filter) => {
    console.log({ filter })
    const isChecked = selectedFilters.some((item) => item.filter === filter);
    let updatedFilters;
    if (!Array.isArray(searchParams.filter1)) {
      searchParams.filter1 = []; 
    }
    const currentURL = window.location.pathname;
    if (isChecked) {
      updatedFilters = selectedFilters.filter((item) => item.filter !== filter);
      const updatedFilter0 = filter0.filter((f) => f.filter !== filter);
      setFilter0(updatedFilter0);
      const newSearchParams = {
        ...searchParams,
        r,
        l,
        filter0: updatedFilter0,
      };
      router.replace(`${currentURL}?${toURLParams(newSearchParams)}`, {
        scroll: false,
      });
    } else {
      updatedFilters = [...selectedFilters, { category, filter }];
      const updatedFilter0 = [...filter0, { category, filter }];
      setFilter0(updatedFilter0);
      const newSearchParams = {
        ...searchParams,
        r,
        l,
        filter0: updatedFilter0,
      };
      router.replace(`${currentURL}?${toURLParams(newSearchParams)}`, {
        scroll: false,
      });
    }
    setSelectedFilters(updatedFilters);
  };

  return (
    <>
      <div
        className={`mx-auto bg-white rounded-xl shadow-xl p-4 max-w-5xl flex flex-col mb-8  ${forceClass}`}
      >
        <div className="w-full pt-2">
          <div className="mx-auto">
            <div className="max-w-screen-xl">
              <div className="py-4">
                <div className="lg:max-w-screen-lg mx-auto">
                  <div className="join mx-auto w-full flex flex-col md:flex-row">
                    <Autocomplete
                      id="autocomplete"
                      className="search_field input input-bordered join-item w-full md:text-left text-center"
                      style={{
                        width: '100%',
                        borderTopRightRadius: '0.75rem',
                        borderBottomRightRadius: '0.75rem',
                      }}
                      apiKey="AIzaSyCKEfoOIPz8l_6A8BByD3b3-ncwza8TNiA"
                      onPlaceSelected={(place) => {
                        if (place.geometry && place.geometry.location) {
                          const lat = place.geometry.location.lat();
                          const lon = place.geometry.location.lng();
                          const currentURL = window.location.pathname;
                          const newSearchParams = {
                            ...searchParams,
                            r,
                            l,
                            lon,
                            lat,
                            filter0: filter0Ref.current, // Use the ref to get the latest value
                          };
                          router.replace(
                            `${currentURL}?${toURLParams(newSearchParams)}`,
                            { scroll: false }
                          );
                        } else {
                          console.warn(
                            'Selected place does not have geometry information'
                          );
                        }
                      }}
                      options={{
                        types: ['geocode', 'establishment'],
                      }}
                    />

                    {/* Job alert create button here */}
                    <button
                      className="btn bg-amber-500 text-white mt-4 md:ml-2 md:mt-0 rounded-r-xl rounded-l-[0]"
                      onClick={() => setIsFormVisible(true)} // Set form visibility to true on button click
                    >
                      Create Job Alert
                    </button>
                  </div>

                  {selectedFilters.length > 0 && !sidebarView && (
                    <div className="md:flex md:flex-wrap pb-2 p-2">
                      {selectedFilters.map(({ category, filter }, i) => (
                        <button
                          key={i}
                          className="btn btn-xs bg-sky-900 text-white mr-2"
                          onClick={() => {
                            const updatedFilters = selectedFilters.filter(
                              (_, index) => index !== i
                            );
                            setPage(0);
                            // Update filter0 by filtering out the removed filter
                            const updatedFilter = filter1.filter(
                              (filterItem) => filterItem.filter !== filter
                            );
                            const currentURL = window.location.pathname;
                            const newSearchParams = {
                              ...searchParams,
                              r,
                              l,
                              filter0: updatedFilter,
                            };
                            router.replace(
                              `${currentURL}?${toURLParams(newSearchParams)}`,
                              { scroll: false }
                            );
                            setCategory('');
                            setSelectedFilters(updatedFilters);
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
        {!sidebarView && ( // 中层大目录上
          <div className="flex gap-4 flex-wrap p-2 border-b border-grey">
            {Object.entries(filterTypes1).map(([filterType, showYN], i) => (
              <React.Fragment key={i}>
                <button
                  key={i}
                  className={`px-2 py-1 text-gray-500 border rounded-md text-sm font-bold ${
                    category === filterType
                      ? 'bg-amber-500 text-white border-amber-500'
                      : ' border-gray-500'
                  }
                  ${showYN ? 'block' : 'hidden'}
                  ${
                    filterType === 'JobType'
                      ? 'bg-[#f4a10c] md:w-auto text-white animate-pulse font-bold shadow-md'
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
        )}
        {!sidebarView && (
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
          </div>
        )}
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
                      checked={selectedFilters.some(
                        (item) => item.filter === filter
                      )}
                      onChange={() => handleCheckboxChange(filter, category)}
                      className="mr-2"
                    />
                    {`${filter ? filter : 'Others'} (${job_count})`}
                  </label>
                ))}
            </div>
          </>
        )}
        {sidebarView && (
          <button
            className=" self-end underline text-gray-400 text-base md:pr-6 font-bold hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-l from-green-400 via-green-400 to-sky-300"
            onClick={async (e) => {
              e.preventDefault();
              const params = new URLSearchParams({
                q: encodeURIComponent(keyWordRef.current?.value.trim() || ''),
                ...searchParams1,
                filter0: JSON.stringify(filter0),
              });
              router.push(`/university-jobs?${params.toString()}`);
            }}
          >
            Advanced Search
          </button>
        )}
      </div>

      {/* Conditionally render JobAlertsForm with filters */}
    </>
  );
}
