'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

type HeroProps = {
  bgColorClass?: string; //Optional Tailwind CSS background color class
  h1: string; //Example "Student Jobs on Campus"
  h2?: string;
  para1: string;
  para2?: string;
  btnPrimaryText?: string; //Example "Find a Job"
  btnPrimaryURL?: string; //Example "/student-jobs-on-campus"
  btnSecondaryText?: string; //Example "FAQs"
  btnSecondaryURL?: string; //Example "/faqs"
  src?: string; //Example "/student-jobs-on-campus/student-jobs-on-campus.jpg"
  alt?: string; //Example "Student Jobs on Campus can be life changing"
  imgWidth?: number; //Image width={2000}
  imgHeight?: number; //Image height={534}
  imgRight?: boolean; //Image on right side of text
  reorder?: boolean; //Reorder image and text on mobile
  externalLink?: boolean; //Use <img instead of <Image if linking to an image on some other site
  imageShadow?: boolean; //Add shadow to image
};

const HeroBanner = ({
  bgColorClass = 'bg-slate-200',
  h1,
  h2,
  para1,
  para2,
  btnPrimaryText,
  btnPrimaryURL,
  btnSecondaryText,
  btnSecondaryURL,
  src,
  alt = '',
  imgWidth = 2000,
  imgHeight = 534,
  imgRight = true,
  reorder = true,
  externalLink = false,
  imageShadow = true,
}: HeroProps) => {
  // const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 0
  );

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  let reorderCss = '';
  if (reorder) {
    reorderCss = `order-${windowWidth > 1023 ? 'none' : '1'}`;
  } else {
    reorderCss = '';
  }

  return (
    <section
      className={`hero max-h-fit py-4 mb-16 full-width ${bgColorClass} ${reorderCss}`}
    >
      <div className="container">
        <div
          className={`hero-content flex-col gap-8 lg:flex-row${
            imgRight ? '-reverse' : ''
          }`}
        >
          {src ? (
            <>
              {externalLink ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={src}
                  className={`lg:max-w-lg rounded-lg ${
                    imageShadow ? 'shadow-2xl' : ''
                  } mb-8 lg:mb-0`}
                  alt={alt}
                />
              ) : (
                <Image
                  width={imgWidth}
                  height={imgHeight}
                  src={src}
                  className={`lg:max-w-lg rounded-lg ${
                    imageShadow ? 'shadow-2xl' : ''
                  } mb-8 lg:mb-0`}
                  alt={alt}
                />
              )}
            </>
          ) : null}
          <div>
            <h1 className="text-4xl font-bold text-aj">{h1}</h1>
            {h2 ? <h2>{h2}</h2> : null}

            <p className="mt-10">{para1}</p>
            <p className="mt-6">{para2}</p>
            <p
              className={`w-full mt-8 flex flex-col items-center justify-center lg:justify-end ${
                !imgRight ? 'lg:flex-row' : 'lg:flex-row-reverse'
              }`}
            >
              {btnSecondaryURL ? (
                <Link className="link link-aj" href={btnSecondaryURL}>
                  {btnSecondaryText}
                </Link>
              ) : null}
              {btnPrimaryURL ? (
                <>
                  <span className="mx-4 mt-6"></span>
                  <Link className="btn btn-aj" href={btnPrimaryURL}>
                    {btnPrimaryText}
                  </Link>
                </>
              ) : null}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
