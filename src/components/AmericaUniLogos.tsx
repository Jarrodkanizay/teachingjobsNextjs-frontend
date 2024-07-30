import Image from 'next/image';

const AmericaUniLogos = () => {
  const width = 378;
  const height = 216;

  const logos = [
    {
      uni: '/university-logos/usa/harvard-university.png',
      alt: 'Harvard University Logo',
      url: '/employers/harvard-university/3100',
    },
    {
      uni: '/university-logos/usa/massachusetts-institute-of-technology-mit.png',
      alt: 'Massachusetts Institute of Technology Logo',
      url: '/employers/massachusetts-institute-of-technology/3103',
    },
    {
      uni: '/university-logos/usa/stanford-university.png',
      alt: 'Stanford University Logo',
      url: '/employers/stanford-university/3101',
    },
    {
      uni: '/university-logos/usa/university-of-california-berkeley-ucb.png',
      alt: 'University of California, Berkeley Logo',
      url: '/employers/university-of-california-berkeley/3105',
    },
    {
      uni: '/university-logos/usa/the-university-of-chicago.webp',
      alt: 'The University of Chicago Logo',
      url: '/employers/university-of-chicago/3126',
    },
    {
      uni: '/university-logos/usa/university-of-pennsylvania.png',
      alt: 'University of Pennsylvania Logo',
      url: '/employers/university-of-pennsylvania/3131',
    },
    {
      uni: '/university-logos/usa/cornell-university.png',
      alt: 'Cornell University Logo',
      url: '/employers/cornell-university/3138',
    },
    {
      uni: '/university-logos/usa/california-institute-of-technology-caltech.jpg',
      alt: 'California Institute of Technology Logo',
      url: '/employers/caltech/3128',
    },
    {
      uni: '/university-logos/usa/yale-university.png',
      alt: 'Yale University Logo',
      url: '/employers/yale-university/3125',
    },

    {
      uni: '/university-logos/usa/princeton-university.png',
      alt: 'Princeton University Logo',
      url: '/employers/princeton-university/3104',
    },
  ];

  return (
    <div className="container my-[50px]">
      <h2 className="aus-jobs-heading text-center mt-8 text-[40px] sm:text-[50px] mb-16 leading-tight">
        Welcome to America's University Jobs Website
      </h2>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 place-items-center">
        {logos.map((logo, index) => (
          <a
            key={index}
            href={logo.url}
            // target="_blank"
            rel="noopener noreferrer"
            className={`sm:col-span-1 ${
              index < 2 ? 'md:col-span-2' : 'md:col-span-1'
            }`}
          >
            <Image
              src={logo.uni}
              alt={logo.alt}
              width={width}
              height={height}
            />
          </a>
        ))}
      </section>
    </div>
  );
};

export default AmericaUniLogos;
