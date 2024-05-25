import React from 'react';
import SectionHeading from '../../Helper/SectionHeading';
import Image from 'next/image';
import logo from '../Navigation/abhyudaylogo1.png'


const About = () => {
  return (
    <div className="pt-20 pb-16">
      
      <SectionHeading heading="about"/>
      <div data-aos="zoom-in" data-aos-anchor-placement="top-center" className="w-4/5 mx-auto items-center mt-24 grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="mx-auto lg:-mx-0 mb-8 lg:mb-0">
        <Image src={logo} alt="Logo" width={596} height={576} className="rounded-lg -rotate-12"/>    

        </div>
        <div >
            <h1 className="text-2xl md:text-3xl text-[#2d3c58] font-bold"> we eeeeee</h1>
            <p className="mt-4 text-base text-[#556180] text-opacity-85">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit in nulla iusto unde ipsam illo voluptatum provident dolores reprehenderit vel, ab dicta quisquam doloremque, perferendis quae, accusamus tempora optio! Tempora!</p>
            <p className="mt-4 text-base text-[#556180] text-opacity-85">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit in nulla iusto unde ipsam illo voluptatum provident dolores reprehenderit vel, ab dicta quisquam doloremque, perferendis quae, accusamus tempora optio! Tempora!</p>
            <p className="mt-4 text-base text-[#556180] text-opacity-85">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit in nulla iusto unde ipsam illo voluptatum provident dolores reprehenderit vel, ab dicta quisquam doloremque, perferendis quae, accusamus tempora optio! Tempora!</p>
      
      <div className="mt-8 flex items-center space-x-8">
        <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center flex-col">
        <Image src={logo} alt="Logo" width={36} height={36} className="rounded-lg -rotate-12"/>    
       
        </div>
        <div>
            <h1 data-aos="zoom-in" data-aos-anchor-placement="top-center" data-aos-delay="200" className="text-lg md:text-xl ">hiii</h1>
            <p className="mt-2 text-base text-opacity-75">hiii</p>
        </div>
        
      </div>
      <div className="mt-8 flex items-center space-x-8">
        <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center flex-col">
        <Image src={logo} alt="Logo" width={36} height={36} className="rounded-lg -rotate-12"/>    
       
        </div>
        <div>
            <h1 className="text-lg md:text-xl ">hiii</h1>
            <p className="mt-2 text-base text-opacity-75">hiii</p>
        </div>
        
      </div>
      <div className="mt-8 flex items-center space-x-8">
        <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center flex-col">
        <Image src={logo} alt="Logo" width={36} height={36} className="rounded-lg -rotate-12"/>    
       
        </div>
        <div>
            <h1 className="text-lg md:text-xl ">hiii</h1>
            <p className="mt-2 text-base text-opacity-75">hiii</p>
        </div>
        
      </div>
        </div>
      </div>
    </div>
  );
};

export default About;
