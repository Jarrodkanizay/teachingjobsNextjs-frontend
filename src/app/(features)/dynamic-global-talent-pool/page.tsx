import Link from 'next/link';
import Image from 'next/image';
import Card from '@/components/Card';
import HeroCard from '@/components/HeroCard';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: `Revolutionize Academic Hiring with Our Global Talent Pool`, //Option 1 replaces the %s in layout.tsx
  // title: {
  //   absolute: '  Teaching Jobs: Academic, research and science positions locally and globally.', //Option 2 overrides the title in layout.tsx
  // },
  description:
    'Empower your university with Teaching Jobs: a leading platform for matching top academic talent globally using innovative AI technology. Transform your talent strategy now!',
  keywords:
    'Academic Talent Acquisition, Higher Education Recruitment Platform, University Talent Matching, College Recruitment Solutions, Educators Talent Pool, Teaching Jobs Platform, Educational Institution Hiring, Faculty Recruitment Services, Academic Staffing Solutions, Dynamic Talent Matching for Universities, AI-Powered Academic Recruitment, Higher Ed Talent Search, Academic Professional Networking, Innovative University Hiring, Research Staff Recruitment, Academic Career Opportunities, Educational Talent Management, Higher Education Job Matching, University Faculty Recruitment, College Staff Hiring',
};

export default function myPage() {
  return (
    <main className="content-grid">
      <section className="custom-background full-width mb-16">
        <div className="container py-16 flex flex-col lg:flex-row gap-2">
          <div>
            <h1>
              Dynamically Create Your Academic Talent Pool: Why wait for
              candidates to come to you?
              {/* Watch as Excellence Meets Opportunity */}
            </h1>
            {/* <h1>Transform Your Talent Acquisition with the Teaching Jobs Talent Pool</h1> */}
            <h2>
              Empowering Universities & Colleges with Dynamic Talent Matching
            </h2>
            <p>
              Your Educators Talent Pool for Top Academics in Higher Education
              starts here. We offer a revolutionary platform tailored
              specifically for Universities and Colleges.
            </p>
            <p className="pb-8">
              In the ever-evolving landscape of higher education, finding the
              perfect blend of talent and opportunity is paramount. Academic
              Jobs is your premier partner in this journey!
            </p>
          </div>
          <div className="flex-shrink-0 pb-8">
            <Image
              width={613}
              height={529}
              src="/talent-pool/create-a-strong-talent-pool.png"
              alt="Educators Talent Pool platform interface"
              className="w-full h-auto"
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
      <p>What the Teaching Jobs Talent Pool can do for you…</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-8">
        {/* Card 1 */}
        <Card
          //   iconPath="/talent-pool/keyword-optimization.svg"
          heading="Dynamic Match-Making"
        >
          <p>
            Say goodbye to the one-size-fits-all approach. Our platform utilizes
            cutting-edge technology to dynamically match candidates with
            available positions, ensuring that you find the right talent quickly
            and efficiently. We looked at the passive approach and created a
            dynamic match-making process that save Human Resources time and
            money.
          </p>
        </Card>
        {/* Card 2 */}
        <Card
          iconPath="/icons/match-scale-indicator.svg"
          heading="Candidate Match Score"
        >
          <p>
            Our innovative Match Scale provides a clear, quantifiable measure of
            how well a candidate fits your position. This feature allows you to
            make informed decisions, saving time and resources in the selection
            process.
          </p>
        </Card>
        {/* Card 3 */}
        <Card
          //   iconPath="/talent-pool/keyword-optimization.svg"
          heading="Partner Zone"
          iconPath="/icons/handshake.svg"
        >
          <p>
            Use your database and ours to grow your Talent Pool and take control
            of your talent acquisition in our Partner Zone. This dedicated area
            on our platform enables Recruiters, Universities and Colleges to
            manage their talent pool effortlessly, creating a seamless
            connection between your institution and prospective candidates.
          </p>
        </Card>
      </div>

      <h2 className="mt-28 underline-full">We just make it easy!</h2>

      <HeroCard
        heading="Transform Your Talent Acquisition Today"
        para1="The Academic Talent Pool is more than just a platform; it's a gateway to unparalleled academic excellence. By specializing in the unique needs of higher education institutions, we offer a bespoke solution that addresses the challenges of talent acquisition in the academic sphere. Whether you're looking to fill faculty positions, staff roles, or research opportunities, our platform is equipped to connect you with the best in the field."
        para2="Engage your Brand Ambassadors to help you find the best talent for your institution. Our platform is designed to help you find the best talent through your network and ours. We have created a platform that is easy to use and will save you time and money."
        imagePath="/talent-pool/dynamic-talent-match-making.jpg"
        alt="Dynamic Talent Match Making"
        btnLink="/academic-talent-pool"
        btnText="Try for Yourself"
      ></HeroCard>

      <HeroCard
        heading="Join Us and Shape the Future"
        para1="Embark on a journey of discovery and opportunity with the Academic Talent Pool. Our commitment to innovation, quality, and partnership positions us as the go-to resource for Universities and Colleges aiming to excel in talent acquisition. Let's redefine the future of academic staffing together."
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
          heading="Integrated Ranking System"
          iconPath="/icons/rank-indicator.svg"
        >
          <p>
            Leverage our unique ranking system that showcases both candidates'
            and employers' ranks. This transparency ensures that excellence is
            recognized and rewarded, attracting top-tier talent to your
            institution.
          </p>
        </Card>
        {/* Card 5 */}
        <Card
          //   iconPath="/talent-pool/keyword-optimization.svg"
          iconPath="/icons/notification-bell.svg"
          heading="Real-Time Notifications"
        >
          <p>
            Stay ahead of the curve with our tailored notification system.
            Receive instant updates on relevant matches and opportunities,
            ensuring you never miss out on the perfect candidate.
          </p>
        </Card>
        {/* Card 6 */}
        <Card
          //   iconPath="/talent-pool/keyword-optimization.svg"
          iconPath="/icons/advanced-customization.svg"
          heading="Enhanced Profile Customization"
        >
          <p>
            Elevate your institution's visibility and appeal with Enhanced
            Profile Customization. Our platform allows Universities and Colleges
            to create detailed, engaging profiles showcasing their unique
            culture, values, and academic environment.
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
