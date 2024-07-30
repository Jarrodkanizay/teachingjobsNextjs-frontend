'use client';
import React from 'react';
import Link from 'next/link';

interface Props {
  title: string;
  company_name: string;
  how_to_apply: string;
  buttonText?: string;
  forceClass?: string;
}

const Button = ({
  title,
  company_name,
  how_to_apply,
  buttonText = 'Apply Now',
  forceClass = '',
}: Props) => {
  // const { title, company_name, how_to_apply } = params;
  return (
    <button
      // target="_blank"
      className={`btn btn-aj ${forceClass}`}
      data-toggle="modal"
      data-target="#apply-modal"
      data-title={title}
      rel=""
      onClick={() => {
        let subject = `Application for ${title} position at ${company_name} from TeachingJobs.com`;
        if (how_to_apply.includes('@')) {
          window.location.href = `mailto:${how_to_apply}?subject=${encodeURIComponent(
            subject
          )}`;
        } else {
          window.open(how_to_apply, '_blank');
          //window.location.href = how_to_apply;
        }
      }}
    >
      {buttonText}
    </button>
  );
};

export default Button;
