import JobPostForm from '@/components/JobPostForm';
import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'this is the job elephant post a job form', //Option 1 replaces the %s in layout.tsx
  // title: {//
  //   absolute: '  Teaching Jobs: Academic, research and science positions locally and globally.', //Option 2 overrides the title in layout.tsx
  // },
  description:
    'Choose an other location to change the price. In USD, all prices are displayed. The live advertisements have the employer logo and ad success indicators, and they can run for a maximum of sixty days.',
  keywords: 'Post Teaching Jobs, Post a Job TeachingJobs',
};

const PostJobPage = () => {
  return <JobPostForm partner="JobElephant" region="JobElephant" />;
};
export default PostJobPage;
