'use client';
import React, { useState, useEffect, useLayoutEffect, useRef } from 'react';
import SearchResults1 from '@/components/SearchResults1';
import { useSearchParams } from 'next/navigation';
import JobSearchBox from '@/components/JobSearchBox';
import JobFilter from '@/components/JobFilter';
import JobSearchBox2 from '@/components/JobSearchBox2';
import { filterType } from '@/utils/data';
import Link from 'next/link';
import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { BaseApi } from '@/lib/store/Base';
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
  const [filter2, setfilter2] = useState([]);
  const [page, setPage] = useState(0);
  useEffect(() => {
    console.log('===============================', filter1);
    // if (filter1.some(obj => obj.filter.includes("Executive "))) {
    //   setfilterTypes(p => ({ ...p, StudentFocusedSupport: true }))
    // } else {
    //   setfilterTypes(p => ({ ...p, StudentFocusedSupport: false }))
    // }
    // if (filter1.some(obj => obj.filter.includes("All Teaching Jobs"))) {
    //   setfilterTypes(p => ({ ...p, AllTeachingJobs: true }))
    // } else {
    //   setfilterTypes(p => ({ ...p, AllTeachingJobs: false }))
    // }
    setfilterTypes((p) => ({ ...p, StudentFocusedSupport: false }));
    setfilterTypes((p) => ({ ...p, AllTeachingJobs: false }));
    setfilterTypes((p) => ({ ...p, AdministrationSupportJobs: false }));
    setfilterTypes((p) => ({ ...p, FacultyDepartmentJobs: false }));
    switch (true) {
      case filter1.some((obj) => obj.filter.includes('Student')):
        setfilterTypes((p) => ({ ...p, StudentFocusedSupport: true }));
        break;
      case filter1.some((obj) => obj.filter.includes('All Teaching Jobs')):
        setfilterTypes((p) => ({ ...p, AllTeachingJobs: true }));
        break;
      case filter1.some((obj) =>
        obj.filter.includes('Support /Administration')
      ):
        setfilterTypes((p) => ({ ...p, AdministrationSupportJobs: true }));
        break;
      case filter1.some((obj) => obj.filter.includes('Academic / Faculty')):
        setfilterTypes((p) => ({ ...p, FacultyDepartmentJobs: true }));
        break;
      default:
        break;
    }
  }, [filter1]);
  useEffect(() => {
    console.log('===============================', category);
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
    queryKey: ['filter', { category, filter2, q, l }],
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
    JobType: 'Job Type',
    // PositionType: 'Position Type',
    StudentFocusedSupport: 'Student Focused Support',
    AdministrationSupportJobs: 'Administration Support Jobs',
    AllTeachingJobs: 'All Teaching Jobs',
    FacultyDepartmentJobs: 'Faculty/Department',
    AcademicPositionType: 'Academic Position Type',
    EmploymentType: 'Employment Type',
    InstitutionName: 'Institution Name',
    SalaryRange: 'Salary Range in AUD',
    OnsiteRemote: 'Onsite/Remote',
  };
  //const region = useSelector((state) => state.posts.region);
  //const [query, setQuery] = useState(Object.fromEntries(useSearchParams().entries()));
  const [isShowFilter, setIsShowFilter] = useState(false);
  //const filter1 = useSelector((state) => state.posts.filter1);
  //alert(location?.state?.filter1)
  ///console.log('router.query', searchParams);
  return (
    <>
      <main>
        {/* TODO: Add this to the page…
          Page Content
          Title: "Explore Academic Opportunities Worldwide"
          Introduction:
          "Discover your next academic adventure with our comprehensive job board tailored for educators, researchers, and administrative professionals. Whether you're seeking faculty positions, post-doctoral fellowships, or staff roles, our platform connects you with diverse opportunities in universities and research institutions across the globe."
          How It Works:
          "1. Search Efficiently: Use our advanced search filters to narrow down your options by location, discipline, and job type.
          Stay Informed: Create alerts to get notified about the latest opportunities in your field.
          Apply with Ease: Directly submit your application through our platform and track your application status."
          Why Choose Us?:
          "From prestigious universities in the United States and the United Kingdom to emerging research centers in Asia and Europe, we curate the finest academic positions to propel your career forward. Our resources and guides support you at every step of your job search, ensuring you're well-prepared to seize your next opportunity."
          Metadata
          Title Tag: "Teaching Jobs Board - Find Faculty, Research, and Staff Positions"
          Meta Description: "Connect with leading academic institutions worldwide on our job board. Discover faculty, research, and staff positions tailored to your career aspirations. Start your academic job search today."
          Keywords: "academic jobs, faculty positions, research jobs, university careers, higher education employment, academic job search, post-doctoral positions, academic administration"
          FIXME: Additional SEO Tips
          Use Heading Tags: Structure your content using H1 for your main title, followed by H2s and H3s for subheadings to improve readability and SEO.
          Internal Linking: Include links to relevant sections of your site, such as specific job categories, application advice, or user testimonials.
          Call to Action (CTA): Encourage users to register for job alerts or submit their CVs to your database with clear, action-oriented CTAs.
          Responsive Design: Ensure your content is accessible and user-friendly across all devices, enhancing the user experience and SEO.
          Loading Speed: Optimize images and streamline your site's code to ensure fast loading times, crucial for SEO and user retention.
     */}
        <div className="w-full bg-gray-100 py-4 mb-4 mt-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-screen-xl mx-auto ">
              <JobSearchBox forceClass="hidden md:block" />
              <JobSearchBox2 forceClass="block md:hidden" />
            </div>
          </div>
        </div>
        <div className=" mx-auto max-w-5xl  flex flex-col  ">
          {
            // 顶层已选X  top
            filter1.length > 0 && (
              <div className="md:flex md:gap-4 md:flex-wrap pb-2">
                {filter1.map(({ category, filter }, i) => (
                  <button
                    key={i}
                    className="btn  btn-xs text-blue-900 "
                    onClick={() => {
                      const updatedFilter = filter1.filter(
                        (_, index) => index !== i
                      );
                      setPage(0);
                      setfilter(updatedFilter);
                      setCategory('');
                      //dispatch(setfilter(updatedFilter));
                    }}
                  >
                    {`${filter} X`}
                  </button>
                ))}
              </div>
            )
          }
          <div className="md:flex gap-4 flex-wrap hidden ">
            {Object.entries(filterTypes).map(
              (
                [filterType, showYN],
                i // 中层大目录m
              ) => (
                <button
                  key={i}
                  className={`px-2 py-1 text-gray-500  border  rounded-md text-sm font-bold ${category === filterType
                    ? 'text-blue-900  border-orange-500'
                    : 'bg-white border-gray-500'
                    }
                  ${showYN ? 'block' : 'hidden'}
                  `}
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
              )
            )}
          </div>
          <details className="bg-gray-300 open:bg-[amber-200] duration-300 md:hidden">
            <summary className="bg-inherit px-5 py-3 text-lg cursor-pointer pl-8">
              Filters
            </summary>
            <div className="flex gap-4 flex-wrap md:hidden m-4">
              {Object.entries(filterTypes).map(
                (
                  [filterType, showYN],
                  i // 中层大目录m
                ) => (
                  <button
                    key={i}
                    className={`px-2 py-1 text-gray-500  border  rounded-md text-sm font-bold ${category === filterType
                      ? 'text-blue-900  border-orange-500'
                      : 'bg-white border-gray-500'
                      }
                  ${showYN ? 'block' : 'hidden'}
                  `}
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
                )
              )}
            </div>
          </details>
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
                      //setIsShowFilter(false);
                    }}
                  >{`${filter ? filter : 'Others'}  (${job_count})`}</button>
                ))}
              {filters?.length == 23 && (
                <button
                  className="btn btn-primary btn-xs"
                  onClick={() => {
                    //navigate(`/advanced-search/${category}`);
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
        {/* <div className="max-w-4xl mx-auto py-8"></div>
        <div className="max-w-4xl mx-auto py-8"></div>
        <div className="bg-gray-100">
          <div className="container mx-auto py-8">
            <p className="text-lg font-semibold mb-8">
              Search & Find your next academic journey with our cutting-edge job
              board tailored exclusively for higher education, researchers, and
              staff professionals. Whether you're pursuing faculty roles,
              post-doctoral fellowships, or staff positions, our platform
              seamlessly connects you with an array of exciting opportunities
              within universities and research institutions worldwide.
            </p>
            <h2 className="text-2xl font-bold mb-4">How It Benefits You:</h2>
            <ol className="list-decimal pl-6 mb-6">
              <li className="mb-2">
                <span className="font-bold">Efficient Search Tools:</span>{' '}
                Utilize our advanced search filters to streamline your search
                based on location, discipline, and job category, ensuring you
                find the perfect fit for your expertise.
              </li>
              <li className="mb-2">
                <span className="font-bold">Stay Ahead of the Curve::</span> Set
                up customized alerts to stay informed about the latest openings
                in your field, empowering you to stay ahead of the competition.
              </li>
              <li>
                <span className="font-bold">Seamless Application Process:</span>{' '}
                Submit your applications directly through our platform and
                effortlessly track your application status, simplifying the
                entire application process.
              </li>
            </ol>
            <h2 className="text-2xl font-bold mb-4">
              Why Choose Our Platform?
            </h2>
            <p className="mb-4">
              From renowned institutions in the United States and the United
              Kingdom to burgeoning research hubs across Asia and Europe, we
              meticulously curate a diverse range of academic positions to
              elevate your career trajectory. Our wealth of resources and expert
              guides provide invaluable support at every stage of your job
              search, equipping you with the tools and knowledge needed to seize
              your next career opportunity with confidence.
            </p>
          </div>
        </div>
        <div className="container alert mt-16 bg-emerald-100 text-xl mx-4">
          <span>
            <strong>Are you a recruiter?</strong> Try our{' '}
            <Link
              className="link link-aj text-xl"
              href="/quick-job-post-technology"
            >
              Quick Job Post Technology
            </Link>{' '}
            now and see how we make your life easier!
          </span>
          <div className="ml-auto">
            <Link href="/post-a-job" className="btn btn-sm btn-aj">
              Quick Job Post
            </Link>
          </div>
        </div> */}
      </main>
    </>
  );
}
