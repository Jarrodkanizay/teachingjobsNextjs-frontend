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
                <h3>North Island</h3>
              </li>
              <li>
                <Link href="/employers/the-university-of-auckland/3809/">
                  The University of Auckland
                </Link>
              </li>
              <li>
                <Link href="/employers/victoria-university-of-wellington/3807/">
                  Victoria University of Wellington
                </Link>
              </li>
              <li>
                <Link href="/employers/waikato-university/3806/">
                  Waikato University
                </Link>
              </li>
              <li>
                <Link href="/employers/auckland-university-of-technology/3804/">
                  Auckland University of Technology (AUT)
                </Link>
              </li>
            </ul>
            <ul>
              <li>
                <h3>South Island</h3>
              </li>
              <li>
                <Link href="/employers/university-of-otago/3805/">
                  University of Otago
                </Link>
              </li>
              <li>
                <Link href="/employers/lincoln-university/3808/">
                  Lincoln University
                </Link>
              </li>
              <li>
                <Link href="/employers/massey-university/3810/">
                  Massey University
                </Link>
              </li>
              <li>
                <Link href="/employers/university-of-canterbury/3811/">
                  University of Canterbury
                </Link>
              </li>
            </ul>
          </div>
    </>
  );
};

export default TopUnis;
