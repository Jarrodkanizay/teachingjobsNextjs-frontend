import Link from 'next/link';

type PositionLink = {
  name?: string;
  href?: string;
};

const JobLocationTypeLinks = ({
  positionLinks = [
    { name: `Public`, href: `/public-school` },
    { name: `Private`, href: `/private-school` },
    { name: `Catholic`, href: `/catholic-school` },
    { name: `Independent`, href: `/independent-public-school` },
  ],
}: {
  positionLinks?: PositionLink[];
}) => {
  return (
    <ul className="faculty-container flex gap-4 items-center justify-center text-[#e74b7f] mx-2 flex-wrap">
      {positionLinks.map((link) => (
        <li
          key={link.name}
          className="whitespace-nowrap hover:underline hover:text-pink-700"
        >
          <Link href={link.href}>{link.name}</Link>
        </li>
      ))}
    </ul>
  );
};
export default JobLocationTypeLinks;
