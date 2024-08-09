import Link from 'next/link';
import Image from 'next/image';
import Card from '@/components/Card';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    absolute: '8 High Impact Teaching Strategies to Boost Classroom Success',
  },
  description: `Enhance your teaching with 8 high impact learning strategies designed to drive student success. Get actionable insights for your classroom now!`,
  keywords: `High Impact Teaching Strategies, HITS, student learning, instructional practices, teaching methods, student engagement, classroom strategies, education, effective teaching, differentiated instruction, metacognitive strategies, feedback, collaborative learning`,
};

const tableOfContents = [
  { anchor: 'Setting Clear Learning Goals' },
  { anchor: 'Explicit Teaching' },
  { anchor: 'Worked Examples' },
  { anchor: 'Collaborative Learning' },
  { anchor: 'Questioning Techniques' },
  { anchor: 'Feedback' },
  { anchor: 'Differentiated Instruction' },
  { anchor: 'Metacognitive Strategies' },
  { anchor: 'Conclusion' },
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
                High Impact Teaching Strategies to Enhance Student Learning
              </h1>
              <a href="/about/team/raymond-mulyawan">
                <h3 className="m-0 mb-10 text-pink-600">By Raymond Mulyawan</h3>
              </a>
              <p>
                As educators, we are constantly seeking effective methods to
                engage our students and facilitate deeper learning.
              </p>
              <p>
                High Impact Teaching Strategies (HITS) are evidence-based
                instructional practices that have been proven to significantly
                enhance student outcomes.
              </p>
            </div>
            <div className="w-full max-w-[600px]">
              <Image
                width={900}
                height={900}
                alt="Preparing for your teacher interview"
                className="w-full h-auto"
                src="/blogs/teaching-strategies/high-impact-teaching-strategies.svg"
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
            <div className="">
              <h2>High Impact Teaching Strategies</h2>
              <p>
                Let's explore some of these powerful strategies, illustrated
                with real-life examples, to see how they can be implemented in
                your classroom to boost student engagement and achievement.
              </p>
            </div>
            <div className="mb-16">
              <Image
                width={1043}
                height={696}
                src="/blogs/teaching-strategies/high-impact-teaching-strategies.jpg"
                alt="Teach like a chess grandmaster - high impact teaching strategies"
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
                    Setting specific, measurable, achievable, relevant, and
                    time-bound (SMART) learning goals is crucial for guiding
                    student learning. Clear objectives provide students with a
                    roadmap of what they need to achieve, helping them stay
                    focused and motivated.
                  </p>
                  <h4 className="tips">Example:</h4>
                  <p>
                    In Mrs. Johnson's math class, each lesson begins with a
                    clear objective written on the board: "Today, we will learn
                    to solve quadratic equations using the quadratic formula."
                    Throughout the lesson, she revisits this goal, reminding
                    students of their target and keeping them on track. At the
                    end of the lesson, she asks students to self-assess their
                    understanding of the goal, reinforcing its importance.
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
                    Explicit teaching involves clearly and directly teaching
                    specific skills or concepts. This method is particularly
                    effective for introducing new material.
                  </p>
                  <h4 className="tips">Example:</h4>
                  <p>
                    Mr. Lee, a science teacher, introduces the concept of
                    photosynthesis by breaking it down into manageable steps. He
                    uses a PowerPoint presentation to illustrate each part of
                    the process, models how to draw and label the photosynthesis
                    diagram, and checks for understanding by asking students to
                    explain the process in their own words before moving on.
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
                    Worked examples provide students with step-by-step
                    demonstrations of how to solve a problem or complete a task,
                    which can be particularly beneficial for complex or
                    unfamiliar material.
                  </p>
                  <h4 className="tips">Example:</h4>
                  <p>
                    In her geometry class, Ms. Patel starts with a fully worked
                    example of how to find the area of a trapezoid. She walks
                    through each step, explaining her reasoning and encouraging
                    students to ask questions. Afterward, she gives students
                    similar problems to solve, gradually reducing the amount of
                    guidance provided until they can solve the problems
                    independently.
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
                    Collaborative learning activities encourage students to work
                    together to solve problems, complete tasks, or discuss
                    concepts, fostering a deeper understanding through social
                    interaction.
                  </p>
                  <h4 className="tips">Example:</h4>
                  <p>
                    In a history lesson on ancient civilizations, Mr. Green
                    divides his students into small groups and assigns each
                    group a different civilization to research. Each group must
                    create a presentation to share with the class. By working
                    together, students learn from each other, exchange ideas,
                    and develop a more comprehensive understanding of the topic.
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
                    Effective questioning techniques can stimulate critical
                    thinking and encourage deeper engagement with the material.
                  </p>
                  <h4 className="tips">Example:</h4>
                  <p>
                    During a literature discussion, Ms. Torres uses open-ended
                    questions to encourage students to think critically about
                    the text. She asks, "Why do you think the author chose this
                    particular setting for the story?" and follows up with
                    probing questions like, "How does the setting influence the
                    characters' actions?" This approach promotes a deeper
                    analysis and richer class discussions.
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
                    Providing timely, specific, and actionable feedback helps
                    students understand their strengths and areas for
                    improvement, guiding their learning process.
                  </p>
                  <h4 className="tips">Example:</h4>
                  <p>
                    Mr. Roberts, an art teacher, provides detailed feedback on
                    each student's project, highlighting what they did well and
                    offering specific suggestions for improvement. He holds
                    one-on-one conferences with students to discuss their
                    progress and set goals for their next project, helping them
                    see the path to improvement.
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
                    Differentiated instruction involves tailoring teaching
                    methods and materials to meet the diverse needs of all
                    students in the classroom.
                  </p>
                  <h4 className="tips">Example:</h4>
                  <p>
                    In her inclusive classroom, Ms. Brown uses a variety of
                    resources to cater to different learning styles. For a
                    lesson on ecosystems, she provides visual aids, hands-on
                    activities, and reading materials at varying levels of
                    difficulty. She also groups students flexibly, allowing
                    those who grasp concepts quickly to mentor their peers.
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
                    Metacognitive strategies teach students to think about their
                    own thinking, helping them become more self-aware and
                    self-regulated learners.
                  </p>
                  <h4 className="tips">Example:</h4>
                  <p>
                    At the end of each week, Mr. Adams asks his students to
                    reflect on their learning by writing in a journal. They
                    write about what strategies worked well for them, what
                    challenges they faced, and how they can improve. This
                    regular reflection helps students develop self-awareness and
                    take ownership of their learning process.
                  </p>
                </li>
              </ul>
            </div>
            {/* ###################################################################### */}
            {/* NEW SECTION */}
            {/* ###################################################################### */}
            <div className="mb-16">
              <h2
                id={tableOfContents[8].anchor}
                className="m-0 leading-relaxed underline-full gray-blue mb-8"
              >
                {tableOfContents[8].anchor}
              </h2>
              <p>
                Implementing these High Impact Teaching Strategies can transform
                your classroom into an environment where students are engaged,
                motivated, and empowered to achieve their full potential. By
                integrating these practices into your teaching, you can create a
                more dynamic and effective learning experience for all your
                students.
              </p>
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
