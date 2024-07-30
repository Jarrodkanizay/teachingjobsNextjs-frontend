import Link from 'next/link';

type Props = {
  heading: string;
};

const TopUnis = ({ heading }: Props) => {
  return (
    <>
      {/* Start US Section */}
      <h2 id="section" className="underline-full">
        {heading}
      </h2>
      <div className="regions grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 mb-16">
            <ul>
              <li>
                <h3>Mumbai</h3>
              </li>
              <li>
                <Link href="/employers/indian-institute-of-technology-bombay/3844/">
                  Indian Institute of Technology Bombay
                </Link>
              </li>
            </ul>
            <ul>
              <li>
                <h3>Chennai</h3>
              </li>
              <li>
                <Link href="/employers/indian-institute-of-technology-madras/3845/">
                  Indian Institute of Technology Madras
                </Link>
              </li>
            </ul>
            <ul>
              <li>
                <h3>Vellore</h3>
              </li>
              <li>
                <Link href="/employers/vellore-institute-of-technology/3846/">
                  Vellore Institute of Technology
                </Link>
              </li>
            </ul>
            <ul>
              <li>
                <h3>Bangalore</h3>
              </li>
              <li>
                <Link href="/employers/indian-institute-of-science/7818/">
                  Indian Institute of Science (IISc)
                </Link>
              </li>
            </ul>
            <ul>
              <li>
                <h3>Delhi</h3>
              </li>
              <li>
                <Link href="/employers/indian-institute-of-technology-delhi/7822/">
                  Indian Institute of Technology Delhi
                </Link>
              </li>
            </ul>
          </div>
    </>
  );
};

export default TopUnis;
