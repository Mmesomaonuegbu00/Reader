import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const page = () => {
    return (
        <div className='flex flex-col gap-16'>
            <div className='bg-[#f2f3f2] pt-[4vh]'>
                <div className='pt-16 pb-16 max-w-6xl mx-auto '>
                    <div className=' flex flex-col items-center justify-center'>

                        <h1 className='pt-20 text-gray-800 text-3xl md:text-4xl lg:text-5xl xl:text-[52px] font-bold text-center max-w-[550px] lg:leading-16'>
                        About Us
                        </h1>

                        <div className='flex cursor-pointer pt-4'>
                            <Link href='/' className='hover:text-green-500'>
                                <p>Home </p>
                            </Link>
                            /
                            <Link href='/privacy' className='active:text-green-500 text-green-500'>
                                <p>About Us</p>
                            </Link>


                        </div>

                    </div>
                </div>
            </div>
            <div className='flex justify-between lg:flex-row flex-col max-w-6xl mx-auto'>
                <Image src='/us.jpg' alt='image' width={500} height={500} className='w-[300px] lg:w-[350px] mx-auto border border-green-500 p-1.5 rounded-xl' />

                <div className='p-6 max-w-[500px] text-gray-700'>
                    <h1 className='font-bold text-3xl lg:text-4xl'>
                        What is the main mission of mine and what i wanna do?
                    </h1>
                    <p className='pt-3 leading-7'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit massa vitae felis augue. In venenatis scelerisque accumsan egestas mattis. Massa feugiat in sem pellentesque.</p>
                </div>

            </div>

            <div className='flex justify-center flex-col max-w-6xl mx-auto text-center pt-16'>
                <h1 className='font-bold text-3xl lg:text-4xl text-gray-700'>
                    Educational Qualification <br />
                    That I Have Gathered
                </h1>
                <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-6 mx-auto pt-14 text-center text-gray-700 '>
                    <div className='max-w-[300px] mx-auto'>

                        <p>September 2000 - May 2004 University Of California</p>
                    </div>

                    <div className='max-w-[300px] mx-auto'>

                        <p>September 2000 - May 2004 University Of California</p>
                    </div>

                    <div className='max-w-[300px] mx-auto'>

                        <p>September 2000 - May 2004 University Of California</p>
                    </div>
                    <div className='max-w-[300px] mx-auto'>

                        <p>September 2000 - May 2004 University Of California</p>
                    </div>

                </div>
            </div>


            <div className='flex justify-between lg:flex-row flex-col max-w-6xl mx-auto gap-20 pt-20'>


                <div className='p-6 max-w-[500px]'>
                    <h1 className='font-bold text-3xl text-gray-700'>
                        We have a great team of great authors
                    </h1>
                    <p className='pt-3 leading-7 text-gray-700'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit massa vitae felis augue. In venenatis scelerisque accumsan egestas mattis. Massa feugiat in sem pellentesque.</p>
                    <button className='bg-green-500 text-white px-8 py-3 rounded-full mt-4'>ABOUT ME</button>
                </div>

                <Image src='/us2.jpg' alt='image' width={500} height={500} className='w-[350px] lg:w-[350px] mx-auto ' />

            </div>

            <div className='flex flex-col max-w-6xl mx-auto justify-center items-center pt-20'>
                <h1 className='font-bold text-3xl text-gray-700'>
                    Don’t forget to subscribe my Youtube channel “Richi Andorn”
                </h1>
                <div>
                <button className='bg-green-500 text-white px-8 py-3 rounded-full mt-4'>ABOUT ME</button>
                </div>

            </div>


            {/* <div>
                <h1 className='font-bold text-3xl text-gray-700'>
                    My Contents also published
                    on these websites
                </h1>
            </div> */}


        </div>
    )
}

export default page
