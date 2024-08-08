import Image from 'next/image';
import Link from 'next/link';
import WordSwitcher from '@/components/WordSwitcher';

type Props = {
  // h1: string;
  // h1_mobile: string;
  country?: string;
  items: any;
  size?: number;
};

const HeroBannerPortrait = ({ country = '', items, size = 130 }: Props) => {
  return (
    <>
      <div
        className={`full-width h-[229px] md:h-[400px] bg-gradient-to-br from-pink-600 via-pink-400 to-pink-700`}
      >
        <div
          className={`hero-bg ${country} h-full md:bg-center mb-4 flex items-center justify-center z-0`}
        >
          <section className="wrapper flex flex-col items-center justify-center mt-[0.25rem] md:mt-[-5rem]">
            <WordSwitcher />
          </section>
        </div>
      </div>
      <ul className="hero-icons hide relative flex gap-2 md:gap-5 mx-auto text-center items-center justify-between md:justify-center mt-[-5rem] p-4 z-20">
        {items.map((item: any, index: number) => (
          <li key={index} className="">
            <Link className="grayscale hover:grayscale-0" href={item.link}>
              <Image src={item.src} width={size} height={size} alt={item.alt} />
            </Link>
            <Link className="mb-4" href={item.link}>
              <p className="whitespace-nowrap text-sm">{item.label}</p>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default HeroBannerPortrait;
