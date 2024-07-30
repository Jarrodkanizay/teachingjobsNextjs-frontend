import type { Metadata } from 'next';
import SearchResults from '@/components/SearchResults'
import JobSearchBox from '@/components/JobSearchBox'
import Link from 'next/link';

export const metadata: Metadata = {
  // title: 'About', //Option 1 replaces the %s in layout.tsx
  title: {
    absolute: 'university of massachusetts amherst Careers', //Option 2 overrides the title in layout.tsx
  },
  description:
    'To apply for a job at the University of Massachusetts Amherst, you can use the online application system34. You can browse the current openings by category, location, or keyword. You can also create a profile and upload your resume and cover letter.',
  keywords: 'university of massachusetts amherst Jobs, Jobs university of massachusetts amherst',
};
export default function myPage() {
  return (
    <>
      <main className="content-grid">
      <div className="relative">
            
            <div
                className="bg-cover bg-center bg-repeat"
                
            >
                <div className="max-w-screen-xl mx-auto py-12 px-6 text-gray-700">
                    <h1 className="text-blue-900 text-2xl font-semibold">University of Massachusetts Amherst jobs</h1>
                    <p>
                        Are you interested in working at a renowned and progressive university that offers a wide range of programs, research opportunities, and benefits? Do you want to join a diverse and collaborative community that values excellence, innovation, and social justice? If so, you might want to check out the job listings at the University of Massachusetts Amherst.

The University of Massachusetts Amherst is the flagship campus of the UMass system and a nationally ranked public research university located in the scenic Pioneer Valley of Western Massachusetts. It has more than 32,000 undergraduate and graduate students and offers more than 50 majors and minors in eight colleges and schools. The University of Massachusetts Amherst is also known for its research, service, and athletics. </p>


                </div>
            </div>
            <SearchResults q={{ q:"University of Massachusetts Amherst jobs" }} /> 
        </div>
      </main>
    </>
  );
}
