"use client"

import Image from 'next/image';
import React from 'react'
import Tilt from 'react-parallax-tilt';
import logo from '../../Navigation/abhyudaylogo1.png'

type Props={
    icon:string;
    title:string;
    price:string;
}

const Cards = ({icon,title,price}:Props) => {
  return (
    <div>
   <Tilt className="parallax-effect" perspective={500}>
   <div className="bg-gray-200 rounded-lg h-full p-6 w-ful">

    <div>
    <Image src={logo} alt="Logo" width={86} height={86}  className="mx-auto mt-8 mb-8"/>
    </div>
    <h1 className="text-center font-semibold capitalize text-xl">
    {title}
</h1>

<p className="text-center text-black text-opacity-70 mt-5 mb-5">Lorem ipsum dolor sit, quisquam nesciunt aperiam m provident?</p>
<p className="text-center text-black text-base  "> start {price} </p>
<div className="flex justify-center items-center h-full">
  <button className="bg-orange-600 relative h-10 w-32 md:h-12 md:w-40 rounded-lg text-white overflow-hidden font-medium shadow-2xl transition-all duration-200 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto before:w-0 before:rounded-sm before:bg-indigo-600 before:duration-300 before:ease-out hover:text-white hover:shadow-indigo-600 hover:before:h-40 before:hover:w-40 hover:before:opacity-80">
    <span className="relative z-100">Sign-Up</span>
  </button>
</div>

   </div>
   </Tilt>
    </div>
  )
}

export default Cards
