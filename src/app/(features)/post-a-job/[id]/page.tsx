import JobPostForm from '@/components/JobPostForm';
import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Quick Job Post Technology Form Job Packs', //Option 1 replaces the %s in layout.tsx
  // title: {//
  //   absolute: '  Teaching Jobs: Academic, research and science positions locally and globally.', //Option 2 overrides the title in layout.tsx
  // },
  description:
    'With our quick job post form you can fill out your job and it will be live in 32 seconds.',
  keywords: 'Quick Post Teaching Jobs, Quick Post a Job TeachingJobs',
};

const PostJobPage = () => {
  return <JobPostForm partner="" />; //Leave this blank for TeachingJobs
};
export default PostJobPage;
