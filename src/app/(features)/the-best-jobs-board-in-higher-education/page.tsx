import Image from 'next/image';
import type { Metadata } from 'next';
import Link from 'next/link';

const countryRegion = 'World';

function countryRegionPlural() {
  return countryRegion.toLowerCase().endsWith('s')
    ? `${countryRegion}'`
    : `${countryRegion}'s`;
}

export const metadata: Metadata = {
  title:
    'Fastest growing Academic Job Board with the best customer service & support', //Option 1 replaces the %s in layout.tsx
  // title: {
  //   absolute: '  Teaching Jobs: Academic, research and science positions locally and globally.', //Option 2 overrides the title in layout.tsx
  // },
  description:
    'With our advanced AI technologies that greatly improve the job posting process, Teaching Jobs is the top AI recruitment platform, enabling higher education institutions, the research and development (R&D) industry, and many other industries discover people. ',
  keywords:
    'Academic Recruitment Platform, AI Recruitment, Number 1 AI Recruitment Platform',
};
export default function myPage() {
  return (
    <>
      <main>
        {/* Hero banner */}
        <div
          className="hero h-screen max-h-[480px] md:max-h-[400px]"
          style={{
            backgroundImage: 'url(/student-jobs-on-campus/mountain.jpg)',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div className="hero-overlay bg-opacity-70"></div>
          <div className="hero-content text-white">
            <div className="max-w-2xl">
              <h1 className="mb-5 text-2xl text-white md:text-4xl font-bold">
                "Innovation is taking two things that already exist and putting
                them together in a new way"
              </h1>
            </div>
          </div>
        </div>

        <h2 className="text-4xl font-bold mb-8 mt-20 text-sky-600 text-center">
          #1 job platform in higher education{' '}
        </h2>

        <h2 className="text-4xl font-bold mb-8 text-sky-600 text-center">
          LET YOUR ACADEMIC RANKING TAKE YOU HIGHER{' '}
        </h2>
        <p className="text-center">Are you looking for a change in scenery?</p>
        <p className="text-center">
          Do you want to collaborate with others with similar interests?
        </p>
        <p className="text-center">
          Do you wish to develop your own interest areas alongside teaching
          others?
        </p>

        <div className="text-center">
          <Link href="" className="btn btn-aj">
            PRESS HERE TO FIND YOUR ACADEMIC RANK….
          </Link>
        </div>

        <div className="bg-sky-200 mb-8 mt-20 py-8 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl text-center font-bold mb-8 text-sky-700">
              THE IMPORTANCE OF THE ACADEMIC RANKING: HOW A NUMBER CAN CHANGE
              YOUR CAREER{' '}
            </h2>
            <div className="text-col-2">
              <p className="mb-4">
                A rank can help you establish yourself as a leader in the
                academic workforce
              </p>
              <p className="mb-4">
                Having a numeral position in your career can help you find other
                academics to collaborate with
              </p>
            </div>
          </div>
        </div>

        <h2 className="text-4xl font-bold mb-20 mt-20 text-sky-600 text-center">
          WHY DO YOU NEED A RANKING?
        </h2>

        {/* Main Content */}
        <section className="container mx-auto px-4 mt-12">
          {/* Gain Real-World Experience in Academic Settings Card */}
          <div className="card card-side bg-slate-100 shadow-xl my-16 px-6 grid sm:grid-cols-1 md:grid-cols-2">
            <figure>
              <Image
                width={2000}
                height={534}
                src="https://academicjobs.s3.amazonaws.com/img/banner/grow+yourself+globally.avif"
                alt="Experience the Real-World in Academic Settings"
                className="w-full lg:max-w-lg rounded-xl m-6"
              />
            </figure>
            <div className="card-body w-full">
              <h2 className="card-title">GROW YOURSELF GLOBALLY</h2>
              <p className="max-w-screen-sm">
                The academic field is one of the most competitive arenas to be
                involved in, both locally and globally. By establishing an
                individual rank for an academic, you can position yourself as a
                top professor in the field, or as an individual who can move up
                the ranks overtime. This helps academics further develop their
                career and/or legitimately establish themselves as a leader in
                academia through a globally recognised system.
              </p>
              <div className="card-actions justify-center md:justify-end">
                <Link className="btn btn-aj" href="/student">
                  Develop Your Network
                </Link>
              </div>
            </div>
          </div>

          <div className="card card-side bg-slate-100 shadow-xl my-16 px-6 grid sm:grid-cols-1 md:grid-cols-2">
            <figure className="lg:order-1">
              <Image
                width={2000}
                height={534}
                src="https://academicjobs.s3.amazonaws.com/img/banner/collaboration+over+competition+.jpg"
                alt="Choose from diverse campus roles"
                className="w-full lg:max-w-lg rounded-xl m-6"
              />
            </figure>
            <div className="card-body w-full">
              <h2 className="card-title">COLLABORATION OVER COMPETITION</h2>
              <p className="max-w-screen-sm">
                By providing a rank for you, we can set a benchmark that
                encourages collaboration. Having a number in the academic field
                allows you to find others with a similar rank, acknowledging a
                similar skill set, academic history, and research expertise.
                This knowledge can encourage collaborations on academic
                projects, expanding both members knowledge set and creativity.
              </p>

              <div className="card-actions justify-center md:justify-end">
                <Link className="btn btn-aj" href="/student">
                  Earn Extra Cash
                </Link>
              </div>
            </div>
          </div>
          {/* Flexible Part-Time Opportunities for Academics Card */}
          <div className="card card-side bg-sky-50 shadow-xl my-16 px-6 grid sm:grid-cols-1 md:grid-cols-2">
            <figure>
              <Image
                width={2000}
                height={534}
                src="https://academicjobs.s3.amazonaws.com/img/banner/analyse+your+academic+competition.png"
                alt="Work Part-Time with Flexible Opportunities for Academics"
                className="w-full lg:max-w-lg rounded-xl m-6"
              />
            </figure>
            <div className="card-body w-full">
              <h2 className="card-title">ANALYSE YOUR ACADEMIC PROGRESS</h2>
              <p className="max-w-screen-sm">
                Academics are known to engage in large depths of analysis behind
                their journals, reports, and projects. A legitimate rank of the
                members of academia can allow for further analysis on the
                performance of modern-day academics and their improvement over
                the years. In turn, this analysis can describe positive trends
                on the future of academia and promote further success in the
                field.
              </p>
              <div className="card-actions justify-center md:justify-end">
                <Link className="btn btn-aj" href="/student">
                  Search Academic Rankings
                </Link>
              </div>
            </div>
          </div>

          {/* Build Your Network with On-Campus Employment Card */}
          <div className="card card-side bg-sky-50 shadow-xl my-16 px-6 grid sm:grid-cols-1 md:grid-cols-2">
            <figure className="lg:order-1">
              <Image
                width={2000}
                height={534}
                src="https://academicjobs.s3.amazonaws.com/img/banner/2+embrace+indiviudality+.png"
                alt="Build Your Network with On-Campus Employment"
                className="w-full lg:max-w-lg rounded-xl m-6"
              />
            </figure>
            <div className="card-body w-full">
              <h2 className="card-title">EMBRACE YOUR INDIVIDUALITY</h2>
              <p className="max-w-screen-sm">
                Set yourself apart from your university ranking. Academics often
                find themselves stuck in a partnership with their university.
                This may sometimes be great, but your true talent may go
                unrecognised under the universities rank which lends itself to
                the academic output and students results rather than your own
                work. Your own personal rank acts as an identifier of your
                success and establishment, putting you on the forefront as an
                academic, and not just a university professor.
              </p>
              <div className="card-actions justify-center md:justify-start">
                <Link className="btn btn-aj" href="/student">
                  Gain Valuable Skills
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Cards
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8"> */}
        {/* Card 1 */}
        {/* <div className="card bg-slate-100 shadow-xl">
              <figure className="px-10 pt-10">
                <div className="icon-ai">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="90"
                    height="90"
                    viewBox="0 0 128 128"
                  >
                    <path
                      fill="#ff7f0e"
                      d="M112.39 6.389a6.707 6.707 0 0 0-2.585.416c-3.428 1.266-5.232 5.008-4.033 8.357c1.2 3.35 4.952 5.039 8.38 3.772v-.002c3.427-1.267 5.233-5.007 4.032-8.354c-.901-2.513-3.237-4.092-5.793-4.19zM72.6 33.059a19.327 19.327 0 0 0-6.506 1.207c-9.84 3.636-15.023 14.377-11.576 23.992c3.445 9.615 14.217 14.461 24.054 10.826c9.841-3.634 15.024-14.378 11.578-23.992c-2.69-7.512-9.853-12.113-17.55-12.033Zm-51.856 31.67a6.693 6.693 0 0 0-2.586.416c-3.429 1.267-5.233 5.009-4.033 8.357c1.201 3.35 4.952 5.038 8.379 3.771c3.429-1.267 5.231-5.008 4.031-8.357c-.9-2.511-3.234-4.09-5.79-4.188zm71.807 36.39a9.22 9.22 0 0 0-3.553.572c-4.71 1.74-7.191 6.882-5.543 11.483c1.65 4.603 6.806 6.923 11.514 5.183h.002c4.71-1.74 7.191-6.883 5.54-11.484c-1.237-3.452-4.446-5.62-7.96-5.754z"
                    />
                    <path
                      fill="#2c7fb8"
                      d="M112.709.008a13.345 13.345 0 0 0-9.396 3.433c-4.613 4.16-5.611 10.839-2.715 15.94l-7.776 7.002a32.376 32.376 0 0 0-18.312-6.574a32.996 32.996 0 0 0-12.766 2.033C45.761 27.748 36.87 44.689 41.047 60.588l-9.69 3.584c-2.254-3.508-6.105-5.663-10.254-5.83a13.196 13.196 0 0 0-3.302.34l-1.979-5.58c3.314-2.07 4.918-6.184 3.586-9.944l.002-.002c-1.151-3.246-4.174-5.293-7.463-5.437a8.554 8.554 0 0 0-3.318.515c-4.386 1.604-6.742 6.412-5.207 10.743c1.33 3.753 5.161 5.898 9.013 5.359l1.965 5.543c-5.7 2.998-8.565 9.74-6.373 15.855c2.39 6.664 9.893 10.022 16.641 7.528c5.843-2.16 9.321-8.016 8.6-13.873l9.66-3.569c6.355 13.711 21.803 20.877 36.687 17.283l3.998 11.155a18.588 18.588 0 0 0-8.922 10.601L69.414 104a8.206 8.206 0 0 0-6.896-7.797c-4.576-.747-8.992 2.32-9.864 6.861c-.871 4.54 2.185 8.885 6.762 9.631c3.973.649 7.82-1.578 9.336-5.15l5.166.842c-.304 2.62-.05 5.331.892 7.96c3.334 9.304 13.808 13.984 23.231 10.503c9.421-3.481 14.453-13.842 11.117-23.147a17.286 17.286 0 0 0-5.021-7.295l10.59-18.412l-.05-.027c3.783.788 7.795-1.098 9.536-4.725c2.034-4.158.212-9.228-4.002-11.078h-.004a8.405 8.405 0 0 0-3.25-.732h-.002c-2.648-.059-5.227 1.14-6.924 3.244l-6.678-3.207c2.243-6.597 2.403-13.899-.097-20.875A30.885 30.885 0 0 0 96.95 30.14l7.393-6.659c4.856 3.372 11.67 3.015 16.299-1.162c5.34-4.816 5.85-13.017 1.056-18.226c-2.398-2.605-5.661-3.972-8.99-4.086zm-.135 3.455c2.442.08 4.823 1.086 6.569 2.982c3.49 3.793 3.156 9.705-.827 13.297c-3.981 3.593-10.012 3.37-13.504-.422c-3.49-3.793-3.158-9.705.827-13.299a9.861 9.861 0 0 1 6.935-2.556v-.002zm-38.312 23.09c10.022.362 19.097 6.525 22.611 16.332c4.687 13.076-2.338 27.727-15.857 32.722v.002h-.002c-13.522 4.995-28.092-1.607-32.778-14.681c-4.685-13.075 2.34-27.727 15.86-32.723a26.522 26.522 0 0 1 10.166-1.652zM11.857 39.959c2.415.093 4.59 1.584 5.428 3.947l-.002.002c1.118 3.152-.583 6.676-3.853 7.871c-3.272 1.198-6.768-.402-7.885-3.554c-1.118-3.153.585-6.677 3.857-7.873h.002a6.4 6.4 0 0 1 2.453-.393zm9.12 21.836c3.723.131 7.08 2.42 8.384 6.057c1.739 4.849-.864 10.29-5.898 12.15c-5.034 1.86-10.428-.59-12.166-5.44c-1.74-4.849.865-10.29 5.898-12.15a9.886 9.886 0 0 1 3.782-.617zm95.92 1.89h.001a6.18 6.18 0 0 1 2.393.538l.008.002c3.054 1.335 4.38 4.991 2.89 8.03l-.003.01c-1.487 3.1-5.214 4.481-8.307 3.098l-.008-.004c-3.054-1.335-4.38-4.993-2.89-8.033l.003-.008c1.116-2.325 3.49-3.682 5.912-3.633zm-14.96 1.33l6.446 2.882c-.83 3.22.386 6.662 3.035 8.622l-10.252 17.823a18.214 18.214 0 0 0-8.101-2.28a18.42 18.42 0 0 0-1.956.116L86.894 80.42a33.295 33.295 0 0 0 15.043-15.404zm-9.05 31.87c5.197.183 9.89 3.375 11.709 8.453c2.428 6.77-1.206 14.37-8.235 16.967c-7.03 2.597-14.562-.824-16.988-7.594c-2.428-6.772 1.206-14.37 8.236-16.965a13.797 13.797 0 0 1 5.278-.861zM60.898 98.35c.414-.016.834.007 1.256.076h.002c3.379.553 5.55 3.646 4.909 6.984c-.642 3.341-3.908 5.615-7.288 5.063c-3.381-.552-5.552-3.646-4.91-6.985c.562-2.923 3.133-5.026 6.031-5.138z"
                    />
                  </svg>
                </div>
              </figure>
              <div className="card-body items-left text-left">
                <h2 className="card-title">
                1. 	GROW YOURSELF GLOBALLY
                </h2>
                <p>
                The academic field is one of the most competitive arenas to be involved in, both locally and globally. By establishing an individual rank for an academic, you can position yourself as a top professor in the field, or as an individual who can move up the ranks overtime. This helps academics further develop their career and/or legitimately establish themselves as a leader in academia through a globally recognised system.{' '}
                  <span className="hidden">
                    We specialize in matching premier academic professionals
                    with your specific needs, ensuring you find the right talent
                    every time.
                  </span>
                </p>
              </div>
            </div> */}

        {/* Card 2 */}
        {/* <div className="card bg-slate-100 shadow-xl">
              <figure className="px-10 pt-10">
                <div className="icon-ai">
                  <Image
                    width={90}
                    height={90}
                    src="/academic-job-postings/life-saving-customer-service.svg"
                    alt="Life Saving Customer Service & Support"
                  />
                </div>
              </figure>
              <div className="card-body items-left text-left">
                <h2 className="card-title">
                2. 	COLLABORATION OVER COMPETITION
                </h2>
                <p>
                By providing a rank for you, we can set a benchmark that encourages collaboration. Having a number in the academic field allows you to find others with a similar rank, acknowledging a similar skill set, academic history, and research expertise. This knowledge can encourage collaborations on academic projects, expanding both members knowledge set and creativity.
                  <span className="hidden">
                    Experience a new way of recruiting that reconnects you with
                    the best academic minds worldwide.
                  </span>
                </p>
              </div>
            </div> */}

        {/* Card 3 */}
        {/* <div className="card bg-slate-100 shadow-xl">
              <figure className="px-10 pt-10">
                <div className="icon-ai">
                  <Image
                    width={90}
                    height={90}
                    src="/academic-job-postings/elite-talent.svg"
                    alt="Elite Academic Talent"
                  />
                </div>
              </figure>
              <div className="card-body items-left text-left">
                <h2 className="card-title">
                3. 	ANALYSE YOUR ACADEMIC PROGRESS
                </h2>
                <p>
                Academics are known to engage in large depths of analysis behind their journals, reports, and projects. A legitimate rank of the members of academia can allow for further analysis on the performance of modern-day academics and their improvement over the years. In turn, this analysis can describe positive trends on the future of academia and promote further success in the field.
                </p>
              </div>
            </div> */}
        {/* End Cards */}

        {/* Card 4 */}
        {/* <div className="card bg-slate-100 shadow-xl">
              <figure className="px-10 pt-10">
                <div className="icon-ai">
                  <Image
                    width={90}
                    height={90}
                    src="/academic-job-postings/elite-talent.svg"
                    alt="Elite Academic Talent"
                  />
                </div>
              </figure>
              <div className="card-body items-left text-left">
                <h2 className="card-title">
                4. 	EMBRACE YOUR INDIVIDUALITY
                </h2>
                <p>
                Set yourself apart from your university ranking. Academics often find themselves stuck in a partnership with their university. This may sometimes be great, but your true talent may go unrecognised under the universities rank which lends itself to the academic output and students results rather than your own work. Your own personal rank acts as an identifier of your success and establishment, putting you on the forefront as an academic, and not just a university professor.

                </p>
              </div>
            </div> */}
        {/* End Cards */}
        {/* </div> */}

        <div
          className=" h-screen max-h-[480px] md:max-h-[400px]"
          style={{
            backgroundImage:
              'url(https://academicjobs.s3.amazonaws.com/img/banner/the+best+academic+job+opportunities.png)',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div className=""></div>
          <div className="  text-center text-white py-16">
            <div className="mr-[70rem]">
              <h2 className="  max-w-2xl mb-5 text-2xl md:text-4xl text-[#e74b7f] font-bold">
                "We <span className="text-6xl">have</span> created{' '}
                <span className="text-6xl">
                  <br />
                  the world's best
                </span>{' '}
                opportunity platform for all people <br />
                <span className="text-6xl">in higher education"</span>
              </h2>

              {/* <Link className="btn btn-aj" href="https://www.theacademicrankings.com/">
                The Academic Rankings
              </Link> */}
            </div>
          </div>
        </div>

        {/* Breakout Section */}
        <div className="bg-sky-200  py-8 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl text-center font-bold mb-8 text-sky-700">
              {countryRegionPlural()} #1 Job Board for Academic Rankings{' '}
            </h2>
            <div className="text-col-2">
              <p className="mb-4">
                Teaching Jobs stands out as the {countryRegionPlural()} premier
                platform for Academic Rankings, celebrated for linking students
                with valuable on-campus employment opportunities. Our platform
                is meticulously crafted to meet the specific needs of
                Academicemployment within academic settings.
              </p>
              <p className="mb-4">
                Facilitating ideal matches between students and various campus
                roles. Whether it's part-time positions or work-study
                opportunities, we connect you with roles that enhance your
                academic experience and provide practical work skills. Opt for
                Teaching Jobs for unrivaled access to the{' '}
                {countryRegionPlural()} most sought-after Academicpositions in
                academia.
              </p>
            </div>
          </div>
        </div>

        {/* <section>
          <h3 className="container mx-auto text-center py-8 px-4">
            Want opportunities delivered to you?{' '}
            <Link href="/academic-talent-pool" className="btn btn-aj">
              Join our Talent Pool
            </Link>
          </h3>
        </section>
      */}

        <div
          className="hero h-screen max-h-[480px] md:max-h-[400px]"
          style={{
            backgroundImage:
              'url(https://academicjobs.s3.amazonaws.com/img/banner/Academic+Jobs+Innovation+Better+than+all+the+rest.png)',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div className="hero-overlay bg-opacity-70"></div>
          <div className="hero-content  text-center text-white py-8">
            <div className="pl-[45rem]">
              <h2 className="  max-w-2xl mb-5 text-2xl md:text-4xl text-white font-bold">
                <span className="text-7xl">"Innovation</span> <br /> is the
                ability to see changes as an opportunity - not a threat."
              </h2>

              {/* <Link className="btn btn-aj" href="https://www.theacademicrankings.com/">
                The Academic Rankings
              </Link> */}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
