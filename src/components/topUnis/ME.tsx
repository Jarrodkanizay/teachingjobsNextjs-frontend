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
                <h3>Saudi Arabia</h3>
              </li>
              <li>
                <Link href="/employers/king-saud-university-saudi-arabia/8522/">
                  King Saud University
                </Link>
              </li>
              <li>
                <Link href="/employers/king-abdullah-university-of-science-and-technology-saudi-arabia/8513/">
                  King Abdullah University of Science and Technology
                </Link>
              </li>
              <li>
                <Link href="/employers/king-abdul-aziz-university-saudi-arabia/8512/">
                  King Abdul Aziz University
                </Link>
              </li>
            </ul>
            <ul>
              <li>
                <h3>UAE</h3>
              </li>
              <li>
                <Link href="/employers/khalifa-university-uae/8481/">
                  Khalifa University
                </Link>
              </li>
              <li>
                <Link href="/employers/united-arab-emirates-university-uae/10985/">
                  United Arab Emirates University
                </Link>
              </li>
              <li>
                <Link href="/employers/american-university-in-dubai-uae/5799/">
                  American University in Dubai
                </Link>
              </li>
              <li>
                <Link href="/employers/american-university-of-sharjah-uae/5815/">
                  American University of Sharjah
                </Link>
              </li>
            </ul>
            <ul>
              <li>
                <h3>Lebanon</h3>
              </li>
              <li>
                <Link href="/employers/american-university-of-beirut-lebanon/5804/">
                  American University of Beirut
                </Link>
              </li>
              <li>
                <h3>Jordan</h3>
              </li>
              <li>
                <Link href="/employers/university-of-jordan-jordan/12763/">
                  University of Jordan
                </Link>
              </li>
              <li>
                <h3>Qatar</h3>
              </li>
              <li>
                <Link href="/employers/qatar-university-qatar/12944/">
                  Qatar University
                </Link>
              </li>
            </ul>
          </div>
    </>
  );
};

export default TopUnis;
