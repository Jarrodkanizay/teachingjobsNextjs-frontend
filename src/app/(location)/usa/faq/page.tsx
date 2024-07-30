import type { Metadata } from 'next';
import FAQ from '@/components/FAQ';

export const metadata: Metadata = {
  // title: 'About', //Option 1 replaces the %s in layout.tsx
  title: {
    absolute: 'FAQ Teaching Jobs USA', //Option 2 overrides the title in layout.tsx
  },
  description:
    'Discover academic jobs at all USA universities today! Explore your next academic positions through visiting our higher ed jobs in USA.',
  keywords:
    'FAQ academicjobs USA, academicjobs USA FAQ, Frequently Asked Questions USA',
};
export default function myPage() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-[#e74b7f]">
        Teaching Jobs USA FAQ
      </h1>

      <FAQ question="What Is Academic Salary in USA - Teaching Jobs USA FAQ">
        <p>
          How much does a Professor make in the USA? The average professor
          salary in the USA is $70,000 per year or $33.60 per hour. Entry-level
          positions start at $55,000 per year while most experienced workers
          make up to $119,000 per year.
        </p>
      </FAQ>

      <FAQ question="What Is the Salary of PhD Professor in USA?">
        <table className="table-auto border-collapse">
          <thead>
            <tr>
              <th className="align-items: flex-start;">Job Title</th>
              <th className="p-2">Average Annual Salaries</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2">Assistant Professor</td>
              <td className="p-2">85,000 USD</td>
            </tr>
            <tr>
              <td className="p-2">Associate Professor</td>
              <td className="p-2">97,000 USD</td>
            </tr>
            <tr>
              <td className="p-2">Professor</td>
              <td className="p-2">142,000 USD</td>
            </tr>
            <tr>
              <td className="p-2">Lecturer</td>
              <td className="p-2">131,000 USD</td>
            </tr>
          </tbody>
        </table>
      </FAQ>

      <FAQ question="Are Professors Paid Well in USA?">
        <p>
          In general, the average pay is between roughly $64,000 and $123,000
          per year. Education professors are at the low end of the salary range,
          typically earning less than $65,000 a year. The highest-paid are those
          who teach law; their expertise can net an annual salary of over
          $120,000.
        </p>
      </FAQ>

      <FAQ question="Do You Need a PhD to Be a Professor in the US?">
        <p>
          While most universities and 4-year colleges require full-time
          professors to hold a doctorate in their given field to teach and/or
          conduct research, other postsecondary teachers may be hired with a
          master's degree or lower.
        </p>
      </FAQ>

      <FAQ question="How Much Do Harvard Professors Make an Hour?">
        <p>
          According to TeachingJobs data, gathered over the entire year of 2023,
          the average annual pay for a Harvard Professor in the United States is
          $75,000 a year. Just in case you need a simple salary calculator, that
          works out to be approximately $36.15 an hour. This is the equivalent
          of $1,440/week or $6,280/month.
        </p>
      </FAQ>

      <FAQ question="Is It Easy to Get a Professor Job in USA?">
        <p>
          It can take many years of hard work and persistent efforts to become a
          college professor. For a full-time position as a professor, you must
          complete a three-year or four-year bachelor's degree, a two-year
          master's degree, and pass state or national-level competitive exams.
        </p>
      </FAQ>

      <FAQ question="Is It Hard to Become a Professor in USA?">
        <p>
          Becoming a college professor isn't easy. Professors generally need a
          doctorate for entry-level positions. Most professors dedicate a decade
          to their postsecondary education before teaching their first class.
        </p>
      </FAQ>

      <FAQ question="Do US Universities Hire Foreign Professors?">
        <p>
          Colleges and universities can hire international employees as
          professors and/or researchers by sponsoring them for permanent
          residence in the US. There is a special immigration pathway for
          teaching positions.
        </p>
      </FAQ>
    </div>
  );
}
