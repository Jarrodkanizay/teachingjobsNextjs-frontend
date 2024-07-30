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
                <h3>England</h3>
              </li>
              <li>
                <Link href="/employers/university-of-cambridge/12635/">
                  University of Cambridge
                </Link>
              </li>
              <li>
                <Link href="/employers/university-of-oxford/3099/">
                  University of Oxford
                </Link>
              </li>
              <li>
                <Link href="/employers/university-college-london/3135/">
                  University College London
                </Link>
              </li>
              <li>
                <Link href="/employers/imperial-college-london/3129/">
                  Imperial College London
                </Link>
              </li>
              <li>
                <Link href="/employers/london-school-of-economics-and-political-science/3153/">
                  London School of Economics and Political Science
                </Link>
              </li>
              <li>
                <Link href="/employers/university-of-manchester/3833/">
                  University of Manchester
                </Link>
              </li>
              <li>
                <Link href="/employers/university-of-birmingham/12614/">
                  University of Birmingham
                </Link>
              </li>
              <li>
                <Link href="/employers/university-of-leeds/12797/">
                  University of Leeds
                </Link>
              </li>
            </ul>
            <ul>
              <li>
                <h3>Scotland</h3>
              </li>
              <li>
                <Link href="/employers/university-of-edinburgh/12681/">
                  University of Edinburgh
                </Link>
              </li>
              <li>
                <Link href="/employers/university-of-glasgow/12713/">
                  University of Glasgow
                </Link>
              </li>
              <li>
                <Link href="/employers/university-of-aberdeen/12555/">
                  University of Aberdeen
                </Link>
              </li>
              <li>
                <Link href="/employers/university-of-st-andrews/13005/">
                  University of St Andrews
                </Link>
              </li>
              <li>
                <Link href="/employers/university-of-dundee/12669/">
                  University of Dundee
                </Link>
              </li>
            </ul>
            <ul>
              <li>
                <h3>Wales</h3>
              </li>
              <li>
                <Link href="/employers/cardiff-university/6252/">
                  Cardiff University
                </Link>
              </li>
              <li>
                <Link href="/employers/swansea-university/10538/">
                  Swansea University
                </Link>
              </li>
              <li>
                <Link href="/employers/aberystwyth-university/13115/">
                  Aberystwyth University
                </Link>
              </li>
              <li>
                <Link href="/employers/bangor-university/13116/">
                  Bangor University
                </Link>
              </li>
            </ul>
            <ul>
              <li>
                <h3>Northern Ireland</h3>
              </li>
              <li>
                <Link href="/employers/queens-university-belfast/10799/">
                  Queen's University Belfast
                </Link>
              </li>
              <li>
                <Link href="/employers/ulster-university/13098/">
                  Ulster University
                </Link>
              </li>
            </ul>
          </div>
    </>
  );
};

export default TopUnis;
