
import React from 'react'
import { BiChevronDown } from 'react-icons/bi'
import Navitems from './Navitems' // Adjust the path based on the actual location of Navitems
import Nav from './Nav'

interface MobileNavProps {
  sideNav: boolean;
  closeNav: () => void;
}

const MobileNav: React.FC<MobileNavProps> = ({ sideNav, closeNav }) => {
  return (
    <>
      {sideNav &&
        <div className='bg-black/90 fixed inset-0 transform transition-all duration-500 z-[10000] h-screen w-full xl:hidden'>
          <Nav openNav={closeNav} />
          <div className={`flex items-center justify-center bg-gray-200 pt-[18vh] pb-20 ${sideNav ? 'translate-x-0' : 'translate-x-full'} `}>
            <ul className='flex flex-col items-center space-y-10 '>


              <Navitems title="Home" icontype={<BiChevronDown />} megaMenu={[
                {
                  heading: 'Category 1',
                  items: [
                    { label: 'Link 1', href: '#' },
                    { label: 'Link 2', href: '#' },
                    { label: 'Link 3', href: '#' },
                  ],
                }

              ]} />
              <Navitems title="About" icontype={<BiChevronDown />} megaMenu={[
                {
                  heading: 'Category 1',
                  items: [
                    { label: 'Link 1', href: '#' },
                    { label: 'Link 2', href: '#' },
                    { label: 'Link 3', href: '#' },
                  ],
                }

              ]} />

              <Navitems title="Contact" icontype={''} />

              <Navitems title="Shop" icontype={<BiChevronDown />} megaMenu={[
                {
                  heading: 'Category 1',
                  items: [
                    { label: 'Link 1', href: '#' },
                    { label: 'Link 2', href: '#' },
                    { label: 'Link 3', href: '#' },
                  ],
                }

              ]} />

              <Navitems title="Pages" icontype={<BiChevronDown />} megaMenu={[
                {
                  heading: 'Category 1',
                  items: [
                    { label: 'Link 1', href: '#' },
                    { label: 'Link 2', href: '#' },
                    { label: 'Link 3', href: '#' },
                  ],
                }

              ]} />




            </ul>

          </div>
        </div>
      }
    </>
  )
}

export default MobileNav
