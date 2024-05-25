import React from 'react'
import SectionHeading from '../../Helper/SectionHeading'
import Cards from './Cards/Cards'



const Rules = () => {
  return (
    <div className="pt-24 pb-16">
  <SectionHeading heading="Rules"/>

<div className="w-[85%]  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 mx-auto gap-8">

    <div  data-aos="fade-right" data-aos-anchor-placement="top-center"  >
        <Cards icon="abhyudaylogo1.png" title="hiii" price="69"/>
    </div>
    <div data-aos="fade-right" data-aos-anchor-placement="top-center" dat-aos-delay="200">
        <Cards icon="abhyudaylogo1.png" title="hiii" price="69"/>
    </div> <div data-aos="fade-right" data-aos-anchor-placement="top-center" dat-aos-delay="400">
        <Cards icon="abhyudaylogo1.png" title="hiii" price="69"/>
    </div>
</div>


    </div>
  )
}

export default Rules
