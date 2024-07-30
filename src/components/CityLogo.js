'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// type Props = { city?: string; country?: string };

const CityLogo = ({ city = 'Melbourne', country = 'Australia' }) => {
  const [logoUrl, setLogoUrl] = useState(null);

  async function getCityLogo(city, country) {
    const response = await fetch(
      `https://en.wikipedia.org/w/api.php?action=query&prop=pageimages&format=json&piprop=original&titles=${city},_${country}`
    );
    const data = await response.json();
    const pages = data.query.pages;
    const page = Object.values(pages)[0];
    return page.original ? page.original.source : null;
  }

  useEffect(() => {
    getCityLogo('Melbourne', 'Australia')
      .then((url) => setLogoUrl(url))
      .catch((error) => console.error(error));
  }, []);

  return logoUrl ? <Link href={logoUrl}>Logo URL</Link> : null;
};

export default CityLogo;
