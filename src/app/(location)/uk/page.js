//import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import JobSearchBox from '@/components/JobSearchBox';
import JobFilter from '@/components/JobFilter';
import UK from '@/components/topUnis/UK';
//import { useParams } from 'next/navigation'
export const metadata = {
  title: {
    absolute: '  Teaching Jobs UK',
  },
  description:
    'Find your ideal academic jobs in UK and join the vibrant academic community at UK university jobs. We have the perfect opportunity for you whatever the job. ',
  keywords: 'Teaching Jobs UK. academicjobs, academia jobs',
};
export default function Page() {
  // useEffect(() => {
  //   window.scrollTo(0, 0)
  // }, []);

  return (
    <div>
      <div className="pt-[8rem] flex flex-col items-center justify-center">
        <Image
          src="https://academicjobs.s3.amazonaws.com/img/_misc/simply-the-best-uk-min.png"
          alt="TeachingJobs UK Logo"
          className=" w-[20rem] mb-[1rem] "
          width={330}
          height={220}
        />
      </div>
      <JobSearchBox l="United Kingdom" />

      <h3 className="text-center ">
        We Are United Kingdom's University Job Website
      </h3>

      <div className=" mt-[5rem] ">
        <ul className="faculty-container flex flex-wrap gap-4 items-center justify-center text-[#e74b7f] ">
          <ul className="w-full  md:w-auto flex items-center  justify-center gap-4">
            <li>
              <Link href="/UK/lecturer/"> Lecturer</Link>
            </li>
            <li>
              <Link href="/UK/research/"> Research </Link>
            </li>
            <li>
              <Link href="/UK/professor/"> Professor</Link>
            </li>
          </ul>
          <li>
            <Link href="/UK/executive/"> Executive</Link>
          </li>
          <li>
            <Link href="/UK/admin/">Admin</Link>
          </li>
          <li>
            <Link href="/UK/hr-jobs/"> HR</Link>
          </li>
          <li>
            <Link href="/UK/student/"> Student</Link>
          </li>
        </ul>
      </div>

      <div className=" mt-2 ">
        <ul className="faculty-container flex  gap-4 items-center justify-center text-[#e74b7f] ">
          <li>
            <Link href="/online/"> Online </Link>
          </li>
          <li>
            <Link href="/jobs/remote/"> Remote</Link>
          </li>

          <li>
            <Link href="/jobs/full-time/">Full-Time</Link>
          </li>
          <li>
            <Link href="/jobs/part-time/"> Part-Time</Link>
          </li>
          <li>
            <Link href="/jobs/casual/"> Casual</Link>
          </li>
        </ul>
      </div>

      <div className="content-grid mx-auto py-5">
        <div
          id="section"
          className=" full-width py-4 full-width mb-[175px] bg-slate-200"
        >
          <div className="md:hero-content flex-col lg:flex-row mx-auto md:items-start py-12  ">
            <h1 className="text-3xl font-normal md:text-right text-gray-400 m-0 pb-8 px-7 md:px-0 ">
              <span className="md:text-6xl font-bold  md:text-right text-gray-500 pb-4 ">
                ACADEMIC&nbsp;JOBS United Kingdom:
              </span>{' '}
              <br />
            </h1>

            <div>
              <p className="px-7 mb-4 mt-1">
                <p className="px-7">
                  The number 1 job board for academics can help you find your
                  dream academic position through our services. At Teaching
                  Jobs, we value our customers interests by providing the best
                  career choices possible, making us the best job board for
                  higher education jobs globally!
                </p>
              </p>

              {/* <div className="text-[#e74b7f]  flex flex-col items-center justify-center  text-2xl pt-8  animate-bounce h-6" >
        <a>▼</a></div> */}

              {/* <div className="bg-gradient-to-b to-white from-orange-100 rounded-t-[3rem] mt-[-1rem]"> */}
              {/* <div className=" max-w-screen-xl mx-auto">
          <div className="blurb text-left py-8 content-gridmt-[10rem] ">
            <h1 className="py-3 px-7 bg-[#e74b7f] text-white rounded-3xl font-bold text-2xl md:text-2xl lg:text-2xl  shadow-xl">Teaching Jobs UK</h1>
            <div className="newLine mb-4">
              <p className="font-semibold"></p>
              <p className="font-semibold"></p> */}
              {/* </div> */}
              {/* <div className="newLine">
              <p className="px-7 pb-8">To start your UK academic jobs search, you can browse through our listings of university jobs, research jobs, science jobs and managerial jobs in leading universities and top global employerss. You can also find PhDs, studentships, scholarships and fellowships to support your academic career. You can search by keywords, disciplines, locations, salary bands, contract types and more.
                Find your ideal academia jobs and join the vibrant academic community of university jobs uk. We have the perfect opportunity for you whatever the jobs in academia you are seeking.</p> */}
            </div>

            <p className="font-semibold"></p>
          </div>

          <div className="  flex-wrap text-center gap-6 px-7 pb-4  text-gray-400">
            <Link href="/russelgroup/"> Russel Group</Link>{' '}
          </div>
        </div>

        <div id="myUniversity" class="myUniversity">
          <div class="widget__text-block1">
            <div>
              <h2 className="">
                Teaching Jobs UK: Jobs in Academia by University{' '}
              </h2>
              <UK id="section2" heading="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
