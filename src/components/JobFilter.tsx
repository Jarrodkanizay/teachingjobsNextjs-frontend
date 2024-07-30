'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import SearchLightbulbIcon from '@/components/icons/SearchLightbulbIcon';
import Image from 'next/image';

type JobFilterProps = {
  dataQty?: number | string | undefined;
};

let logos = [

  {
    name: 'Bond',
    url: '/university-logos/aus/bond-university.jpg',
    alt: 'Bond University',
    intro: `Bond University, Australia's first private non-profit university, is renowned for its personalised teaching approach and strong focus on graduate outcomes, set within a vibrant campus on the Gold Coast.`,
    link: '/employers/bond-university/3785',
  },
  {
    name: 'QUT',
    url: '/university-logos/aus/queensland-university-of-technology.jpg',
    alt: 'Queensland University of Technology',
    intro: `Queensland University of Technology (QUT) is a leading Australian university with a global outlook, renowned for its cutting-edge research and innovative approach to teaching and learning.`,
    link: '',
  },
];

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

export default function JobFilter({ dataQty = '> 1' }: JobFilterProps) {
  const [shuffledLogos, setShuffledLogos] = useState([]);

  useEffect(() => {
    shuffleArray(logos);
    setShuffledLogos([...logos]);
  }, []);

  const logoMode = true;

  return (
    <>
      {logoMode ? (
        <>
        <div className="mt-12 rounded-3xl  border-8 mb-12 pb-16 ">
          <Image
                  src="/job-ads/ntc-banner.png"
                  alt="global"
                  width={400}
                  height={450}
                  className="rounded-2xl mb-[-4rem]"
                />
                 {/* <Link
                    href="https://www.academicjobs.com/academic-talent-pool"
                    className="btn btn-sm btn-aj m-4 "
                  >
                    Join Now
                  </Link> */}
</div>
        <div className=" mt-4 hidden ">
          {logos.map((logo, index) => (
            <div key={index} className={`${index > 0 ? 'mt-16' : ''}`}>
              <Link href={logo.link}>
                <Image
                  src={logo.url}
                  alt={logo.intro}
                  width={300}
                  height={250}
                />
                <p className="text-[12px]">{logo.intro}</p>
              </Link>
            </div>
          ))}
        </div>
       </>
      ) : (
        <>
          <div className="filters mt-4 bg-slate-100 py-4 pb-8  px-8 rounded m-0 shadow-xl border border-t-4 h-fit hidden md:block justify-center items-center ml-4">
            {/* <div className="flex justify-center items-center gap-2 my-4 text-sm font-bold text-gray-500 border-2 p-1 rounded-xl mb-8">
    <SearchLightbulbIcon dimensions={22} />
    {dataQty && <span>{`${dataQty} Jobs Found`}</span>}
  </div> */}
            <h2 className="text-xl ">Filters▾</h2>
            {/* Employment Cat Container */}
            <div className="mt-[1rem] ">
              <ul className="faculty-container  items-center justify-center text-gray-500 px-2 grid grid-cols-1">
                <a className="font-bold">Position▾</a>
                <li className="hover:underline">
                  <Link href="/lecturer">Lecturer{'  '}</Link>
                </li>
                <li className="hover:underline">
                  <Link href="/research/">Research{'  '}</Link>
                </li>
                <li className="hover:underline">
                  <Link href="/professor/">Professor{'  '}</Link>
                </li>
                <li className="hover:underline">
                  <Link href="/executive/">Executive{'  '}</Link>
                </li>
                <li className="hover:underline">
                  <Link href="/faculty/">Faculty{'  '}</Link>
                </li>
                <li className="hover:underline">
                  <Link href="/admin/">Admin{'  '}</Link>
                </li>
                <li className="hover:underline">
                  <Link href="/hr-jobs/">HR{'  '}</Link>
                </li>
                <li className="hover:underline">
                  <Link href="/student/">Student{'  '}</Link>
                </li>
                <li className="hover:underline">
                  <Link href="/graduate/"> Graduate{'  '}</Link>
                </li>
                <li className="hover:underline">
                  <Link href="/postdoc/"> Postdoc{'  '}</Link>
                </li>
                <li className="hover:underline">
                  <Link href="/phd/">PhD</Link>
                </li>
              </ul>
            </div>

            {/* Employment Type Container */}
            <div className="mt-7">
              <ul className="faculty-container gap-1 items-center justify-center text-gray-500 px-2 grid grid-cols-1">
                <a className="font-bold">Employment▾</a>
                <li className="hover:underline">
                  <Link href="/online/">Online{'  '}</Link>
                </li>
                <li className="hover:underline">
                  <Link href="/remote/">Remote{'  '}</Link>
                </li>
                <li className="hover:underline">
                  <Link href="/full-time/">Full-Time{'  '}</Link>
                </li>
                <li className="hover:underline">
                  <Link href="/part-time/">Part-Time{'  '}</Link>
                </li>
                <li className="hover:underline">
                  <Link href="/casual/">Casual</Link>
                </li>
              </ul>
            </div>

            {/* {cities} */}
            <div className="cate-group section23 ">
              <div className="widget__text-block">
                <div className="faculty-container grid-cols-1 grid md:grid-cols-1 gap-2 py-2 px-7 text-gray-500 mt-4">
                  <div className="column">
                    <a className="font-bold text-gray-500 ">Top Cities▾</a>
                    <ul className="">
                      <li className="mb-1 mt-4">
                        <Link href="/USA/" className="text-gray-500 font-bold">
                          USA
                        </Link>
                      </li>
                      <ul className="innerUL">
                        <li className="hover:underline">
                          <Link href="/boston/">Boston</Link>
                        </li>
                        <li className="hover:underline">
                          <Link href="/new-york/">New York</Link>
                        </li>
                        <li className="hover:underline">
                          <Link href="/los-angeles/">Los Angeles</Link>
                        </li>
                        <li className="hover:underline">
                          <Link href="/san-francisco/">San Francisco</Link>
                        </li>
                        <li className="hover:underline">
                          <Link href="/chicago/">Chicago</Link>
                        </li>
                        <li className="hover:underline">
                          <Link href="/san-diego/">San Diego</Link>
                        </li>
                        <li className="hover:underline">
                          <Link href="/washington-dc/">Washington DC</Link>
                        </li>
                        <li className="hover:underline">
                          <Link href="/philadelphia/">Philadelphia</Link>
                        </li>
                        <li className="hover:underline">
                          <Link href="/atlanta/">Atlanta</Link>
                        </li>
                        <li className="hover:underline">
                          <Link href="/seattle/">Seattle</Link>
                        </li>
                        <li className="hover:underline">
                          <Link href="/pittsburgh/">Pittsburgh</Link>
                        </li>
                        <li className="hover:underline">
                          <Link href="/new-haven/">New Haven</Link>
                        </li>
                      </ul>
                    </ul>
                  </div>
                  <div className="column">
                    <ul className="">
                      <li className="mb-1 mt-4">
                        <Link
                          href="/Australia/"
                          className="text-gray-500 font-bold"
                        >
                          Australia
                        </Link>
                      </li>
                      <ul className="innerUL">
                        <li className="hover:underline">
                          <Link href="/melbourne/">Melbourne</Link>
                        </li>
                        <li className="hover:underline">
                          <Link href="/sydney/">Sydney</Link>
                        </li>
                        <li className="hover:underline">
                          <Link href="/brisbane/">Brisbane</Link>
                        </li>
                        <li className="hover:underline">
                          <Link href="/gold-coast/">Gold Coast</Link>
                        </li>
                        <li className="hover:underline">
                          <Link href="/canberra/">Canberra</Link>
                        </li>
                        <li className="hover:underline">
                          <Link href="/perth/">Perth</Link>
                        </li>
                        <li className="hover:underline">
                          <Link href="/adelaide/">Adelaide</Link>
                        </li>
                      </ul>
                      <li className="mb-1 mt-4">
                        <Link href="/UK/" className="text-gray-500 font-bold">
                          UK
                        </Link>
                      </li>
                      <ul className="innerUL">
                        <li className="hover:underline">
                          <Link href="/london/">London</Link>
                        </li>
                        <li className="hover:underline">
                          <Link href="/edinburgh/">Edinburgh</Link>
                        </li>
                        <li className="hover:underline">
                          <Link href="/manchester/">Manchester</Link>
                        </li>
                      </ul>
                    </ul>
                  </div>
                  <div className="column">
                    <ul className="">
                      <li className="mb-1 mt-4">
                        <Link
                          href="/Canada/"
                          className="text-gray-500 font-bold"
                        >
                          Canada
                        </Link>
                      </li>
                      <ul className="innerUL">
                        <li className="hover:underline">
                          <Link href="/toronto/">Toronto</Link>
                        </li>
                        <li className="hover:underline">
                          <Link href="/vancouver/">Vancouver</Link>
                        </li>
                        <li className="hover:underline">
                          <Link href="/montreal/">Montreal</Link>
                        </li>
                      </ul>
                      <li className="mb-1 mt-4">
                        <Link href="/Asia/" className="text-gray-500 font-bold">
                          Asia
                        </Link>
                      </li>
                      <ul className="innerUL">
                        <li className="hover:underline">
                          <Link href="/hong-kong/">Hong Kong</Link>
                        </li>
                        <li className="hover:underline">
                          <Link href="/beijing/">Beijing</Link>
                        </li>
                        <li className="hover:underline">
                          <Link href="/tokyo/">Tokyo</Link>
                        </li>
                        <li className="hover:underline">
                          <Link href="/singapore/">Singapore</Link>
                        </li>
                      </ul>
                    </ul>
                  </div>
                  <div className="column">
                    <ul className="">
                      <li className="mb-1 mt-4">
                        <Link
                          href="/Europe/"
                          className="text-gray-500 font-bold"
                        >
                          Europe
                        </Link>
                      </li>
                      <ul className="innerUL">
                        <li className="hover:underline">
                          <Link href="/paris/">Paris</Link>
                        </li>
                        <li className="hover:underline">
                          <Link href="/zurich/">Zurich</Link>
                        </li>
                        <li className="hover:underline">
                          <Link href="/munich/">Munich</Link>
                        </li>
                        <li className="hover:underline">
                          <Link href="/amsterdam/">Amsterdam</Link>
                        </li>
                        <li className="hover:underline">
                          <Link href="/copenhagen/">Copenhagen</Link>
                        </li>
                        <li className="hover:underline">
                          <Link href="/stockholm/">Stockholm</Link>
                        </li>
                      </ul>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* {Unis} */}
            <div className="faculty-container grid-cols-1 grid md:grid-cols-1  py-2 text-gray-500 mt-6">
              <a className="font-bold">Top Universities▾</a>
              <div className="column">
                <ul className="">
                  <ul className="">
                    <li className="hover:underline">
                      <Link href="/employers/harvard-university/3100/">
                        {' '}
                        Harvard University
                      </Link>
                    </li>
                    <li className="hover:underline">
                      <Link href="/employers/stanford-university/3101/">
                        {' '}
                        Stanford University
                      </Link>
                    </li>
                    <li className="hover:underline">
                      <Link href="/employers/university-of-cambridge/12635/">
                        {' '}
                        University of Cambridge
                      </Link>
                    </li>
                    <li className="hover:underline">
                      <Link href="/employers/massachusetts-institute-of-technology/3103/">
                        MIT
                      </Link>
                    </li>
                    <li className="hover:underline">
                      <Link href="/employers/university-of-california-berkeley/3105/">
                        {' '}
                        University of California, Berkeley
                      </Link>
                    </li>
                  </ul>
                </ul>
              </div>
              <div className="column">
                <ul className="">
                  <ul className="innerUL">
                    <li className="hover:underline">
                      <Link href="/employers/princeton-university/3104/">
                        {' '}
                        Princeton University
                      </Link>
                    </li>
                    <li className="hover:underline">
                      <Link href="/employers/university-of-oxford/3099/">
                        {' '}
                        University of Oxford
                      </Link>
                    </li>
                    <li className="hover:underline">
                      <Link href="/employers/columbia-university/3127/">
                        {' '}
                        Columbia University
                      </Link>
                    </li>
                    <li className="hover:underline">
                      <Link href="/employers/caltech/3128/">Caltech</Link>
                    </li>
                    <li className="hover:underline">
                      <Link href="/employers/University-of-Chicago/3126/">
                        {' '}
                        University of Chicago
                      </Link>
                    </li>
                  </ul>
                </ul>
              </div>
              <div className="column">
                <ul className="">
                  <ul className="innerUL">
                    <li className="hover:underline">
                      <Link href="/employers/yale-university/3125/">
                        {' '}
                        Yale University
                      </Link>
                    </li>
                    <li className="hover:underline">
                      <Link href="/employers/Cornell-University/3138/">
                        Cornell University
                      </Link>
                    </li>
                    <li className="hover:underline">
                      <Link href="/employers/university-of-california-los-angeles/3136/">
                        UCLA
                      </Link>
                    </li>
                    <li className="hover:underline">
                      <Link href="/employers/university-of-pennsylvania/3131/">
                        UPenn
                      </Link>
                    </li>
                    <li className="hover:underline">
                      <Link href="/employers/johns-hopkins-university/3130/">
                        Johns Hopkins University (JHU)
                      </Link>
                    </li>
                  </ul>
                </ul>
              </div>
              <div className="column">
                <ul className="">
                  <ul className="innerUL">
                    <li className="hover:underline">
                      <Link href="/employers/university-college-london/12527/">
                        University College London (UCL)
                      </Link>
                    </li>
                    <li className="hover:underline">
                      <Link href="/employers/eth-zurich/3132/">ETH Zurich</Link>
                    </li>
                    <li className="hover:underline">
                      <Link href="/employers/university-of-tokyo/3155/">
                        The University of Tokyo (UTokyo)
                      </Link>
                    </li>
                    <li className="hover:underline">
                      <Link href="/employers/new-york-university-nyu/3144/">
                        New York University (NYU)
                      </Link>
                    </li>
                    <li className="hover:underline">
                      <Link href="/employers/duke-university/3139/">
                        {' '}
                        Duke University (Duke)
                      </Link>
                    </li>
                  </ul>
                </ul>
              </div>
            </div>
          </div>

          <details className="bg-gray-300 open:bg-[amber-200] duration-300 md:hidden">
            <summary className="bg-inherit px-5 py-3 text-lg cursor-pointer pl-8">
              Filters
            </summary>
            <div className="bg-white  border border-gray-300 text-sm font-light md:flex md:justify-start py-4 px-6 mb-4">
              {/* Employment Type Container */}

              <ul className="faculty-container gap-1 items-center justify-center text-gray-500 px-2 grid grid-cols-1">
                <a className="font-bold">Employment▾</a>
                <li className="hover:underline">
                  <Link href="/online/">Online{'  '}</Link>
                </li>
                <li className="hover:underline">
                  <Link href="/remote/">Remote{'  '}</Link>
                </li>
                <li className="hover:underline">
                  <Link href="/full-time/">Full-Time{'  '}</Link>
                </li>
                <li className="hover:underline">
                  <Link href="/part-time/">Part-Time{'  '}</Link>
                </li>
                <li className="hover:underline">
                  <Link href="/casual/">Casual</Link>
                </li>
              </ul>

              {/* Employment Cat Container */}
              <ul className="mt-[1rem] text-gray-500">
                <a className="font-bold">Position▾</a>
                <li className="hover:underline">
                  <Link href="/lecturer">Lecturer{'  '}</Link>
                </li>
                <li className="hover:underline">
                  <Link href="/research/">Research{'  '}</Link>
                </li>
                <li className="hover:underline">
                  <Link href="/professor/">Professor{'  '}</Link>
                </li>
                <li className="hover:underline">
                  <Link href="/executive/">Executive{'  '}</Link>
                </li>
                <li className="hover:underline">
                  <Link href="/faculty/">Faculty{'  '}</Link>
                </li>
                <li className="hover:underline">
                  <Link href="/admin/">Admin{'  '}</Link>
                </li>
                <li className="hover:underline">
                  <Link href="/hr-jobs/">HR{'  '}</Link>
                </li>
                <li className="hover:underline">
                  <Link href="/student/">Student{'  '}</Link>
                </li>
                <li className="hover:underline">
                  <Link href="/graduate/"> Graduate{'  '}</Link>
                </li>
                <li className="hover:underline">
                  <Link href="/postdoc/"> Postdoc{'  '}</Link>
                </li>
                <li className="hover:underline">
                  <Link href="/phd/">PhD</Link>
                </li>
              </ul>

              {/* {Unis} */}
              <div className="faculty-container grid-cols-1 grid md:grid-cols-1  py-2 text-gray-500 mt-6">
                <a className="font-bold">Top Universities▾</a>
                <div className="column">
                  <ul className="">
                    <ul className="">
                      <li className="hover:underline">
                        <Link href="/employers/harvard-university/3100/">
                          {' '}
                          Harvard University
                        </Link>
                      </li>
                      <li className="hover:underline">
                        <Link href="/employers/stanford-university/3101/">
                          {' '}
                          Stanford University
                        </Link>
                      </li>
                      <li className="hover:underline">
                        <Link href="/employers/university-of-cambridge/12635/">
                          {' '}
                          University of Cambridge
                        </Link>
                      </li>
                      <li className="hover:underline">
                        <Link href="/employers/massachusetts-institute-of-technology/3103/">
                          MIT
                        </Link>
                      </li>
                      <li className="hover:underline">
                        <Link href="/employers/university-of-california-berkeley/3105/">
                          {' '}
                          University of California, Berkeley
                        </Link>
                      </li>
                    </ul>
                  </ul>
                </div>
                <div className="column">
                  <ul className="">
                    <ul className="innerUL">
                      <li className="hover:underline">
                        <Link href="/employers/princeton-university/3104/">
                          {' '}
                          Princeton University
                        </Link>
                      </li>
                      <li className="hover:underline">
                        <Link href="/employers/university-of-oxford/3099/">
                          {' '}
                          University of Oxford
                        </Link>
                      </li>
                      <li className="hover:underline">
                        <Link href="/employers/columbia-university/3127/">
                          {' '}
                          Columbia University
                        </Link>
                      </li>
                      <li className="hover:underline">
                        <Link href="/employers/caltech/3128/">Caltech</Link>
                      </li>
                      <li className="hover:underline">
                        <Link href="/employers/University-of-Chicago/3126/">
                          {' '}
                          University of Chicago
                        </Link>
                      </li>
                    </ul>
                  </ul>
                </div>
                <div className="column">
                  <ul className="">
                    <ul className="innerUL">
                      <li className="hover:underline">
                        <Link href="/employers/yale-university/3125/">
                          {' '}
                          Yale University
                        </Link>
                      </li>
                      <li className="hover:underline">
                        <Link href="/employers/Cornell-University/3138/">
                          Cornell University
                        </Link>
                      </li>
                      <li className="hover:underline">
                        <Link href="/employers/university-of-california-los-angeles/3136/">
                          UCLA
                        </Link>
                      </li>
                      <li className="hover:underline">
                        <Link href="/employers/university-of-pennsylvania/3131/">
                          UPenn
                        </Link>
                      </li>
                      <li className="hover:underline">
                        <Link href="/employers/johns-hopkins-university/3130/">
                          Johns Hopkins University (JHU)
                        </Link>
                      </li>
                    </ul>
                  </ul>
                </div>
                <div className="column">
                  <ul className="">
                    <ul className="innerUL">
                      <li className="hover:underline">
                        <Link href="/employers/university-college-london/12527/">
                          University College London (UCL)
                        </Link>
                      </li>
                      <li className="hover:underline">
                        <Link href="/employers/eth-zurich/3132/">
                          ETH Zurich
                        </Link>
                      </li>
                      <li className="hover:underline">
                        <Link href="/employers/university-of-tokyo/3155/">
                          The University of Tokyo (UTokyo)
                        </Link>
                      </li>
                      <li className="hover:underline">
                        <Link href="/employers/new-york-university-nyu/3144/">
                          New York University (NYU)
                        </Link>
                      </li>
                      <li className="hover:underline">
                        <Link href="/employers/duke-university/3139/">
                          {' '}
                          Duke University (Duke)
                        </Link>
                      </li>
                    </ul>
                  </ul>
                </div>
              </div>

              {/* {cities} */}

              <div className="faculty-container grid-cols-1 grid md:grid-cols-1 gap-2 py-2 px-7 text-gray-500 mt-4">
                <div className="column">
                  <a className="font-bold text-gray-500 ">Top Cities▾</a>
                  <ul className="">
                    <li className="mb-1 mt-4">
                      <Link href="/USA/" className="text-gray-500 font-bold">
                        USA
                      </Link>
                    </li>
                    <ul className="innerUL">
                      <li className="hover:underline">
                        <Link href="/boston/">Boston</Link>
                      </li>
                      <li className="hover:underline">
                        <Link href="/new-york/">New York</Link>
                      </li>
                      <li className="hover:underline">
                        <Link href="/los-angeles/">Los Angeles</Link>
                      </li>
                      <li className="hover:underline">
                        <Link href="/san-francisco/">San Francisco</Link>
                      </li>
                      <li className="hover:underline">
                        <Link href="/chicago/">Chicago</Link>
                      </li>
                      <li className="hover:underline">
                        <Link href="/san-diego/">San Diego</Link>
                      </li>
                      <li className="hover:underline">
                        <Link href="/washington-dc/">Washington DC</Link>
                      </li>
                      <li className="hover:underline">
                        <Link href="/philadelphia/">Philadelphia</Link>
                      </li>
                      <li className="hover:underline">
                        <Link href="/atlanta/">Atlanta</Link>
                      </li>
                      <li className="hover:underline">
                        <Link href="/seattle/">Seattle</Link>
                      </li>
                      <li className="hover:underline">
                        <Link href="/pittsburgh/">Pittsburgh</Link>
                      </li>
                      <li className="hover:underline">
                        <Link href="/new-haven/">New Haven</Link>
                      </li>
                    </ul>
                  </ul>
                </div>
                <div className="column">
                  <ul className="">
                    <li className="mb-1 mt-4">
                      <Link
                        href="/Australia/"
                        className="text-gray-500 font-bold"
                      >
                        Australia
                      </Link>
                    </li>
                    <ul className="innerUL">
                      <li className="hover:underline">
                        <Link href="/melbourne/">Melbourne</Link>
                      </li>
                      <li className="hover:underline">
                        <Link href="/sydney/">Sydney</Link>
                      </li>
                      <li className="hover:underline">
                        <Link href="/brisbane/">Brisbane</Link>
                      </li>
                      <li className="hover:underline">
                        <Link href="/gold-coast/">Gold Coast</Link>
                      </li>
                      <li className="hover:underline">
                        <Link href="/canberra/">Canberra</Link>
                      </li>
                      <li className="hover:underline">
                        <Link href="/perth/">Perth</Link>
                      </li>
                      <li className="hover:underline">
                        <Link href="/adelaide/">Adelaide</Link>
                      </li>
                    </ul>
                    <li className="mb-1 mt-4">
                      <Link href="/UK/" className="text-gray-500 font-bold">
                        UK
                      </Link>
                    </li>
                    <ul className="innerUL">
                      <li className="hover:underline">
                        <Link href="/london/">London</Link>
                      </li>
                      <li className="hover:underline">
                        <Link href="/edinburgh/">Edinburgh</Link>
                      </li>
                      <li className="hover:underline">
                        <Link href="/manchester/">Manchester</Link>
                      </li>
                    </ul>
                  </ul>
                </div>
                <div className="column">
                  <ul className="">
                    <li className="mb-1 mt-4">
                      <Link href="/Canada/" className="text-gray-500 font-bold">
                        Canada
                      </Link>
                    </li>
                    <ul className="innerUL">
                      <li className="hover:underline">
                        <Link href="/toronto/">Toronto</Link>
                      </li>
                      <li className="hover:underline">
                        <Link href="/vancouver/">Vancouver</Link>
                      </li>
                      <li className="hover:underline">
                        <Link href="/montreal/">Montreal</Link>
                      </li>
                    </ul>
                    <li className="mb-1 mt-4">
                      <Link href="/Asia/" className="text-gray-500 font-bold">
                        Asia
                      </Link>
                    </li>
                    <ul className="innerUL">
                      <li className="hover:underline">
                        <Link href="/hong-kong/">Hong Kong</Link>
                      </li>
                      <li className="hover:underline">
                        <Link href="/beijing/">Beijing</Link>
                      </li>
                      <li className="hover:underline">
                        <Link href="/tokyo/">Tokyo</Link>
                      </li>
                      <li className="hover:underline">
                        <Link href="/singapore/">Singapore</Link>
                      </li>
                    </ul>
                  </ul>
                </div>
                <div className="column">
                  <ul className="">
                    <li className="mb-1 mt-4">
                      <Link href="/Europe/" className="text-gray-500 font-bold">
                        Europe
                      </Link>
                    </li>
                    <ul className="innerUL">
                      <li className="hover:underline">
                        <Link href="/paris/">Paris</Link>
                      </li>
                      <li className="hover:underline">
                        <Link href="/zurich/">Zurich</Link>
                      </li>
                      <li className="hover:underline">
                        <Link href="/munich/">Munich</Link>
                      </li>
                      <li className="hover:underline">
                        <Link href="/amsterdam/">Amsterdam</Link>
                      </li>
                      <li className="hover:underline">
                        <Link href="/copenhagen/">Copenhagen</Link>
                      </li>
                      <li className="hover:underline">
                        <Link href="/stockholm/">Stockholm</Link>
                      </li>
                    </ul>
                  </ul>
                </div>
              </div>
            </div>
          </details>
        </>
      )}
    </>
  );
}
