import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  // title: 'About', //Option 1 replaces the %s in layout.tsx
  title: {
    absolute: 'About the number Academic ', //Option 2 overrides the title in layout.tsx
  },
  description:
    'The Number 1 job board for Teaching Jobs.  Listing higher ed jobs for faculty at colleges and universities in the United States and around the world.',
  keywords: 'About Academicjobs, About Teaching Jobs, Academicjobs About',
};

export default function myPage() {
  return (
    <main>
      <div className="hero max-h-fit py-8">
        <div className="">
          <div className="hero-content flex-col lg:flex-row gap-8 ">
            <Image
              src="/about-us/about-aj.jpeg"
              width={1280}
              height={380}
              className="lg:max-w-lg rounded-lg shadow-2xl mb-8 lg:mb-0"
              alt="About us"
            />
            <div>
              <h1 className="text-4xl">#1 Job Board for Higher Ed Jobs</h1>
              <h2 className="py-6">
                Find the best academic positions in your city,
                country and worldwide.
              </h2>
            </div>
          </div>
        </div>
      </div>

      <div className="hero max-h-fit bg-slate-200 py-8">
        <div className=" mx-auto max-w-screen-lg">
          <div className="hero-content flex-col lg:flex-row gap-8">
            <div>
              <h2 className="text-3xl font-normal">
                <span className="text-3xl font-bold text-right pb-4">
                  Helping Recruiters and Academics
                </span>{' '}
                <br />
                find what they're looking.
              </h2>
              <p className="pt-6 italic">
                "My team and I work really hard to make the Recruiters job super
                simple and help Academics and Administration Staff find their
                next role. We are passionate about helping and providing the
                best job board in the world!"
              </p>
              <p className="pt-6 font-bold">
                Jarrod Kanizay C.E.O - TeachingJobs.com
              </p>
              {/* <a href="#pricing-table-cards" className="btn btn-aj">
                    Post a Job
                  </a> */}
            </div>
            <Image
              width={300}
              height={300}
              src="https://academicjobs.s3.amazonaws.com/img/_misc/1690109738395.jpg"
              className="lg:max-w-lg rounded-full shadow-2xl mb-8 lg:mb-0 bg-white"
              alt="AI Powered Recruitment Platform"
            />
          </div>
        </div>
      </div>

      <div className="content-grid p-8 ">
        <div className="full-width"></div>

        <div className="container prose">
          <div className="prose text mt-8 ">
            <p className="intro">
              Also listing administrative, staff and support roles in higher ed.
              Search for academic jobs, college careers and faculty positions
              online with TeachingJobs.com.
            </p>
            <p>
              Welcome to TeachingJobs, the leading online platform for finding
              and applying for university and higher education jobs and
              positions. Whether you are looking for a faculty, research,
              administrative, or professional role, we have the right
              opportunity for you.
            </p>
            <p>
              Teaching Jobs was founded by a team of higher ed professionals who
              were frustrated with the lack of transparency and efficiency in
              the academic job market. Put simply, they thought that the old job
              boards out there for academic positions did not work for clients,
              and they continued to operate on very old, outdated technology.
              They therefore have created the best academic job platform in the
              world today... making it easier for candidates to search for jobs,
              compare offers, and communicate with employers. They have also
              provided employers with a cost-effective and user-friendly way to
              advertise their vacancies, reach a global talent pool, and manage
              their applications.
            </p>
            <p>
              TeachingJobs has grown to become the most trusted and popular
              website for academic job seekers and employers worldwide. With
              over 5000 universities and their jobs, and over 1 million
              registered users from all over the world, 10,000 active job
              listings, and 500 partner institutions across 50 countries.
              TeachingJobs.com lists all disciplines and academic specialties in
              all levels of academia, from humanities and social sciences to
              STEM and health sciences, from PhD students and postdocs to
              professors, lecturers, researchers and deans.
            </p>
            <p>
              Our mission is to help you find your dream academic job or hire
              the best academic talent. We are committed to providing you with
              the most comprehensive and up-to-date information, the most
              advanced and user-friendly tools, and the most professional and
              personalized service. We are also passionate about supporting the
              academic community and promoting diversity, equity, and inclusion
              in higher education.
            </p>
            <p>
              We hope you enjoy using TeachingJobs and find it useful for your
              academic career or recruitment needs. If you have any questions,
              feedback, or suggestions, please feel free to{' '}
              <Link href="/contact-us/" className="link link-aj">
                contact us
              </Link>
              . We would love to hear from you!
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
              to="https://iloveacademicjobs.com/university-partners/"
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
