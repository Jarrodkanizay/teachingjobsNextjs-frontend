import type { Metadata } from 'next';
import HeroBanner from '@/components/HeroBanner';

export const metadata: Metadata = {
  title: 'Student Income Booster', //Option 1 replaces the %s in layout.tsx
  // title: {
  //   absolute: '', //Option 2 overrides the title in layout.tsx
  // },
  description:
    'Boost your income by earning extra cash! Get notified immediately and apply today and gain valuable connections while you study.',
  keywords:
    'Student Jobs on Campus, Student Jobs at College, extra cash, extra money, side hustle, part-time-work',
};
export default function myPage() {
  return (
    <>
      <main className="content-grid mx-auto">
        <HeroBanner
          h1="Income Booster Program for Students is coming soon"
          // h2="Students, earn extra cash!"
          para1="Supercharge your financial journey with our Income Booster Program.
          Unlock exclusive opportunities to earn extra income and support your
          educational endeavors. Join now for real-time notifications on
          flexible income options tailored for students."
          para2="Maximize your financial potential with our Income Booster Program.
            Gain instant access to income-generating opportunities designed to
            complement your student life. Sign up today and stay in the loop
            with timely notifications for quick and convenient income boosts."
          src="/student-jobs-on-campus/boost-your-income-handwritten-blackboard.jpg"
          alt="Earn money while studying"
          // bgColorclassName="bg-sky-200"
          // imgRight={false}
        />
      </main>
    </>
  );
}
