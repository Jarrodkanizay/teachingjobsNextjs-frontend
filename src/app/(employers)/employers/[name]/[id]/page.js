import { notFound } from 'next/navigation';
import { MdLocationPin } from 'react-icons/md';
import { AiOutlineGlobal } from 'react-icons/ai';
import SearchResults from '@/components/SearchResults';
import JobSearchBox2 from '@/components/JobSearchBox2';
// import JobFilter from '@/components/JobFilter';
import Image from 'next/image';
// import Link from 'next/link';
// import { useParams } from 'next/navigation';
import { StarRank } from '@/components/StarRank';

export async function generateMetadata({ params }) {
  const employer = await getEmployer(params.id);
  if (!employer) return { title: 'not found' };
  const { company_name } = employer?.data;
  return {
    title: {
      absolute: `All jobs at ${company_name} `,
    },
    description: `All the university jobs at ${company_name} Academic and administration jobs.  Lecturer and research higher ed careers.`,
    keywords: `${company_name} jobs, ${company_name} careers, ${company_name} positions,  Work at ${company_name}`,
  };
}
async function getEmployer(id) {
  const response = await fetch(
    `https://api.sciencejobs.com.au/api/employer/${id}`,
    { next: { revalidate: 1 } }
  );
  const res = await response.json();
  console.log('===========getEmployer===============', res);
  return res;
}
const Employer = async ({ params }) => {
  const employer = await getEmployer(params.id);
  if (!employer) notFound();
  let content;
  const {
    id,
    ranking,
    logo,
    company_name,
    website,
    company_description,
    location,
    Region,
    country,
  } = employer.data;
  console.log(company_description);
  let location1 = '',
    company_description1 = '';
  if (company_description) {
    company_description1 = company_description;
  } else {
    if (Region) location1 = Region;
    if (country) location1 = country;
    if (location1) {
      company_description1 = `${company_name} is located at ${location1}.`;
    } else {
      company_description1 = `Welcome to ${company_name}. `;
    }
    company_description1 = `${company_description1}<br><br>
      For more information, join our Talent Pool`;
    if (website)
      company_description1 = `${company_description1}, or visit our university website at <a href=${website} style="text-decoration: underline; color: blue" >${website}</a>`;
    company_description1 = `${company_description1}<br><br>
      To advertise a Job for ${company_name}, please <a href="/post-job/" style="text-decoration: underline; color: blue" >click here</a><br><br>
      To join the  ${company_name} Talent Pool, please <a href="#" style="text-decoration: underline; color: blue" >click here</a>
      `;
  }

  //Theme settings defaults
  let employerTheme = 'aj';
  let headerTextColor = 'text-gray-400';
  let headerBG = 'bg-slate-200';
  let logoBG = 'bg-white';
  let profileBG = 'bg-white';
  let panel = '';

  // Theme settings for Queensland University of Technology (QUT)
  if (company_name == 'Queensland University of Technology (QUT)') {
    employerTheme = 'qut';
    headerTextColor = 'text-white';
    headerBG = 'bg-blue-950';
    profileBG = 'bg-blue-950';
    panel = 'p-4 rounded-lg';
  }

  // Theme settings for Bond University
  if (company_name == 'Bond University') {
    employerTheme = 'bond';
    logoBG = 'bg-[#011a4d]';
    profileBG = 'bg-[#f1b821]';
    panel = 'p-4 rounded-lg';
  }

  content = (
    <>
      <div className="flex-col gap-4">
        {/* Header Area */}
        <div className={`media ${headerBG} p-8 mb-4`}>
          <div className="md:flex md:justify-start mx-auto max-w-screen-xl gap-4">
            <div className={`size-[15rem] rounded-md ${logoBG} mr-4 p-3`}>
              <Image
                src={
                  logo
                    ? `https://academicjobs.s3.amazonaws.com/img/university-logo/${logo}`
                    : '/favicon.png'
                }
                width={300}
                height={300}
                //fill={true}
                alt={`${company_name} Logo`}
                className="w-full h-full object-contain "
              />
            </div>
            <div className="md:flex md:flex-col p-4">
              <h1
                className={`text-4xl leading-[2rem] font-bold ${headerTextColor}`}
              >
                {company_name}
              </h1>
              <div className="flex gap-2">
                {/* <p className="text-xl leading-[.75rem] font-bold text-yellow-500 ">
                  Employer Ranking -
                </p>
                <p className="text-2xl  leading-[.75rem]  font-bold text-yellow-500 ">
                  ★ {ranking}
                </p> */}
                <p>
                  <StarRank ranking={ranking} size={30} border="#bbb" />
                </p>
              </div>
              <div
                className={`md:flex-col md:gap-6 ml-[-3px] pt-6 ${headerTextColor}`}
              >
                <div className="flex items-center justify-start gap-2 mb-2">
                  <MdLocationPin size="26" color="#df0000" />
                  {location}
                </div>
                {website && (
                  <div className="flex items-center justify-start gap-2.5">
                    <AiOutlineGlobal size="24" color="#1c2dc7" />
                    <a href={website} className="" target="_blank">
                      {website}
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="jobs_grid job_post_panel_container">
        <div className={`post_panel employer_panel ${employerTheme} mt-6`}>
          {
            <div className={`${panel} ${profileBG}`}>
              <div>
                <div
                  dangerouslySetInnerHTML={{ __html: company_description1 }}
                />
              </div>
            </div>
          }
        </div>
        <div className="listings_panel">
          <div className="listings_content">
            <div className="search_panel">
              <JobSearchBox2 />
            </div>
            <SearchResults q={{ employer_id: id || 0 }} filterOff={true} />
          </div>
        </div>
      </section>
    </>
  );
  return content;
};
export default Employer;
