import Image from 'next/image';

type Props = { children: any; iconPath?: string; heading: string };

const Card = ({ children, iconPath = '/icons/heart.svg', heading }: Props) => {
  return (
    <div className="card bg-slate-100 shadow-xl">
      <figure className="px-10 pt-10">
        <div className="icon-ai">
          <Image src={iconPath} alt={heading} width={100} height={100} />
        </div>
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{heading}</h2>
        {children}
      </div>
    </div>
  );
};

export default Card;
