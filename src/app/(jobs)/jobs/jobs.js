'use client';
import React from 'react';
import SearchResults3 from '@/components/SearchResults3';
import SearchResults from '@/components/SearchResults';
import AdvancedSearchBar from '@/components/AdvancedSearchBar';
import Link from 'next/link';
import JobFilter from '@/components/JobFilter';
import { toURLParams, loadFromURLParams } from '@/utils/urlParams';
import { useSearchParams } from 'next/navigation';

export default function Page() {
  const searchParams = loadFromURLParams(useSearchParams());
  return (
    <>
      <AdvancedSearchBar forceClass="block" type="advancedSearch" />
      <section class="w-full justify-center">
        {/* <div class="filters_panel">
            <div class="filters_content">
             <JobFilter />
            </div>
          </div> */}
        <div class="w-full">
          <div class="listings_content">
            <SearchResults3 />
          </div>
        </div>
      </section>
    </>
  );
}
