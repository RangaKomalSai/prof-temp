
"use client"
import React, { useState } from 'react'
import Nav from './Nav'
import MobileNav from './MobileNav'

const ResponsiveNav = () => {
    const [showNav,setShownav]=useState(false)
    const showNavhandler=()=>setShownav(true)
    const closeNavhandler=()=>setShownav(false)
  return (
    <div>
         <Nav openNav={showNavhandler}/>
        <MobileNav showNav={showNav} closeNav={closeNavhandler}/> */
   

      
    </div>
  )
}

export default ResponsiveNav
