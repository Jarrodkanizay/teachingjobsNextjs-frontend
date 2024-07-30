import Link from 'next/link';
import Image from 'next/image';
import Card from '@/components/Card';
import HeroCard from '@/components/HeroCard';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: `Research Jobs Recruitment`, //Option 1 replaces the %s in layout.tsx
  // title: {
  //   absolute: '  Teaching Jobs: Academic, research and research positions locally and globally.', //Option 2 overrides the title in layout.tsx
  // },
  description:
    'Using cutting-edge research recruitment AI technology, Teaching Jobs is a premier platform that connects outstanding academic talent worldwide, enabling your university to thrive. Change your approach to talent right away!',
  keywords: 'research recruitment',
};

export default function myPage() {
  return (
    <main className="content-grid">
      <section className="custom-background full-width mb-16">
        <div className="container py-16 flex flex-col lg:flex-row gap-2">
          <div>
            <h1>
              Research Jobs Recruitment
              {/* Watch as Excellence Meets Opportunity */}
            </h1>
            {/* <h1>Transform Your Talent Acquisition with the Teaching Jobs Talent Pool</h1> */}
            <h2>Empowering Universities with Dynamic Talent Matching</h2>
            <p>
              We are a leading research recruitment job board that specialises
              in finding and placing talented research professionals in various
              fields and sectors.
            </p>
            <p className="pb-8">
              In the ever-evolving landscape of higher education, finding the
              perfect blend of talent and opportunity is paramount. Academic
              Jobs is your premier partner in this journey!
            </p>
          </div>
          <div className="flex-shrink-0 pb-8">
            <Image
              width={350}
              height={350}
              src="/student-jobs-on-campus/personal-growth-with-campus-jobs.jpg"
              alt="Educators Talent Pool platform interface"
              className="w-full h-auto rounded-3xl mr-4"
            />
          </div>
        </div>
        {/* Waves Design */}
        <div className="custom-shape-divider-bottom full-width">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              opacity=".25"
              className="shape-fill"
            ></path>
            <path
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
              opacity=".5"
              className="shape-fill"
            ></path>
            <path
              d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      </section>
      <p className="text-2xl text-center max-w-[900px] mx-auto leading-relaxed text-gray-700 mb-24">
        <strong className="text-aj-pink">
          Streamline your talent acquisition process now!{' '}
        </strong>
        Ensure a perfect match between academic institutions and outstanding
        professionals. Call <strong>Jarrod Kanizay</strong> on ‬
        <a className="text-2xl link link-aj" href="tel:+61 430 017 783">
          +61 430 017 783
        </a>{' '}
        to find out more.
      </p>
      {/* <p>What the Teaching Jobs Talent Pool can do for you…</p> */}

      {/* <h2 className="mt-28 underline-full">We just make it easy!</h2>

      <HeroCard
        heading="Transform Your Talent Acquisition Today"
        para1="The Academic Talent Pool is more than just a platform; it's a gateway to unparalleled academic excellence. By specializing in the unique needs of higher education institutions, we offer a bespoke solution that addresses the challenges of talent acquisition in the academic sphere. Whether you're looking to fill faculty positions, administrative roles, or research opportunities, our platform is equipped to connect you with the best in the field."
        para2="Engage your Brand Ambassadors to help you find the best talent for your institution. Our platform is designed to help you find the best talent through your network and ours. We have created a platform that is easy to use and will save you time and money."
        imagePath="/talent-pool/dynamic-talent-match-making.jpg"
        alt="Dynamic Talent Match Making"
        btnLink="/academic-talent-pool"
        btnText="Try for Yourself"
      ></HeroCard> */}

      <HeroCard
        heading="Join Us and Shape the Future"
        para1="We have a team of experienced and qualified consultants who understand your skills, interests, and career goals. They will provide you with personalised advice and guidance throughout the recruitment process."
        para2="Posting a job with Teaching Jobs is so easy! Give it a try now and see how we can help you find the perfect candidate for your academic institution."
        imagePath="/talent-pool/teamwork-makes-the-dream-work.jpg"
        alt="See how Teamwork Makes the Dream Work"
        btnLink="/post-a-job"
        btnText="Post a Job Now"
        imagePosition="right"
      ></HeroCard>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-8">
        {/* Card 4 */}
        <Card
          //   iconPath="/talent-pool/keyword-optimization.svg"
          heading="Integrated Database"
          iconPath="/icons/rank-indicator.svg"
        >
          <p>
            We have a large and diverse database of research jobs, covering all
            levels and disciplines. You can browse our current vacancies online,
            or register with us to receive regular job alerts and updates.
          </p>
        </Card>
        {/* Card 5 */}
        <Card
          //   iconPath="/talent-pool/keyword-optimization.svg"
          iconPath="/icons/notification-bell.svg"
          heading="Real Relationships"
        >
          <p>
            We have strong relationships with our clients, and we can give you
            insights into their culture, expectations, and hiring criteria. We
            can also help you prepare for interviews, negotiate salaries, and
            secure contracts.
          </p>
        </Card>
        {/* Card 6 */}
        <Card
          //   iconPath="/talent-pool/keyword-optimization.svg"
          iconPath="/icons/advanced-customization.svg"
          heading="Our Customer Service"
        >
          <p>
            Contact us directly and speak to one of our consultants. They will
            be happy to discuss your career aspirations and help you find the
            best research jobs for you.
          </p>
        </Card>
      </div>
      <blockquote className="mt-16">
        Your Educators Talent Pool in the Cloud attracts compatible candidates,
        providing deeper insights into what makes your institution an ideal
        workplace. By highlighting your strengths and opportunities, you can
        attract candidates who align with your institution's ethos and
        aspirations, fostering a more productive and harmonious academic
        community.
      </blockquote>
      {/* <p>
        Our Quick Job Post technology allows you to post your position in 32
        seconds, and our Talent Pool dynamically seeks out the best candidates
        for the role.
      </p> */}
      <div role="alert" className="alert shadow-lg mt-16">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="stroke-info shrink-0 w-12 h-12"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
        <div>
          <h3 className="font-bold">Get Started Now!</h3>
          <ul className="mb-4">
            <li>
              <span className="text-green-600 text-lg">✓</span> Free Access for
              Teaching Jobs Unlimited customers
            </li>
            <li>
              <span className="text-green-600 text-lg">✓</span> AI Matching
              Technology helps find the right candidate
            </li>
          </ul>
          <p className="">
            Unlock the potential of your institution with the Global Academic
            Talent Pool. Call <strong>Jarrod Kanizay</strong> today on ‬
            <a className="link link-aj" href="tel:+61 430 017 783">
              +61 430 017 783
            </a>{' '}
            or{' '}
            <Link href="/contact-us" className="link link-aj">
              complete our form
            </Link>{' '}
            to learn more about how we can assist you in finding and nurturing
            the academic leaders of tomorrow.
          </p>
        </div>
        <Link href="/contact-us" className="btn btn-aj">
          Contact Us Form
        </Link>
      </div>
    </main>
  );
}
