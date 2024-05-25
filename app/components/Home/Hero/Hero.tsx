import Image from 'next/image'
import React from 'react'
import { CiDiscount1 } from 'react-icons/ci'
import logo from './abhyudaylogo1.png'

const Hero = () => {
  return (
    <div className="w-full pt-[4vh] md:pt-[12vh] h-screen bg-blue-700">
      <div className="flex justify-center flex-col w-4/5 h-full mx-auto">
        <div className="w-full mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          <div>
            <div data-aos="fade-left" className="flex items-center space-x-3 px-6 py-2 w-fit rounded-full border-2 border-gray-300">
              <CiDiscount1 className="w-6 h-6 text-yellow-300" />
              <span className="text-xs md:text-lg text-white font-semibold text-opacity-70">discounter</span>
            </div>
            <h1 data-aos="fade-right" data-aos-delay="200" className="text-3xl md:text-5xl lg:text-[55px] xl:text-[65px] relative z-[1] md:leading-[4.5rem] leading-[3rem] mt-4 text-white font-bold">Profectus
            <br/>
            <span className="absolute bottom-4 z-[-1] -rotate-12 left-0 w-1/2 h-3 bg-orange-400 bg-opacity-50 rounded-full "></span> </h1>
            <p data-aos="fade-left" data-aos-delay="400" className="mt-4 text-xs md:text-base text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat eveniet sint totam perspiciatis dolorem, similique et dicta doloribus est praesentium voluptatum sit ut, repudiandae culpa ducimus! Optio nemo veritatis explicabo!</p>
            
          </div>

          <div data-aos="fade-right" data-aos-delay="600" className="hidden lg:block mx-auto ">
          <Image src={logo} alt="Logo" width={650} height={650} className="object-cover" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
