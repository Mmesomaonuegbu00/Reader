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
        <div
            className="bg-[#f2f3f2] pt-[2vh] mt-20 relative"
            style={{
                backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="%23dcecdc" d="M0,64L48,80C96,96,192,128,288,154.7C384,181,480,203,576,192C672,181,768,139,864,106.7C960,75,1056,53,1152,64C1248,75,1344,117,1392,138.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>')`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'bottom',
            }}
        >
            <div className="pt-16 pb-16">
                <h1 className="text-2xl font-bold mb-4 hover:text-green-500 cursor-pointer text-center">
                    INSTAGRAM POST
                </h1>

                {/* Auto-scrolling section */}
                <div className="overflow-hidden">
                    <div className="animate-scroll">
                        {[...images, ...images].map((item, index) => (
                            <div key={index} className="w-[250px] h-[150px] flex-shrink-0 gap-2">
                                <Image
                                    src={item}
                                    alt="image"
                                    width={300}
                                    height={200}
                                    priority
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="pt-16 w-[90%] lg:w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 border-b border-b-gray-300 pb-16 text-center gap-4">
                    <div className="flex gap-4 justify-center capitalize">
                        <Link href="/privacy">
                            <p>privacy policy</p>
                        </Link>
                        <Link href="/terms">
                            <p>terms condition</p>
                        </Link>
                    </div>

                    <h1 className="flex justify-center text-3xl font-bold font-sans text-black gap-1 logo">
                        <span className="bg-green-500 rounded-xl px-2.5 py-1 rotate-45 inline-block">
                            <span className="-rotate-45 inline-block">R</span>
                        </span>
                        eader
                    </h1>

                    <div className="flex gap-3 justify-center">
                        <FaFacebook className="text-xl hover:text-green-500" />
                        <FaTwitter className="text-xl hover:text-green-500" />
                        <FaLinkedin className="text-xl hover:text-green-500" />
                        <FaGithub className="text-xl hover:text-green-500" />
                        <FaYoutube className="text-xl hover:text-green-500" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
