import Image from 'next/image';
// type Props = {
//   productName: string
// }

type PricingTypes = {
  cta: string;
  currencySymbol: string;
  basic: string;
  basicPrice: number;
  business: string;
  businessPrice: number;
  enterprise: string;
  enterprisePrice: number;
};

const PricingTable = () => {
  const pricing: PricingTypes = {
    cta: 'Buy',
    currencySymbol: '$',
    basic: 'Single Job Post',
    basicPrice: 315,
    business: '5 Job Pack',
    businessPrice: 1260,
    enterprise: 'The JobElephant Portal',
    enterprisePrice: 11,
  };

  const emailAJ = 'advertise@academicjobs.com';

  const subjectBasic = `I would like to buy a ${pricing.basic}`;
  const subjectBusiness = `I would like to buy a ${pricing.business}`;
  const subjectEnterprise = `I would like to buy a ${pricing.enterprise}`;

  function formatNumberWithCommas(number: number) {
    return number.toLocaleString();
  }

  function createMessage(productName: string, price: number) {
    return encodeURIComponent(`Hi Teaching Jobs,


I would like to purchase the ${productName}. Please send me an
invoice for $${formatNumberWithCommas(price)}.
         
---Please Post the following for me…
         


          `);
  }

  return (
    <div className="max-w-6xl mx-auto pt-4 pb-10 px-8">
      {/* <div className="max-w-md mx-auto mb-14 text-center">
        <h1 className="text-4xl text-slate-600 font-semibold  lg:text-5xl">
          Find Your <span className="text-aj">Best</span>
        </h1>
        <p className="text-xl text-gray-500 font-medium">
          Attract top-tier academics and all Higher Ed staff with the Worlds
          #1&nbsp;job&nbsp;board.
        </p>
      </div> */}

      <div
        id="pricing-table-cards"
        className="flex flex-col justify-between items-center lg:flex-row lg:items-start"
      >
        {/* Pricing Card 1 */}
        <div className="w-full flex-1 mt-8 mb-8 p-8 bg-white shadow-xl rounded-3xl sm:w-96 lg:w-full lg:rounded-r-none">
          <div className="mb-7 pb-7 flex items-center border-b border-gray-300">
            <Image
              width="150"
              height="150"
              alt=""
              src="https://res.cloudinary.com/williamsondesign/abstract-3.jpg"
              className="rounded-3xl w-20 h-20"
            />
            <div className="ml-5">
              <span className="block text-2xl font-semibold">
                {pricing.basic}
              </span>
              <span>
                <span className="font-medium text-gray-500 text-xl align-top">
                  {pricing.currencySymbol}&thinsp;
                </span>
                <span className="text-3xl font-bold">
                  {formatNumberWithCommas(pricing.basicPrice)}
                </span>{' '}
              </span>
            </div>
          </div>
          <ul className="mb-7 font-medium text-gray-500">
            <li className="flex text-lg mb-2">
              <Image
                width="20"
                height="20"
                alt=""
                src="https://res.cloudinary.com/williamsondesign/check-grey.svg"
              />
              <span className="ml-3">
                30 day single<span className="text-black"> job listing</span>
              </span>
            </li>
            <li className="flex text-lg mb-2">
              <Image
                width="20"
                height="20"
                alt=""
                src="https://res.cloudinary.com/williamsondesign/check-grey.svg"
              />
              <span className="ml-3">
                <span className="text-black">Free </span>employer account
              </span>
            </li>

            <li className="flex text-lg mb-2">
              <Image
                width="20"
                height="20"
                alt=""
                src="https://res.cloudinary.com/williamsondesign/check-grey.svg"
              />
              <span className="ml-3">
                Edit job postings
                <span className="text-black"> anytime </span>
              </span>
            </li>
            <li className="flex text-lg mb-2">
              <a href="/post-a-job" className="ml-3">
                Upgrade to{' '}
                <span className="text-black underline">Featured Listing</span>
              </a>
            </li>
          </ul>

          <a
            href="/post-a-job"
            className="flex justify-center items-center bg-aj rounded-xl py-5 px-4 text-center text-white font-bold text-xl"
          >
            {pricing.cta} {pricing.basic}
          </a>
        </div>

        {/* Pricing Card 2 */}
        <div className="w-full flex-1 mt-8 mb-8 p-8 bg-white shadow-xl rounded-3xl sm:w-96 lg:w-full lg:rounded">
          <div className="mb-8 pb-8 flex items-center border-b border-gray-600">
            <Image
              width="150"
              height="150"
              alt=""
              src="https://res.cloudinary.com/williamsondesign/abstract-2.jpg"
              className="rounded-3xl w-20 h-20"
            />
            <div className="ml-5">
              <span className="block text-2xl font-semibold text-black">
                {pricing.business}
              </span>
              <span>
                <span className="font-medium text-gray-500 text-xl align-top">
                  {pricing.currencySymbol}&thinsp;
                </span>
                <span className="text-3xl font-bold text-black">
                  {formatNumberWithCommas(pricing.businessPrice)}
                </span>
              </span>
            </div>
          </div>
          <ul className="mb-5 font-medium text-xl">
            <li className="flex ">
              <Image
                width="20"
                height="20"
                alt=""
                src="https://res.cloudinary.com/williamsondesign/check-grey.svg"
              />
              <span className="ml-3">
                30 day<span className="text-black"> job listings</span>
              </span>
            </li>
            <li className="flex ">
              <Image
                width="20"
                height="20"
                alt=""
                src="https://res.cloudinary.com/williamsondesign/check-grey.svg"
              />
              <span className="ml-3">
                Edit job postings
                <span className="text-black"> anytime</span>
              </span>
            </li>
            <li className="flex ">
              <Image
                width="20"
                height="20"
                alt=""
                src="https://res.cloudinary.com/williamsondesign/check-grey.svg"
              />
              <span className="ml-3">
                Job credits<span className="text-black"> do not expire</span>
              </span>
            </li>
            <li className="flex">
              <Image
                width="20"
                height="20"
                alt=""
                src="https://res.cloudinary.com/williamsondesign/check-grey.svg"
              />
              <span className="ml-3">
                Save<span className="text-black"> Save $315</span>
              </span>
            </li>
          </ul>
          <a
            href="/post-a-job"
            className="flex justify-center items-center bg-aj rounded-xl py-5 px-4 text-center text-white font-bold text-xl"
          >
            {pricing.cta} {pricing.business}
          </a>
        </div>

        {/* Pricing Card 3 */}
        <div className="w-full flex-1 mt-8 p-8 bg-white shadow-xl rounded-3xl sm:w-96 lg:w-full lg:rounded-l-none">
          <Image
            width="400"
            height="400"
            alt=""
            src="https://academicjobs.s3.amazonaws.com/img/_misc/jobelephant-puzzle.png"
            className="rounded-3xl"
          />

          <a
            href="/jobelephant"
            className="flex justify-center items-center bg-aj rounded-xl py-5 px-4 text-center text-white font-bold text-xl"
          >
            {pricing.enterprise}
          </a>
        </div>
      </div>
    </div>
  );
};

export default PricingTable;
