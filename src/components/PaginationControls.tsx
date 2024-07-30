'use client';

import { FC } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

type PaginationControlProps = {
  hasNextPage: boolean;
  hasPrevPage: boolean;
  pagePath: string;
  itemCount: number;
  limitPerPage?: number;
};

const PaginationControls: FC<PaginationControlProps> = ({
  hasNextPage,
  hasPrevPage,
  pagePath,
  itemCount,
  limitPerPage = 4,
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const page = searchParams.get('page') ?? '1';
  //   const per_page = searchParams.get('per_page') ?? limitPerPage.toString();
  const per_page = limitPerPage.toString();

  const totalPages = Math.ceil(itemCount / limitPerPage);

  return (
    <div className="pagination join mx-auto">
      <button
        disabled={!hasPrevPage}
        className="join-item btn"
        onClick={() => {
          router.push(`/${pagePath}?page=1&per_page=${per_page}#pagination`);
        }}
      >
        «
      </button>
      <button
        className="join-item btn"
        disabled={!hasPrevPage}
        onClick={() => {
          router.push(
            `/${pagePath}?page=${
              Number(page) - 1
            }&per_page=${per_page}#pagination`
          );
        }}
      >
        &lsaquo;
      </button>
      <button className="join-item btn">
        Page {page} of {Math.ceil(itemCount / Number(per_page))}
      </button>
      <button
        className="join-item btn"
        disabled={!hasNextPage}
        onClick={() => {
          router.push(
            `/${pagePath}?page=${
              Number(page) + 1
            }&per_page=${per_page}#pagination`
          );
        }}
      >
        &rsaquo;
      </button>
      <button
        className="join-item btn"
        disabled={!hasNextPage}
        onClick={() => {
          router.push(
            `/${pagePath}?page=${totalPages}&per_page=${per_page}#pagination`
          );
        }}
      >
        »
      </button>
    </div>
  );
};

export default PaginationControls;
