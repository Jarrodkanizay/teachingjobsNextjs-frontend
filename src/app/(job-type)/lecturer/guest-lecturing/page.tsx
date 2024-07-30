import Image from 'next/image';
import type { Metadata } from 'next';
import SearchResults from '@/components/SearchResults';
import JobSearchBox from '@/components/JobSearchBox';
import JobFilter from '@/components/JobFilter';
import Link from 'next/link';

const countryRegion = 'World';

function countryRegionPlural() {
  return countryRegion.toLowerCase().endsWith('s')
    ? `${countryRegion}'`
    : `${countryRegion}'s`;
}

export const metadata: Metadata = {
  title: {
    absolute: 'Academic Guest Lecturer Jobs',
  },
  description:
    'The Best Academic Guest lecturer jobs are all available on AcademicJos, View our open positions on this page. ',
  keywords: 'Academic Guest Lecturer Jobs. Guest Lecturer positions',
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
          <div className="hero-overlay bg-opacity-70 p-4"></div>
          <div className=" text-white p-4">
            <h1 className="mb-5 text-2xl text-white md:text-4xl font-bold">
              <span className="text-[#e74b7f] md:text-7xl text-4xl">
                {' '}
                Guest Lecturing Jobs
              </span>{' '}
              <br />
            </h1>
            <p className="max-w-screen-md font-bold px-4">
              Discover your perfect guest lecturing position through the world’s
              best job board!
            </p>
            <p className="max-w-screen-sm font-bold px-4">
              A career as an academic guest lecturer will provide you with the
              chance to engage with partners domestically and internationally,
              work with some of the brightest minds, and use top-notch
              facilities and resources.
            </p>
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

        <JobSearchBox q="guest lecturer" />
        <SearchResults q={{ q: 'guest lecturer' || 0 }} />

        {/* testimonial */}
        <div className="bg-sky-100">
          <div className="testimonial max-w-screen-xl mx-auto">
            <h2 className="pt-8">Hear from our Academics </h2>

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
