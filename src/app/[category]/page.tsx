// import Link from 'next/link';
import positionData from '@/data/position';
import SearchResults from '@/components/SearchResults';
import JobSearchBox from '@/components/JobSearchBox';
import LocalJobLinks from '@/components/LocalJobLinks';
import HeroBannerGhostedBlock from '@/components/HeroBannerGhostedBlock';
import LinkIcon from '@/components/icons/LinkIcon';
import JobFilter from '@/components/JobFilter';
import Link from 'next/link';
import AdvancedSearchBar from '@/components/AdvancedSearchBar';

function toTitleCase(str: string) {
  return str.toLowerCase().replace(/(?:^|\s)\w/g, function (match: string) {
    return match.toUpperCase();
  });
}

let type = '';
let region = '';

const australiaLocations = {
  states: [
    'Australian Capital Territory',
    'New South Wales',
    'Northern Territory',
    'Queensland',
    'South Australia',
    'Tasmania',
    'Victoria',
    'Western Australia',
  ],
  cities: [
    'Adelaide',
    'Brisbane',
    'Gold Coast',
    'Canberra',
    'Melbourne',
    'Perth',
    'Sydney',
    'Tasmania',
  ],
};

const regionLinks = [
  {
    name: `Teacher Jobs`,
    url: `/`,
  },
  {
    name: `Science Teacher`,
    url: `science-teacher-jobs`,
  },
  {
    name: `Mathematics Teacher`,
    url: `/maths-teacher-jobs`,
  },
  {
    name: `English Teacher`,
    url: `/english-teacher-jobs`,
  },
  {
    name: `Art Teacher`,
    url: `/art-teacher-jobs`,
  },
  {
    name: `Music Teacher`,
    url: `/music-teacher-jobs`,
  },
  {
    name: `History Teacher`,
    url: `/history-teacher-jobs`,
  },
  {
    name: `Physical Education Teacher`,
    url: `/pe-teacher-jobs`,
  },
];

export async function generateMetadata({ params, searchParams }: any) {
  // console.log(params)
  let { category } = params;
  // console.log(positionData)
  // console.log(category);
  category = category?.replace(/-/g, ' ');
  // console.log(category);

  const {
    Name = '',
    Title = '',
    Description = '',
    Keyword = '',
    content: content1 = '',
  } = positionData.find((item) => item.Name === category) || {};

  return {
    title: Title,
    description: Description,
    keywords: Keyword,
  };
}

//const Lecturer = () => {
export default function Page({ params, searchParams }: any) {
  let { category, location } = params;
  category = category?.replace(/-/g, ' ');
  location = location?.replace(/-/g, ' ');

  const defaultItem = positionData.find((item) => item.Name === 'generic');

  const localObj =
    positionData.find((item) => item.Name === category) || defaultItem;

  let {
    Name = '',
    Title = '',
    h1 = '',
    h2 = '',
    Description = '',
    Keyword = '',
    content: content1 = '',
    h2_footer = '',
    content_footer = '',
    Image: imageSrc = '',
    category1 = '',
    filter1 = '',
    category2 = '',
    filter2 = '',
    category3 = '',
    filter3 = '',
    type = '',
  } = localObj;

  let heading = Title;

  let categoryProperCase = toTitleCase(category).trim();
  let shortName = categoryProperCase;

  let content: any;
  //console.log(Name);
  //const { logo, company_name, website, company_description, location } = data
  //console.log(company_description)
  content = (
    <div className="content-grid flex-col md:gap-2">
      <HeroBannerGhostedBlock heroItem={localObj} forceClass="mb-8" />

      {/* <JobSearchBox /> */}
      <AdvancedSearchBar forceClass="block" type="advancedSearch" />

      <section className="jobs_grid job_post_search_container mx-auto">
        <div className="filters_panel pt-12">
          {type === 'city' ? (
            <>
              <div className="links_section mb-16">
                <h2>Other related jobs</h2>
                <nav aria-label="Other related jobs">
                  <ul>
                    {regionLinks
                      // Prevent the current category (filter2) from being listed in the related jobs
                      .filter(
                        (link) =>
                          link.name.toLowerCase() !== filter2.toLowerCase()
                      )
                      .map((link, index) => (
                        <li key={index}>
                          <p>
                            <Link href={link.url}>
                              <LinkIcon forceClass="pink_icon" /> {link.name}{' '}
                              Jobs
                            </Link>
                          </p>
                        </li>
                      ))}
                  </ul>
                </nav>
              </div>
            </>
          ) : (
            <>
              <LocalJobLinks
                heading="Browse by City"
                localObj={localObj}
                locations={australiaLocations.cities}
                region={region}
                category={categoryProperCase}
                shortName={shortName}
              />
            </>
          )}
          <h2 className="text-[22px] text-gray-blue leading-tight">
            {h2_footer}
          </h2>
          <p className="mb-16">{content_footer}</p>
        </div>
        <div className="listings_panel">
          <div className="listings_content">
            <SearchResults q={{ q: '', l: category2, filter2 }} />
          </div>
        </div>
      </section>
    </div>
  );
  return <main className="overflow-y w-full">{content}</main>;
}
