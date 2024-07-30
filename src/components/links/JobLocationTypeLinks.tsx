import Link from 'next/link';
const JobLocationTypeLinks = () => {
  return (
    <ul className=" faculty-container flex gap-4 items-center justify-center text-[#e74b7f] mx-2  flex-wrap">
      {/* <li  className="hover:underline md:whitespace-nowrap md:hidden ">
        <Link href="/relief-teaching-jobs/">Public</Link>
      </li>
      <li className="hover:underline md:whitespace-nowrap md:hidden ">
        <Link href="/admin/">Private</Link>
      </li> */}
      <li className="hover:underline whitespace-nowrap">
        <Link href="/public-school">Public{'  '}</Link>
      </li>
      <li className="hover:underline whitespace-nowrap">
        <Link href="/private-school">Private{'  '}</Link>
      </li>
      <li className="hover:underline whitespace-nowrap">
        <Link href="/catholic-school">Catholic{'  '}</Link>
      </li>
      <li className="hover:underline whitespace-nowrap">
        <Link href="/independent-public-school">Independent{'  '}</Link>
      </li>
    </ul>
  );
};
export default JobLocationTypeLinks;
