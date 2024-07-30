import Link from 'next/link';
import type { Metadata } from 'next';
import SearchResults from '@/components/SearchResults';
import JobSearchBox from '@/components/JobSearchBox';
import JobFilter from '@/components/JobFilter';
import HeroBanner from '@/components/HeroBanner';

export const metadata: Metadata = {
  title: 'Student Jobs on Campus', //Option 1 replaces the %s in layout.tsx
  // title: {
  //   absolute: '', //Option 2 overrides the title in layout.tsx
  // },
  description:
    'Looking for a flexible and rewarding job on campus? Browse hundreds of student jobs in various roles and departments at your university. Apply today and gain valuable work experience and skills.',
  keywords: 'Student Jobs on Campus, Student Jobs at College',
};
export default function myPage() {
  const student = [
    {
      Name: 'student part time',
      Title: 'Academic student part time Jobs',
      Description:
        'If you are interested in student part time jobs on campus and want to make the most of your university experience, don’t miss this chance to find your ideal job.',
      Keyword:
        'Academic student part time Jobs. Academic student part time positions',
      content:
        'We have a wide range of academic student part-time jobs on campus available, from administrative, service, and retail roles to research, teaching, and tutoring roles. Our Academic student part-time jobs on campus can make the most of your university experience.',
    },
    {
      Name: 'student casual',
      Title: 'Academic student casual Jobs',
      Description:
        'We have a wide range of student casual jobs on campus available, from administrative, service, and retail roles to research, teaching, and tutoring roles.',
      Keyword:
        'Academic student casuals Jobs. Academic student casual positions',
      content:
        'Working on campus with academic student casual jobs has many benefits, such as: working close to your classes and saving time and money on commuting, choosing from a variety of work hours and shifts that suit your schedule and availability, developing your communication, teamwork, problem-solving, and leadership skills in a supportive and professional environment. Academic student casual jobs can network you with faculty, staff, and fellow students and build your connections and references.',
    },

    {
      Name: 'student full time',
      Title: 'Academic student full time Jobs',
      Description:
        'As an academic industrial & employee relations job, you will have the opportunity to work with leading scholars and practitioners in the field. ',
      Keyword:
        'Academic student full time Jobs. Academic student full time positions',
      content:
        'If you are interested in academic student full-time jobs on campus and want to make the most of your university experience, don’t miss this chance to find your ideal academic student full-time jobs. Apply today and join our community of academic professionals who are working on campus!',
    },
  ];

  return (
    <>
      <main className="content-grid mx-auto">
        {/* Hero banner */}
        {/* <section className="full-width h-[300px] bg-sky-200"></section> */}
        <HeroBanner
          h1="Student Jobs on Campus"
          // h2=""
          para1="Find the perfect student job near you through Teaching Jobs. At Teaching Jobs we offer the most exciting student jobs, for young professionals looking for some extra cash for the weekends. Our job listings offer great hourly rates, flexible hours, and access to many perks and opportunities."
          para2="The No.1 job board for students, Teaching Jobs, provides an extensive list of opportunities for the next step of your career, carefully sectioning the top jobs to find the best position for you!"
          btnPrimaryText="Learn About Student Jobs"
          btnPrimaryURL="/student-jobs-on-campus"
          btnSecondaryText="Student FAQ"
          btnSecondaryURL="/student/faq/"
          src="/student-jobs-on-campus/student-working-in-campus-cafe.jpg"
          alt="Student Jobs on Campus can be life changing"
          // bgColorclassName="bg-sky-200"
          // imgRight={false}
        />
        <div className="order-none max-w-screen-sm mx-auto">
          <h2 className="underline-full">Earn with Student Jobs on Campus</h2>
          <p className="mt-4">
            Jump the queue and find student jobs on campus today. Join our
            Income Booster program to get notified of positions immediately.
            <Link
              href="/student/income-booster"
              className="btn btn-aj btn-block mt-4"
            >
              Join Income Booster
            </Link>
          </p>
        </div>
        {/* <div className="prose">
          <h2 className="underline-full">
            What type of Student Job are you&nbsp;looking&nbsp;for?
          </h2>
          <ul className="text-center columns-1 md:columns-4 md:gap-2 capitalize m-0 p-0 mx-auto">
          <ul className="flex flex-col sm:flex-row items-center justify-center capitalize m-0 p-0 mx-auto">
            {student.map(({ Title, Name }, key) => (
              <li
                className={`p-0 m-0 flex items-center justify-center mx-8`}
                key={key}
              >
                <Link
                  href={`/student/${Name?.replace(/\s+/g, '-')}/`}
                  className="link link-aj font-bold flex align-center justify-center whitespace-nowrap"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 512 512"
                    className="mr-2"
                  >
                    <path
                      d="M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm106.5 150.5L228.8 332.8h-.1c-1.7 1.7-6.3 5.5-11.6 5.5-3.8 0-8.1-2.1-11.7-5.7l-56-56c-1.6-1.6-1.6-4.1 0-5.7l17.8-17.8c.8-.8 1.8-1.2 2.8-1.2 1 0 2 .4 2.8 1.2l44.4 44.4 122-122.9c.8-.8 1.8-1.2 2.8-1.2 1.1 0 2.1.4 2.8 1.2l17.5 18.1c1.8 1.7 1.8 4.2.2 5.8z"
                      fill="green"
                    />
                  </svg>
                  {Name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="newLine"></div>
        </div> */}

        <JobSearchBox q="student" forceClass="my-6" />

        <section className="jobs_grid job_post_search_container">
          <div className="filters_panel">
            <div className="filters_content">
              <JobFilter />
            </div>
          </div>
          <div className="listings_panel">
            <div className="listings_content">
              {/* <SearchResults1 q={{ q: q, l: l || '', filter1 }} /> */}
              <SearchResults q={{ q: 'student' || 0 }} />
            </div>
          </div>
        </section>

        {/*  */}
        {/* <HeroBanner
          mobileMode={true}
          h1="Student Jobs on Campus"
          para1="Unlock your earning potential while studying at university. Exciting opportunities for students and graduates to earn extra cash. Immediate openings for casual and part-time positions. Use your earnings for rent, groceries, or a night out. Turn your college experience into 'beer money' and gain valuable skills."
          btnPrimaryText="Learn About Student Jobs"
          btnPrimaryURL="/student-jobs-on-campus"
          btnSecondaryText="Student FAQ"
          btnSecondaryURL="/student/faq/"
          src="/student-jobs-on-campus/student-jobs-on-campus.jpg"
          alt="Student Jobs on Campus can be life changing"
          // bgColorclassName="bg-sky-300"
          // imgRight={false}
        /> */}
        <section className="container mx-auto px-4 mt-12 order-1">
          <h2 className="text-center">
            Find the Best Student Jobs & make money whilst&nbsp;studying…
          </h2>
          <p className="text-center mt-4 max-w-xl mx-auto">
            Embark on a student job journey right on campus. Earn income, gain
            work experience, while developing essential skills. Explore diverse
            roles in administration, customer service, events, marketing, IT,
            library, research, teaching, and more. Enhance your academic journey
            and social network through academic student jobs.
          </p>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
            {/* Card 1 */}
            <div className="card bg-slate-100 shadow-xl">
              <figure className="px-10 pt-10">
                <div className="icon-ai">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="70"
                    height="70"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M2.047 14.668a.994.994 0 0 0 .465.607l1.91 1.104v2.199a1 1 0 0 0 1 1h2.199l1.104 1.91a1.01 1.01 0 0 0 .866.5c.174 0 .347-.046.501-.135L12 20.75l1.91 1.104a1.001 1.001 0 0 0 1.366-.365l1.103-1.91h2.199a1 1 0 0 0 1-1V16.38l1.91-1.104a1 1 0 0 0 .365-1.367L20.75 12l1.104-1.908a1 1 0 0 0-.365-1.366l-1.91-1.104v-2.2a1 1 0 0 0-1-1H16.38l-1.103-1.909a1.008 1.008 0 0 0-.607-.466a.993.993 0 0 0-.759.1L12 3.25l-1.909-1.104a1 1 0 0 0-1.366.365l-1.104 1.91H5.422a1 1 0 0 0-1 1V7.62l-1.91 1.104a1.003 1.003 0 0 0-.365 1.368L3.251 12l-1.104 1.908a1.009 1.009 0 0 0-.1.76zM12 13c-3.48 0-4-1.879-4-3c0-1.287 1.029-2.583 3-2.915V6.012h2v1.109c1.734.41 2.4 1.853 2.4 2.879h-1l-1 .018C13.386 9.638 13.185 9 12 9c-1.299 0-2 .515-2 1c0 .374 0 1 2 1c3.48 0 4 1.879 4 3c0 1.287-1.029 2.583-3 2.915V18h-2v-1.08c-2.339-.367-3-2.003-3-2.92h2c.011.143.159 1 2 1c1.38 0 2-.585 2-1c0-.325 0-1-2-1z"
                      fill="#eabd2a"
                    />
                  </svg>
                </div>
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">
                  Financial Support Through Campus Jobs
                </h2>
                <p>
                  Ease Your College Expenses with Academic Student Jobs.
                  On-campus roles offer a practical solution to managing your
                  finances with steady income to help reduce student debt,
                  making your academic journey more enjoyable.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="card bg-slate-100 shadow-xl">
              <figure className="px-10 pt-10">
                <div className="icon-ai">
                  <svg
                    className="svg-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    width="70"
                    height="70"
                    viewBox="0 0 36 36"
                  >
                    <path
                      fill="#EA596E"
                      d="M29.896 26.667c.003.283-.07.653-.146.958c-.531 2.145-2.889 4.552-6.208 4.333c-3.008-.198-5.458-1.642-5.458-3.667s2.444-3.667 5.458-3.667s6.335.018 6.354 2.043z"
                    />
                    <path
                      fill="#DD2E44"
                      d="M23.542 24.964c-1.619 0-5.314.448-6.162.448c-1.498 0-2.713.94-2.713 2.1c0 .558.286 1.062.744 1.438c0 0 1.006 1.009 2.818.525c.793-.212 2.083-1.786 4.354-2.036c1.131-.125 3.25.75 6.974.771c.16-.344.193-.583.193-.583c0-2.027-3.194-2.663-6.208-2.663z"
                    />
                    <path
                      fill="#F4ABBA"
                      d="M29.75 27.625s2.184-.443 3.542-2.229c1.583-2.083 1.375-4.312 1.375-4.312c1.604-3-.5-5.813-.5-5.813C33.958 12.104 32 10.792 32 10.792c-1.271-3.021-4.083-3.833-4.083-3.833c-2.208-2.583-6.125-2.5-6.125-2.5s-3.67-1.345-8.708.167c-.833.25-3.625.833-5.667 2.083C.981 10.649.494 16.793.584 17.792C1.083 23.375 5 24.375 7.5 24.958c.583 1.583 2.729 4.5 6.583 3.417c4.75-.833 6.75-2.25 7.917-2.25s4.417 1.25 7.75 1.5z"
                    />
                    <g fill="#EA596E">
                      <path d="M17.737 18.648c2.328-1.255 3.59-1.138 4.704-1.037c.354.032.689.057 1.028.055c1.984-.045 3.591-.881 4.302-1.69a.501.501 0 0 0-.752-.661c-.548.624-1.899 1.313-3.573 1.351c-.3.009-.601-.021-.913-.05c-1.195-.111-2.679-.247-5.271 1.152c-.665.359-1.577.492-2.565.592c-2.197-3.171-.875-5.933-.497-6.591c.037.002.073.014.111.014c.4 0 .802-.098 1.166-.304a.5.5 0 0 0-.492-.87a1.426 1.426 0 0 1-1.88-.467a.5.5 0 0 0-.841.539c.237.371.571.65.948.837c-.521 1.058-1.51 3.84.372 6.951c-1.324.13-2.65.317-3.688.986a7.182 7.182 0 0 0-1.878 1.791c-.629-.108-2.932-.675-3.334-3.231c.25-.194.452-.45.577-.766a.5.5 0 1 0-.93-.368a.772.772 0 0 1-.454.461a.777.777 0 0 1-.643-.07a.5.5 0 0 0-.486.874c.284.158.588.238.89.238c.037 0 .072-.017.109-.019c.476 2.413 2.383 3.473 3.732 3.794a3.69 3.69 0 0 0-.331 1.192a.5.5 0 0 0 .454.542l.045.002a.5.5 0 0 0 .498-.456c.108-1.213 1.265-2.48 2.293-3.145c.964-.621 2.375-.752 3.741-.879c1.325-.121 2.577-.237 3.558-.767zm12.866-1.504a.5.5 0 0 0 .878.48c.019-.034 1.842-3.449-1.571-5.744a.5.5 0 0 0-.558.83c2.644 1.778 1.309 4.326 1.251 4.434zM9.876 9.07a.497.497 0 0 0 .406-.208c1.45-2.017 3.458-1.327 3.543-1.295a.5.5 0 0 0 .345-.938c-.96-.356-3.177-.468-4.7 1.65a.5.5 0 0 0 .406.791zm13.072-1.888c2.225-.181 3.237 1.432 3.283 1.508a.5.5 0 0 0 .863-.507c-.054-.091-1.34-2.218-4.224-1.998a.5.5 0 0 0 .078.997zm9.15 14.611c-.246-.014-.517.181-.539.457c-.002.018-.161 1.719-1.91 2.294a.499.499 0 0 0 .157.975a.499.499 0 0 0 .156-.025c2.372-.778 2.586-3.064 2.594-3.161a.502.502 0 0 0-.458-.54z" />
                      <path d="M7.347 16.934a.5.5 0 1 0 .965.26a1.423 1.423 0 0 1 1.652-1.014a.5.5 0 0 0 .205-.979a2.354 2.354 0 0 0-1.248.086c-1.166-1.994-.939-3.96-.936-3.981a.502.502 0 0 0-.429-.562a.503.503 0 0 0-.562.427c-.013.097-.28 2.316 1.063 4.614a2.376 2.376 0 0 0-.71 1.149zm11.179-2.47a1.069 1.069 0 0 1 1.455.015a.502.502 0 0 0 .707-.011a.5.5 0 0 0-.01-.707a2.004 2.004 0 0 0-.797-.465c.296-1.016.179-1.467-.096-2.312a20.6 20.6 0 0 1-.157-.498l-.03-.1c-.364-1.208-.605-2.005.087-3.13a.5.5 0 0 0-.852-.524c-.928 1.508-.587 2.637-.192 3.944l.03.1c.059.194.113.364.163.517c.247.761.322 1.016.02 1.936a2.022 2.022 0 0 0-1.01.504a.5.5 0 0 0 .682.731zm6.365-2.985a2 2 0 0 0 .859-.191a.5.5 0 0 0-.426-.905a1.072 1.072 0 0 1-1.384-.457a.5.5 0 1 0-.881.472c.18.336.448.601.76.785c-.537 1.305-.232 2.691.017 3.426a.5.5 0 1 0 .947-.319c-.168-.498-.494-1.756-.002-2.826c.038.002.073.015.11.015zm4.797 9.429a.497.497 0 0 0-.531-.467a1.825 1.825 0 0 1-1.947-1.703a.509.509 0 0 0-.533-.465a.502.502 0 0 0-.465.533c.041.59.266 1.122.608 1.555c-.804.946-1.857 1.215-2.444 1.284c-.519.062-.973.009-1.498-.053c-.481-.055-1.025-.118-1.698-.098l-.005.001c-.02-.286-.088-.703-.305-1.05a.501.501 0 0 0-.847.531c.134.215.159.558.159.725c-.504.181-.94.447-1.334.704c-.704.458-1.259.82-2.094.632c-.756-.173-1.513-.208-2.155-.118c-.1-.251-.258-.551-.502-.782a.5.5 0 0 0-.687.727c.086.081.154.199.209.317c-1.103.454-1.656 1.213-1.682 1.25a.499.499 0 0 0 .407.788a.502.502 0 0 0 .406-.205c.005-.008.554-.743 1.637-1.04c.56-.154 1.363-.141 2.146.037c.219.05.422.067.619.07c.093.218.129.477.134.573a.501.501 0 0 0 .499.472l.027-.001a.5.5 0 0 0 .473-.523a3.023 3.023 0 0 0-.13-.686c.461-.167.862-.428 1.239-.673c.572-.373 1.113-.726 1.82-.749c.592-.021 1.08.036 1.551.091c.474.055.94.091 1.454.061c.091.253.084.591.07.704a.503.503 0 0 0 .497.563a.5.5 0 0 0 .495-.435a2.883 2.883 0 0 0-.059-.981a4.67 4.67 0 0 0 2.345-1.471a2.807 2.807 0 0 0 1.656.413a.499.499 0 0 0 .465-.531z" />
                    </g>
                  </svg>
                </div>
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">
                  Personal Growth with On-Campus Employment
                </h2>
                <p>
                  Student Jobs are more than a paycheck, Develop Skills and Grow
                  Personally with opportunities for personal development.
                  Enhance communication skills, learn time management, and
                  prepare yourself for the professional world.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="card bg-slate-100 shadow-xl">
              <figure className="px-10 pt-10">
                <div className="icon-ai">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="80"
                    height="80"
                    viewBox="0 0 48 48"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6.002 30.384c0 7.794 5.04 12.116 11.01 12.116a8.832 8.832 0 1 0 0-17.664c-5.715 0-11.01-4.32-11.01-9.954v15.502Z"
                    />
                    <path
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M31.936 24.82a9.149 9.149 0 1 0-16.115-.048"
                    />
                    <path
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6.002 14.882c0-5.57 3.537-9.382 8.832-9.382s7.045 3.348 8.552 5.825m.613 16.943a8.817 8.817 0 0 1 6.99-3.432c5.714 0 11.009-4.32 11.009-9.954v15.502c0 7.794-5.04 12.116-11.01 12.116A8.817 8.817 0 0 1 24 39.068m17.998-24.186c0-5.57-3.537-9.382-8.831-9.382c-5.295 0-7.046 3.348-8.553 5.825"
                    />
                  </svg>
                </div>
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">
                  Building Relationships through Campus Work
                </h2>
                <p>
                  Forge Lasting Connections working on campus. Build
                  relationships and expand your network. Connect with peers,
                  mentors, and professionals, laying the foundation for future
                  career opportunities.
                </p>
              </div>
            </div>
            {/* End Cards */}
          </div>

          {/* <div className="alert mb-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="stroke-info shrink-0 w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            <span>
              Resume extraction and parsing provides candidates with the ability
              to create structured data from their uploaded resume (Supports MS
              Word, PDF & JPEG). Coming soon!
            </span>
            <div>
              <Link href="/ai-resume-extraction" className="btn btn-sm btn-aj">
                More about Resume Parsing
              </Link>
            </div>
          </div> */}
        </section>
      </main>
    </>
  );
}
