//import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import JobSearchBox from '@/components/JobSearchBox';
import JobFilter from '@/components/JobFilter';
import Europe from '@/components/topUnis/Europe';
//import { useParams } from 'next/navigation'
export const metadata = {
  title: {
    absolute: 'Teaching Jobs Europe',
  },
  description:
    'Find your ideal academic job in Europe and join the vibrant academic community at Europe university jobs such teaching, research or innovative opportunities.',
  keywords:
    'Teaching Jobs Europe. academic jobs in Europe, Europe University Jobs',
};
export default function Page() {
  return (
    <div>
      <div className="pt-[8rem] flex flex-col items-center justify-center">
        <Image
          src="https://academicjobs.s3.amazonaws.com/img/_misc/simply-the-best-europe-min.png"
          alt="TeachingJobs Europe logo"
          className=" w-[20rem] mb-[1rem] "
          width={330}
          height={220}
        />
      </div>
      <JobSearchBox l="Europe" />

      <h3 className="text-center ">We Are Europe's University Job Website</h3>

      <div className=" mt-[5rem] ">
        <ul className="faculty-container flex flex-wrap gap-4 items-center justify-center text-[#e74b7f] ">
          <ul className="w-full  md:w-auto flex items-center  justify-center gap-4">
            <li>
              <Link href="/Europe/lecturer/"> Lecturer</Link>
            </li>
            <li>
              <Link href="/Europe/research/"> Research </Link>
            </li>
            <li>
              <Link href="/Europe/professor/"> Professor</Link>
            </li>
          </ul>
          <li>
            <Link href="/Europe/executive/"> Executive</Link>
          </li>
          <li>
            <Link href="/Europe/admin/">Admin</Link>
          </li>
          <li>
            <Link href="/Europe/hr-jobs/"> HR</Link>
          </li>
          <li>
            <Link href="/Europe/student/"> Student</Link>
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
          className=" full-width py-4  full-width mb-[175px] bg-slate-200"
        >
          <div className="md:hero-content flex-col lg:flex-row mx-auto md:items-start py-12  ">
            <h1 className="text-3xl font-normal md:text-right text-gray-400 m-0 pb-8 px-7 md:px-0 ">
              <span className="md:text-6xl font-bold  md:text-right text-gray-500 pb-4 ">
                ACADEMIC&nbsp;JOBS Europe:
              </span>{' '}
              <br />
            </h1>

            <div>
              <p className="px-7 mb-4 mt-1">
                Discover what academic positions Europe has to offer through
                Teaching Jobs! We value the importance of an easy to navigate
                website where your future academic career path is one click
                away. Teaching Jobs provides an extensive list of opportunities
                for the future of your career in education, carefully sectioning
                the top Higher Ed jobs to curate the best fitting position for
                you.
              </p>
              <p className="px-7">
                The No.1 job board for academics in Europe, for all your
                university job requirements, from seeking to recruiting, look no
                further. At Teaching Jobs, we value our customers' interests by
                providing the best career choices possible, making us the best
                job board for higher education positions globally.
              </p>
            </div>
          </div>
        </div>

        {/* <div className="bg-gradient-to-b to-white from-orange-100 rounded-t-[3rem] mt-[-1rem]"> */}
        {/* <div className=" max-w-screen-xl mx-auto">
          <div className="blurb text-left py-8 content-gridmt-[30rem] ">
            <h1 className="py-3 px-7 bg-[#e74b7f] text-white rounded-3xl font-bold text-2xl md:text-2xl lg:text-2xl  shadow-xl">Teaching Jobs Europe</h1>
            <div className="newLine mb-4">
              <p className="font-semibold"></p>
              <p className="font-semibold"></p>
            </div>
            <div className="newLine">
              <p className="px-7 pb-8">Teaching Jobs board is a platform that connects academic universities, institutions and organizations with qualified candidates across Europe. You can browse through hundreds of University Jobs in various disciplines. Whether you are looking for a permanent or a temporary position, a full-time or a part-time role, our academic job board can help you find your dream job in Europe.</p>
              <p className="font-semibold"></p>
            </div> */}
        {/* </div> */}
        {/* <div id="myUniversity" class="myUniversity">
            <div class="widget__text-block1">
              <div> */}
        <h2 className="">
          TeachingJobs Europe: All Academic Positions by university{' '}
        </h2>
        <Europe heading="" />
      </div>
    </div>
  );
}
