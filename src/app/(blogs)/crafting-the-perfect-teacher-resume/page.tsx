import Link from 'next/link';
import Image from 'next/image';
import Card from '@/components/Card';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    absolute:
      'Crafting the Perfect Teacher Resume: Expert Tips for Landing Your Dream Teaching Job',
  },
  description: `Discover essential tips for creating an effective teacher resume. Learn how to highlight your skills, quantify achievements, and avoid common pitfalls to stand out in the competitive job market and secure your ideal teaching position.`,
  keywords: `teacher resume tips, crafting teacher resume, teacher CV advice, teaching job application, educational resume writing, standout teacher resume, teacher job search, educator resume guide, resume tips for teachers, teacher resume examples`,
};

const tableOfContents = [
  { anchor: 'Keep It Concise' },
  { anchor: 'Highlight Awards and Certifications' },
  { anchor: 'Quantify Your Achievements' },
  { anchor: 'Emphasise Technology Skills' },
  { anchor: 'Use Action-Oriented Language' },
  { anchor: 'Specify Your Skills Section' },
  { anchor: 'Incorporate Keywords' },
  { anchor: 'Avoid Jargon and Generic Phrases' },
  { anchor: 'Maintain a Professional Format' },
  { anchor: 'Proofread Meticulously' },
  { anchor: 'Ready to Create Your Teacher Resume' },
];

const generateTableOfContents = (
  <>
    <h2 className="text-2xl mb-4">Table of Contents</h2>
    <ul className="list-none p-0">
      {tableOfContents.map((item, index) => (
        <a href={`#${item.anchor}`} key={index}>
          <li className="bg-gray-100 flex-grow text-black border-l-8 border-green-500 hover:border-amber-500 hover:bg-amber-200 rounded-md px-3 py-2 w-full">
            {item.anchor}
          </li>
        </a>
      ))}
    </ul>
  </>
);

export default function myPage() {
  // const jsonLd = {
  //   '@context': 'https://schema.org',
  //   '@type': 'NewsArticle',
  //   headline:
  //     'Employer Branding Secrets: Attracting the Best Talent in Higher Education',
  //   image: [
  //     'https://www.academicjobs.com/blogs/employer-branding-secrets/marketing-team-working-on-brand-marketing.svg',
  //     'https://www.academicjobs.com/blogs/employer-branding-secrets/brand-design-importance.svg',
  //     'https://www.academicjobs.com/blogs/employer-branding-secrets/we-are-netflix-podcast.jpg',
  //     'https://www.academicjobs.com/blogs/employer-branding-secrets/we-are-netflix-instagram.jpg',
  //     'https://www.academicjobs.com/blogs/employer-branding-secrets/mariott-begin-belong-become.jpg',
  //   ],
  //   datePublished: '2024-07-18',
  //   dateModified: '2024-07-18',
  //   author: [
  //     {
  //       '@type': 'Person',
  //       name: 'Raymond Mulyawan',
  //       url: 'https://www.academicjobs.com/about/team/raymond-mulyawan',
  //     },
  //   ],
  // };
  return (
    <>
      <main className="content-grid">
        {/* Hero */}
        <section className="custom-background full-width mb-16">
          <div className="container py-16 flex flex-col lg:flex-row gap-2 items-center justify-center">
            <div className="flex flex-col justify-center md:max-w-[650px]">
              <h1 className="m-0">
                Crafting the Perfect Teacher Resume: Expert Tips for Educators
              </h1>
              <a href="/about/team/raymond-mulyawan">
                <h3 className="m-0 mb-10 text-pink-600">By Raymond Mulyawan</h3>
              </a>
              <p>
                Creating a career-launching resume can be challenging,
                especially for those new to the teaching profession. General
                resume writing rules can be helpful, but tailored advice for
                teachers is crucial to stand out in the competitive job market.
              </p>
              <p>
                Here are some top teacher resume tips acquired from my
                discussion with seasoned educators and HR professionals to help
                you improve your resume, increase your chances of getting
                interviews and land your dream{' '}
                <Link href="/" className="link link-aj">
                  teaching jobs
                </Link>
                .
              </p>
            </div>
            <div className="w-full">
              <Image
                width={900}
                height={900}
                alt="Preparing for your teacher interview"
                className="w-full h-auto"
                src="/blogs/expert-resume/expert-resume.svg"
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
        {/* Intro */}
        <section className="content-layout cols-2">
          <nav className="sticky_list mt-[-28px] col-span-2 lg:col-span-1">
            {generateTableOfContents}
          </nav>

          <article className="blog_article col-span-2 lg:col-span-1">
            {/* ###################################################################### */}
            {/* NEW SECTION */}
            {/* ###################################################################### */}
            <div className="mb-16">
              <Image
                width={1043}
                height={696}
                src="/blogs/expert-resume/teachers.jpg"
                alt="A university lecturer delivering lectures and teaching students in seminars related to their field, with primary responsibilities outlined"
                className="mb-16"
              />

              <ul className="numbered_list list-none">
                <li>
                  <h2
                    id={tableOfContents[0].anchor}
                    className="m-0 leading-relaxed underline-full gray-blue mb-8"
                  >
                    1. {tableOfContents[0].anchor}
                  </h2>
                  <p>
                    As a teacher, you might feel the urge to elaborate
                    extensively on your experiences and skills. However, a
                    lengthy resume can overwhelm HR and principals. They prefer
                    concise highlights of your academic career and professional
                    experience. Aim for a one-page resume if you have limited
                    experience and a maximum of two pages if you have more to
                    showcase.
                  </p>
                </li>

                <li>
                  <h2
                    id={tableOfContents[1].anchor}
                    className="m-0 leading-relaxed underline-full gray-blue mb-8"
                  >
                    2. {tableOfContents[1].anchor}
                  </h2>
                  <p>
                    Emphasising your proficiencies and work experience is
                    essential, but as a new teacher, you should also highlight
                    any awards and certifications. These credentials can set you
                    apart from other applicants with more experience. Mention
                    relevant certifications and any awards from your academic,
                    professional, or volunteer experiences to showcase your
                    excellence.
                  </p>
                </li>

                <li>
                  <h2
                    id={tableOfContents[2].anchor}
                    className="m-0 leading-relaxed underline-full gray-blue mb-8"
                  >
                    3. {tableOfContents[2].anchor}
                  </h2>
                  <p>
                    Quantifying your accomplishments with numbers and
                    percentages can make a significant impact. Instead of merely
                    stating that you tutored students, specify the number of
                    students and their average grade improvement. Metrics draw
                    attention and highlight your contributions effectively,
                    making your resume stand out.
                  </p>
                </li>

                <li>
                  <h2
                    id={tableOfContents[3].anchor}
                    className="m-0 leading-relaxed underline-full gray-blue mb-8"
                  >
                    4. {tableOfContents[3].anchor}
                  </h2>
                  <p>
                    In today's educational landscape, technology skills are
                    increasingly important. Highlight your proficiency in social
                    media, Microsoft Office, search engines, and specific
                    teaching platforms like Blackboard Learn and Google
                    Classroom. Demonstrating your tech-savviness can give you an
                    edge over other candidates.
                  </p>
                </li>

                <li>
                  <h2
                    id={tableOfContents[4].anchor}
                    className="m-0 leading-relaxed underline-full gray-blue mb-8"
                  >
                    5. {tableOfContents[4].anchor}
                  </h2>
                  <p>
                    Showcase your ability to take command of the classroom and
                    your professional life by using powerful, action-oriented
                    language. Avoid passive phrases like "responsible for" and
                    instead use verbs like "directed," "managed," and
                    "implemented." This approach conveys your capability and
                    initiative to hiring managers.
                  </p>
                </li>

                <li>
                  <h2
                    id={tableOfContents[5].anchor}
                    className="m-0 leading-relaxed underline-full gray-blue mb-8"
                  >
                    6. {tableOfContents[5].anchor}
                  </h2>
                  <p>
                    Your skills section should prominently feature technical
                    abilities relevant to teaching. However, don't forget to
                    include important soft skills such as patience and an
                    encouraging demeanor. A well-defined skills section can make
                    a strong impression, even if you lack extensive teaching
                    experience.
                  </p>
                </li>

                <li>
                  <h2
                    id={tableOfContents[6].anchor}
                    className="m-0 leading-relaxed underline-full gray-blue mb-8"
                  >
                    7. {tableOfContents[6].anchor}
                  </h2>
                  <p>
                    Incorporating keywords from the job description into your
                    resume is crucial. Use terminology that aligns with the job
                    posting to demonstrate your suitability for the position.
                    Highlight the skills and areas of expertise mentioned in the
                    job description to grab the attention of hiring managers.
                  </p>
                </li>

                <li>
                  <h2
                    id={tableOfContents[7].anchor}
                    className="m-0 leading-relaxed underline-full gray-blue mb-8"
                  >
                    8. {tableOfContents[7].anchor}
                  </h2>
                  <p>
                    While it's important to use relevant terminology, avoid
                    overloading your resume with educational jargon. Generic
                    phrases like "hard worker" and "team player" should also be
                    avoided. Focus on specific, impactful language that clearly
                    conveys your qualifications and achievements.
                  </p>
                </li>

                <li>
                  <h2
                    id={tableOfContents[8].anchor}
                    className="m-0 leading-relaxed underline-full gray-blue mb-8"
                  >
                    9. {tableOfContents[8].anchor}
                  </h2>
                  <p>
                    Your resume should have a clear, organised format that is
                    easy to read. Stand out while maintaining professionalism. A
                    minimalist template with a touch of colour can be effective.
                    Tailor your resume's format to reflect the school's culture
                    and the position you're applying for.
                  </p>
                </li>

                <li>
                  <h2
                    id={tableOfContents[9].anchor}
                    className="m-0 leading-relaxed underline-full gray-blue mb-8"
                  >
                    10. {tableOfContents[9].anchor}
                  </h2>
                  <p>
                    Spelling and grammatical errors can cost you a job
                    opportunity. Proofread your resume thoroughly to ensure it
                    is error-free. Consider asking friends or colleagues to
                    review your document to catch any mistakes you might have
                    missed.
                  </p>
                </li>
              </ul>
            </div>
            {/* ###################################################################### */}
            {/* NEW SECTION */}
            {/* ###################################################################### */}
            <div className="mb-16">
              <h2
                id={tableOfContents[10].anchor}
                className="m-0 leading-relaxed underline-full gray-blue mb-8"
              >
                {tableOfContents[10].anchor}
              </h2>
              <p>
                Job searches and application processes can be daunting, but
                following these teacher resume tips can help you create a
                document that showcases your strengths and increases your
                chances of landing an interview.
              </p>
              <p>
                By implementing these expert tips, you'll be well on your way to
                creating a standout teacher resume that captures the attention
                of prospective employers and opens doors to new teaching
                opportunities.
              </p>
            </div>
            {/* ###################################################################### */}
            {/* NEW SECTION */}
            {/* ###################################################################### */}
            <div className="mb-16">
              <Image
                width={1043}
                height={696}
                src="/blogs/expert-resume/teaching-resume-picture.jpg"
                alt="A university lecturer delivering lectures and teaching students in seminars related to their field, with primary responsibilities outlined"
                className="shadow-xl"
              />
            </div>
          </article>
        </section>
      </main>
      {/* <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      /> */}
    </>
  );
}
