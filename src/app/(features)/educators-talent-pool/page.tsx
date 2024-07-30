import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import TalentPoolForm from '@/components/forms/TalentPoolForm';
// import ReactQuill from 'react-quill';
// import 'react-quill/dist/quill.snow.css';
// import InputBlock2 from '@/components/forms/InputBlock2';
export const metadata: Metadata = {
  title: 'Academic Talent Pool', //Option 1 replaces the %s in layout.tsx
  // title: {
  //   absolute: '  Teaching Jobs: Academic, research and science positions locally and globally.', //Option 2 overrides the title in layout.tsx
  // },
  description:
    'Join our exclusive Talent Pool to connect and collaborate with top employers and academics worldwide. Sign up today to explore exciting job opportunities, gain industry exposure, and fast-track your career. Perfect for academics seeking to elevate their career paths.',
  keywords:
    'talent pool, career opportunities, job seekers, find academic networking, academic exposure, professional networking, industry exposure, employment, career growth, job application, talent database, professional development, sign up, global job market',
};
//WIP
export default function Page() {
  const cardIconSize = 90;

  return (
    <main className="content-grid">
      <div className="bg-slate-200 mb-8 full-width">
        <h1 className="mb-0">
          {/* Unlock Your Academic Potential!  */}
          Join Our Talent Pool Today!
        </h1>

        <h3 className="">
          We are looking for people who want to connect and collaborate!
        </h3>
        <div className="text-2-cols mb-6">
          <p className="mb-6">
            Our Talent Pool network is a rich community to innovate, and
            collaborate. We're fostering a dynamic community of passionate
            academics dedicated to sharing ideas, sparking innovation, and
            driving academic excellence. Our platform is more than a mere
            network; it's a thriving space for like-minded scholars to engage,
            motivate, and forge lasting professional connections.
          </p>
          <p>
            Dive into Teaching Jobs' Talent Pool for tailored academic
            opportunities. Be the first to discover roles that perfectly match
            your skills and interests. Select your preferred areas, and receive
            notifications about positions that align with your unique academic
            profile. Seize the opportunity to find your ideal academic role and
            become part of a community that truly values your expertise and
            vision.
          </p>

          {/* Option 2
        Elevate your academic journey by becoming part of our vibrant community.
      We're on the lookout for individuals eager to connect, collaborate, and
      share their passions. Joining our talent pool offers you a unique space to
      connect with like-minded academics, exchange ideas, and find inspiration.
      Connect, Collaborate, and Thrive Are you driven by a passion for academia?
      We're building a community where your ideas and interests can flourish.
      Join our talent pool to stay informed about exciting opportunities
      tailored to your interests. Don't miss out – take the first step towards
      academic excellence by connecting with us today! */}
          {/* Suggested new text */}
        </div>
      </div>

      <div className="flex flex-col lg:flex-row lg:gap-8">
        <TalentPoolForm maxWidth="700" />
        {/* Contact Numbers */}
        <div className="flex flex-col w-full pb-8 bg-slate-100 py-4 px-8 rounded-2xl lg:min-w-[450px] lg:max-w-[500px] mt-8 lg:mt-0">
          <h2 className="underline-full mb-6">Checkbox Definitions</h2>
          <ul className="ul mb-auto">
            <li>
              <strong>Collaborations: </strong>Engage in high-level academic
              collaborations and research partnerships.
            </li>
            <li>
              <strong>Keynote Speaking: </strong>
              Access opportunities for keynote speaking at prestigious
              conferences and events.
            </li>
            <li>
              <strong>Media Visibility: </strong>Gain visibility through media
              features and interviews.
            </li>
            <li>
              <strong>Career Progression: </strong>
              Open doors to career progression and attract attention from
              headhunters.
            </li>
            <li>
              <strong>Seek IP Investors: </strong>
              Connect with investors to fund and support your innovative
              intellectual property projects.
            </li>
            <li>
              <strong>Academic Rankings: </strong>
              Become eligible for recognition in academic rankings and awards.
            </li>
          </ul>
          <Image
            src="/talent-pool/talent-pool-professor.jpg"
            width={500}
            height={500}
            alt="Talented Professor - Bill Nye the Science Guy"
            className="rounded-xl mx-auto mt-8"
          />
        </div>
      </div>
      <div className="text-black rounded-2xl mt-8 mb-16">
        <div className="p-4 rounded-3xl bg-slate-100 pt-7">
          <ul className="ul">
            <li>
              <strong>Dive into a World of Opportunities</strong> - Sign up
              today and connect with prestigious academic institutions
              worldwide. Explore cutting-edge job openings and collaborate with
              world-renowned academics.
            </li>
            <li>
              <strong>Elevate Your Career</strong> - Whether you're seeking
              groundbreaking research projects or looking to shape the minds of
              the next generation, our platform is your gateway to extraordinary
              possibilities.
            </li>
            <li>
              <strong>Expand Your Network</strong> - Collaborate, innovate, and
              grow with the best in academia. Be part of a vibrant community
              where ideas flourish and careers soar.
            </li>
            <li>
              <strong>Find Your Perfect Match</strong> - Our tailored job
              matching system brings you opportunities that align perfectly with
              your expertise and aspirations.
            </li>
            <li>
              <strong>Share and Gain Insights</strong> - Engage in meaningful
              dialogues, share your expertise, and gain unique perspectives from
              fellow academics globally.
            </li>
          </ul>
          <p className="p-6 pb-0">
            Don't Wait — The Opportunity for Academic Excellence Awaits! Sign Up
            Now and Propel Your Career to New Heights!
          </p>
        </div>
      </div>
      {/* <div className="container mx-auto flex flex-col"> */}
      <h2 className="underline-full">
        Power-up Your Academic Potential: Join Our Dynamic Talent Pool Today!
      </h2>

      {/* Cards */}
      <h2 className="text-center my-8">Join the community</h2>
      {/* <div className="container mx-auto"> */}
      <ul className="m-0 p-0 text-left items-stretch grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* card 1  */}
        <div className="card bg-slate-100 mb-4 shadow-xl">
          <figure className="px-10 pt-10">
            <Image
              src="https://academicjobs.s3.amazonaws.com/img/_misc/Professional-Services-icon.png"
              alt="Professional Services icon"
              width={cardIconSize}
              height={cardIconSize}
              className="rounded-xl max-h-[100px] "
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Collaborations</h2>
            <p>
              Engage in a high-level academic collaborations and research
              partnerships.
            </p>
          </div>
        </div>
        {/* card 2 */}
        <div className="card bg-slate-100  mb-4 shadow-xl">
          <figure className="px-10 pt-10">
            <Image
              src="https://academicjobs.s3.amazonaws.com/img/_misc/Client-Success-icon.png"
              alt="Client Success icon"
              width={cardIconSize}
              height={cardIconSize}
              className="rounded-xl max-h-[100px] "
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Media Expert</h2>
            <p>Gain visibility through media features and interviews.</p>
          </div>
        </div>
        {/* card 3 */}
        <div className="card bg-slate-100 mb-4 shadow-xl">
          <figure className="px-10 pt-10 ">
            <Image
              src="https://academicjobs.s3.amazonaws.com/img/_misc/Internship-icon.png"
              alt="Internship icon"
              width={cardIconSize}
              height={cardIconSize}
              className="rounded-xl max-h-[100px] "
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Keynote Speaking</h2>
            <p>
              Access opportunities for keynote speaking at prestigious
              conferences and events{' '}
            </p>
          </div>
        </div>
        {/* card 4  */}
        <div className="card bg-slate-100  mb-4 shadow-xl">
          <figure className="px-10 pt-10">
            <Image
              src="https://academicjobs.s3.amazonaws.com/img/_misc/Corporate-Services-icon.png"
              alt="Corporate Services icon"
              width={cardIconSize}
              height={cardIconSize}
              className="rounded-xl max-h-[100px] "
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Partner with Industry</h2>
            <p>
              Bridge theory and practical applications to foster collaborative
              research, share resources, and enhance the real-world impact of
              your work.
            </p>
          </div>
        </div>
        {/* card 5 */}
        <div className="card bg-slate-100  mb-4 shadow-xl">
          <figure className="px-10 pt-10">
            <Image
              src="https://academicjobs.s3.amazonaws.com/img/_misc/Client-Care-icon.png"
              alt="Client Care icon"
              width={cardIconSize}
              height={cardIconSize}
              className="rounded-xl max-h-[100px] "
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Headhunted</h2>
            <p>
              Open doors to career progression and attract attention from
              headhunters.
            </p>
          </div>
        </div>
        {/* card 6 */}
        <div className="card bg-slate-100  mb-4 shadow-xl">
          <figure className="px-10 pt-10">
            <Image
              src="https://academicjobs.s3.amazonaws.com/img/_misc/Innovation-icon.png"
              alt="Innovation icon"
              width={cardIconSize}
              height={cardIconSize}
              className="rounded-xl max-h-[100px] "
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Patent your Intellectual Property</h2>
            <p>
              Connect with investors to fund and support your innovative
              intellectual property projects.
            </p>
          </div>
        </div>
      </ul>
      {/* testimonial */}
      <div className="bg-sky-100 rounded-3xl mt-8">
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
                  “It is a great privilege for me to be part of the TeachingJobs
                  Faculty. Moreover, TeachingJobs is always expanding with new
                  ideas and educational opportunities.”
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
                  “I am very pleased to have been part of the TeachingJobs and I
                  particularly enjoyed working with many reputable universities
                  from many different countries.”
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
                  opportunity for me to do my best to draw them to our wonderful
                  subspeciality of human cognition. I strongly recommend it!”
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
                  Interactive is what makes the difference and a lot of time is
                  given for each issue. I feel privileged for the interactive
                  experience I had with TeachingJobs. Thank you all!”
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
                  “Being part of TeachingJobs gives me the opportunity to really
                  teach as interactively as I wish and offers a unique feedback
                  from the lecture class. It is challenging and stimulating at
                  the same time. Thank you TeachingJobs!”
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
                  experience! One of the features of TeachingJobs is the variety
                  of participants from all over the world. It was a pleasure and
                  a privilege to teach (and learn) from lecturers from around
                  the world.”
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
      {/* </div> */}
    </main>
  );
}
