import Image from 'next/image';

const AusUniLogos = () => {
  const width = 378;
  const height = 216;

  const logos = [
    {
      uni: '/university-logos/aus/bond-university.jpg',
      alt: 'Bond University Logo',
      url: '/employers/bond-university/3785',
    },
    {
      uni: '/university-logos/aus/queensland-university-of-technology.jpg',
      alt: 'Queensland University of Technology (QUT) Logo',
      url: '',
    },
    {
      uni: '/university-logos/aus/university-of-melbourne.jpg',
      alt: 'University of Melbourne Logo',
      url: '/employers/university-of-melbourne/3170',
    },
    {
      uni: '/university-logos/aus/monash-university.jpg',
      alt: 'Monash University Logo',
      url: '/employers/monash-university/3182',
    },
    {
      uni: '/university-logos/aus/university-of-nsw-australia.jpg',
      alt: 'University of NSW Logo',
      url: '/employers/university-of-new-south-wales-unsw-/3738',
    },
    {
      uni: '/university-logos/aus/university-of-queensland-australia.jpg',
      alt: 'University of Queensland Logo',
      url: '/employers/university-of-queensland/3172',
    },
    {
      uni: '/university-logos/aus/university-of-sydney.jpg',
      alt: 'University of Sydney Logo',
      url: '/employers/the-university-of-sydney/3171',
    },
    {
      uni: '/university-logos/aus/university-of-western-australia.jpg',
      alt: 'University of Western Australia Logo',
      url: '/employers/university-of-western-australia/3173',
    },
    {
      uni: '/university-logos/aus/swinburne-university-of-technology.jpg',
      alt: 'Swinburne University of Technology Logo',
      url: '/employers/swimburne-university-of-technology/10541',
    },
    {
      uni: '/university-logos/aus/rmit-university.jpg',
      alt: 'RMIT University Logo',
      url: '/employers/rmit-university/3869',
    },
  ];
  return (
    <div className="container mb-[50px]">
      <h2 className="aus-jobs-heading text-center mt-8 text-[40px] sm:text-[50px] mb-4 leading-tight">
        Welcome to Australia's University Jobs Website
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

export default AusUniLogos;
