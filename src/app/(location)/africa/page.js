//import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import JobSearchBox from '@/components/JobSearchBox';
import JobFilter from '@/components/JobFilter';
import Africa from '@/components/topUnis/Africa';
//import { useParams } from 'next/navigation'
export const metadata = {
  title: {
    absolute: 'Teaching Jobs Africa',
  },
  description:
    'Find your dream academic job in Africa and join the leading universities at Africa university jobs with professor, researcher or manager roles.',
  keywords:
    'Teaching Jobs Africa, academic jobs in Africa, Africa university jobs',
};
export default function Page() {
  return (
    <div>
      <div className="pt-[8rem] flex flex-col items-center justify-center">
        <Image
          src="https://academicjobs.s3.amazonaws.com/img/_misc/simply-the-best-africa-min.png"
          alt="TeachingJobs Africa Logo"
          className=" w-[20rem] mb-[1rem] "
          width={330}
          height={220}
        />
      </div>
      <JobSearchBox l="Africa" />

      <h3 className="text-center "> We Are Africa's University Job Website</h3>

      <div className=" mt-[5rem] ">
        <ul className="faculty-container flex flex-wrap gap-4 items-center justify-center text-[#e74b7f] ">
          <ul className="w-full  md:w-auto flex items-center  justify-center gap-4">
            <li>
              <Link href="/Africa/lecturer/"> Lecturer</Link>
            </li>
            <li>
              <Link href="/Africa/research/"> Research </Link>
            </li>
            <li>
              <Link href="/Africa/professor/"> Professor</Link>
            </li>
          </ul>
          <li>
            <Link href="/Africa/executive/"> Executive</Link>
          </li>
          <li>
            <Link href="/Africa/admin/">Admin</Link>
          </li>
          <li>
            <Link href="/Africa/hr-jobs/"> HR</Link>
          </li>
          <li>
            <Link href="/Africa/student/"> Student</Link>
          </li>
        </ul>
      </div>

      <div className=" mt- ">
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
          className=" full-width py-4  full-width mb-[175px] bg-slate-200"
        >
          <div className="md:hero-content flex-col lg:flex-row mx-auto md:items-start py-12  ">
            <h1 className="text-3xl font-normal md:text-right text-gray-400 m-0 pb-8 px-7 md:px-0 ">
              <span className="md:text-6xl font-bold  md:text-right text-gray-500 pb-4 ">
                ACADEMIC&nbsp;JOBS Africa:
              </span>
            </h1>

            <div>
              <p className="px-7 mb-4 mt-1">
                Explore what academic positions the United Kingdom has to offer
                through Teaching Jobs! We value the importance of an easy to
                navigate website where your future academic career path is one
                click away. Teaching Jobs provides an extensive list of
                opportunities for the future of your career in education,
                carefully sectioning the top Higher Ed jobs to curate the best
                fitting position for you.{' '}
              </p>
              <p className="px-7">
                The number 1 job board for academia in Africa can help you find
                your perfect academic job through our services. At Teaching
                Jobs, we value our customers' interests by providing the best
                career choices possible, making us the best job board for higher
                education positions globally!{' '}
              </p>
            </div>
          </div>

          {/* <div className="text-[#e74b7f]  flex flex-col items-center justify-center  text-2xl pt-8  animate-bounce h-6" >
        <a>▼</a></div> */}
          {/* <div className="bg-gradient-to-b to-white from-orange-100 rounded-t-[3rem] mt-[-1rem]"> */}
          {/* <div className=" max-w-screen-xl mx-auto">
          <div className="blurb text-left py-8 content-gridmt-[30rem] ">
            <h1 className="py-3 px-7 bg-[#e74b7f] text-white rounded-3xl font-bold text-2xl md:text-2xl lg:text-2xl shadow-xl">Teaching Jobs Africa: The Best Uni Jobs</h1>
            <div className="newLine mb-4">
              <p className="font-semibold"></p>
              <p className="font-semibold"></p>
            </div>
            <div className="newLine">
              <p className="px-7 pb-8">Teaching Jobs Africa is a platform that connects you with the best academic employers and candidates. You can browse through hundreds of job listings in various disciplines and fields, such as engineering, health sciences, humanities, social sciences, education, and more. You can also filter your search by country, region, institution type, salary range, and contract duration.</p>
              <p className="font-semibold"></p> */}
        </div>
        {/* </div> */}
        {/* <div id="myUniversity" class="myUniversity">
            <div class="widget__text-block1"> */}

        <div>
          <h2 className="">Teaching Jobs Africa University List</h2>
        </div>
        <Africa id="section9" heading="" />
      </div>
    </div>
  );
}
