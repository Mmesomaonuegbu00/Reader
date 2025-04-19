import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaYoutube, FaFacebook, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

const images = [
    '/r10.jpg',
    '/r11.jpg',
    '/r12.jpg',
    '/r13.jpg',
    '/r14.jpg',
    '/r15.jpg',
    '/r3.webp',
    '/r4.webp',
    '/r1.webp',
    '/r5.webp',
]


const Footer = () => {
    return (
        <div className='bg-[#f2f3f2] pt-[2vh] mt-20'>
            <div className='pt-16 pb-16 '>
                <h1 className='text-2xl font-bold mb-4 hover:text-green-500 cursor-pointer text-center'> INSTAGRAM POST</h1>
                <div className='overflow-x-auto flex gap-2 pt-16'>
                    {images.map((item, index) => (
                        <div key={index} className='w-[250px] h-[150px] flex-shrink-0'>
                            <Image
                                src={item}
                                alt='image'
                                width={300}
                                height={200}
                                priority
                                className='w-full h-full object-cover'
                            />
                        </div>
                    ))}
                </div>


                <div className='pt-16 w-[90%] lg:w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 border-b border-b-gray-300 pb-16 text-center gap-4'>
                    <div className='flex gap-4 justify-center capitalize'>
                       <Link href='/privacy'> <p>privacy policy</p></Link>
                       <Link href='/terms'><p>terms condition</p></Link>
                        
                    </div>

                    <h1 className='flex justify-center text-3xl font-bold font-sans text-black gap-1 logo'>
                        <span className='bg-green-500 rounded-xl px-2.5 py-1 rotate-45 inline-block'>
                            <span className='-rotate-45 inline-block'>R</span>
                        </span>
                        eader
                    </h1>

                    <div className='flex gap-3 justify-center'>
                        <FaFacebook className='text-xl hover:text-green-500' />
                        <FaTwitter className='text-xl hover:text-green-500' />
                        <FaLinkedin className='text-xl hover:text-green-500' />
                        <FaGithub className='text-xl hover:text-green-500' />
                        <FaYoutube className='text-xl hover:text-green-500' />
                    </div>
                </div>



            </div>
        </div>
    )
}

export default Footer
