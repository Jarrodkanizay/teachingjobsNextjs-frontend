import Link from 'next/link';
import Image from 'next/image';

const HeadlineJobLinks = () => {
  const iconSize: number = 40;

  function getRandomNumber(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  return (
    <div className="flex flex-wrap gap-4 justify-between border-t-2 pt-4 text-black">
      <div className="grid grid-cols-1 items-center justify-center max-w-[80px] mx-auto sm:mx-0">
        <Image
          className="stat-icon"
          width={iconSize}
          height={iconSize}
          alt=""
          src="https://academicjobs.s3.amazonaws.com/icon/1738704.png"
        />
        <div className="text-[16px] w-[18px] text-center">
          {getRandomNumber(2, 12)}
        </div>
        <div className="text-[10px] leading-tight col-span-2 pb-1 text-center ">
          Attempts to Apply
        </div>
      </div>

      <div className="grid grid-cols-1 items-center justify-center max-w-[80px] mx-auto sm:mx-0">
        <Image
          className="stat-icon"
          width={iconSize}
          height={iconSize}
          alt=""
          src="https://academicjobs.s3.amazonaws.com/icon/8178947.png"
        />
        <div className="text-[16px] w-[22px] text-center">
          {getRandomNumber(12, 50)}
        </div>
        <div className="text-[10px] leading-tight col-span-2  pb-1 text-center">
          Views
        </div>
      </div>

      <div className="grid grid-cols-1 items-center justify-center max-w-[80px] mx-auto sm:mx-0">
        <Image
          className="stat-icon"
          width={iconSize}
          height={iconSize}
          alt=""
          src="https://academicjobs.s3.amazonaws.com/icon/logored.png"
        />
        <div className="text-[16px] w-[18px] text-center">
          {getRandomNumber(1, 6)}
        </div>
        <div className="text-[10px] leading-tight col-span-2  pb-1 text-center ">
          Shares
        </div>
      </div>

      <div className="grid grid-cols-1 items-center justify-center max-w-[80px] mx-auto sm:mx-0">
        <Image
          className="stat-icon"
          width={iconSize}
          height={iconSize}
          alt=""
          src="https://academicjobs.s3.amazonaws.com/icon/9005728.png"
        />
        <div className="text-[16px] w-[18px] text-center">
          {getRandomNumber(3, 20)}
        </div>
        <div className="text-[10px] leading-tight col-span-2  pb-1 text-center ">
          Full Post Requests
        </div>
      </div>

      <div className="grid grid-cols-1 items-center justify-center max-w-[80px] mx-auto sm:mx-0">
        <Image
          className="stat-icon"
          width={iconSize}
          height={iconSize}
          alt=""
          src="/tick-green.svg"
        />
        <div className="text-[16px] w-[22px] text-center">32</div>
        <div className="text-[10px] leading-tight col-span-2  pb-1 text-center text-green-500">
          Only 32 seconds
          <br />
          to post this job
        </div>
      </div>

    </div>
  );
};
export default HeadlineJobLinks;
