import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import HeroBanner from '@/components/HeroBanner';
import TalentPoolForm from '@/components/forms/TalentPoolForm';
import LightBulb from '@/components/icons/LightBulb';
import Speedo from '@/components/icons/Speedo';
import Stats from '@/components/Stats';

export const metadata: Metadata = {
  title: 'Quick Job Post Technology for Schools', //Option 1 replaces the %s in layout.tsx
  // title: {
  //   absolute: '  Teaching Jobs: Academic, research and science positions locally and globally.', //Option 2 overrides the title in layout.tsx
  // },
  description:
    'Discover Quick Job Post Technology: The game-changer in teaching recruitment that lets schools post job vacancies in just 32 seconds! Embrace the future where efficiency meets innovation, transforming your hiring process and saving invaluable time. Revolutionize your recruitment strategy now!',
  keywords:
    'teaching Quick Job Post, schools Quick Job Post, Quick Job Post Technology, Teaching Quick Job Post Technology, Time Saving Job Posts, Save Time Posting Jobs',
};
//WIP
export default function Page() {
  const cardIconSize = 90;

  return (
    <main className="content-grid">
      <HeroBanner
        //   bgColorClass?: string; //Optional Tailwind CSS background color class
        h1="Quick Job Post Technology: The Future of Recruitment for Teaching Positions is upon us!"
        h2="Saving Time & Revolutionizing the Way Schools Post Job Vacancies"
        para1="Post a job in 32 seconds! In an era where efficiency underpins success, the recruitment landscape within Schools is undergoing a significant transformation."
        btnPrimaryText="Post a Job Now"
        btnPrimaryURL="/post-a-job"
        // btnSecondaryText="Learn More"
        // btnSecondaryURL="/career-help/higher-ed-quick-job-post-technology"
        src="/quick-job-post/higher-education-quick-job-post.jpg"
        alt="Academic and Higher Education Quick Job Post Technology"
        reorder={false}
      />
      <Stats />

      {/* Main Content */}
      <section className="container mx-auto px-4 mt-12">
        <h2 className="text-center">The End of Traditional Job Posting</h2>
        <div className="text-2-cols">
          <p>
            The introduction of Quick Job Post Technology marks a departure from
            traditional, time-consuming job posting processes, heralding a new
            era of streamlined recruitment for schools. Stop wasting your
            valuable time!
          </p>
          <p>
            Gone are the days of spending upwards of 9 minutes just to get your
            schools vacancy on a job board. The cumbersome process of
            categorizing, and promoting job listings on various platforms such
            as Seek, Indeed, and <span className="uni-jobs">Uni</span>Jobs has
            been dramatically simplified by TeachingJobs.
          </p>
          <p>
            Higher Ed Quick Job Post Technology addresses these inefficiencies
            head-on, offering a seamless, user-friendly solution that
            drastically reduces the time and effort required by HR personnel and
            recruiters.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-16">
          {/* Card 1 */}
          <div className="card bg-slate-100 shadow-xl">
            <figure className="px-10 pt-10">
              <div className="icon-ai">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="80"
                  height="80"
                  viewBox="-1 -2 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M9.815 3.094a3.467 3.467 0 0 1-2.78-1.09l-.084-.001a3.467 3.467 0 0 1-2.781 1.09a3.477 3.477 0 0 1-1.727 2.51a3.471 3.471 0 0 1 0 2.794a3.477 3.477 0 0 1 1.727 2.51a3.467 3.467 0 0 1 2.78 1.09h.084a3.467 3.467 0 0 1 2.78-1.09a3.477 3.477 0 0 1 1.727-2.51a3.471 3.471 0 0 1 0-2.794a3.477 3.477 0 0 1-1.726-2.51zM14 5.714a1.474 1.474 0 0 0 0 2.572l-.502 1.684a1.473 1.473 0 0 0-1.553 2.14l-1.443 1.122A1.473 1.473 0 0 0 8.143 14l-2.304-.006a1.473 1.473 0 0 0-2.352-.765l-1.442-1.131A1.473 1.473 0 0 0 .5 9.968L0 8.278a1.474 1.474 0 0 0 0-2.555l.5-1.69a1.473 1.473 0 0 0 1.545-2.13L3.487.77A1.473 1.473 0 0 0 5.84.005L8.143 0a1.473 1.473 0 0 0 2.358.768l1.444 1.122a1.473 1.473 0 0 0 1.553 2.14zm-5.812 9.198a7.943 7.943 0 0 0 2.342-.73a3.468 3.468 0 0 1-.087.215a3.477 3.477 0 0 1 1.727 2.51a3.467 3.467 0 0 1 2.78 1.09h.084a3.467 3.467 0 0 1 2.78-1.09a3.477 3.477 0 0 1 1.727-2.51a3.471 3.471 0 0 1 0-2.794a3.477 3.477 0 0 1-1.726-2.51a3.467 3.467 0 0 1-2.78-1.09h-.084l-.015.016a8.077 8.077 0 0 0 .002-2.016L16.144 6a1.473 1.473 0 0 0 2.358.768l1.444 1.122a1.473 1.473 0 0 0 1.553 2.14L22 11.714a1.474 1.474 0 0 0 0 2.572l-.502 1.684a1.473 1.473 0 0 0-1.553 2.14l-1.443 1.122a1.473 1.473 0 0 0-2.359.768l-2.304-.006a1.473 1.473 0 0 0-2.352-.765l-1.442-1.131a1.473 1.473 0 0 0-1.545-2.13zM7 10a3 3 0 1 1 0-6a3 3 0 0 1 0 6m0-2a1 1 0 1 0 0-2a1 1 0 0 0 0 2m8 8a3 3 0 1 1 0-6a3 3 0 0 1 0 6m0-2a1 1 0 1 0 0-2a1 1 0 0 0 0 2"
                  />
                </svg>{' '}
              </div>
            </figure>
            <div className="card-body items-center">
              <h2 className="card-title">How Quick Job Post Works</h2>
              <ul>
                <li>
                  <strong>Instant Activation:</strong> Find and activate your
                  headline listing on the Teaching Jobs Website in seconds.
                </li>
                <li>
                  <strong>Effortless Uploading:</strong> Upload your job listing
                  directly from a Word document.
                </li>
                <li>
                  <strong>Simplified Posting:</strong> Copy and paste your job
                  description into a single field on our platform. Our
                  technology takes care of the rest.
                </li>
                <li>
                  <strong>Automated Categorization and Promotion:</strong>{' '}
                  Automatically categorize the job and promote it to relevant
                  candidates, enhancing visibility and applicant fit.
                </li>
              </ul>
            </div>
          </div>

          {/* Card 2 */}
          <div className="card bg-slate-100 shadow-xl">
            <figure className="px-10 pt-10">
              <div className="icon-ai">
                <Speedo size={80} />
              </div>
            </figure>
            <div className="card-body items-center">
              <h2 className="card-title">Beyond Time-Saving</h2>
              <ul>
                <li>
                  <strong>Consistency and Professionalism:</strong> Ensure your
                  job posts are uniform in format and appearance, reinforcing
                  your institution's brand.
                </li>
                <li>
                  <strong>Minimized Human Error:</strong> Automate the posting
                  process to accurately capture and display all relevant
                  details.
                </li>
                <li>
                  <strong>Powerful Marketing Tool:</strong> The "headline job
                  post" feature acts as a magnet for potential applicants,
                  encapsulating the essence of each vacancy in a compelling and
                  succinct manner.
                </li>
              </ul>
            </div>
          </div>

          {/* Card 3 */}
          <div className="card bg-slate-100 shadow-xl">
            <figure className="px-10 pt-10">
              <div className="icon-ai">
                <LightBulb size={80} />
              </div>
            </figure>
            <div className="card-body items-center">
              <h2 className="card-title">The Revolution</h2>
              <ul>
                <li>
                  <strong>Dramatic Time Reduction:</strong> Quick Job Post
                  technology cuts down the job posting process from over 9
                  minutes to an astonishing average of 32 seconds.
                </li>
                <li>
                  <strong>Streamlined Process:</strong> By automating the
                  preparation and posting of job listings, this technology
                  eliminates traditional inefficiencies.
                </li>
                <li>
                  <strong>Enhanced Accuracy and Reach:</strong> The technology
                  ensures job posts are consistent and professional in
                  appearance with an accurate targeted reach.
                </li>
              </ul>
            </div>
          </div>
          {/* End Cards */}
        </div>

        {/* Ready to Embrace the Future? */}
        <div className="card card-side bg-slate-100 shadow-xl my-16 px-6 grid sm:grid-cols-1 md:grid-cols-2">
          <figure>
            <Image
              src="/quick-job-post/the-end-of-traditional-job-posting.jpg"
              width={1280}
              height={380}
              alt="The End of Traditional Job Posting with Quick Job Post Technology"
              className="w-full lg:max-w-lg rounded-xl m-6"
            />
          </figure>
          <div className="card-body w-full">
            <h2 className="card-title">Ready to Embrace the Future?</h2>
            <p className="max-w-screen-sm">
              Join the ranks of forward-thinking schools transforming their
              recruitment process with Quick Job Post Technology. It's time to
              streamline your hiring, engage the best talent, and set new
              standards in school recruitment.
            </p>
            <p className="max-w-screen-sm">
              Discover the Quick Job Post Technology difference today.
              Revolutionize your recruitment, one post at a time.
            </p>
            <p className="max-w-screen-sm">
              Step into the new era of school hiring with Quick Job Post
              Technology. This cutting-edge platform offers a seamless,
              efficient pathway to attract and secure top-tier talent for your
              school. With its unparalleled speed and ease of use, you're not
              just posting job vacancies; you're elevating the entire
              recruitment experience.
            </p>
          </div>
        </div>

        {/* Transforming Recruitment One Post at a Time */}
        <div className="card card-side bg-slate-100 shadow-xl my-16 px-6 grid sm:grid-cols-1 md:grid-cols-2">
          <figure className="lg:order-1">
            <Image
              src="/quick-job-post/transforming-time-into-money.jpg"
              width={1280}
              height={380}
              alt="Transforming Time into Money with Quick Job Post Technology"
              className="w-full lg:max-w-lg rounded-xl m-6"
            />
          </figure>
          <div className="card-body w-full">
            <h2 className="card-title">
              Transforming Recruitment One Post at a Time
            </h2>
            <p className="max-w-screen-sm">
              Quick Job Post Technology is not merely a tool; it's a
              game-changing solution for teachers and employers worldwide. By
              automating and simplifying the job posting process, it sets a new
              benchmark for efficiency and effectiveness in school hiring
              practices. Schools & Recruiters that adopt this technology are not
              only optimizing their recruitment processes but are also
              showcasing their commitment to innovation and efficiency.
            </p>
            <p className="max-w-screen-sm">
              In a world where every second counts, Higher Education Quick Job
              Post Technology emerges as an invaluable asset for higher
              education institutions. It transcends the act of merely posting
              job vacancies; it revolutionizes recruitment, making every post a
              testament to the future of school hiring.
            </p>
            {/* <div className="card-actions justify-end">
              <Link
                href="/ai-recruitment/ai-job-application-sentiment-analysis"
                className="btn btn-aj"
              >
                Learn about AI Job Postings
              </Link>
            </div> */}
          </div>
        </div>
      </section>
      <section>
        <h3 className="container mx-auto text-center py-8 px-4">
          Try our quick job post technology today and experience the future…{' '}
          <Link href="/post-a-job" className="btn btn-aj">
            Post a Job Now
          </Link>
        </h3>
        <p className="text-center p-4">
          <Link
            href="/career-help/higher-ed-quick-job-post-technology"
            className="link link-warning hover:text-blue-900"
          >
            More about Quick Post Tech
          </Link>{' '}
          <Link
            href="/ai-recruitment/ai-job-application-sentiment-analysis"
            className="link link-warning hover:text-blue-900 mx-4"
          >
            AI&nbsp;Sentiment&nbsp;Analysis
          </Link>{' '}
          <Link
            href="/ai-recruitment/ai-resume-extraction"
            className="link link-warning hover:text-blue-900"
          >
            AI&nbsp;Resume&nbsp;Extraction
          </Link>
        </p>
      </section>
    </main>
  );
}
