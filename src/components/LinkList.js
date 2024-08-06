import Link from 'next/link';
const LinkList = ({ title, items }) => {
  return (
    <>
      <h2 className="underline-full mt-16">{title}</h2>
      <ul className="m-0 p-0 text-left columns-1 md:columns-3 lg:columns-4">
        {items.map((item, index) => (
          <li key={index} className="pb-2 hover:text-[#e74b7f]">
            <Link className="relative group" href={item.href}>
              <span>{item.name}</span>
              <span className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-[#e74b7f] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default LinkList;
