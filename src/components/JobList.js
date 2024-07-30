'user client';
import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setJob, setId, setStatusId } from '@/app/store/postsSlice';
import Job from './Job';

const JobList = ({ data, handlePageChange, page, isPlaceholderData }) => {
  let content;
  const [isOpen, setIsOpen] = useState(false);
  console.log(data);
  content = data.jobs.map((job, index) => {
    return (
      <div
        className={`font-bold ${index % 2 === 0 ? 'bg-white' : 'bg-white'}`}
        key={index}
      >
        <Job job={job} />
      </div>
    );
  });
  return (
    <>
      {content}
      <div className="flex justify-center gap-4 text-white">
        <div className="join mx-auto">
          <button
            className={`join-item btn 
            ${
              page === 0
                ? 'cursor-not-allowed'
                : 'bg-slate-200 hover:bg-slate-500 hover:text-white'
            }`}
            onClick={() => handlePageChange('prev')}
            disabled={page === 0}
          >
            ◀
          </button>
          <button className="join-item btn bg-slate-200 hover:bg-slate-500 hover:text-white">
            <span className={`min-w-[50px]`}>{page + 1}</span>
          </button>
          <button
            onClick={() => {
              if (!isPlaceholderData && data.hasMore) {
                handlePageChange('next');
              }
            }}
            className={`join-item btn ${
              isPlaceholderData || !data?.hasMore
                ? 'cursor-not-allowed'
                : 'bg-slate-200 hover:bg-slate-500 hover:text-white'
            }`}
            disabled={isPlaceholderData || !data?.hasMore}
          >
            ▶
          </button>
        </div>
      </div>
    </>
  );
};
export default JobList;
