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
                <h3>France</h3>
              </li>
              <li>
                <Link href="/employers/paris-sciences-et-lettres/3163/">
                  Paris Sciences et Lettres
                </Link>
              </li>
              <li>
                <Link href="/employers/ecole-polytechnique/3158/">
                  Ecole Polytechnique
                </Link>
              </li>
              <li>
                <h3>Sweden</h3>
              </li>
              <li>
                <Link href="/employers/karolinska-institute/3165/">
                  Karolinska Institute
                </Link>
              </li>
            </ul>
            <ul>
              <li>
                <h3>Germany</h3>
              </li>
              <li>
                <Link href="/employers/heidelberg-university/3160/">
                  Heidelberg University
                </Link>
              </li>
              <li>
                <Link href="/employers/lmu-munich-ludwig-maximilians-universitat/3150/">
                  LMU Munich (Ludwig Maximilians Universität München)
                </Link>
              </li>
              <li>
                <Link href="/employers/technische-uiniversitat-munchen/10702/">
                  Technische Universität München
                </Link>
              </li>
            </ul>
            <ul>
              <li>
                <h3>Denmark</h3>
              </li>
              <li>
                <Link href="/employers/the-university-of-copenhagen/3156/">
                  University of Copenhagen
                </Link>
              </li>
              <li>
                <h3>Switzerland</h3>
              </li>
              <li>
                <Link href="/employers/eth-zurich/3132/">ETH Zurich</Link>
              </li>
              <li>
                <h3>Belgium</h3>
              </li>
              <li>
                <Link href="/employers/ku-leuven/3159/">KU Leuven</Link>
              </li>
            </ul>
            <ul>
              <li>
                <h3>Netherlands</h3>
              </li>
              <li>
                <Link href="/employers/delft-university-of-technology/3847/">
                  Delft University of Technology
                </Link>
              </li>
              <li>
                <h3>Italy</h3>
              </li>
              <li>
                <Link href="/employers/university-of-bologna/12015">
                  University of Bologna
                </Link>
              </li>
              <li>
                <h3>Spain</h3>
              </li>
              <li>
                <Link href="/employers/universitat-de-barcelona/12195/">
                  Universitat de Barcelona
                </Link>
              </li>
            </ul>
          </div>
    </>
  );
};

export default TopUnis;
