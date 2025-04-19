'use client'
import React, { useState } from 'react'
import Nav from './Nav'
import MobileNav from './MobileNav'

const ResponsiveNav = () => {

const [sideNav, setSideNav ] = useState(false)

const handleToggleNav = () => setSideNav(!sideNav);


    return (
        <div>
            <Nav openNav={handleToggleNav} />
            {sideNav &&  <MobileNav  sideNav={sideNav} closeNav={handleToggleNav}/>}
          
        </div>
    )
}

export default ResponsiveNav
