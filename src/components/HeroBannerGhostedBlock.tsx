import Image from 'next/image';

type HeroItem = {
  // Name?: string;
  // state?: string;
  Title?: string;
  // Description?: string;
  h1?: string;
  content?: string;
  Image?: string;
  alt?: string;
  // h2_footer?: string;
  // content_footer?: string;
  type?: string;
};

type Props = {
  forceClass?: string;
  heroItem: HeroItem;
};

const HeroBannerGhostedBlock = ({
  forceClass = '',
  heroItem: {
    Title = '',
    h1 = '',
    content = '',
    Image: imageSrc = '',
    alt,
    type,
  },
}: Props) => {
  return (
    <>
      {type === 'city' ? (
        <div
          className={`full-width p-8 flex flex-wrap items-center justify-center gap-2 overflow-x-hidden bg-cover bg-center bg-sky-500 mb-8 ${forceClass}`}
          style={{
            backgroundImage: `url(${
              imageSrc ? imageSrc : '/banners/teaching-jobs-australia.jpg'
            })`,

            backgroundSize: `cover`,
          }}
        >
          <div
            className="container max-w-[1200px] px-4 glass md:flex rounded-2xl"
            style={{ backgroundColor: 'transparent' }}
          >
            <div className="card-body bg-none">
              <h1 className="text-black p-0 m-0">{h1 ? h1 : Title}</h1>
              <p className="leading-tight">{content}</p>
            </div>
          </div>
        </div>
      ) : null}

      {type === undefined || type === 'country' ? (
        <div className={`full-width relative bg-pink-700 ${forceClass}`}>
          <Image
            src={imageSrc ? imageSrc : '/banners/teaching-jobs-australia.jpg'}
            alt={alt}
            className="hero_banner_overlay full-width h-full object-cover object-center absolute top-0 left-0"
            width={1920}
            height={1080}
          />
          <div className="hero-content mx-auto items-start justify-start py-12 relative z-10">
            <h1 className="md:text-5xl font-bold md:text-left text-white pb-4 m-0">
              {h1 ? h1 : Title}
              <p className="mt-4 text-white leading-tight">{content}</p>
            </h1>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default HeroBannerGhostedBlock;
