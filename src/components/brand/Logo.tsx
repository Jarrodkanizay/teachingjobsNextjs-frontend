import Image from 'next/image';

type Props = {
  width?: number;
  height?: number;
  dimensions?: number;
  forceClass?: string;
};

const Logo = ({ width = 100, height = 100, dimensions, forceClass }: Props) => (
  <Image
    src="/teaching-jobs-logo2.png"
    alt="Teaching Jobs Logo"
    width={dimensions ? dimensions : width}
    height={dimensions ? dimensions : height}
    className={forceClass}
    unoptimized
  />
);

export default Logo;
