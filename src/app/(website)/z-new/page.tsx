import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { BsFillShareFill } from 'react-icons/bs';
import Button from './Button';
import RequestFullJobForm from '@/components/forms/RequestFullJobForm';
import FavoriteButton from '@/components/FavoriteButton';
import ModalForJobPost from '@/components/ModalForJobPost';

import type { Metadata } from 'next';
import FAQ from '@/components/FAQ';

export const metadata: Metadata = {
  // title: 'About', //Option 1 replaces the %s in layout.tsx
  title: {
    absolute: 'FAQ Teaching Jobs Online', //Option 2 overrides the title in layout.tsx
  },
  description:
    'Discover academic jobs at all universities today! Explore your next academic positions through visiting our higher ed jobs, with new academic jobs added daily.',
  keywords: 'FAQ academicjobs, academicjobs FAQ, Frequently Asked Questions',
};
export default function myPage() {
  //Delete the below once integrated
  let headlineOnly = false;
  let title = 'Assistant Professor of Computer Science';
  let company_name = 'Harvard University';
  let how_to_apply = 'https://www.harvard.edu';
  //Delete the above once integrated

  return (
    <>
      <main className="content-grid">
        <h2 className="underline-full">Job Interactions ModalForJobPost</h2>
        <div className="flex items-center gap-8">
          <label htmlFor="share_job_modal">
            <BsFillShareFill
              size={32}
              color="#2867B2"
              className="cursor-pointer"
            />
          </label>
          <ModalForJobPost
            name="share_job_modal"
            heading="Share this Job Post"
            placeholder="From: (Enter your email)"
            thankYouMessage="Thanks for sharing this job post with your mate!"
            buttonText="Share it!"
            formContext="multi-input"
            formType="share"
            imagePath="/love-messages/let-me-share-the-lov.svg"
          />

          <label htmlFor="save_to_favorites_modal">
            <span className="cursor-pointer">
              <FavoriteButton />
            </span>
          </label>
          <ModalForJobPost
            name="save_to_favorites_modal"
            heading="Add to Favorites"
            placeholder="Enter email to Save this Job Post"
            buttonText="Add to Favorites"
            thankYouMessage="We have added this job post to your favorites!"
            formContext="multi-input"
            imagePath="/love-messages/get-lost-in-what-you-love.svg"
          />

          <label htmlFor="join_talent_pool_modal" className="btn btn-accent">
            Join Talent Pool
          </label>
          <ModalForJobPost
            name="join_talent_pool_modal"
            heading="Join Academic Talent Pool"
            placeholder="Enter email to Join Talent Pool"
            formContext="multi-input"
            buttonText="Join Now"
            thankYouMessage="Thanks for joining our Academic Talent Pool!"
            imagePath="/love-messages/find-your-true-love.svg"
          />
        </div>
        {/* The button to open modal */}
      </main>
    </>
  );
}
