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
                <h3>Brazil</h3>
              </li>
              <li>
                <Link href="/employers/university-of-sao-paulo/11463/">
                  University of São Paulo
                </Link>
              </li>
              <li>
                <Link href="/employers/university-of-campinas/11490/">
                  University of Campinas
                </Link>
              </li>
              <li>
                <Link href="/employers/universidade-federal-do-rio-grande-do-sul/11544/">
                  Universidade Federal do Rio Grande do Sul
                </Link>
              </li>
            </ul>
            <ul>
              <li>
                <h3>Argentina</h3>
              </li>
              <li>
                <Link href="/employers/universidad-de-buenos-aires/11196/">
                  Universidad de Buenos Aires
                </Link>
              </li>
              <li>
                <h3>Colombia</h3>
              </li>
              <li>
                <Link href="/employers/universidad-de-los-andes/11308/">
                  Universidad de los Andes
                </Link>
              </li>
              <li>
                <Link href="/employers/icesi-university/11648/">
                  Icesi University
                </Link>
              </li>
            </ul>
            <ul>
              <li>
                <h3>Chile</h3>
              </li>
              <li>
                <Link href="/employers/pontificia-universidad-catolica-de-chile/9739/">
                  Pontificia Universidad Catolica de Chile
                </Link>
              </li>
              <li>
                <Link href="/employers/universidad-alberto-hurtado/11012/">
                  Universidad Alberto Hurtado
                </Link>
              </li>
              <li>
                <Link href="/employers/universidad-de-santiago-de-chile/11384/">
                  Universidad de Santiago de Chile
                </Link>
              </li>
              <li>
                <Link href="/employers/university-of-antofagasta/11189/">
                  University of Antofagasta
                </Link>
              </li>
            </ul>
            <ul>
              <li>
                <h3>Peru</h3>
              </li>
              <li>
                <Link href="/employers/universidad-alas-peruanas/11010/">
                  Universidad Alas Peruanas
                </Link>
              </li>
              <li>
                <Link href="/employers/universidad-peruana-cayetano-heredia/11856/">
                  Universidad Peruana Cayetano Heredia
                </Link>
              </li>
            </ul>
          </div>
    </>
  );
};

export default TopUnis;
