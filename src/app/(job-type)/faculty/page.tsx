import type { Metadata } from 'next';
import SearchResults from '@/components/SearchResults';
import JobSearchBox from '@/components/JobSearchBox';
import category from '@/data/category.json';
import Link from 'next/link';
import JobFilter from '@/components/JobFilter';

export const metadata: Metadata = {
  // title: 'About', //Option 1 replaces the %s in layout.tsx
  title: {
    absolute: '  Academic Faculty Jobs', //Option 2 overrides the title in layout.tsx
  },
  description:
    'The leading job site for academic faculty jobs. Best list of college and university jobs by specialty in departments. ',
  keywords: 'academic faculty jobs, Teaching Jobs, jobs by specialty',
};
export default function myPage() {
  return (
    <main className="">
      {/* <div className="bg-slate-200 full-width">
      <div className="hero-content flex-col lg:flex-row mx-auto items-start py-12">
    
              <h1 className="md:text-6xl font-bold m-0 md:text-right text-gray-500 pb-4">Faculty Jobs</h1> 
              
            <div>
            
            <p className="px-7 mb-4 mt-1">
            Seek your perfect faculty position through the world’s best job board! At Teaching Jobs we offer the most renowned uni jobs at the top universities. Positions in academic faculty will provide you with the chance to engage with partners domestically and internationally, work with some of the brightest minds, and use top-notch facilities and resources.
            </p>
            <p className="px-7">
            The No.1 job board for uni jobs, Teaching Jobs, provides an extensive list of opportunities for the future of your career, carefully sectioning the top faculty jobs to find the best position for you!
            </p>
            <p className="px-7">
            Find all the best academic faculty jobs here…
            </p>
            <Link
                      href={'/academic-talent-pool'}
                      className="btn btn-aj btn-sm w-2/3 md:w-1/4 mx-auto my-2"
                    >
                     Join Our Talent Pool
                    </Link>
         
            </div>
          </div>
          </div> */}

      <div
        className="hero h-screen max-h-[480px] md:max-h-[400px] mx-auto"
        style={{
          backgroundImage:
            'url(/student-jobs-on-campus/doubilet-Circling-Barracuda.jpg)',
          backgroundSize: '',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="hero-overlay bg-opacity-70 "></div>
        <div className="hero-content text-white ">
          <div className="max-w-2xl mx-auto">
            <h1 className="mb-5  text-white md:text-2xl text-2xl font-normal">
              <span className="text-5xl font-bold text-[#e74b7f]">
                Faculty Jobs{' '}
              </span>
              <br />
            </h1>

            <p className="px-7 font-bold">
              The No.1 job board for Faculty Jobs, Teaching Jobs, provides an
              extensive list of opportunities for the future of your career,
              carefully sectioning the top faculty jobs to find the best
              position for you!
            </p>
            <p className="px-7 font-bold">
              Find all the best academic faculty jobs here…
            </p>

            <Link
              href="/academic-talent-pool"
              className="btn ml-2 btn-aj text-lg font-bold item-center justify-center text-center"
            >
              Join Talent Pool
            </Link>
          </div>
        </div>
      </div>

      {/* <div className="bg-white flex flex-col  ">
               <ul className=" text-left columns-1 md:columns-4 pt-4 pl-8 md:gap-2  h-auto w-full text-transform: capitalize">
              {category.map(({ Title, Name, break1, isBold }, key) => (
                <li className={`pb-2 flex ${' md:break' } ${ ' font-bold text-gray-400' }`} key={key}>
                  <Link href={`/faculty/${Name?.replace(/\s+/g, '-')}/`}>{Name}</Link>
                </li>
              ))}
            </ul>
          </div> */}

      <ul className=" mb-8 text-left columns-1 md:columns-5  md:gap-2 py-2 px-7 h-auto w-full text-transform: capitalize bg-gray-200 pb-4">
        <li className="flex    pt-4 font-bold text-[#e74b7f]">
          <a href="/faculty/agriculture/">agriculture</a>
        </li>
        <li className="flex    ">
          <a href="/faculty/agricultural-economics-agribusiness/">
            agricultural economics agribusiness
          </a>
        </li>
        <li className="flex    ">
          <a href="/faculty/animal-science/">animal science</a>
        </li>
        <li className="flex    ">
          <a href="/faculty/entomology/">entomology</a>
        </li>
        <li className="flex    ">
          <a href="/faculty/environmental-science-ecology-forestry/">
            environmental science ecology forestry
          </a>
        </li>
        <li className="flex    ">
          <a href="/faculty/agricultural-extension/">agricultural extension</a>
        </li>
        <li className="flex    ">
          <a href="/faculty/food-science/">food science</a>
        </li>
        <li className="flex    ">
          <a href="/faculty/horticulture-landscape-architecture/">
            horticulture landscape architecture
          </a>
        </li>
        <li className="flex    ">
          <a href="/faculty/plant-soil-science/">plant soil science</a>
        </li>
        <li className="flex    ">
          <a href="/faculty/veterinary-medicine/">veterinary medicine</a>
        </li>
        <li className="flex    pt-4 font-bold text-[#e74b7f]">
          <a href="/faculty/business/">business</a>
        </li>
        <li className="flex    ">
          <a href="/faculty/accounting/">accounting</a>
        </li>
        <li className="flex    ">
          <a href="/faculty/administration/">administration</a>
        </li>
        <li className="flex    ">
          <a href="/faculty/law/">law</a>
        </li>
        <li className="flex    ">
          <a href="/faculty/entrepreneurship/">entrepreneurship</a>
        </li>
        <li className="flex    ">
          <a href="/faculty/finance/">finance</a>
        </li>
        <li className="flex    ">
          <a href="/faculty/hotel-restaurant-management/">
            hotel restaurant management
          </a>
        </li>
        <li className="flex    ">
          <a href="/faculty/business-human-resources/">
            business human resources
          </a>
        </li>
        <li className="flex    ">
          <a href="/faculty/information-systems-technology/">
            information systems technology
          </a>
        </li>
        <li className="flex    ">
          <a href="/faculty/international-business/">international business</a>
        </li>
        <li className="flex    ">
          <a href="/faculty/business-management/">business management</a>
        </li>
        <li className="flex    ">
          <a href="/faculty/marketing-sales/">marketing sales</a>
        </li>
        <li className="flex    ">
          <a href="/faculty/other-business-specialities/">
            other business specialities
          </a>
        </li>
        <li className="flex    pt-4 font-bold text-[#e74b7f]">
          <a href="/faculty/communications/">communications</a>
        </li>
        <li className="flex    ">
          <a href="/faculty/broadcast-journalism/">broadcast journalism</a>
        </li>
        <li className="flex    ">
          <a href="/faculty/journalism/">journalism</a>
        </li>
        <li className="flex    ">
          <a href="/faculty/media-communication-studies/">
            media communication studies
          </a>
        </li>
        <li className="flex    ">
          <a href="/faculty/public-relations-advertising/">
            public relations advertising
          </a>
        </li>
        <li className="flex    ">
          <a href="/faculty/radio-television-film/">radio television film</a>
        </li>
        <li className="flex    ">
          <a href="/faculty/speech-and-public-speaking/">
            speech public speaking
          </a>
        </li>
        <li className="flex    ">
          <a href="/faculty/other-communications-specialities/">
            other communications specialities
          </a>
        </li>
        <li className="flex md:break   pt-4 font-bold text-[#e74b7f]">
          <a href="/faculty/education/">education</a>
        </li>
        <li className="flex    ">
          <a href="/faculty/adult-distance/">adult distance</a>
        </li>
        <li className="flex    ">
          <a href="/faculty/counselor/">counselor</a>
        </li>
        <li className="flex    ">
          <a href="/faculty/curriculum-instruction/">curriculum instruction</a>
        </li>
        <li className="flex    ">
          <a href="/faculty/educational-administration-leadership/">
            educational administration leadership
          </a>
        </li>
        <li className="flex    ">
          <a href="/faculty/educational-psychology/">educational psychology</a>
        </li>
        <li className="flex    ">
          <a href="/faculty/higher-education/">higher education</a>
        </li>
        <li className="flex    ">
          <a href="/faculty/instructional-technology-design/">
            instructional technology design
          </a>
        </li>
        <li className="flex    ">
          <a href="/faculty/reading-literacy/">reading literacy</a>
        </li>
        <li className="flex    ">
          <a href="/faculty/school-psychology/">school psychology</a>
        </li>
        <li className="flex    ">
          <a href="/faculty/special/">special</a>
        </li>
        <li className="flex    ">
          <a href="/faculty/teacher-education/">teacher education</a>
        </li>
        <li className="flex    ">
          <a href="/faculty/teacher-education-early-childhood/">
            teacher education early childhood
          </a>
        </li>
        <li className="flex    ">
          <a href="/faculty/teacher-education-elementary-school/">elementary</a>
        </li>
        <li className="flex    ">
          <a href="/faculty/teacher-education-middle-school/">middle school</a>
        </li>
        <li className="flex    ">
          <a href="/faculty/teacher-education-secondary-school/">secondary</a>
        </li>
        <li className="flex    ">
          <a href="/faculty/other-education-specialities/">
            other education specialities
          </a>
        </li>
        <li className="flex    pt-4 font-bold text-[#e74b7f]">
          <a href="/faculty/engineering/">engineering</a>
        </li>
        <li className="flex    ">
          <a href="/faculty/aerospace/">aerospace</a>
        </li>
        <li className="flex    ">
          <a href="/faculty/agricultural-engineering/">
            agricultural engineering
          </a>
        </li>
        <li className="flex    ">
          <a href="/faculty/biological-engineering/">biological</a>
        </li>
        <li className="flex    ">
          <a href="/faculty/chemical-engineering/">chemical</a>
        </li>
        <li className="flex    ">
          <a href="/faculty/civil-environmental-engineering/">
            civil environmental
          </a>
        </li>
        <li className="flex    ">
          <a href="/faculty/computer-engineering-jobs/">computer</a>
        </li>
        <li className="flex    ">
          <a href="/faculty/electrical-engineering-jobs/">electrical</a>
        </li>
        <li className="flex    ">
          <a href="/faculty/industrial-and-manufacturing-engineering-jobs/">
            industrial manufacturing
          </a>
        </li>
        <li className="flex    ">
          <a href="/faculty/mechanical/">mechanical</a>
        </li>
        <li className="flex    ">
          <a href="/faculty/other-engineering-specialities/">
            other engineering specialities
          </a>
        </li>
        <li className="flex   md:pt-[6.001rem] pt-4 font-bold text-[#e74b7f]">
          <a href="/faculty/fine-applied-arts/">fine and applied arts</a>
        </li>
        <li className="flex    ">
          <a href="/faculty/architecture/">architecture</a>
        </li>
        <li className="flex    ">
          <a href="/faculty/art/">art</a>
        </li>
        <li className="flex    ">
          <a href="/faculty/art-history/">art history</a>
        </li>
        <li className="flex    ">
          <a href="/faculty/dance/">dance</a>
        </li>
        <li className="flex    ">
          <a href="/faculty/digital-arts/">digital arts</a>
        </li>
        <li className="flex    ">
          <a href="/faculty/fashion-textile-design/">fashion textile design</a>
        </li>
        <li className="flex    ">
          <a href="/faculty/graphic-design/">graphic design</a>
        </li>
        <li className="flex    ">
          <a href="/faculty/industrial-design/">industrial design</a>
        </li>
        <li className="flex    ">
          <a href="/faculty/interior-design/">interior design</a>
        </li>
        <li className="flex    ">
          <a href="/faculty/music/">music</a>
        </li>
        <li className="flex    ">
          <a href="/faculty/photography/">photography</a>
        </li>
        <li className="flex    ">
          <a href="/faculty/theatre/">theatre</a>
        </li>
        <li className="flex    ">
          <a href="/faculty/other-fine-applied-arts-specialities/">
            other fine applied arts specialities
          </a>
        </li>
        <li className="flex md:break   pt-4 font-bold text-[#e74b7f]">
          <a href="/faculty/health-sciences/">health sciences</a>
        </li>
        <li className="flex    ">
          <a href="/faculty/athletic-training/">athletic training</a>
        </li>
        <li className="flex    ">
          <a href="/faculty/communication-sciences-and-disorders/">
            communication sciences and disorders
          </a>
        </li>
        <li className="flex    ">
          <a href="/faculty/health-education-promotion/">
            health education promotion
          </a>
        </li>
        <li className="flex    ">
          <a href="/faculty/health-information-technology/">
            health information technology
          </a>
        </li>
        <li className="flex    ">
          <a href="/faculty/healthcare-administration/">
            healthcare administration
          </a>
        </li>
        <li className="flex    ">
          <a href="/faculty/kinesiology-exercise-science-phys-ed/">
            kinesiology exercise science phys ed
          </a>
        </li>
        <li className="flex    ">
          <a href="/faculty/nursing/">nursing</a>
        </li>
        <li className="flex    ">
          <a href="/faculty/nutrition-dietetics/">nutrition dietetics</a>
        </li>
        <li className="flex    ">
          <a href="/faculty/occupational-therapy/">occupational therapy</a>
        </li>
        <li className="flex    ">
          <a href="/faculty/physical-therapy/">physical therapy</a>
        </li>
        <li className="flex    ">
          <a href="/faculty/public-environmental-health/">
            public environmental health
          </a>
        </li>
        <li className="flex    ">
          <a href="/faculty/recreation-leisure-studies/">
            recreation leisure studies
          </a>
        </li>
        <li className="flex    ">
          <a href="/faculty/sport-management/">sport management</a>
        </li>
        <li className="flex    ">
          <a href="/faculty/other-health-sciences-specialities/">
            other health sciences specialities
          </a>
        </li>
        <li className="flex    pt-4 font-bold text-[#e74b7f]">
          <a href="/faculty/law-and-legal-studies/">law and legal studies</a>
        </li>
        <li className="flex    pt-4 font-bold text-[#e74b7f]">
          <a href="/faculty/liberal-arts/">liberal arts</a>
        </li>
        <li className="flex    ">
          <a href="/faculty/american-studies/">american studies</a>
        </li>
        <li className="flex    ">
          <a href="/faculty/anthropology/">anthropology</a>
        </li>
        <li className="flex    ">
          <a href="/faculty/criminal-justice/">criminal justice</a>
        </li>
        <li className="flex    ">
          <a href="/faculty/english-literature/">english literature</a>
        </li>
        <li className="flex    ">
          <a href="/faculty/english-as-a-second-language/">
            english second language
          </a>
        </li>
        <li className="flex    ">
          <a href="/faculty/ethnic-multicultural-studies/">
            ethnic multicultural studies
          </a>
        </li>
        <li className="flex    ">
          <a href="/faculty/foreign-languages-literatures/">
            foreign languages literatures
          </a>
        </li>
        <li className="flex    ">
          <a href="/faculty/history/">history</a>
        </li>
        <li className="flex    ">
          <a href="/faculty/human-development-family-studies/">
            human development family studies
          </a>
        </li>
        <li className="flex    ">
          <a href="/faculty/humanities/">humanities</a>
        </li>
        <li className="flex    ">
          <a href="/faculty/linguistics/">linguistics</a>
        </li>
        <li className="flex    ">
          <a href="/faculty/philosophy/">philosophy</a>
        </li>
        <li className="flex    ">
          <a href="/faculty/political-science/">political science</a>
        </li>
        <li className="flex    ">
          <a href="/faculty/psychology/">psychology</a>
        </li>
        <li className="flex    ">
          <a href="/faculty/public-administration-policy/">
            public administration policy
          </a>
        </li>
        <li className="flex    ">
          <a href="/faculty/religious-studies-theology/">
            religious studies theology
          </a>
        </li>
        <li className="flex    ">
          <a href="/faculty/security-studies/">security studies</a>
        </li>
        <li className="flex    ">
          <a href="/faculty/sign-language/">sign language</a>
        </li>
        <li className="flex    ">
          <a href="/faculty/social-work/">social work</a>
        </li>
        <li className="flex    ">
          <a href="/faculty/sociology/">sociology</a>
        </li>
        <li className="flex    ">
          <a href="/faculty/urban-studies-planning/">urban studies planning</a>
        </li>
        <li className="flex    ">
          <a href="/faculty/womens-gender-studies/">womens gender studies</a>
        </li>
        <li className="flex    ">
          <a href="/faculty/other-liberal-arts-specialities/">
            other liberal arts specialities
          </a>
        </li>
        <li className="flex md:break   pt-4 font-bold text-[#e74b7f]">
          <a href="/faculty/medicine/">medicine</a>
        </li>
        <li className="flex    ">
          <a href="/faculty/chiropractic/">chiropractic</a>
        </li>
        <li className="flex    ">
          <a href="/faculty/dentistry/">dentistry</a>
        </li>
        <li className="flex    ">
          <a href="/faculty/medical-research/">medical research</a>
        </li>
        <li className="flex    ">
          <a href="/faculty/pharmacy-pharmacology/">pharmacy pharmacology</a>
        </li>
        <li className="flex    ">
          <a href="/faculty/physician-assistants/">physician assistants</a>
        </li>
        <li className="flex    ">
          <a href="/faculty/physicians/">physicians</a>
        </li>
        <li className="flex    ">
          <a href="/faculty/other-medicine-specialities/">
            other medicine specialities
          </a>
        </li>
        <li className="flex    pt-4 font-bold text-[#e74b7f]">
          <a href="/faculty/science/">science</a>
        </li>
        <li className="flex    ">
          <a href="/faculty/astronomy-astrophysics/">astronomy astrophysics</a>
        </li>
        <li className="flex    ">
          <a href="/faculty/biochemistry-molecular-biology/">
            biochemistry molecular biology
          </a>
        </li>
        <li className="flex    ">
          <a href="/faculty/biology/">biology</a>
        </li>
        <li className="flex    ">
          <a href="/faculty/chemistry/">chemistry</a>
        </li>
        <li className="flex    ">
          <a href="/faculty/computer-science/">computer science</a>
        </li>
        <li className="flex    ">
          <a href="/faculty/geography/">geography</a>
        </li>
        <li className="flex    ">
          <a href="/faculty/geology-earth-sciences-oceanography/">
            geology earth sciences oceanography
          </a>
        </li>
        <li className="flex    ">
          <a href="/faculty/library-information-science/">
            library information science
          </a>
        </li>
        <li className="flex    ">
          <a href="/faculty/mathematics/">mathematics</a>
        </li>
        <li className="flex    ">
          <a href="/faculty/physics/">physics</a>
        </li>
        <li className="flex    ">
          <a href="/faculty/statistics/">statistics</a>
        </li>
        <li className="flex    ">
          <a href="/faculty/other-science-specialities/">
            other science specialities
          </a>
        </li>
        <li className="flex    pt-4 font-bold text-[#e74b7f]">
          <a href="/faculty/technical-career/">technical career</a>
        </li>
        <li className="flex    ">
          <a href="/faculty/automotive-technology/">automotive technology</a>
        </li>
        <li className="flex    ">
          <a href="/faculty/aviation/">aviation</a>
        </li>
        <li className="flex    ">
          <a href="/faculty/construction-building-trades/">
            construction building trades
          </a>
        </li>
        <li className="flex    ">
          <a href="/faculty/cosmetology/">cosmetology</a>
        </li>
        <li className="flex    ">
          <a href="/faculty/culinary-arts/">culinary arts</a>
        </li>
        <li className="flex    ">
          <a href="/faculty/dental-hygienists-assistants/">
            dental hygienists assistants
          </a>
        </li>
        <li className="flex    ">
          <a href="/faculty/diagnostic-imaging-radiography/">
            diagnostic imaging radiography
          </a>
        </li>
        <li className="flex    ">
          <a href="/faculty/electronics/">electronics</a>
        </li>
        <li className="flex    ">
          <a href="/faculty/fire-science/">fire science</a>
        </li>
        <li className="flex    ">
          <a href="/faculty/massage-therapy/">massage therapy</a>
        </li>
        <li className="flex    ">
          <a href="/faculty/medical-assistants/">medical assistants</a>
        </li>
        <li className="flex    ">
          <a href="/faculty/medical-billing-and-coding/">
            medical billing coding
          </a>
        </li>
        <li className="flex    ">
          <a href="/faculty/paramedics-and-emts/">paramedics emts</a>
        </li>
        <li className="flex    ">
          <a href="/faculty/respiratory-care/">respiratory care</a>
        </li>
        <li className="flex    ">
          <a href="/faculty/surgical-technology/">surgical technology</a>
        </li>
        <li className="flex    ">
          <a href="/faculty/telecommunications/">telecommunications</a>
        </li>
        <li className="flex    ">
          <a href="/faculty/tourism/">tourism</a>
        </li>
      </ul>

      <JobSearchBox q="faculty" forceClass="my-6" />

      <section className="jobs_grid job_post_search_container">
        <div className="filters_panel">
          <div className="filters_content">
            <JobFilter />
          </div>
        </div>
        <div className="listings_panel">
          <div className="listings_content">
            {/* <SearchResults1 q={{ q: q, l: l || '', filter1 }} /> */}
            <SearchResults q={{ q: 'faculty' || 0 }} />
          </div>
        </div>
      </section>
    </main>
  );
}
