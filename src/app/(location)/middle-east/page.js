//import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import JobSearchBox from '@/components/JobSearchBox';
import JobFilter from '@/components/JobFilter';
import ME from '@/components/topUnis/ME';
//import { useParams } from 'next/navigation'
export const metadata = {
  title: {
    absolute: 'Teaching Jobs Middle East',
  },
  description:
    'Find your dream academic job in Middle East and join the leading universities at Middle East university jobs with professor, researcher or manager roles.',
  keywords:
    'Teaching Jobs Middle East. academic jobs in Middle East, Middle East university jobs',
};
export default function Page() {
  return (
    <div>
      <div className="pt-[5rem] flex flex-col items-center justify-center"></div>
      <div className=" flex flex-col items-center justify-center">
        <Image
          src="https://academicjobs.s3.amazonaws.com/img/_misc/simply-the-best-middle-east-min.png"
          alt="TeachingJobs Middle East logo"
          className=" w-[20rem] mb-[1rem] mt-[-1rem]"
          width={330}
          height={220}
        />
      </div>
      <JobSearchBox l="Middle East" />

      <h3 className="text-center ">
        We Are Middle East's University Job Website
      </h3>

      <div className=" mt-[5rem] ">
        <ul className="faculty-container flex flex-wrap gap-4 items-center justify-center text-gray-500 ">
          <ul className="w-full  md:w-auto flex items-center  justify-center gap-4">
            <li>
              <Link href="/Middle-East/lecturer/"> Lecturer</Link>
            </li>
            <li>
              <Link href="/Middle-East/research/"> Research </Link>
            </li>
            <li>
              <Link href="/Middle-East/professor/"> Professor</Link>
            </li>
          </ul>
          <li>
            <Link href="/Middle-East/executive/"> Executive</Link>
          </li>
          <li>
            <Link href="/Middle-East/admin/">Admin</Link>
          </li>
          <li>
            <Link href="/Middle-East/hr-jobs/"> HR</Link>
          </li>
          <li>
            <Link href="/Middle-East/student/"> Student</Link>
          </li>
        </ul>
      </div>

      <div className=" mt-2 ">
        <ul className="faculty-container flex  gap-4 items-center justify-center text-[#922c40] ">
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
                ACADEMIC&nbsp;JOBS Middle East:
              </span>{' '}
              <br />
            </h1>

            <div>
              <p className="px-7 mb-4 mt-1">
                Explore what academic positions the Middle East has to offer
                through Teaching Jobs! We value the importance of an easy to
                navigate website where your future academic career path is one
                click away. Teaching Jobs provides an extensive list of
                opportunities for the future of your career in education,
                carefully sectioning the top Higher Ed jobs to curate the best
                fitting position for you.
              </p>
              <p className="px-7">
                The number 1 job board for academics can help you find your
                dream Higher Ed job through our services. At Teaching Jobs, we
                value our customers interests by providing the best career
                choices possible, making us the best job board for higher
                education positions globally!
              </p>
            </div>
          </div>
        </div>

        {/* <div className="text-[#922c40]  flex flex-col items-center justify-center  text-2xl pt-8  animate-bounce h-6" >
        <a>▼</a></div> */}
        {/* <div className="bg-gradient-to-b to-white from-orange-100 rounded-t-[3rem] mt-[-1rem]"> */}
        {/* <div className=" max-w-screen-xl mx-auto">
          <div className="blurb text-left py-8 content-gridmt-[30rem] ">
            <h1 className="py-3 px-7 bg-[#922c40] text-white rounded-3xl font-bold text-2xl md:text-2xl lg:text-2xl  shadow-xl">Teaching Jobs Middle East</h1>
            <div className="newLine mb-4">
              <p className="font-semibold"></p>
              <p className="font-semibold"></p>
            </div>
            <div className="newLine">
              <p className="px-7 pb-8">Teaching Jobs Middle East is a diverse and dynamic website that offers many opportunities for academic professionals. Whether you are interested in teaching, research, or administration, you can find a variety of academic jobs in the middle east that suit your qualifications and goals. You can explore hundreds of academic jobs in the middle east on this page, covering various fields and disciplines such as engineering, humanities, social sciences, health sciences, and more.</p>
              <p className="font-semibold"></p> */}
        {/* </div> */}
        {/* </div>
          <div id="myUniversity" class="myUniversity">
            <div class="widget__text-block1"> */}
        <div>
          <h2 className="">TeachingJobs Middle East: University Jobs </h2>
          <ME heading="" />
        </div>
      </div>
    </div>
  );
}
