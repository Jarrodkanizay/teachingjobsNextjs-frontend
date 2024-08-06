import Link from 'next/link';

const LinkListWithHeadings = ({ title, items }) => {
  return (
    <>
      <h2 className="underline-full mt-16">{title}</h2>
      <div className="faculty-container grid-cols-2 grid md:grid-cols-4 gap-8">
        {items.map((item, index) => (
          <div key={index} className="column">
            <ul className="m-0 p-0">
              <li className="mb-1 mt-4">
                <Link
                  className="relative group text-[#e74b7f] font-bold hover:text-blue-800"
                  href={item.href}
                >
                  <span>{item.name}</span>
                  <span className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-[#e74b7f] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <ul className="innerUL">
                {item.employers.map((employer, empIndex) => (
                  <li
                    key={empIndex}
                    className="pb-3 hover:text-[#e74b7f] leading-tight text-balance"
                  >
                    <Link className="relative group" href={employer.href}>
                      <span>{employer.name}</span>
                      <span className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-[#e74b7f] transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                  </li>
                ))}
              </ul>
            </ul>
          </div>
        ))}
      </div>
    </>
  );
};

export default LinkListWithHeadings;
