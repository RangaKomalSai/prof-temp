"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import logo from './abhyudaylogo1.png';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';


type Props={
    openNav:()=>void
}
const Nav = ({openNav}:Props) => {
  const [navSticky, setNavSticky] = useState(false);

  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) {
        setNavSticky(true);
      }
      if (window.scrollY <= 90) {
        setNavSticky(false);
      }
    };

    window.addEventListener("scroll", handler);

    return () => {
      window.removeEventListener("scroll", handler);
    };
  }, []); 

  return (
    <div className={`fixed w-full transition-all duration-200 z-[1000] ${navSticky ? 'bg-blue-950' : 'bg-blue-500'}`}>

      <div className="flex items-center h-[10vh] lg:h-[12vh] justify-between w-4/5 mx-auto">
        <div className="font-bold text-white text-2xl">
          <Image src={logo} alt="Logo" width={196} height={76} />
        </div>
        <ul className="lg:flex hidden items-center space-x-10 lg:space-x-12 xl:space-x-14">
          <li>
            <Link href="#" className="nav_link">Home</Link>
          </li>
          <li>
            <Link href="#" className="nav_link">About</Link>
          </li>
          <li>
            <Link href="#" className="nav_link">Rules</Link>
          </li>
        </ul>
        <div className="flex items-center space-x-6">
          <button className="bg-orange-600 relative h-10 w-32 md:h-12 md:w-40 rounded-lg text-white overflow-hidden font-medium shadow-2xl transition-all duration-200 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto before:w-0 before:rounded-sm before:bg-indigo-600 before:duration-300 before:ease-out hover:text-white hover:shadow-indigo-600 hover:before:h-40 before:hover:w-40 hover:before:opacity-80">
            <span className="relative z-100">Sign-Up</span>
          </button>
          <FontAwesomeIcon 
  icon={faBars} 
  onClick={openNav} 
  className="w-8 h-8 md:w-[2.3rem] md:h-[2.3rem] lg:hidden text-white rotate-180" 
/>

        </div>
      </div>
    </div>
  );
};

export default Nav;
