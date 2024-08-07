'use client';
import React, { useState, useEffect, useRef } from 'react';
// import Image from 'next/image';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
// import LogoAJ from '@/components/brand/Logo';
import NavItem from '@/components/NavItem';
// import DispatchLink from '@/components/DispatchLink';
import { useStore } from '@/lib/store/store';
import HamburgerMenuIcon from '@/components/icons/HamburgerMenuIcon';
import Logo from '@/components/brand/Logo';

import {
  countryMappings,
  countryMappings1,
  countryMappings2,
} from '@/lib/data/data';
export default function Header() {
  const handleFormSubmit = () => {
    if (region !== 'Global') {
      navigate('/jobs/', {
        state: { q: '', l: countryMappings1[region].searchLocation },
      });
    } else {
      const fetchLocation1 = async () => {
        try {
          const response = await fetch(
            'https://api.geoapify.com/v1/ipinfo?apiKey=ea0e191c22a94bf39e0e58ffbe2d6b66'
          );
          const result = await response.json();
          return result.country.name;
        } catch (error) {
          return '';
        }
      };
      fetchLocation1()
        .then((country) => {
          //sessionStorage.setItem("location", countryMappings[country.toLowerCase()]);
          //alert(countryMappings[country.toLowerCase()])
          //alert(countryMappings[country.toLowerCase()])
          dispatch(setRegion(countryMappings[country.toLowerCase()]));
          //a.l = countryMappings1[sessionStorage.getItem("location")].searchLocation
          //alert(region)
          //dispatch(setSearchJobCriteria(a))
          //alert(countryMappings1[sessionStorage.getItem("location")].searchLocation)
          navigate('/jobs/', {
            state: {
              q: '',
              l: countryMappings1[countryMappings[country.toLowerCase()]]
                .searchLocation,
            },
          });
          //navigate(`/jobs/${countryMappings1[sessionStorage.getItem("location")].searchLocation}`);
        })
        .catch((error) => {
          console.log('Error:', error);
        });
    }
    setIsNavOpen(false);
  };
  const { region } = useStore();
  const pathname = usePathname();
  const [isNavOpen, setIsNavOpen] = useState(false);
  // const [mobileMode, setMobileMode] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const ref = useRef(null);
  const onMouseEnter = (e) => {
    setDropdown(true);
  };
  const onMouseLeave = () => {
    setDropdown(false);
  };
  useEffect(() => {
    setIsNavOpen(isNavOpen);
  }, [isNavOpen]);

  return (
    <>
      <div className="hamburger-wrapper">
        {pathname === '' ? (
          isNavOpen && (
            <Link href={`/`}>
              <Logo
                width={300}
                height={109}
                forceClass={`static-logo mobile`}
              />
            </Link>
          )
        ) : (
          <Link href={`/`}>
            <Logo width={300} height={109} forceClass={`static-logo mobile`} />
          </Link>
        )}
        <HamburgerMenuIcon
          key={isNavOpen}
          onClick={() => setIsNavOpen(!isNavOpen)}
          isOpen={isNavOpen}
        />
        {/* <HamburgerMenuIcon
          onClick={() => {
            setIsNavOpen(!isNavOpen);
            
            // setMobileMode(!isNavOpen);
          }}
        /> */}
      </div>
      <header className={`header ${isNavOpen ? 'show-menu shadow-xl' : ''} `}>
        <nav>
          {pathname === '' ? null : (
            <Link href={`/`}>
              <Logo
                width={250}
                height={100}
                forceClass={`mr-8 hide-mobile static-logo`}
              />
            </Link>
          )}

          <NavItem
            url={`/jobs`}
            icon="/dotted-arrow.svg"
            navLink="Teaching Jobs"
            forceClass="border-b hover:border-[#e74b7f]" //this is optional
            forceButtonClass="border-b hover:border-[#e74b7f] mr-2 "
            onClick={() => setIsNavOpen(false)}
          />
          {/* <NavItem
            url={`/relief-teaching-jobs`}
            icon="/dotted-arrow.svg"
            navLink="Relief Teaching"
            forceClass="border-b hover:border-[#e74b7f]" //this is optional
            forceButtonClass="border-b hover:border-[#e74b7f] mr-2 "
            onClick={() => setIsNavOpen(false)}
          /> */}
          <NavItem
            url={`/principal-jobs`}
            icon="/network-icon.svg"
            navLink="Principal Jobs"
            forceClass="border-b hover:border-[#e74b7f]" //this is optional
            forceButtonClass="border-b hover:border-[#e74b7f] mr-2 "
            onClick={() => setIsNavOpen(false)}
          />
          <NavItem
            url={`/employers`}
            icon="/upward-arrow.svg"
            navLink="Top Schools"
            forceButtonClass="border-b hover:border-[#e74b7f] "
            onClick={() => setIsNavOpen(false)}
          />
          {/* <NavItem
            url="/career-help"
            icon="/network-icon.svg"
            navLink="Career Advice"
            forceButtonClass="border-b hover:border-[#e74b7f] "
            onClick={() => setIsNavOpen(false)}
          /> */}

          {isNavOpen && (
            <>
              {/* <a
                className="btn btn-aj w-full mt-4"
                // onClick={handleFormSubmit}
                href="/jobs"
              >
                Search Globally
              </a>
              <details class="w-full text-center bg-gray-300 open:bg-[amber-200] duration-300 rounded-3xl font-bold shadow-xl">
                <summary class="py-2">Search In Your Country</summary>
                <a
                  className={`md:w-52  dropdown-content z-[1] menu p-2  bg-slate-100  w-31 } `}
                >
                  <div className="  text-gray-900 relative">
                    <ul className=" text-[0.875rem] z-99  min-w-[10rem] py-1 bg-white rounded-lg ">
                      {Object.keys(countryMappings1).map((key) => (
                        <li className="navbar__item" key={key}>
                          <DispatchLink
                            to={`/${key}/`}
                            region={key}
                            setDropdown={setDropdown}
                            setIsNavOpen={setIsNavOpen}
                            className="navbar__link"
                          >
                            {countryMappings1[key].menu}
                          </DispatchLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                </a>
              </details> */}
            </>
          )}

          <div className="ml-auto post-a-job-button z-[-1] md:z-[1]">
            <NavItem
              url={`/pricing/`}
              icon="/post-a-job-icon.svg"
              navLink="Post a Job"
              forceLinkClass="ml-auto"
              forceButtonClass="nav-mobile-btn btn btn-aj "
              onClick={() => setIsNavOpen(false)}
            />
          </div>
        </nav>
      </header>
    </>
  );
}
