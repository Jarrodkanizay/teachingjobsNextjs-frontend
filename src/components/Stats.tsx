import Image from 'next/image';

const Stats = () => {
  return (
    <div className="container my-16">
      <div className="stats shadow w-full">
        <div className="stat">
          <div className="stat-figure">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-8 h-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                stroke="red"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              ></path>
            </svg>
          </div>
          <div className="stat-title">Recruiters & Schools Helped</div>
          <div className="stat-value text-blue-700">562</div>
          <div className="stat-desc">
            Saved Recruiters & Schools 8 minutes per post
          </div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
                stroke="pink"
                opacity="1"
              ></path>
            </svg>
          </div>
          <div className="stat-title">Teaching Positions Filled</div>
          <div className="stat-value text-pink-500">1.2K</div>
          <div className="stat-desc">
            Provided Job Seekers with more opportunities than any other Job
            Board
          </div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <div className="avatar online">
              <div className="w-24 rounded-full">
                <Image
                  width={150}
                  height={150}
                  src="/about-us/ai-fast-job-posting.jpg"
                  alt="Fast Job Posting with Exclusive AI assistant"
                />
              </div>
            </div>
          </div>
          <div className="stat-value">900%</div>
          <div className="stat-title">Faster Job Posting</div>
          <div className="stat-desc">With our Quick Job Post Technology</div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
