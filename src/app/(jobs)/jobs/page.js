import Jobs from './jobs';
import HeroBannerGhostedBlock from '@/components/HeroBannerGhostedBlock';

const localObj = {
  Title: 'All Teaching Jobs in Australia',
  h1: 'Teaching Jobs Australia',
  content:
    'Find top Teaching Jobs in Australia at leading private, Catholic, and independent schools. Join a rewarding profession that offers flexible hours, competitive salaries, excellent employee benefits, and ongoing professional development opportunities.',
  Image: '/banners/teacher-aide-jobs-sydney.jpg',
  alt: '',
  //   type: '',
};

export default function Page({ searchParams }) {
  return (
    <main>
      <HeroBannerGhostedBlock heroItem={localObj} forceClass="mb-10" />

      <Jobs />
    </main>
  );
}
