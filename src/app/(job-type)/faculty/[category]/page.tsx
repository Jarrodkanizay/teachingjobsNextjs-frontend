import Link from 'next/link';
// import categoryData from '@/data/category.json'; // Old import replace with below
import { categoryData } from '@/data/category';
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
  // console.log(categoryData)
  // console.log(category);
  category = category?.replace(/-/g, ' ');
  // console.log(category);

  const {
    Name = '',
    Title = '',
    Description = '',
    Keyword = '',
    content: content1 = '',
  } = categoryData.find((item) => item.Name === category) || {};

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
  // console.log(categoryData);
  // console.log(category);
  category = category?.replace(/-/g, ' ');
  // console.log(category);

  const {
    Name = '',
    Title = '',
    Description = '',
    Keyword = '',
    content: content1 = '',
  } = categoryData.find((item) => item.Name === category) || {};

  // Start: New code for each page
  let categoryContent = content1.split('\n');
  // End: New code for each page

  let content;
  //console.log(Name);
  //const { logo, company_name, website, company_description, location } = data
  //console.log(company_description)
  content = (
    <div className="content-grid flex-col md:gap-2">
      {/* <Link className="text-[#e74b7f] " href="/category/">
        View all Lecturer Jobs →
      </Link> */}

      <div className="bg-slate-200 full-width">
        <div className="  hero-content flex-col lg:flex-row mx-auto items-start py-12">
          <h1 className="md:text-6xl font-bold  md:text-right text-gray-500 pb-4 capitalize m-0">
            {Name}
          </h1>
          {/* Start: New code for each page */}
          {categoryContent.map((item, index) => (
            <p className="px-7 mb-4 mt-1" key={index}>
              {item}
            </p>
          ))}
          {/* End: New code for each page */}
        </div>
        <Link
          href={'/academic-talent-pool'}
          className="btn btn-aj btn-sm w-2/3 md:w-1/4 mx-auto my-2"
        >
          Join Our Talent Pool
        </Link>
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
