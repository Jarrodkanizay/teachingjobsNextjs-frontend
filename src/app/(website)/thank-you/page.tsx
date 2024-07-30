import type { Metadata } from 'next';
import Link from 'next/link';
import Head from 'next/head';
// other imports...

export const metadata: Metadata = {
  // title: 'About', //Option 1 replaces the %s in layout.tsx
  title: {
    absolute: 'Teaching Jobs Thank you Page', //Option 2 overrides the title in layout.tsx
  },
  description:
    'Find out about academic positions at all universities right now! Visit our FAQ Teaching Jobs Online page to find if your next question has already been answered.',
  keywords: 'FAQ academicjobs, academicjobs FAQ, Frequently Asked Questions',
};
export default function myPage() {
  return (
    <>
      <Head>
        <meta name="robots" content="noindex" />
      </Head>

      <main className="content-grid">
        <div className="bg-slate-100 rounded-3xl mt-12 p-10">
          <h2 className="underline-full">
            Thank you for your Job Post!
          </h2>
          <p>An invoice will be sent to you shortly by email.</p>
          <p>Have any questions? </p>
          <div className="flex justify-between items-center">
            <p className="font-bold">
              <Link href="/contact-us" className="link link-aj">
                Contact our team
              </Link>{' '}
              to get in touch.
            </p>
          
          </div>
          <div className="md:flex justify-between items-center md:mt-6">
            <h3 className="my-0 md:my-0">The TeachingJobs team</h3>
            <div className="md:flex justify-center items-center">
              <Link href="/pricing" className="btn btn-aj mt-4 md:mt-0 md:mx-4">
                Post Another Job
              </Link>
            </div>
          </div>

        </div>
      </main>
    </>
  );
}
