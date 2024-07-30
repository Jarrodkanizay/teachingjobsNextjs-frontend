import Image from 'next/image';
import Link from 'next/link';

type Props = {
  heading: string;
  para1?: string;
  para2?: string;
  imagePosition?: 'left' | 'right';
  imagePath?: string;
  alt: string;
  children?: any;
  btnLink?: string;
  btnText?: string;
};

const HeroCard = ({
  heading,
  para1,
  para2,
  imagePath = '/placeholders/placeholder-image.jpg',
  imagePosition = 'left',
  alt = heading,
  children,
  btnLink = '',
  btnText = 'Learn More',
}: Props) => {
  let orderImage = '';
  let orderText = '';

  if (imagePosition === 'right') {
    orderImage = 'order-1 md:order-2';
    orderText = 'order-2 md:order-1';
  }
  return (
    <div className="card card-side bg-slate-100 shadow-xl my-16 px-6 grid sm:grid-cols-1 md:grid-cols-2 md:grid-flow-col-dense">
      <div className={orderImage}>
        <figure>
          <Image
            src={imagePath}
            width={800}
            height={534}
            alt={alt}
            className="w-full lg:max-w-lg rounded-xl m-6"
          />
        </figure>
      </div>
      <div className={orderText}>
        <div className="card-body w-full">
          <h2 className="card-title text-2xl">{heading}</h2>
          <p className="max-w-screen-sm">{para1}</p>
          <p className="max-w-screen-sm">{para2}</p>
          {children}
          {btnLink !== '' && (
            <div className="card-actions justify-end">
              <Link href={btnLink} className="btn btn-aj">
                {btnText}
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeroCard;
