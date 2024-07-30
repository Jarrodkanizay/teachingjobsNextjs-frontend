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
            <h3>California</h3>
          </li>
          <li>
            <Link href="/employers/stanford-university/3101/">
              Stanford University
            </Link>
          </li>
          <li>
            <Link href="/employers/caltech/3128/">
              Caltech – California Institute of Technology
            </Link>
          </li>
          <li>
            <Link href="/employers/university-of-california-san-francisco/3683/">
              University of California - San Francisco
            </Link>
          </li>
          <li>
            <Link href="/employers/university-of-southern-california/3672/">
              University of Southern California
            </Link>
          </li>
          <li>
            <Link href="/employers/university-of-california-berkeley/3105/">
              University of California - Berkeley
            </Link>
          </li>
          <li>
            <Link href="/employers/university-of-california-los-angeles/3136/">
              University of California - Los Angeles
            </Link>
          </li>
          <li>
            <Link href="/employers/university-of-california-san-diego/3149/">
              University of California - San Diego
            </Link>
          </li>
          <li>
            <Link href="/employers/university-of-california-davis/3498/">
              University of California - Davis
            </Link>
          </li>
          <li>
            <Link href="/employers/university-of-california-irvine/3689/">
              University of California - Irvine
            </Link>
          </li>
          <li>
            <Link href="/employers/university-of-california-santa-barbara/5407/">
              University of California - Santa Barbara
            </Link>
          </li>
          <li>
            <Link href="/employers/university-of-california-santa-cruz/3252/">
              University of California - Santa Cruz
            </Link>
          </li>
          <li>
            <Link href="/employers/university-of-california-riverside/3268"> 
              University of California - Riverside
            </Link>
          </li>
          <li>
            <Link href="/employers/california-state-university-stanislaus/3414/">
              California State University Stanislaus
            </Link>
          </li>
          <li>
            <Link href="/employers/cal-poly-pomona/3728/">Cal Poly Pomona</Link>
          </li>
          <li>
            <Link href="/employers/california-state-university-monterey-bay/3313/">
              California State University, Monterey Bay
            </Link>
          </li>
          <li>
            <Link href="/employers/grossmont-cuyamaca-community-college-district/3858/">
              Grossmont–Cuyamaca Community College District
            </Link>
          </li>
          <li>
            <Link href="/employers/northeastern-university/3285/">
              Northeastern University
            </Link>
          </li>
          <li>
            <Link href="/employers/loyola-marymount-university/3637/">
              Loyola Marymount University
            </Link>
          </li>
          <li>
            <Link href="/employers/palomar-college/3612/">Palomar College</Link>
          </li>
          <li>
            <Link href="/employers/san-diego-state-university/3693/">
              San Diego State University
            </Link>
          </li>
          <li>
            <Link href="/employers/saint-mary-s-college-of-california/3729/">
              Saint Mary's College of California
            </Link>
          </li>
          <li>
            <Link href="/employers/university-of-california-office-of-the-president/3731/">
              University of California Office of the President
            </Link>
          </li>
        </ul>
        <ul>
          <li>
            <h3>Massachusetts</h3>
          </li>
          <li>
            <Link href="/employers/massachusetts-institute-of-technology/3103/">
              Massachusetts Institute of Technology
            </Link>
          </li>
          <li>
            <Link href="/employers/harvard-university/3100/">
              Harvard University
            </Link>
          </li>
          <li>
            <Link href="/employers/boston-university/3190/">
              Boston University
            </Link>
          </li>
          <li>
            <Link href="/employers/boston-college/3604/">Boston College</Link>
          </li>
          <li>
            <Link href="/employers/tufts-university/3460/">
              Tufts University
            </Link>
          </li>
          <li>
            <Link href="/employers/northeastern-university/3285/">
              Northeastern University
            </Link>
          </li>
          <li>
            <Link href="/employers/brandeis-university/3617/">
              Brandeis University
            </Link>
          </li>
          <li>
            <Link href="/employers/anna-jaques-hospital/3235/">
              Anna Jaques Hospital
            </Link>
          </li>
          <li>
            <Link href="/employers/dana-farber-cancer-institute/3108/">
              Dana-Farber Cancer Institute
            </Link>
          </li>
          <li>
            <h3>Georgia</h3>
          </li>
          <li>
            <Link href="/employers/emory-university/3372/">
              Emory University
            </Link>
          </li>
          <li>
            <Link href="/employers/georgia-institute-of-technology/3154/">
              Georgia Institute of Technology
            </Link>
          </li>
          <li>
            <h3>Florida</h3>
          </li>
          <li>
            <Link href="/employers/university-of-miami/5475/">
              University of Miami
            </Link>
          </li>
          <li>
            <Link href="/employers/miami-university/3350/">
              Miami University
            </Link>
          </li>
          <li>
            <Link href="/employers/university-of-florida/3394/">
              University of Florida
            </Link>
          </li>
          <li>
            <h3>North Carolina</h3>
          </li>
          <li>
            <Link href="/employers/duke-university/3139/">Duke University</Link>
          </li>
          <li>
            <Link href="/employers/university-of-north-carolina/5503/">
              University of North Carolina
            </Link>
          </li>
          <li>
            <Link href="/employers/the-university-of-north-carolina-at-chapel-hill/3679/">
              University of North Carolina at Chapel Hill
            </Link>
          </li>
          <li>
            <Link href="/employers/university-of-north-carolina-wilmington/3253/">
              University of North Carolina Wilmington
            </Link>
          </li>
        </ul>
        <ul>
          <li>
            <h3>New york</h3>
          </li>
          <li>
            <Link href="/employers/columbia-university/3127/">
              Columbia University
            </Link>
          </li>
          <li>
            <Link href="/employers/new-york-university-nyu/3144/">
              New York University NYU
            </Link>
          </li>
          <li>
            <Link href="/employers/cornell-university/3138">
              Cornell University
            </Link>
          </li>
          <li>
            <Link href="/employers/brown-university/3308">
              Brown University
            </Link>
          </li>
          <li>
            <Link href="/employers/university-of-rochester/5527">
              University of Rochester
            </Link>
          </li>
          <li>
            <Link href="/employers/fordham-university/3685/">
              Fordham University
            </Link>
          </li>
          <li>
            <Link href="/employers/hofstra-university/3545/">
              Hofstra University
            </Link>
          </li>
          <li>
            <Link href="/employers/princeton-university/3104/">
              Princeton University
            </Link>
          </li>
          <li>
            <Link href="/employers/rutgers-the-state-university-of-new-jersey/3255/">
              Rutgers, The State University of New Jersey
            </Link>
          </li>
          <li>
            <Link href="/employers/st-john-s-university/3375/">
              St. John's University
            </Link>
          </li>
          <li>
            <Link href="/employers/stony-brook-university/3456/">
              Stony Brook University
            </Link>
          </li>
          <li>
            <Link href="/employers/university-at-buffalo/3609/">
              University at Buffalo
            </Link>
          </li>
          <li>
            <h3>Pennsylvania</h3>
          </li>
          <li>
            <Link href="/employers/university-of-pennsylvania/3131/">
              University of Pennsylvania
            </Link>
          </li>
          <li>
            <Link href="/employers/carnegie-mellon-university/3146/">
              Carnegie Mellon University
            </Link>
          </li>
          <li>
            <Link href="/employers/bucknell-university/3309/">
              Bucknell University
            </Link>
          </li>
          <li>
            <Link href="/employers/duquesne-university/3330/">
              Duquesne University
            </Link>
          </li>
          <li>
            <h3>Illinois</h3>
          </li>
          <li>
            <Link href="/employers/university-of-chicago/3126">
              University of Chicago
            </Link>
          </li>
          <li>
            <Link href="/employers/northwestern-university/3143">
              Northwestern University
            </Link>
          </li>
          <li>
            <Link href="/employers/northern-illinois-university/3415/">
              Northern Illinois University
            </Link>
          </li>
          <li>
            <Link href="/employers/university-of-illinois-at-urbana-champaign/3164/">
              University of Illinois at Urbana-Champaign
            </Link>
          </li>
          <li>
            <h3>Michigan</h3>
          </li>
          <li>
            <Link href="/employers/university-of-michigan/3142/">
              University of Michigan
            </Link>
          </li>
          <li>
            <Link href="/employers/michigan-state-university/3654/">
              Michigan State University
            </Link>
          </li>
          <li>
            <Link href="/employers/wayne-state-university/3499/">
              Wayne State University
            </Link>
          </li>
        </ul>
        <ul>
          <li>
            <h3>All States</h3>
          </li>
          <li>
            <Link href="/employers/yale-university/3125/">Yale University</Link>
          </li>
          <li>
            <Link href="/employers/university-of-washington/3145/">
              University of Washington
            </Link>
          </li>
          <li>
            <Link href="/employers/johns-hopkins-university/3130/">
              Johns Hopkins University
            </Link>
          </li>
          <li>
            <Link href="/employers/dartmouth-college/3327/">
              Dartmouth College
            </Link>
          </li>
          <li>
            <Link href="/employers/rice-university/5067/">Rice University</Link>
          </li>
          <li>
            <Link href="/employers/vanderbilt-university/5603/">
              Vanderbilt University
            </Link>
          </li>
          <li>
            <Link href="/employers/washington-university-in-st-louis/3655/">
              Washington University in St. Louis
            </Link>
          </li>
          <li>
            <Link href="/employers/university-of-notre-dame/3879/">
              University of Notre Dame
            </Link>
          </li>
          <li>
            <Link href="/employers/university-of-virginia/3484/">
              University of Virginia
            </Link>
          </li>
          <li>
            <Link href="/employers/georgetown-university/3522">
              Georgetown University
            </Link>
          </li>
          <li>
            <Link href="/employers/university-of-texas-at-austin/3166/">
              University of Texas at Austin
            </Link>
          </li>
          <li>
            <Link href="/employers/university-of-wisconsin-madison/3404/">
              University of Wisconsin - Madison
            </Link>
          </li>
          <li>
            <Link href="/employers/university-of-mississippi-medical-center/3109/">
              University of Mississippi Medical Center
            </Link>
          </li>
          <li>
            <Link href="/employers/university-of-minnesota-twin-cities/3684/">
              University of Minnesota Twin Cities
            </Link>
          </li>
          <li>
            <Link href="/employers/the-ohio-state-university/3669/">
              The Ohio State University
            </Link>
          </li>
          <li>
            <Link href="/employers/university-of-cincinnati/3393/">
              University of Cincinnati
            </Link>
          </li>
          <li>
            <Link href="/employers/university-of-tennessee-knoxville/3401/">
              University of Tennessee, Knoxville
            </Link>
          </li>
          <li>
            <Link href="/employers/university-of-alabama-at-birmingham/3387/">
              University of Alabama at Birmingham
            </Link>
          </li>
          <li>
            <Link href="/employers/indiana-university-purdue-university-indianapolis/3658/">
              Indiana University Purdue University Indianapolis
            </Link>
          </li>
          <li>
            <Link href="/employers/the-university-of-iowa/3483/">
              The University of Iowa
            </Link>
          </li>
          <li>
            <Link href="/employers/university-of-kentucky/3510/">
              University of Kentucky
            </Link>
          </li>
          <li>
            <Link href="/employers/oregon-state-university/3813/">
              Oregon State University
            </Link>
          </li>
          <li>
            <Link href="/employers/university-of-nebraska-medical-center/3712/">
              University of Nebraska Medical Center
            </Link>
          </li>
          <li>
            <Link href="/employers/washington-state-university/3722/">
              Washington State University
            </Link>
          </li>
          <li>
            <Link href="/employers/university-of-maryland-baltimore-county/3775/">
              University of Maryland, Baltimore County
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default TopUnis;
