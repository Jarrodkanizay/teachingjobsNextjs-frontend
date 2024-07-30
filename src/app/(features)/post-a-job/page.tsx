import JobPostForm from '@/components/JobPostForm';
import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Quick Job Post Technology Form', //Option 1 replaces the %s in layout.tsx
  // title: {//
  //   absolute: '  Teaching Jobs: Academic, research and science positions locally and globally.', //Option 2 overrides the title in layout.tsx
  // },
  description:
    'The fastest, easiest way to post a job. Fill out the form and your job will be live in 32 seconds.',
  keywords: 'Post Teaching Jobs, Post a Job TeachingJobs',
};

const PostJobPage = () => {
  return <JobPostForm partner="" />; //Leave this blank for TeachingJobs
};
export default PostJobPage;
