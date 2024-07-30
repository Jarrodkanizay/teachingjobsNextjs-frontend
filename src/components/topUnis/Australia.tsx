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
              <h3>ACT</h3>
            </li>
            <li>
              <Link href="/employers/australian-national-university/3739/">
                Australian National University
              </Link>
            </li>
            <li>
              <Link href="/employers/university-of-canberra/3821/">
                University of Canberra
              </Link>
            </li>
            <li>
              <h3>New South Wales</h3>
            </li>
            <li>
              <Link href="/employers/the-university-of-sydney/3171/">
                The University of Sydney
              </Link>
            </li>
            <li>
              <Link href="/employers/university-of-new-south-wales-unsw-/3738/">
                University of New South Wales
              </Link>
            </li>
            <li>
              <Link href="/employers/charles-sturt-university/3855/">
                Charles Sturt University
              </Link>
            </li>
            <li>
              <Link href="/employers/australian-catholic-university/3853/">
                Australian Catholic University
              </Link>
            </li>
            <li>
              <Link href="/employers/southern-cross-university/3862/">
                Southern Cross University
              </Link>
            </li>
            <li>
              <Link href="/employers/university-of-technology-sydney/3864/">
                University of Technology, Sydney
              </Link>
            </li>
            <li>
              <Link href="/employers/macquarie-university/3881/">
                Macquarie University
              </Link>
            </li>
            <li>
              <Link href="/employers/university-of-new-england/3209/">
                University of New England
              </Link>
            </li>
            <li>
              <Link href="/employers/university-of-newcastle/3863/">
                University of Newcastle
              </Link>
            </li>
            <li>
              <Link href="/employers/university-of-western-sydney/3865/">
                University of Western Sydney
              </Link>
            </li>
            <li>
              <Link href="/employers/university-of-wollongong/3866/">
                University of Wollongong
              </Link>
            </li>
          </ul>
          <ul>
            <li>
              <h3>Victoria</h3>
            </li>
            <li>
              <Link href="/employers/university-of-melbourne/3170/">
                The University of Melbourne
              </Link>
            </li>
            <li>
              <Link href="/employers/monash-university/3182/">
                Monash University
              </Link>
            </li>
            <li>
              <Link href="/employers/victoria-university/3871/">
                Victoria University
              </Link>
            </li>
            <li>
              <Link href="/employers/university-of-divinity/3872/">
                University of Divinity
              </Link>
            </li>
            <li>
              <Link href="/employers/swimburne-university-of-technology/10541/">
                Swinburne University of Technology
              </Link>
            </li>
            <li>
              <Link href="/employers/rmit-university/3869/">
                RMIT University
              </Link>
            </li>
            <li>
              <Link href="/employers/la-trobe-university/3868/">
                La Trobe University
              </Link>
            </li>
            <li>
              <Link href="/employers/deakin-university/3856/">
                Deakin University
              </Link>
            </li>
            <li>
              <Link href="/employers/federation-university/3787/">
                Federation University Australia
              </Link>
            </li>
            <li>
              <h3>Tasmania</h3>
            </li>
            <li>
              <Link href="/employers/university-of-tasmania/3867/">
                The University of Tasmania
              </Link>
            </li>
          </ul>
          <ul>
            <li>
              <h3>Queensland</h3>
            </li>
            <li>
              <Link href="/employers/bond-university/3785/">
                Bond University
              </Link>
            </li>
            <li>
              <Link href="/employers/university-of-queensland/3172/">
                The University of Queensland
              </Link>
            </li>
            <li>
              <Link href="/employers/cquniversity/3854/">CQUniversity</Link>
            </li>
            <li>
              <Link href="/employers/griffith-university/3860/">
                Griffith University
              </Link>
            </li>
            <li>
              <Link href="/employers/james-cook-university/3857/">
                James Cook University
              </Link>
            </li>
            <li>
              <Link href="/employers/university-of-southern-queensland/3861/">
                University of Southern Queensland
              </Link>
            </li>
            <li className="text-[#003463] font-bold">
              <Link href="/">
                Queensland University of Technology
              </Link>
            </li>
            <li>
              <Link href="/employers/university-of-sunshine-coast/3859/">
                University of Sunshine Coast
              </Link>
            </li>
            <li>
              <h3>Northern Territory</h3>
            </li>
            <li>
              <Link href="/employers/charles-darwin-university/3880/">
                Charles Darwin University
              </Link>
            </li>
          </ul>
          <ul>
            <li>
              <h3>South Australia</h3>
            </li>
            <li>
              <Link href="/employers/the-university-of-adelaide/3737/">
                The University of Adelaide
              </Link>
            </li>
            <li>
              <Link href="/employers/torrens-university-australia/3875/">
                Torrens University Australia
              </Link>
            </li>
            <li>
              <Link href="/employers/university-of-south-australia/3874/">
                University of South Australia
              </Link>
            </li>
            <li>
              <Link href="/employers/flinders-university/3873/">
                Flinders University
              </Link>
            </li>
            <li>
              <h3> Western Australia</h3>
            </li>
            <li>
              <Link href="/employers/university-of-western-australia/3173/">
                The University of Western Australia
              </Link>
            </li>
            <li>
              <Link href="/employers/university-of-notre-dame/3879/">
                University of Notre Dame
              </Link>
            </li>
            <li>
              <Link href="/employers/murdoch-university/3878/">
                Murdoch University
              </Link>
            </li>
            <li>
              <Link href="/employers/edith-cowan-university/3877/">
                Edith Cowan University
              </Link>
            </li>
            <li>
              <Link href="/employers/curtin-university/3876/">
                Curtin University
              </Link>
            </li>
          </ul>
        </div>
    </>
  );
};

export default TopUnis;
