//import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import JobSearchBox from '@/components/JobSearchBox';
import JobFilter from '@/components/JobFilter';
import AmericaUniLogos from '@/components/AmericaUniLogos';
import USA from '@/components/topUnis/USA';

//import { useParams } from 'next/navigation'

export const metadata = {
  title: {
    absolute: ' USA Teaching Jobs Online',
  },
  description:
    'Search for academic jobs in USA colleges and apply to the top universities and institutions at USA college jobs with faculty, postdoc or staff roles and more. ',
  keywords:
    'Teaching Jobs Online. USA Teaching Jobs Online, academic jobs in USA, USA college jobs',
};
export default function Page() {
  // useEffect(() => {
  //   window.scrollTo(0, 0)
  // }, []);//

  return (
    <main className="content-grid">
      <div className="pt-[8rem] flex flex-col items-center justify-center">
        <Image
          src="https://academicjobs.s3.amazonaws.com/img/_misc/simply-the-best-us-min.png"
          alt="TeachingJobs USA Logo"
          className=" w-[20rem] mb-[1rem] "
          width={330}
          height={220}
        />
      </div>
      <JobSearchBox l="USA" />

      {/* <h3 className="text-center">We Are USA's University Job Website</h3> */}

      <div className=" mt-[2rem] ">
        <ul className=" flex flex-wrap gap-4 items-center justify-center text-gray-400 ">
          <li>
            <Link href="/boston/"> Boston </Link>
          </li>
          <li>
            <Link href="/new-york/"> New York</Link>
          </li>
          <li>
            <Link href="/philadelphia/">Philadelphia</Link>
          </li>
          <li>
            <Link href="/new-haven/"> New Haven</Link>
          </li>
          <li>
            <Link href="/los-angeles/">Los Angeles </Link>
          </li>
          <li>
            <Link href="/san-francisco/"> San Francisco</Link>
          </li>
          <li>
            <Link href="/chicago/"> Chicago</Link>
          </li>
        </ul>
      </div>
      <div className=" mt-[2rem] ">
        <ul className="faculty-container flex flex-wrap gap-4 items-center justify-center text-[#e74b7f] ">
          <ul className="w-full  md:w-auto flex items-center  justify-center gap-4">
            <li>
              <Link href="/USA/lecturer/"> Lecturer</Link>
            </li>
            <li>
              <Link href="/USA/research/"> Research </Link>
            </li>
            <li>
              <Link href="/USA/professor/"> Professor</Link>
            </li>
          </ul>
          <li>
            <Link href="/USA/executive/"> Executive</Link>
          </li>
          <li>
            <Link href="/USA/staff/">Staff</Link>
          </li>
          <li>
            <Link href="/USA/hr-jobs/"> HR</Link>
          </li>
          <li>
            <Link href="/USA/student/"> Student</Link>
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
      <a href="/jobelephant-recruitment">
        <Image
          width={180}
          height={170}
          src="https://academicjobs.s3.amazonaws.com/img/_misc/JobElephantClientCenter.jpg"
          className="rounded-3xl my-4 bg-white border-2 border-[#265882] items-center justify-center mx-auto mt-8"
          alt="TeachingJobs USA logo"
        />{' '}
      </a>

      <AmericaUniLogos />

      <div className="content-grid mx-auto">
        <div
          id="section"
          className=" full-width py-4 full-width mb-[175px] bg-slate-200"
        >
          <div className="md:hero-content flex-col lg:flex-row mx-auto md:items-start py-12  ">
            <h1 className="text-3xl font-normal md:text-right text-gray-400 m-0 pb-8 px-7 md:px-0 ">
              <span className="md:text-6xl font-bold  md:text-right text-gray-500 pb-4 ">
                ACADEMIC&nbsp;JOBS USA:
              </span>{' '}
              <br />
            </h1>
            <div>
              <p className="px-7 mb-4 mt-1">
                Explore what academic positions the United States has to offer
                through Teaching Jobs! We value the importance of an easy to
                navigate website where your future academic career path is one
                click away. Teaching Jobs provides an extensive list of
                opportunities for the future of your career in education,
                carefully sectioning the top Higher Ed jobs to curate the best
                fitting position for you.{' '}
              </p>
              <p className="px-7 md:flex hidden">
                The number 1 job board for academics can help you find your
                dream Higher Ed job through our services. At Teaching Jobs, we
                value our customers interests by providing the best career
                choices possible, making us the best job board for higher
                education positions globally!
              </p>
            </div>
            {/* <div className="text-[#e74b7f]  flex flex-col items-center justify-center  text-2xl pt-8  animate-bounce h-6" >
        <a>▼</a></div> */}
            {/* <div className="bg-gradient-to-b to-white from-orange-100 rounded-t-[3rem] mt-[-1rem]"> */}
            {/* <div className=" max-w-screen-xl mx-auto">
          <div className="blurb text-left py-8 content-gridmt-[30rem]">
            <h1 className="py-3 px-7 bg-[#e74b7f] text-white rounded-3xl font-bold text-2xl md:text-2xl lg:text-2xl  shadow-xl ">USA Teaching Jobs Online</h1>
            <div className="newLine mb-4">
              <p className="font-semibold"></p>
              <p className="font-semibold"></p> */}
            {/* </div> */}
            {/* <div className="newLine">
              <p className="px-7 pb-8">On Teaching Jobs Online find all University Positions in the USA. We have all academic jobs online job for researchers, scientists, university staff, lecturers, professors, and researchers.
                Find academic jobs in USA colleges and apply to the top universities and institutions with faculty, postdoc or staff roles and more.</p> */}
          </div>
          <div className="  flex flex-wrap gap-6 px-7 pb-4 text-gray-400 mx-auto">
            <Link href="/USA/faq/"> USA FAQ</Link>
            <Link href="/ivyleague/"> Ivy League</Link>{' '}
          </div>
          <p className="font-semibold"></p>
        </div>
      </div>
      <USA heading="USA Teaching Jobs Online: Academia Jobs by University" />
    </main>
  );
}
