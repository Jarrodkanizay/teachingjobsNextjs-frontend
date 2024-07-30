import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import Stats from '@/components/Stats';

export const metadata: Metadata = {
  // title: 'About', //Option 1 replaces the %s in layout.tsx
  title: {
    absolute: 'About Teaching Jobs', //Option 2 overrides the title in layout.tsx
  },
  description:
    'The Number 1 job board for Teaching Jobs.  Listing higher ed jobs for faculty at colleges and universities in Australia and around the world.',
  keywords: 'About Teachingjobs, About Teaching Jobs, Teachingjobs About',
};

export default function myPage() {
  return (
    <main>
      <div className="hero max-h-fit bg-slate-200 py-8">
        <div className="">
          <div className="hero-content flex-col lg:flex-row gap-8 ">
            <Image
              src="/about-us/harvard-university-main.jpg"
              width={1280}
              height={380}
              className="lg:max-w-lg rounded-lg shadow-2xl mb-8 lg:mb-0"
              alt="About us"
            />
            <div>
              <h1 className="text-4xl">
                TeachingJobs is your #1 Destination for all your Teaching
                Recruitment needs, Career Advancement and Networking
              </h1>
              <h2 className="py-6 leading-tight">
                Quick Job Post Technology reduces the time to post a job by 90%
                and cost by 25%
              </h2>
              {/* <h2 className="py-6">
                Find the best Teaching positions in your city,
                country and worldwide.
              </h2> */}
            </div>
          </div>
        </div>
      </div>
      <Stats />
      <div className="container my-16 grid grid-cols-1 md:grid-cols-2 md:col-span-2 gap-20 px-8 sm:px-32">
        <div className="card bg-slate-50 changed-css shadow-xl">
          <figure>
            <Image
              width={800}
              height={534}
              src="/ai-jop-posting/ai-job-listing-automation.jpg"
              alt="Let us help you find your next crazy SMART Teaching employee"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Let us help you find your next crazy SMART Teaching employee!
            </h2>
            <p>
              Post a job now and see how easy it is, we do all the heavy lifting
              for you and save you at least 25% on your recruitment budget.
            </p>
            <div className="card-actions justify-end">
              <Link href="/post-a-job" className="btn btn-accent">
                Post a Job
              </Link>
            </div>
          </div>
        </div>
        <div className="card bg-slate-50 changed-css shadow-xl">
          <figure>
            <Image
              width={800}
              height={534}
              src="/ai-resume-extraction/ai-resume-extraction.jpg"
              alt="Find your Dream Job Today"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Find your Dream Job Today!</h2>
            <p>
              Are you looking for your dream role? Then search all Teaching jobs
              now.
            </p>
            <div className="card-actions justify-end">
              <Link href="/jobs" className="btn btn-info">
                Find Jobs
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="content-grid p-8">
        {/* <div className="full-width"></div> */}
        <div className="container prose">
          <h2 className="underline-full">Learn more about Teaching Jobs</h2>
          <div className="prose text mt-8 ">
            <h4>Our Mission: Empowering Teaching, Connecting Schools</h4>

            <h5> ALL THE BEST SCHOOL JOBS</h5>
            <p>
           

Discover the top teaching jobs available in your location, city or state.

We list of school staff, support, teaching and principal positions. Use teachingjobs.com.au to search for teaching opportunities, careers, and employment online.

Greetings from Teaching Jobs, the premier online job search and application portal for teaching jobs and school recruitment. We offer the ideal opportunity for you, whether you're searching for a teaching, principal, or tutoring career.

A group of teaching experts who were dissatisfied with the lack of efficiency and openness in the teaching employment market formed Teaching Jobs. Simply put, they continued to use antiquated technology and believed that the job boards for teaching employment that were previously available did not serve their clients' needs. As a result, they have developed the greatest teaching employment platform available today, which makes it simpler for applicants to look for positions, evaluate offers, and get in touch with employers. Additionally, they have given schools an easy-to-use and affordable option to manage their applications, reach a large talent pool, and publicise their job openings.

Our goal is to assist you in hiring the most qualified teachers or in locating your ideal teaching position. We are dedicated to giving you the most sophisticated and user-friendly tools, the most thorough and current information, and the most expert and individualised service. In addition, we have a strong commitment to advancing inclusion, equity, and diversity in the teaching profession.

It is our desire that you find Teaching Jobs enjoyable and helpful for your teaching career or hiring requirements. We hope to hear from you soon!
            </p>
            <p>
              {' '}
              <Link href="/contact-us/" className="link link-aj">
                Contact us
              </Link>{' '}
              for any inquiries, feedback, or suggestions. We're here for you!
            </p>
            <p>
              <Link href="/about/terms-of-use/" className="link link-aj">
                Terms & Conditions
              </Link>
            </p>
            <p>
              <Link href="/about/diversity-statement/" className="link link-aj">
                Diversity Statement
              </Link>
            </p>
            {/* <p>
            <Link
              to="https://iloveTeachingjobs.com/university-partners/"
              className="link link-aj"
            >
              Our Partners
            </Link>
          </p> */}
          </div>
        </div>
      </div>
    </main>
  );
}
