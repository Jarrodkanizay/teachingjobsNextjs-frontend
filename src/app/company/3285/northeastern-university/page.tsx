import type { Metadata } from 'next';
import SearchResults from '@/components/SearchResults';
import JobSearchBox from '@/components/JobSearchBox';
import Link from 'next/link';

export const metadata: Metadata = {
  // title: 'About', //Option 1 replaces the %s in layout.tsx
  title: {
    absolute: 'Northeastern University Careers', //Option 2 overrides the title in layout.tsx
  },
  description:
    're you interested in working at a dynamic and innovative university that offers a wide range of programs, research opportunities, and benefits? Do you want to join a diverse and collaborative community that values excellence, creativity, and social justice? If so, you might want to check out the job listings at Northeastern University.',
  keywords:
    'northeastern university Jobs, TeachingJobs northeastern university',
};
export default function myPage() {
  return (
    <>
      <main className="content-grid">
        <div className="relative">
          <div className="bg-cover bg-center bg-repeat">
            <div className="max-w-screen-xl mx-auto py-12 px-6 text-gray-700">
              <h1 className="text-blue-900 text-2xl font-semibold">
                Northeastern University Jobs
              </h1>
              <p>
                To apply for a job at Northeastern University careers, you can
                use our online application system. You can browse the current
                openings by category, location, or keyword. You can also create
                a profile and upload your resume and cover letter. If searching
                for Northeastern University employment, log in with your NU
                credentials and view the internal postings. You can also check
                the status of your application and update your information at
                any time. If you have any questions about the application
                process or the job requirements, you can contact the Office of
                Human Resources Management at hrminfo@northeastern.edu or
                617-373-2230. You can also visit the Work at NU website for more
                information about the benefits, policies, and events related to
                working at Northeastern University employment.{' '}
              </p>
            </div>
          </div>
          <SearchResults q={{ q: 'Northeastern University jobs' }} />
        </div>
      </main>
    </>
  );
}
