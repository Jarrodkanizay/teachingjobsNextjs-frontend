import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import RankingRegistrationFormAcademics from '@/components/forms/RankingRegistrationFormAcademics';
// import ReactQuill from 'react-quill';
// import 'react-quill/dist/quill.snow.css';
// import InputBlock2 from '@/components/forms/InputBlock2';
export const metadata: Metadata = {
  title: 'my academic rank', //Option 1 replaces the %s in layout.tsx
  // title: {
  //   absolute: '  Teaching Jobs: Academic, research and science positions locally and globally.', //Option 2 overrides the title in layout.tsx
  // },
  description:
    'Become a member of our exclusive Talent Pool to network and work together with leading companies and scholars globally. Join now to see what fascinating jobs are available, network with professionals in the field, and further your career. ideal for academics looking to advance in their professions.',
  keywords: 'my academic rank',
};
//WIP
export default function Page() {
  const cardIconSize = 90;

  return (
    <main className="content-grid">
      <h1>
        {/* Unlock Your Academic Potential!  */}
        Get your Academic Ranking Today!
      </h1>
      <h2 className="mb-10">
        Uncover Your Academic Standing: A Beneficial Analysis of Your
        Performance!
      </h2>
      <p>
        All information will be validated by our team, please check in with us
        soon!
      </p>
      <div className="flex flex-col lg:flex-row lg:gap-8">
        <RankingRegistrationFormAcademics
          maxWidth="700"
          formName="Academic Ranking Form"
          detailsHeading="Your Details"
        />
        {/* Contact Numbers */}
        <div className="flex flex-col w-full pb-8 bg-slate-100 py-4 px-8 rounded-2xl lg:min-w-[450px] lg:max-w-[500px] mt-8 lg:mt-0">
          <h2 className="underline-full mb-6">Why Obtain a Rank</h2>
          <ul className="ul mb-auto">
            <li>
              <strong>Gain Credibility:</strong> An academic ranking enhances
              your professional credibility in your field.
            </li>
            <li>
              <strong>Increased Visibility:</strong> Higher rankings often lead
              to increased visibility among potential employers and
              collaborators.
            </li>
            <li>
              <strong>Attract Job Offers:</strong> Employers often seek
              candidates with strong academic rankings, increasing your chances
              of receiving job offers.
            </li>
            <li>
              <strong>Networking Opportunities:</strong> A solid academic
              ranking opens doors to valuable networking opportunities with
              experts and professionals.
            </li>
            <li>
              <strong>Research Collaboration:</strong> Higher rankings can
              attract collaborative research opportunities and partnerships with
              other institutions.
            </li>
            <li>
              <strong>Access to Resources:</strong> Academic rankings may grant
              you access to exclusive resources, grants, and funding
              opportunities.
            </li>
            {/* <li>
              <strong>International Recognition:</strong> Improve your chances
              of international recognition, making you more appealing to global
              employers.
            </li>
            <li>
              <strong>Career Advancement:</strong> A strong academic ranking can
              significantly contribute to your career advancement and
              progression.
            </li>
            <li>
              <strong>Research Impact:</strong> Higher rankings often correlate
              with greater research impact and influence in your academic field.
            </li>
            <li>
              <strong>Professional Development:</strong> Being recognized
              academically can lead to various professional development
              opportunities and continuous learning.
            </li> */}
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
            Now to get your Academic Ranking and Propel Your Career to New
            Heights!
          </p>
        </div>
      </div>
    </main>
  );
}
