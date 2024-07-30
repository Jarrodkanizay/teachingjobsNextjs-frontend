import Link from 'next/link';

type JobCategoryLinksProps = {
  nativeOn?: boolean;
};

const JobCategoryLinks = ({ nativeOn }: JobCategoryLinksProps) => {
  return (
    <ul className="faculty-container flex flex-wrap gap-4 items-center justify-center text-[#334680] ">
      <ul className="w-full  md:w-auto flex items-center  justify-center gap-4">
        <li className=" hover:underline">
          <a href="/early-childhood/"> Kindergarten</a>
        </li>
        <li className=" hover:underline">
          <a href="/primary/"> Primary </a>
        </li>
        <li className=" hover:underline"><a href="/secondary/"> Secondary</a></li><li className=" hover:underline"><a href="/relief-teaching-jobs/"> Relief teaching</a></li></ul><li className=" hover:underline hidden md:block "><a href="/administrative/">Admin</a></li></ul>
  );
};

export default JobCategoryLinks;
