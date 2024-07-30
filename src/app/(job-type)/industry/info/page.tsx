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
  title: 'Industry Jobs in Academia Information', //Option 1 replaces the %s in layout.tsx
  // title: {
  //   absolute: '  Teaching Jobs: Academic, research and science positions locally and globally.', //Option 2 overrides the title in layout.tsx
  // },
  description:
    'With our advanced Academic Industry Jobs, you can find the best industry jobs for your needs today.',
  keywords: 'Academic Industry Jobs Information',
};
export default function myPage() {
  return (
    <>
      <main className="">
        {/* Hero banner */}
        <div
          className="hero h-screen max-h-[480px] md:max-h-[400px]"
          style={{
            backgroundImage:
              'url(/student-jobs-on-campus/close-up-of-scientist-looking-at-blood-sample.jpg)',
            backgroundSize: 'cover',
            backgroundRepeat: 'repeat',
          }}
        >
          <div className="hero-overlay bg-opacity-70 "></div>
          <div className=" text-white p-4">
            <h1 className="mb-5 text-2xl text-white md:text-4xl font-bold">
              <span className="text-[#e74b7f] md:text-7xl text-4xl">
                {' '}
                Industry Jobs for Academics{' '}
              </span>{' '}
              <br /> "Fortune Favours the Brave."
            </h1>
            <Link className="btn btn-aj" href="/academic-talent-pool">
              Join Talent Pool
            </Link>
          </div>
        </div>

        {/* <div className="order-none max-w-screen-sm mx-auto mt-12">
          <h2 className="underline-full">Earn More with Teaching Jobs in Industry</h2>
          <p className="mt-4">
            Jump the queue and find industry jobs today. Join our
          our Talent Pool to get notified of positions immediately.
           
          </p>
        
        </div> */}

        {/* testimonial */}
        <div className="bg-sky-100">
          <div className="testimonial max-w-screen-xl mx-auto p-4">
            <h2 className="pt-8 ">Hear from our Academics </h2>

            <p className="">
              Free to Join. Get Global Academic Exposure. Increase your academic
              earning
            </p>
            <div className="flex flex-wrap">
              <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4">
                <div className="flex gap-4">
                  <div className="uniiq-face rounded-full w-1/3">
                    <Image
                      width={180}
                      height={170}
                      src="https://uniiq.com/wp-content/uploads/2021/05/image-6.jpg"
                      alt="Prof Sarah"
                      className=" rounded-full items mt-8"
                    ></Image>
                  </div>

                  <div className="uniiq-user-name">
                    <h3 className="mb-0">Prof Sarah</h3>
                    <span className="fa fa-star checked text-[#e74b7f]">
                      ★★★★
                    </span>
                    <p className="font-bold">Clinical, Health</p>
                  </div>
                </div>
                <div className="uniiq-user-quote mt-4">
                  <p>
                    “It is a great privilege for me to be part of the
                    TeachingJobs Faculty. Moreover, TeachingJobs is always
                    expanding with new ideas and educational opportunities.”
                  </p>
                </div>
              </div>
              <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4">
                <div className="flex gap-4">
                  <div className="uniiq-face rounded-full w-1/3">
                    <Image
                      width={180}
                      height={170}
                      src="https://uniiq.com/wp-content/uploads/2021/05/image-2.jpg"
                      alt="Prof Sarah"
                      className=" rounded-full items mt-8"
                    ></Image>
                  </div>

                  <div className="uniiq-user-name">
                    <h3 className="mb-0">Prof Sam</h3>
                    <span className="fa fa-star checked text-[#e74b7f]">
                      ★★★★★
                    </span>
                    <p className="font-bold">Computer Science</p>
                  </div>
                </div>
                <div className="uniiq-user-quote mt-4">
                  <p>
                    “TeachingJobs has revoluntionised the way I worked from home
                    and how I connected with universities around the world”
                  </p>
                </div>
              </div>
              <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4">
                <div className="flex gap-4">
                  <div className="uniiq-face rounded-full w-1/3">
                    <Image
                      width={180}
                      height={170}
                      src="https://uniiq.com/wp-content/uploads/2021/06/image3.png"
                      alt="Prof Sarah"
                      className=" rounded-full items mt-8"
                    ></Image>
                  </div>

                  <div className="uniiq-user-name">
                    <h3 className="mb-0">Prof Hayley</h3>
                    <span className="fa fa-star checked text-[#e74b7f]">
                      ★★★★
                    </span>
                    <p className="font-bold">Social Sciences</p>
                  </div>
                </div>
                <div className="uniiq-user-quote mt-4">
                  <p>
                    “It is a great honor to be part of the TeachingJobs. It has
                    been an intense academic experience for me as a lecturer,
                    TeachingJobs is attracting great and highly-motivated
                    lecturers.”
                  </p>
                </div>
              </div>
              <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4">
                <div className="flex gap-4">
                  <div className="uniiq-face rounded-full w-1/3">
                    <Image
                      width={180}
                      height={170}
                      src="https://uniiq.com/wp-content/uploads/2021/06/image8.png"
                      alt="Prof Sarah"
                      className=" rounded-full items mt-8"
                    ></Image>
                  </div>

                  <div className="uniiq-user-name">
                    <h3 className="mb-0">Senior Prof John</h3>
                    <span className="fa fa-star checked text-[#e74b7f]">
                      ★★★★★
                    </span>
                    <p className="font-bold">Business</p>
                  </div>
                </div>
                <div className="uniiq-user-quote mt-4">
                  <p>
                    “I am very pleased to have been part of the TeachingJobs and
                    I particularly enjoyed working with many reputable
                    universities from many different countries.”
                  </p>
                </div>
              </div>
              <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4">
                <div className="flex gap-4">
                  <div className="uniiq-face rounded-full w-1/3">
                    <Image
                      width={180}
                      height={170}
                      src="https://uniiq.com/wp-content/uploads/2021/06/image5.png"
                      alt="Prof Sarah"
                      className=" rounded-full items mt-8"
                    ></Image>
                  </div>

                  <div className="uniiq-user-name">
                    <h3 className="mb-0">Assoc Prof Ben</h3>
                    <span className="fa fa-star checked text-[#e74b7f]">
                      ★★★★
                    </span>
                    <p className="font-bold">Psychology</p>
                  </div>
                </div>
                <div className="uniiq-user-quote mt-4">
                  <p>
                    “The TeachingJobs module on human cognition was an excellent
                    opportunity for me to do my best to draw them to our
                    wonderful subspeciality of human cognition. I strongly
                    recommend it!”
                  </p>
                </div>
              </div>
              <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4">
                <div className="flex gap-4">
                  <div className="uniiq-face rounded-full w-1/3">
                    <Image
                      width={180}
                      height={170}
                      src="https://uniiq.com/wp-content/uploads/2021/05/image-4.jpg"
                      alt="Prof Sarah"
                      className=" rounded-full items mt-8"
                    ></Image>
                  </div>

                  <div className="uniiq-user-name">
                    <h3 className="mb-0">Dr Elisa</h3>
                    <span className="fa fa-star checked text-[#e74b7f]">
                      ★★★★★
                    </span>
                    <p className="font-bold">Arts & Humanities</p>
                  </div>
                </div>
                <div className="uniiq-user-quote mt-4">
                  <p>
                    “It is a great honor to be part of the TeachingJobs.
                    Interactive is what makes the difference and a lot of time
                    is given for each issue. I feel privileged for the
                    interactive experience I had with TeachingJobs. Thank you
                    all!”
                  </p>
                </div>
              </div>
              <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4">
                <div className="flex gap-4">
                  <div className="uniiq-face rounded-full w-1/3">
                    <Image
                      width={180}
                      height={170}
                      src="https://uniiq.com/wp-content/uploads/2021/05/image.jpg"
                      alt="Prof Sarah"
                      className=" rounded-full items mt-8"
                    ></Image>
                  </div>

                  <div className="uniiq-user-name">
                    <h3 className="mb-0">Dr Kylie</h3>
                    <span className="fa fa-star checked text-[#e74b7f]">
                      ★★★★★
                    </span>
                    <p className="font-bold">Mathematics</p>
                  </div>
                </div>
                <div className="uniiq-user-quote mt-4">
                  <p>
                    “Being part of TeachingJobs gives me the opportunity to
                    really teach as interactively as I wish and offers a unique
                    feedback from the lecture class. It is challenging and
                    stimulating at the same time. Thank you TeachingJobs!”
                  </p>
                </div>
              </div>{' '}
              <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4">
                <div className="flex gap-4">
                  <div className="uniiq-face rounded-full w-1/3">
                    <Image
                      width={180}
                      height={170}
                      src="https://uniiq.com/wp-content/uploads/2021/06/image7.png"
                      alt="Prof Sarah"
                      className=" rounded-full items mt-8"
                    ></Image>
                  </div>

                  <div className="uniiq-user-name">
                    <h3 className="mb-0">Prof Amanda</h3>
                    <span className="fa fa-star checked text-[#e74b7f]">
                      ★★★★
                    </span>
                    <p className="font-bold">Physical Sciences</p>
                  </div>
                </div>
                <div className="uniiq-user-quote mt-4">
                  <p>
                    “I am a new member to TeachingJobs. It has been a wonderful
                    experience! One of the features of TeachingJobs is the
                    variety of participants from all over the world. It was a
                    pleasure and a privilege to teach (and learn) from lecturers
                    from around the world.”
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="content-grid">
          <div className="card card-side bg-slate-100 shadow-xl my-16 px-6 grid sm:grid-cols-1 md:grid-cols-2">
            <figure>
              <Image
                width={2000}
                height={534}
                src="https://academicjobs.s3.amazonaws.com/img/_misc/are+academics+on+facebook.jpg"
                alt="Choose from diverse campus roles"
                className="w-full lg:max-w-lg rounded-xl m-6"
              />
            </figure>

            <div className="card-body w-full">
              <h2 className="card-title uppercase">
                Make more money than you ever imagined.
              </h2>
              <p className="max-w-screen-sm">
                Connect with the Global top academic talent on the No. 1
                Academic Job Board. Posting jobs is simple and affordable,
                targeting both local and global candidates. Access thousands of
                top academics without the high costs. We offer the most
                affordable job listing fees, paired with a comprehensive talent
                pool. Meaning better results with an exceptional recruiter
                experience.
              </p>

              <div className="card-actions justify-center md:justify-end">
                <Link className="btn btn-aj" href="/industry">
                  Top Industry Positions
                </Link>
              </div>
            </div>
          </div>
          {/* Flexible Part-Time Opportunities for Academics Card */}
          <div className="card card-side bg-sky-50 shadow-xl my-16 px-6 grid sm:grid-cols-1 md:grid-cols-2">
            <figure className="lg:order-1">
              <Image
                width={2000}
                height={534}
                src="https://academicjobs.s3.amazonaws.com/img/_misc/snow-sampling-DMC%5B73%5D_0.jpeg"
                alt="Work Part-Time with Flexible Opportunities for Academics"
                className="w-full lg:max-w-lg rounded-xl m-6"
              />
            </figure>
            <div className="card-body w-full">
              <h2 className="card-title uppercase">
                Check out our Industry Positions Today.
              </h2>
              <p className="max-w-screen-sm">
                With the most comprehensive Academic Talent Pool, you can
                identify the most sought-after candidates and make informed
                decisions about who will join your organization.
              </p>

              <div className="mb-12 text-sky-600">
                <li className="hover:underline">
                  <Link href="/industry">
                    Chief Technical Officier (From 250K){'  '}
                  </Link>
                </li>
                <li className="hover:underline">
                  <Link href="/industry/">
                    Head of Innovation (From 300K){'  '}
                  </Link>
                </li>
                <li className="hover:underline">
                  <Link href="/industry/">
                    Chief Data Scientist (From 180K){'  '}
                  </Link>
                </li>
              </div>

              <div className="card-actions justify-center md:justify-start">
                <Link className="btn btn-aj" href="/industry">
                  View Industry Categories
                </Link>
              </div>
            </div>
          </div>

          {/* Breakout Section */}

          <div className="bg-sky-100 mb-8 mt-16 py-8 px-4 full-width">
            <div className="container mx-auto">
              <h2 className="text-3xl text-center font-bold mb-8 text-sky-600">
                #1 Job Board for for ALL University&nbsp;Positions
              </h2>
              <p className="mb-4 text-center max-w-[500px] mx-auto">
                Teaching Jobs doesn't just find academics, we specialize in
                finding the best in academia for Industry positions.
              </p>
            </div>
          </div>

          {/* <div className="bg-teal-100 mb-8 mt-16 py-8 px-4">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-sky-600">
              Let Teaching Jobs buy your next beer or help fund your
              higher&nbsp;education…
            </h2>
            <div className="text-col-2">
              <p className="mb-4">
                Unlock Your Potential with Campus Employment Opportunities from
                Teaching Jobs. Our platform is tailored to help students like
                you find the ideal on-campus job that complements your academic
                schedule. Academic Rankings can provide the cash you need
                to go out, buy a new gadget or pay eduction expenses?
              </p>
              <p className="mb-4">
                With Teaching Jobs, you get access to a wide array of
                student-focused positions that not only provide a source of
                income but also enhance your university experience. From library
                aides to research assistants, we connect you to roles that align
                with your study goals and personal interests.
              </p>
              <blockquote>
               The best thing a human being can do is to help another human being know more.
              </blockquote>
              <p className="mb-4">
                Maximize Your College Experience with Teaching Jobs. We
                understand the unique needs of Academiclife, and our service is
                designed to simplify your job search on campus. Whether you're
                looking to develop professional skills, build your network, or
                manage your educational expenses, Teaching Jobs is your go-to
                resource.
              </p>
            </div>
          </div>
        </div> */}
        </div>

        <section>
          <h3 className="container mx-auto text-center py-8 px-4">
            Want opportunities delivered to you?{' '}
            <Link href="/post-a-job" className="btn btn-aj">
              Join Talent Pool
            </Link>
          </h3>
        </section>
      </main>
    </>
  );
}
