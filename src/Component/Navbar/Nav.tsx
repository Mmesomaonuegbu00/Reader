'use client'
import React, { useEffect, useState } from 'react'
import Navitems from './Navitems'
import { BiChevronDown } from 'react-icons/bi'
import { BsSearch } from 'react-icons/bs'
import { HiBars3CenterLeft } from 'react-icons/hi2'
import Link from 'next/link'

interface NavProps {
    openNav: () => void;
}

const Nav: React.FC<NavProps> = ({ openNav }) => {

    const [navBg, setNavBg] = useState(false)

    useEffect(() => {
        const handler = () => {
            if (window.scrollY >= 90) setNavBg(true);
            else setNavBg(false);

        };
        window.addEventListener('scroll', handler);

        return () => {
            window.removeEventListener('scroll', handler);
        };


    }, []);


    return (
        <div className={`fixed w-full border-b border-b-gray-500   z-[1000] ${navBg ? 'bg-white' : 'fixed'} `}>
            <div className=' w-[90%] lg:w-[80%] mx-auto my-auto'>
                <div className='flex items-center h-full justify-between py-8'>

                    <h1 className='flex items-center text-3xl font-bold font-sans text-black gap-1 logo'>
                        <span className='bg-green-500 rounded-xl px-2.5 py-1 rotate-45 inline-block'>
                            <span className='-rotate-45 inline-block'>R</span>
                        </span>
                        eader
                    </h1>




                    <ul className='hidden xl:flex items-center space-x-10 '>


                        <Navitems title="Home" icontype={<BiChevronDown />} megaMenu={[
                            {
                                heading: 'Home Links',
                                items: [
                                    { label: 'Login', href: '#' },
                                    { label: 'Post', href: '#' },
                                    { label: 'Logout', href: '#' },
                                ],
                            }

                        ]} />
                        <Navitems title="About" icontype={<BiChevronDown />} megaMenu={[
                            {
                                heading: 'About Links',
                                items: [
                                    { label: 'About Me', href: '/aboutme' },
                                    { label: 'About Us', href: '/aboutus' },

                                ],
                            }

                        ]} />

                        <Link href='/contact'>
                            <Navitems title="Contact" icontype={''} />
                        </Link>


                        <Navitems title="Pages" icontype={<BiChevronDown />} megaMenu={[
                            {
                                heading: 'Page Links',
                                items: [
                                    { label: 'Author', href: '/author' },

                                ],
                            }

                        ]} />




                    </ul>

                    <div className='flex gap-2 items-center'>
                        <select className='outline-none ' >
                            <option className='outline-none flex items-center'>En</option>
                            <option className='outline-none flex items-center'>Fr</option>
                        </select>
                        <div className="relative w-12 sm:w-full sm:max-w-sm">
                            <input
                                type="text"
                                className="w-full border border-gray-300 text-sm outline-none p-2 pr-10 rounded-lg bg-[#f2f3f2] placeholder:lg:block placeholder:hidden sm:p-2 sm:pr-10 sm:rounded-lg mx-auto" placeholder='Type & Hit Enter'
                            />
                            <BsSearch className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-800 text-lg" />
                        </div>

                        <HiBars3CenterLeft className='xl:hidden text-3xl md:text-4xl font-extrabold' onClick={openNav} />
                    </div>



                </div>
            </div>
        </div>
    )
}

export default Nav
