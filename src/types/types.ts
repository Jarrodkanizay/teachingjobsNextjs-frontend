export type BlogPostTypes = {
  post: {
    status?: string | undefined;
    rank?: number;
    title?: string | undefined;
    slug?: string | undefined;
    author?: string | undefined;
    published_at?: string | undefined;
    updated_at?: string | undefined;
    image_url?: string | undefined;
    alt?: string | undefined;
    summary?: string | undefined;
    tags?: string[] | undefined;
    keywords?: string | undefined;
    content?: string | undefined;
  };
  columns?: number | undefined;
};

export type CityDataTypes = {
  cityInfo: {
    title: string;
    h1: string;
    slug: string;
    city: string;
    description: string;
    keywords: string;
    cityInfo: string[];
    uniList: string[];
    nobelInfo: string[];
    nobelList: string[];
    academicInfo: string[];
    academicList: string[];
    promo: string[];
    image_url: string;
    alt: string;
  };
};
