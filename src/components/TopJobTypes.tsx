import Image from 'next/image';
import Link from 'next/link';

import { useStore } from '@/lib/store/store';

export default function JobSearchBox() {
  const { region } = useStore();

  const size = 120;
  const items = [
    {
      src: '/home/teacher2.jpeg',
      alt: 'Early Childhood Teachers',
      label: 'Early Childhood',
      link: `/early-childhood-jobs`,
    },
    {
      src: '/home/academic-student-positions.png',
      alt: 'Primary School Positions',
      label: 'Primary',
      link: `/primary-jobs`,
    },
    {
      src: '/home/teacher3.jpeg',
      alt: 'Secondary School Jobs',
      label: 'Secondary',
      link: `/secondary-jobs`,
    },
    {
      src: '/home/teacher-4.jpg',
      alt: 'Teacher Aide Jobs',
      label: 'Teacher Aide',
      link: `/teacher-aide-jobs`,
    },
    {
      src: '/home/teacher1.jpeg',
      alt: 'Administrative Positions',
      label: 'Admin',
      link: `/admin-jobs`,
    },
  ];
  return (
    <div className="hero-bg md:bg-center ">
      {/* <section className="wrapper md:flex">
        <h2 className="sentence text-blue-500">
          <span className="mr-8">Find</span>{' '}
          <span className="md:hidden block">
            <br />
          </span>
          <div className="slidingVertical ">
            <span>Opportunity</span>
            <span>Connections</span>
            <span>Happiness</span>
            <span>Opportunity</span>
            <span>Connections</span>
          </div>
        </h2>
      </section> */}
      {/* <ul className="hero-icons hide relative flex gap-2 md:gap-5 mx-auto text-center items-center justify-between md:justify-center mt-[-5rem] p-4 z-20">
        {items.map((item: any, index: number) => (
          <li key={index}>
            <Link className="grayscale hover:grayscale-0" href={item.link}>
              <Image src={item.src} width={size} height={size} alt={item.alt} />
            </Link>
            <Link className="mb-4" href={item.link}>
              <p className="whitespace-nowrap">{item.label}</p>
            </Link>
          </li>
        ))}
      </ul> */}

      {/* <ul className="hero-icons lg:flex flex-wrap md:gap-8 mx-auto text-center items-center justify-center md:mt-[-2rem] mt-[-11rem] hidden ">
        {items.map((item, index) => (
          <li key={index}>
            <Link
              className="rounded-full grayscale hover:grayscale-0 font-medium text-[#334680] hover:text-[#e74b7f]"
              href={item.link}
            >
              <Image
                className=" rounded-full "
                src={item.src}
                width={size}
                height={size}
                alt={item.alt}
              />
              <p className="mt-2">{item.label}</p>
            </Link>
          </li>
        ))}
      </ul> */}

      {/* <ul className="hero-icons flex gap-4 md:gap-8 mx-auto text-center items-center justify-center lg:mt-0 mt-[-5rem] lg:hidden text-[#334680]">
        <li>
          <a className="grayscale hover:grayscale-0" href="/early-childhood">
            <Image
              alt="Academic Executive Positions"
              loading="lazy"
              width="180"
              height="180"
              decoding="async"
              data-nimg="1"
              className="rounded-full"
              src="/home/teacher2.jpeg"
            ></Image>
          </a>
          <a className="mb-4" href="/early-childhood">
            <p>Kindergarten</p>
          </a>
        </li>
        <li>
          <a
            className="grayscale hover:grayscale-0 rounded-full"
            href="/primary"
          >
            <Image
              alt="Academic Faculty Positions"
              loading="lazy"
              width="180"
              height="180"
              decoding="async"
              data-nimg="1"
              className="rounded-full"
              src="/home/teacher-4.jpg"
            ></Image>
          </a>
          <a className="mb-4" href="/primary">
            <p className="">Primary</p>
          </a>
        </li>
        <li>
          <a
            className="grayscale hover:grayscale-0 rounded-full"
            href="/secondary"
          >
            <Image
              alt="Academic Staff Positions"
              loading="lazy"
              width="180"
              height="180"
              decoding="async"
              data-nimg="1"
              className="rounded-full"
              src="/home/teacher3.jpeg"
            ></Image>
          </a>
          <a className="mb-4" href="/secondary">
            <p>Secondary</p>
          </a>
        </li>
      </ul> */}
    </div>
  );
}
