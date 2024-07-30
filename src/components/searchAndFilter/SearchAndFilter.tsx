//src/components/searchAndFilter/SearchAndFilter.tsx
'use client';
import { useState, useEffect } from 'react';

const SearchFilter = () => {
  const [searchTerm, setSearchTerm] = useState('');
  // const [filterCity, setFilterCity] = useState('');
  // const [filterCategory, setFilterCategory] = useState('');
  // const [filterNobel, setFilterNobel] = useState('');

  const hidden = 'hide_filtered';

  useEffect(() => {
    const items = document.querySelectorAll('.filter-item');

    items.forEach((item) => {
      const city = item.getAttribute('data-city')?.toLowerCase() || '';
      const region = item.getAttribute('data-region')?.toLowerCase() || '';
      const country = item.getAttribute('data-country')?.toLowerCase() || '';
      const nobelLaureate =
        item.getAttribute('data-nobel-laureates')?.toLowerCase().split(', ') ||
        '';
      const universities =
        item.getAttribute('data-universities')?.toLowerCase().split(', ') || '';
      const category =
        item.getAttribute('data-category')?.toLowerCase().split(', ') || '';
      const searchLower = searchTerm.toLowerCase();

      if (
        city.includes(searchLower) ||
        region.includes(searchLower) ||
        country.includes(searchLower) ||
        nobelLaureate.includes(searchLower) ||
        universities.includes(searchLower)
      ) {
        item.classList.remove(hidden); // Ensure item is visible
      } else {
        item.classList.add(hidden); // Hide item
      }
    });
  }, [searchTerm]);

  return (
    <>
      <div className="relative">
        <input
          type="text"
          placeholder="Search by city, region, country, or Nobel Prize Winner..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className={`w-full input input-md input-bordered focus:outline-none focus:border-orange-500 mb-8`}
        />
        {searchTerm && (
          <button
            className="absolute top-[24px] right-3 -translate-y-1/2"
            onClick={() => setSearchTerm('')}
          >
            X
          </button>
        )}
      </div>
      {/* Additional filters for category and Nobel Laureate can be added here */}
    </>
  );
};

export default SearchFilter;
