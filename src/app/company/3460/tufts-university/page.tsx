import type { Metadata } from 'next';
import SearchResults from '@/components/SearchResults';
import JobSearchBox from '@/components/JobSearchBox';
import Link from 'next/link';

export const metadata: Metadata = {
  // title: 'About', //Option 1 replaces the %s in layout.tsx
  title: {
    absolute: 'Tufts University Careers', //Option 2 overrides the title in layout.tsx
  },
  description:
    'If you have any questions about the application process or the job requirements, you can contact the Office of Human Resources at hr@tufts.edu or 617-627-3272. You can also visit the Work at Tufts website4 for more information about the benefits, policies, and events related to working at Tufts University. ',
  keywords: 'Tufts University Jobs, TeachingJobs Tufts University',
};
export default function myPage() {
  return (
    <>
      <main className="content-grid">
        <div className="relative">
          <div className="bg-cover bg-center bg-repeat">
            <div className="max-w-screen-xl mx-auto py-12 px-6 text-gray-700">
              <h1 className="text-blue-900 text-2xl font-semibold">
                Tufts University Jobs
              </h1>
              <p>
                Jobs at Tufts are located in Medford, Massachusetts. It has more
                than 11,000 undergraduate and graduate students and offers more
                than 150 majors and minors in nine colleges and schools. Tufts
                jobs are also known for its experiential learning model, which
                integrates classroom instruction with co-op, internships,
                research, service, and global opportunities. Tufts jobs are
                classified as R1 research by the Carnegie Classification of
                Institutions of Higher Education and have produced many
                prestigious scholars and awards. It also has a strong commitment
                to social justice and community engagement, inspired by its
                urban and global mission. Tufts University’s athletic teams are
                the Jumbos, and they compete in the NCAA Division III New
                England Small College Athletic Conference in various sports,
                including basketball, hockey, soccer, and lacrosse. The men’s
                lacrosse team has won three national championships. Start your
                Tufts career on TeachingJobs today. Teaching Jobs is the leading
                online platform for finding and applying for Tufts University
                careers. Here you can browse through hundreds of Tufts
                University job postings from various campuses, schools, and
                departments. Whether you are looking for a faculty, staff, or
                student position, you will find your Tufts employment here.{' '}
              </p>
            </div>
          </div>
          <SearchResults q={{ q: 'Tufts University jobs' }} />
        </div>
      </main>
    </>
  );
}
