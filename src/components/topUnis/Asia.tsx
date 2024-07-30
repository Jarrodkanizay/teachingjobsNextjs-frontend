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
                <h3>Singapore</h3>
              </li>
              <li>
                <Link href="/employers/nanyang-technological-university-singapore/3152/">
                  Nanyang Technological University
                </Link>
              </li>
              <li>
                <Link href="/employers/national-university-of-singapore/3137/">
                  National University of Singapore
                </Link>
              </li>
              <li>
                <h3>Malaysia</h3>
              </li>
              <li>
                <Link href="/employers/universiti-ualaya/12499/">
                  Universiti Malaya (UM)
                </Link>
              </li>
            </ul>
            <ul>
              <li>
                <h3>China</h3>
              </li>
              <li>
                <Link href="/employers/peking-university/3133/">
                  Peking University
                </Link>
              </li>
              <li>
                <Link href="/employers/tsinghua-university/3840/">
                  Tsinghua University
                </Link>
              </li>
              <li>
                <Link href="/employers/fudan-university/7289/">
                  Fudan University
                </Link>
              </li>
              <li>
                <Link href="/employers/shanghai-jiao-tong-university/6876/">
                  Shanghai Jiao Tong University
                </Link>
              </li>
            </ul>
            <ul>
              <li>
                <h3>Japan</h3>
              </li>
              <li>
                <Link href="/employers/university-of-tokyo/3155/">
                  University of Tokyo
                </Link>
              </li>
              <li>
                <h3>Indonesia</h3>
              </li>
              <li>
                <Link href="/employers/the-university-of-indonesia/12068/">
                  The University of Indonesia
                </Link>
              </li>
              <li>
                <h3>Thailand</h3>
              </li>
              <li>
                <Link href="/employers/chulalongkorn-university/6615/">
                  Chulalongkorn University
                </Link>
              </li>
            </ul>
            <ul>
              <li>
                <h3>Hong Kong</h3>
              </li>
              <li>
                <Link href="/employers/university-of-hong-kong/3148/">
                  University of Hong Kong
                </Link>
              </li>
              <li>
                <Link href="/employers/chinese-university-of-hong-kong/3161/">
                  Chinese University of Hong Kong
                </Link>
              </li>
              <li>
                <Link href="/employers/the-hong-kong-university-of-science-and-technology/3843/">
                  The Hong Kong University of Science and Technology
                </Link>
              </li>
              <li>
                <h3>South Korea</h3>
              </li>
              <li>
                <Link href="/employers/seoul-national-university/10119/">
                  Seoul National University
                </Link>
              </li>
            </ul>
          </div>
    </>
  );
};

export default TopUnis;
