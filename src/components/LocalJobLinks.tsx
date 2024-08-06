import Link from 'next/link';
import LinkIcon from '@/components/icons/LinkIcon';

type Props = {
  title?: string;
  heading: string;
  localObj: any;
  locations: any;
  region?: string;
  category: string;
  shortName?: string;
};

const LocalJobLinks = ({
  title = '',
  heading,
  localObj,
  locations,
  region = 'Australia',
  category,
  shortName = category,
}: Props) => {
  // TODO: This is not being used at the moment but once search query string is fixed to work with all levels then we can add the additional features (categories, filters, etc)
  // TODO: Write a function to build the query string, retrieving the details from the localObj and then pass it to the URL

  let {
    Name = '',
    Title = '',
    h1 = '',
    h2 = '',
    Description = '',
    Keyword = '',
    content: content1 = '',
    Image: imageSrc = '',
    category1 = '',
    filter1 = '',
    category2 = '',
    filter2 = '',
    category3 = '',
    filter3 = '',
    alt = '',
    type = '',
  } = localObj;

  // TODO: adjust and add these back when query strings are working
  const urlPrefix = ``; //`?r=${region}&`;
  const urlLocation = ``; //`l=${locations[0]}&`; //Not used just a visual for more poor brain
  const urlCategory = ``; //`filter0=[{"category":"${category2}",`;
  const urlFilter = ``; //`"filter":"${filter2}"}]&`;
  const urlSuffix = ``; //`mode=default`;
  // ${urlPrefix}l=${location}&${urlCategory}${urlFilter}${urlSuffix}

  return (
    <>
      {category.toLowerCase() === 'indigenous' ? null : (
        <div className="links_section mb-16">
          {/* <p>{filter2}</p>
          <p>{filter3}</p> */}
          <h2>{heading}</h2>
          <nav aria-label={heading}>
            <ul>
              {locations.map((location: any) => (
                <li key={location}>
                  <p>
                    <Link
                      href={`${category
                        .toLowerCase()
                        .replace(/\s+/g, '-')}-${location
                        .toLowerCase()
                        .replace(/\s+/g, '-')}`}
                    >
                      <LinkIcon forceClass="pink_icon" /> {shortName} {location}
                    </Link>
                  </p>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </>
  );
};

export default LocalJobLinks;
