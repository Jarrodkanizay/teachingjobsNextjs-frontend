import { cityData } from '@/data/cityData';
import { CityDataTypes } from '@/types/types';
import HeroBanner from '@/components/HeroBanner';
import { formatDate } from '@/utils/utilityScripts';
import SearchResults from '@/components/SearchResults';
import SearchResults1 from '@/components/SearchResults1';
import JobSearchBox2 from '@/components/JobSearchBox2';
import JobFilter from '@/components/JobFilter';
import TalentPool from '@/components/TalentPoolCTA';
import Link from 'next/link';

type Params = {
  slug: string;
};

type Props = {
  params: Params;
};

export async function generateMetadata({ params }: any) {
  const cityDetails = await cityData.find((city) => city.slug === params.slug);

  if (!cityDetails) {
    throw new Error(`No blog post found for slug: ${params.slug}`);
  }

  return {
    title: cityDetails.title,
    description: cityDetails.description,
    keywords: cityDetails.keywords,
  };
}

export default function BlogPostPage({ params }: Props) {
  const cityDetails = cityData.find((city) => city.slug === params.slug);

  if (!cityDetails) {
    return <div>City was not found!</div>;
  }

  return (
    <main className="blog-post cities content-grid">
      <HeroBanner
        h1={cityDetails.h1 || ''}
        para1={cityDetails.description || ''}
        src={cityDetails.image_url || ''}
        alt={cityDetails.alt || ''}
        reorder={false}
        externalLink={true}
        imageShadow={false}
      />
      <h2 className="underline-full">
        Learn about Universities, Colleges & Academic in the City of{' '}
        {cityDetails.city}
      </h2>
      <section className="jobs_grid job_post_panel_container">
        <div className={`post_panel employer_panel aj text-2-cols mt-6 `}>
          <h3 className="mt-0">
            About the Colleges & Universities in {cityDetails.city}
          </h3>
          {cityDetails.cityInfo.map((cityPara, index) => (
            <p key={index}>{cityPara}</p>
          ))}
          {cityDetails.uniList.length > 0 && (
            <>
              <ul>
                {cityDetails.uniList.map((uni, index) => (
                  <li key={index}>{uni}</li>
                ))}
              </ul>
            </>
          )}
          {cityDetails.nobelList.length > 0 &&
            cityDetails.nobelInfo.length > 0 && (
              <>
                <h3>Nobel Laureates from {cityDetails.city}</h3>
                {Array.isArray(cityDetails.nobelInfo) ? (
                  cityDetails.nobelInfo.map((nobelPara, index) => (
                    <p key={index}>{nobelPara}</p>
                  ))
                ) : (
                  <p>{cityDetails.nobelInfo}</p>
                )}

                {cityDetails.uniList.length > 0 && (
                  <>
                    <ul>
                      {cityDetails.nobelList.map((laureate, index) => (
                        <li key={index}>
                          <strong>{laureate.split(': ')[0]}</strong>
                          <br />
                          {laureate.split(': ')[1]}
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </>
            )}

          {cityDetails.academicList.length > 0 && (
            <>
              <h3>Notable Academics Practicing in {cityDetails.city}</h3>
              {cityDetails.academicInfo.map((academicPara, index) => (
                <p key={index}>{academicPara}</p>
              ))}
              {cityDetails.academicList.length > 0 && (
                <>
                  <ul>
                    {cityDetails.academicList.map((academic, index) => (
                      <li key={index}>
                        <strong>{academic.split(': ')[0]}</strong>
                        <br />
                        {academic.split(': ')[1]}
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </>
          )}
{/* 
          <h3>Considering moving to {cityDetails.city}? Here's a run down!</h3>
          {cityDetails.promo.map((promoPara, index) => (
            <p key={index}>{promoPara}</p>
          ))}
          <h3>Are you looking for…</h3>
          <ul>
            <li>
              <Link href={`/jobs?q=Research&l=${cityDetails.city}`}>
                Research jobs in {cityDetails.city}
              </Link>
            </li>
            <li>
              <Link href={`/jobs?q=Lecturer&l=${cityDetails.city}`}>
                Lecturer jobs in {cityDetails.city}
              </Link>
            </li>
            <li>
              <Link href={`/jobs?q=University&l=${cityDetails.city}`}>
                University jobs in {cityDetails.city}
              </Link>
            </li>
            <li>
              <Link href={`/jobs?q=Higher%20Ed&l=${cityDetails.city}`}>
                Higher Ed jobs in {cityDetails.city}
              </Link>
            </li>
            <li>
              <Link href={`/jobs?q=Dream%20job&l=${cityDetails.city}`}>
                Dream job in {cityDetails.city}
              </Link>
            </li>
          </ul>
          <TalentPool cta={`Join the ${cityDetails.city} Academic Talent Pool`} /> */}
     

        </div>
        <div className="listings_panel">
          <div className="listings_content">
            <div className="search_panel">
              <JobSearchBox2 l={cityDetails.city} />
            </div>
            {/* <SearchResults
              q={{ q: '', l: cityDetails.city }}
              filterOff={true}
            /> */}
            <SearchResults1
              q={{
                filter1: [{ category: 'City', filter: 'Boston' }],
                q: '',
                l: '',
              }}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
