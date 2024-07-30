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
                <h3>Alberta</h3>
              </li>
              <li>
                <Link href="/employers/university-of-alberta/3837/">
                  University of Alberta
                </Link>
              </li>
              <li>
                <Link href="/employers/university-of-calgary/12631/">
                  University of Calgary
                </Link>
              </li>
            </ul>
            <ul>
              <li>
                <h3>Quebec</h3>
              </li>
              <li>
                <Link href="/employers/mcgill-university/3162/">
                  McGill University
                </Link>
              </li>
              <li>
                <Link href="/employers/universite-de-montreal/3836/">
                  Universite De Montreal
                </Link>
              </li>
              <li>
                <Link href="/employers/university-of-waterloo/3838/">
                  University of Waterloo
                </Link>
              </li>
              <li>
                <Link href="/employers/laval-university/12443">
                  Laval University
                </Link>
              </li>
            </ul>
            <ul>
              <li>
                <h3>Ontario</h3>
              </li>
              <li>
                <Link href="/employers/university-of-toronto//3134/">
                  University of Toronto
                </Link>
              </li>
              <li>
                <Link href="/employers/university-of-british-columbia/3157/">
                  University of British Columbia
                </Link>
              </li>
              <li>
                <Link href="/employers/simon-fraser-university/10280/">
                  Simon Fraser University
                </Link>
              </li>
              <li>
                <Link href="/employers/mcmaster-university/3835/">
                  McMaster University
                </Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link href="/employers/university-of-ottawa/12910/">
                  University of Ottawa
                </Link>
              </li>
              <li>
                <Link href="/employers/york-university/13421/">
                  York University
                </Link>
              </li>
              <li>
                <Link href="/employers/queens-university/9836/">
                  Queen's University
                </Link>
              </li>
            </ul>
          </div>
    </>
  );
};

export default TopUnis;
