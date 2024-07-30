import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
const Job = ({ job }) => {
  const router = useRouter();
  let content;
  //console.log(job)
  //let logo = '', company_name = ''
  const {
    employer_id,
    title,
    location,
    activation_date,
    expiration_date,
    how_to_apply,
    logo,
    company_name,
    featured,
    id,
  } = job;
  content = (
    <>
      <article
        className="listing bg-white border border-gray-200 p-4 mb-4 rounded-xl shadow-lg"
        data-id="59973"
        // onClick={() => {
        //   const params = new URLSearchParams({
        //     id: encodeURIComponent(id),
        //   });
        //   router.push(`/job?${params.toString()}`)
        // }}
      >
        {featured ? (
          <div className="badge badge-sm badge-featured bg-[#e74b7f] text-white absolute top-[-0.3rem] right-[-0.3rem] border-transparent items-end pt-4 shadow-md">
            Featured
          </div>
        ) : null}
        <div className="flex items-center mb-2">
          <div className="w-20 h-20 mr-4">
            <Link
              href={`/employers/${company_name
                ?.replace(/\W+/g, '-')
                .toLowerCase()}/${employer_id}/`}
            >
              <Image
                src={
                  `https://academicjobs.s3.amazonaws.com/img/university-logo/${logo}` ||
                  '/favicon.png'
                }
                width={100}
                height={100}
                alt={company_name}
                className="w-full h-full object-contain rounded-lg"
              />
            </Link>
          </div>
          <Link
            className="flex-1 block text-blue-500 text-xl font-bold leading-tight hover:underline  cursor-pointer"
            href={`/jobs/${title?.replace(/\W+/g, '-').toLowerCase()}/${id}/`}
          >
            {title}
          </Link>
          {/* <div className="flex-1 block text-blue-500 text-xl font-bold leading-tight hover:underline  cursor-pointer">
            <span className="block text-blue-500 text-xl font-bold leading-tight hover:underline  cursor-pointer">{title}</span>
          </div> */}
        </div>
        <div className="flex justify-between items-center">
          <div className="text-sm text-gray-600">
            <div className="mb-1">{company_name}</div>
            <div className="text-gray-700 font-light text-sm">{location}</div>
          </div>
          <div className="applications-close border-2 rounded px-2 mt-1 ml-2">
            <p className="text-center text-gray-400 text-sm mb-0">Closes</p>
            <div className="text-sm">
              {expiration_date ? (
                <time>
                  {new Date(expiration_date).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </time>
              ) : (
                <p className="text-center mb-0">NA</p>
              )}
            </div>
          </div>
          {new Date(expiration_date) < new Date() && expiration_date && (
            <div className="bg-opacity-50 bg-red-500 text-white  text-sm px-1 py-1 rounded-full absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 rotate-[35deg] skew-y-0">
              Job Fulfilled By TeachingJobs.com.au
            </div>
          )}
        </div>
      </article>
    </>
  );
  return <>{content}</>;
};
export default Job;
