import { notFound } from 'next/navigation';
import SearchResults from '@/components/SearchResults';
import JobSearchBox2 from '@/components/JobSearchBox2';
import HeadlineUpgrade from '@/components/forms/HeadlineUpgrade';
import HeadlineLinks from '@/components/HeadlineLinks';
import InputBlock from '@/components/forms/InputBlock';
import Link from 'next/link';
import Image from 'next/image';
import { BsFillShareFill } from 'react-icons/bs';
import Button from './Button';
import { CloudCog } from 'lucide-react';
import RequestFullJobForm from '@/components/forms/RequestFullJobForm';
import { useSearchParams } from 'next/navigation';
import MapMarkerIcon from '@/components/icons/MapMarkerIcon';
import FavoriteButton from '@/components/FavoriteButton';
import { StarRank } from '@/components/StarRank';
import { baseURL } from '@/lib/store/Base';
import ShareButton from '@/components/ShareButton';

export async function generateMetadata({ params }) {
  const job = await getJob(params.id);
  if (!job) return { title: 'not found' };
  const { title, company_name, location } = job?.data;
  return {
    title: `${title} | ${company_name}`,
    description: `Explore our ${title} job opportunities available at ${company_name}! Apply to become a ${title} today. Apply for an academic job today!`,
    keywords: `${title} jobs| ${company_name} university jobs| ${location} university jobs`,
    robots: {
      index: true,
    },
  };
}

async function getJob(id) {
  //const response = await BaseApi.get(`/job/${id}`);
  const response = await fetch(
    `${baseURL}/job/${id}`,
    { next: { revalidate: 0 } }
  );
  const res = await response.json();
  // console.log(res);
  return res;
}
const JobDetailPage = async ({ params, searchParams }) => {
  //const searchParams = useSearchParams();
  const active = searchParams['active'] || false;
  console.log('====444444433333333333333333333333active=====');
  console.log(searchParams);
  console.log('====active=====', active);
  const job = await getJob(params.id);
  console.log('job', job);
  if (!job) notFound();
  const {
    employer_id,
    id: jobId,
    title,
    location,
    activation_date,
    expiration_date,
    description,
    how_to_apply,
    featured,
    clientType,
    headlineOnly,

    employer: { company_name, logo, ranking },
  } = job.data;
  console.log('ranking==============', ranking);


  let bgColor = 'bg-white';
  if (company_name === 'Bond University') bgColor = 'bg-[#011a4d]';

  return (
    <>
      {/* {console.log('Top 20 ' + { topTwentyUnis })} */}
      <div className="bg-white relative content-grid mx-auto">
        <div className="border-b full-width">
          <div className="md:flex items-center p-4 gap-8">
            <div className="flex justify-center">
              <Link
                href={`/employers/${company_name
                  ?.replace(/\W+/g, '-')
                  .toLowerCase()}/${employer_id}/`}
              >
                <div
                  className={` rounded-lg p-4 bg-white`}
                >
                  <Image
                    src={`https://academicjobs.s3.amazonaws.com/img/university-logo/${logo || 'favicon.jpg'
                      }`}
                    alt={company_name}
                    width={170}
                    height={170}
                  />
                </div>
              </Link>
            </div>
            <div className="w-[85%]">
              <div className="flex">

                <h1 className="flex-1 text-2xl font-bold mb-2 text-black">{title}</h1>
                <div className="applications_close_panel w-[13rem] h-[4rem] mt-3 hidden lg:block">
                  <h6>Applications Close</h6>
                  <div className="text-sm">
                    {expiration_date ? (
                      <time>
                        {new Date(expiration_date).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric',
                        })}
                      </time>
                    ) : (
                      <p className="text-center">TBA</p>
                    )}
                  </div>
                </div>
              </div>
              <div className="job_post_header_panel">
                <h3 className="text-sm text-gray-600 m-0">{company_name}</h3>
                <h4 className="text-gray-700 font-light text-sm m-0">
                  {location}
                </h4>
                <section className="ranking flex flex-row">
                  <StarRank ranking={ranking} />

                </section>
                <div className="lg:hidden block flex justify-center">
                  <section className="mt-2 gap-2 w-[20rem] ">
                    <div className="lg:hidden block">
                      <div className=" ">
                        <p className="text-sm underline font-light"> Applications Close: {expiration_date ? (
                          <time>
                            {new Date(expiration_date).toLocaleDateString('en-US', {
                              month: 'short',
                              day: 'numeric',
                              year: 'numeric',
                            })}
                          </time>
                        ) : (
                          <p className="text-center">TBA</p>
                        )}</p>

                      </div>
                    </div>
                  </section>
                </div>
              </div>

              <div className="flex mt-2 pl-2 items-center justify-start md:gap-3 gap-2 ml-[-10px] max-[395px]:ml-[-17px]">
                {headlineOnly ? (
                  <Link href="#request-job-post" className="btn btn-aj h-[32px]">
                    Apply Now
                  </Link>
                ) : (
                  <Button
                    title={title}
                    company_name={company_name}
                    how_to_apply={how_to_apply}
                  />
                )}
                <ShareButton jobId={jobId}/>

                <FavoriteButton />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* job post header: organization, location closing date of job post  */}

      {/* main body of job post */}
      <section className="jobs_grid job_post_panel_container">
        <article className="post_panel mt-[26px]" data-id={jobId}>
          <div className="post_content bg-white border-2 rounded-lg">
            <div className="post" data-id={jobId}>
              {
                <>
                  <div
                    className={`${!headlineOnly || active ? 'job-content block' : 'hidden'
                      }`}
                    dangerouslySetInnerHTML={{ __html: description }}
                  />
                  <div
                    className={`flex flex-col ${headlineOnly && !active ? 'block' : 'hidden'
                      }`}
                  >
                    <span className="text-gray-700 text-[16px] m-0 mb-6">This job posting has not been sponsored, enter your email below to be sent the full post.</span>

                    <div className="flex justify-center items-center flex-wrap">

                      <div className="grow">
                        <RequestFullJobForm
                          formName="Request Full Job Post"
                          buttonText="Please Email Full Job Post"
                          thankYouMessage="Done! You will receive the full job post shortly."
                          formType="job-request"
                          jobId={jobId}
                          employer={company_name}
                          jobTitle={title}
                          placeholder="Enter email for full job post"
                        />
                      </div>
                    </div>
                    <details className="mt-[80px]">
                      <summary class="text-[16px] text-sky-500 hover:text-gray-600 cursor-pointer px-4 py-2 rounded-md text-center">
                        Recruiter Information Only
                      </summary>
                      <div class="px-4 py-2">
                        <HeadlineUpgrade
                          clientType={clientType}
                          jobId={jobId}
                          employer={company_name}
                          jobTitle={title}
                        />
                      </div>
                    </details>{' '}
                  </div>
                  {/* </div> */}
                </>
              }
              {/* <div className="mt-5 mb-0 text-right">Join Talent Pool</div> */}
            </div>
          </div>
        </article>
        <div className="listings_panel">
          <div className="listings_content">
            <div className="search_panel">
              <JobSearchBox2 q={title} />
            </div>
            <SearchResults
              q={title}
              filterOff={true}
              searchMessage="Related Jobs Found"
            />
          </div>
        </div>
      </section>
      {new Date(expiration_date) < new Date() && expiration_date && (
        <div className="bg-opacity-50 bg-red-500 text-white text-4xl px-8 py-8 rounded-full absolute top-[200px] left-[50%] transform -translate-x-1/2 translate-y-1/2 rotate-45 skew-y-0">
          Job Fulfilled By TeachingJobs.com
        </div>
      )}
    </>
  );
};
export default JobDetailPage;
