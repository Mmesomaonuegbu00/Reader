'use client'
import React, { useState } from 'react'
import Navitems from './Navitems'
import { BiChevronDown } from 'react-icons/bi'
import { AiOutlineClose } from 'react-icons/ai'
import Link from 'next/link'

interface MobileNavProps {
 
  closeNav: () => void
  sideNav: boolean
}

const MobileNav: React.FC<MobileNavProps> = ({  closeNav, sideNav }) => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  return (
    <>
      {sideNav && (
        <div className="fixed inset-0 z-[10000] xl:hidden">
          <div className="absolute inset-0 bg-black/70" onClick={closeNav}></div>

          <div className={`bg-white w-full fixed right-0 top-0 p-6 pt-8 transition-transform duration-300 ease-in-out ${sideNav ? 'translate-x-0' : 'translate-x-full'}`}>
            <div className="flex justify-between items-center mb-8">
              <AiOutlineClose className="text-2xl cursor-pointer" onClick={closeNav} />
            </div>

            <ul className=" flex flex-col justify-center items-center space-y-10 ">
              <Navitems
                id="home"
                title="Home"
                icontype={<BiChevronDown />}
                megaMenu={[
                  {
                    heading: 'Home Links',
                    items: [
                      { label: 'Login', href: '#' },
                      { label: 'Post', href: '#' },
                      { label: 'Logout', href: '#' },
                    ],
                  },
                ]}
                activeDropdown={activeDropdown}
                setActiveDropdown={setActiveDropdown}
                isMobile
              />

              <Navitems
                id="about"
                title="About"
                icontype={<BiChevronDown />}
                megaMenu={[
                  {
                    heading: 'About Links',
                    items: [
                      { label: 'About Me', href: '/aboutme' },
                      { label: 'About Us', href: '/aboutus' },
                    ],
                  },
                ]}
                activeDropdown={activeDropdown}
                setActiveDropdown={setActiveDropdown}
                isMobile
              />

              <li>
                <Link href="/contact" className="text-base font-semibold text-gray-800 block">
                  Contact
                </Link>
              </li>

              <Navitems
                id="pages"
                title="Pages"
                icontype={<BiChevronDown />}
                megaMenu={[
                  {
                    heading: 'Page Links',
                    items: [
                      { label: 'Author', href: '/author' },
                    ],
                  },
                ]}
                activeDropdown={activeDropdown}
                setActiveDropdown={setActiveDropdown}
                isMobile
              />
            </ul>
          </div>
        </div>
      )}
    </>
  )
}

export default MobileNav
