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
                <h3>Egypt</h3>
              </li>
              <li>
                <Link href="/employers/cairo-university/6226/">
                  Cairo University
                </Link>
              </li>
              <li>
                <Link href="/employers/american-university-in-cairo/5798/">
                  American University in Cairo
                </Link>
              </li>
              <li>
                <Link href="/employers/alexandria-university/5713/">
                  Alexandria University
                </Link>
              </li>
            </ul>
            <ul>
              <li>
                <h3>South Africa</h3>
              </li>
              <li>
                <Link href="/employers/university-of-cape-town/12637/">
                  University of Cape Town
                </Link>
              </li>
              <li>
                <Link href="/employers/university-of-the-witwatersrand/13133/">
                  University of the Witwatersrand
                </Link>
              </li>
              <li>
                <Link href="/employers/stellenbosch-university/13008/">
                  Stellenbosch University
                </Link>
              </li>
              <li>
                <Link href="/employers/university-of-pretoria/12935/">
                  University of Pretoria
                </Link>
              </li>
              <li>
                <Link href="/employers/university-of-kwazulu-natal/12787/">
                  University of KwaZulu-Natal
                </Link>
              </li>
            </ul>
            <ul>
              <li>
                <h3>Nigeria</h3>
              </li>
              <li>
                <Link href="/employers/university-of-ibadan/12743/">
                  University of Ibadan
                </Link>
              </li>
              <li>
                <Link href="/employers/ahmadu-bello-university/6388/">
                  Ahmadu Bello University
                </Link>
              </li>
              <li>
                <Link href="/employers/university-of-lagos/12789/">
                  University of Lagos
                </Link>
              </li>
              <li>
                <Link href="/employers/obafemi-awolowo-university/9482/">
                  Obafemi Awolowo University
                </Link>
              </li>
              <li>
                <Link href="/employers/university-of-nigeria-nsukka/12881/">
                  University of Nigeria, Nsukka
                </Link>
              </li>
            </ul>
            <ul>
              <li>
                <h3>Kenya</h3>
              </li>
              <li>
                <Link href="/employers/university-of-nairobi/12866/">
                  University of Nairobi
                </Link>
              </li>
              <li>
                <Link href="/employers/kenyatta-university/8470/">
                  Kenyatta University
                </Link>
              </li>
              <li>
                <Link href="/employers/strathmore-university/10485/">
                  Strathmore University
                </Link>
              </li>
              <li>
                <Link href="/employers/moi-university/9051/">
                  Moi University
                </Link>
              </li>
              <li>
                <Link href="/employers/egerton-university/7048/">
                  Egerton University
                </Link>
              </li>
            </ul>
            <ul>
              <li>
                <h3>Morocco</h3>
              </li>
              <li>
                <Link href="/employers/university-mohammed-v-of-rabat/12453/">
                  University Mohammed V of Rabat
                </Link>
              </li>
              <li>
                <Link href="/employers/cadi-ayyad-university/12262/">
                  Cadi Ayyad University
                </Link>
              </li>
              <li>
                <Link href="/employers/hassan-ii-university-of-casablanca/12426/">
                  Hassan II University of Casablanca
                </Link>
              </li>
            </ul>
            <ul>
              <li>
                <h3>Ghana</h3>
              </li>
              <li>
                <Link href="/employers/university-of-ghana/12711/">
                  University of Ghana
                </Link>
              </li>
              <li>
                <Link href="/employers/kwame-nkrumah-university-of-science-and-technology/8649/">
                  Kwame Nkrumah University of Science and Technology
                </Link>
              </li>
              <li>
                <Link href="/employers/university-of-cape-coast/12636/">
                  University of Cape Coast
                </Link>
              </li>
            </ul>
            <ul>
              <li>
                <h3>Senegal</h3>
              </li>
              <li>
                <Link href="/employers/cheikh-anta-diop-university/12272/">
                  Cheikh Anta Diop University
                </Link>
              </li>
            </ul>
            <ul>
              <li>
                <h3>Tunisia</h3>
              </li>
              <li>
                <Link href="/employers/university-of-tunis-el-manar/12393/">
                  University of Tunis El Manar
                </Link>
              </li>
              <li>
                <Link href="/employers/university-of-sfax/12370/">
                  University of Sfax
                </Link>
              </li>
              <li>
                <Link href="/employers/university-of-carthage/12303/">
                  University of Carthage
                </Link>
              </li>
            </ul>
            <ul>
              <li>
                <h3>Uganda</h3>
              </li>
              <li>
                <Link href="/employers/makerere-university/8875/">
                  Makerere University
                </Link>
              </li>
              <li>
                <Link href="/employers/uganda-martyrs-university/10962/">
                  Uganda Martyrs University
                </Link>
              </li>
              <li>
                <Link href="/employers/kyambogo-university/8660/">
                  Kyambogo University
                </Link>
              </li>
            </ul>
          </div>
    </>
  );
};

export default TopUnis;
