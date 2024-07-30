'use client';
import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { useState, useEffect } from 'react';
import { useStore } from '@/lib/store/store';

export default function JobSearchBox() {
 
const { region } = useStore();

          

  const size = 120;
  const items = [
    {
      src: '/home/teacher2.jpeg',
      alt: 'early childhood',
      label: 'Early Childhood',
      link: `/early-childhood`,
    },
    {
      src: '/home/academic-student-positions.png',
      alt: 'primary Positions',
      label: 'Primary',
      link: `/primary`,
    },
    {
      src: '/home/teacher3.jpeg',
      alt: 'secondary',
      label: 'Secondary',
      link: `/secondary`,
    },
    {
      src: '/home/teacher-4.jpg',
      alt: 'relief-teaching',
      label: 'Relief Teaching',
      link: `/relief-teaching-jobs`,
    },
    {
      src: '/home/teacher1.jpeg',
      alt: 'administrative Positions',
      label: 'Admin',
      link: `/admin`,
    },
    // {
    //   src: '/home/academic-graduate-positions.png',
    //   alt: 'Academic PhD Positions',
    //   label: 'Student',
    //   link: `${region}/student-jobs`,
    // },
    // {
    //   src: '/home/academic-lecturer-positions.png',
    //   alt: 'Academic Graduate Positions',
    //   label: 'Industry',
    //   link: `${region}/Industry`,
    // },
  ];
  return (
    <div className="hero-bg md:bg-center ">
      <section className="wrapper md:flex">
        <h2 className="sentence text-blue-500">
          <span className="mr-8">Find</span>{' '}
          <span className="md:hidden block">
            <br />
          </span>
          <div className="slidingVertical ">
            <span>Opportunity</span>
            <span>Connections</span>
            <span>Happiness</span>
            <span>Opportunity</span>
            <span>Connections</span>
          </div>
        </h2>
      </section>
      <ul className="hero-icons lg:flex flex-wrap md:gap-8 mx-auto text-center items-center justify-center md:mt-[-2rem] mt-[-11rem] hidden ">
        {items.map((item, index) => (
          
          <li className=" text-[#334680] font-bold hover:font-light hover:text-blue-900 hover:grayscale-0" key={index}>
            <Link className=" rounded-full grayscale hover:grayscale-0 " href={item.link}>
              <Image  className=" rounded-full " src={item.src} width={size} height={size} alt={item.alt} />
            </Link>
            <Link className="mb-4  text-blue-900 " href={item.link}>
              <p>{item.label}</p>
            </Link>
          </li>
        ))}
      </ul>


      <ul className="hero-icons flex gap-4 md:gap-8 mx-auto text-center items-center justify-center lg:mt-0 mt-[-5rem] lg:hidden text-[#334680]">
        <li>
          <a className="grayscale hover:grayscale-0" href="/early-childhood">
            <Image
              alt="Academic Executive Positions"
              loading="lazy"
              width="180"
              height="180"
              decoding="async"
              data-nimg="1"
              className="rounded-full"
              src="/home/teacher2.jpeg"
            ></Image>
          </a>
          <a className="mb-4" href="/early-childhood">
            <p>Kindergarten</p>
          </a>
        </li>
        <li>
          <a className="grayscale hover:grayscale-0 rounded-full" href="/primary">
            <Image
              alt="Academic Faculty Positions"
              loading="lazy"
              width="180"
              height="180"
              decoding="async"
              data-nimg="1"
              className="rounded-full"
              src="/home/teacher-4.jpg"
            ></Image>
          </a>
          <a className="mb-4" href="/primary">
            <p className="">Primary</p>
          </a>
        </li>
        <li>
          <a className="grayscale hover:grayscale-0 rounded-full" href="/secondary">
            <Image
              alt="Academic Staff Positions"
              loading="lazy"
              width="180"
              height="180"
              decoding="async"
              data-nimg="1"
              className="rounded-full"
              src="/home/teacher3.jpeg"
            ></Image>
          </a>
          <a className="mb-4" href="/secondary">
            <p>Secondary</p>
          </a>
        </li>
      </ul>
    </div>
  );
}
