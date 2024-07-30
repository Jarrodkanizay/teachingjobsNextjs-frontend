// page.tsx

import PaginationControls from '@/components/PaginationControls';
import Image from 'next/image';

const data = [
  'entry 1',
  'entry 2',
  'entry 3',
  'entry 4',
  'entry 5',
  'entry 6',
  'entry 7',
  'entry 8',
  'entry 9',
  'entry 10',
  'entry 11',
  'entry 12',
  'entry 13',
  'entry 14',
  'entry 15',
  'entry 16',
  'entry 17',
  'entry 18',
  'entry 19',
  'entry 20',
  'entry 21',
  'entry 22',
  'entry 23',
  'entry 24',
  'entry 25',
  'entry 26',
  'entry 27',
  'entry 28',
  'entry 29',
  'entry 30',
];

export default function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const limitPerPage = 12;
  const page = searchParams['page'] ?? '1';
  const per_page = 15;

  // mocked, skipped and limited in the real app
  const start = (Number(page) - 1) * Number(per_page); // 0, 5, 10 ...
  const end = start + Number(per_page); // 5, 10, 15 ...

  const entries = data.slice(start, end);

  return (
    <div className="flex flex-col gap-2 items-center">
      {entries.map((entry) => (
        <p key={entry}>{entry}</p>
      ))}

      <PaginationControls
        hasNextPage={end < data.length}
        hasPrevPage={start > 0}
        pagePath="/pagination/"
        itemCount={data.length}
        limitPerPage={per_page}
      />
    </div>
  );
}
