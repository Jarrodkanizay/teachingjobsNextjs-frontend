import Link from 'next/link';
import hrData from '@/data/hr.json';
import SearchResults from '@/components/SearchResults';
import JobSearchBox from '@/components/JobSearchBox';
import JobFilter from '@/components/JobFilter';
// import type { Metadata } from 'next';

type MetadataTypes = {
  Name?: string | undefined;
  Title?: string | undefined;
  Description?: string | undefined;
  Keyword?: string | undefined;
  content?: any | undefined;
};

export async function generateMetadata({ params, searchParams }: any) {
  // console.log(params)
  let { category } = params;
  // console.log(hrData)
  // console.log(category);
  category = category?.replace(/-/g, ' ');
  // console.log(category);

  const {
    Name = '',
    Title = '',
    Description = '',
    Keyword = '',
    content: content1 = '',
  } = hrData.find((item) => item.Name === category) || {};

  return {
    title: Title,
    description: Description,
    keywords: Keyword,
  };
}

//const Lecturer = () => {
export default function Page({ params, searchParams }: any) {
  // console.log('````````````````````params````````````````````');
  // console.log(params);
  let { category } = params;
  // console.log(hrData);
  // console.log(category);
  category = category?.replace(/-/g, ' ');
  // console.log(category);

  const {
    Name = '',
    Title = '',
    Description = '',
    Keyword = '',
    content: content1 = '',
  } = hrData.find((item) => item.Name === category) || {};

  let content;
  //console.log(Name);
  //const { logo, company_name, website, company_description, location } = data
  //console.log(company_description)
  content = (
    <div className="content-grid flex-col md:gap-2">
      {/* <Link className="text-[#e74b7f] " href="/hr/">
        View all Lecturer Jobs →
      </Link> */}

      <div className="bg-slate-200 full-width">
        <div className="  hero-content flex-col lg:flex-row mx-auto items-start py-12">
          <h1 className="md:text-6xl font-bold  md:text-right text-gray-500 pb-4 capitalize m-0">
            {Name}
          </h1>
          <p className="px-7 mb-4 mt-1">{content1}</p>
        </div>
        {/* <Link
                      href={'/academic-talent-pool'}
                      className="btn btn-aj btn-sm w-1/2 md:w-1/4 mx-auto my-2"
                    >
                     Join Our Talent Pool
                    </Link> */}
      </div>

      <JobSearchBox q={Name} />

      <section className="jobs_grid job_post_search_container">
        <div className="filters_panel">
          <div className="filters_content">
            <JobFilter />
          </div>
        </div>
        <div className="listings_panel">
          <div className="listings_content">
          <SearchResults q={{ q: Name }} />
          </div>
        </div>
      </section>
    </div>
  );
  return <div className="overflow-y w-full">{content}</div>;
}
