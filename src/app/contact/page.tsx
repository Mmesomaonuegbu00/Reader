import Link from 'next/link'
import React from 'react'

const page = () => {
    return (
        <div className='flex flex-col gap-16'>
            <div className='bg-[#f2f3f2] pt-[4vh]'>
                <div className='pt-16 pb-16 max-w-6xl mx-auto '>

                    <div className=' flex flex-col items-center justify-center'>


                        <h1 className='pt-20 text-gray-800 text-3xl md:text-4xl lg:text-5xl xl:text-[52px] font-bold text-center max-w-[550px] lg:leading-16'>
                            Contact Us
                        </h1>

                        <div className='flex cursor-pointer pt-4'>
                            <Link href='/' className='hover:text-green-500'>
                                <p>Home </p>
                            </Link>
                            /
                            <Link href='/privacy' className='active:text-green-500 text-green-500'>
                                <p>Contact Us</p>
                            </Link>


                        </div>
                    </div>
                </div>

            </div>



            <div className='max-w-6xl mx-auto px-10'>
                <div>
                    <h1 className='text-3xl font-bold'>
                        We would Love To Hear From You….
                    </h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit massa vitae felis augue. In venenatis scelerisque accumsan egestas mattis. Massa feugiat in sem pellentesque.</p>
                </div>


                <form className='pt-20' >

                    <div className='flex flex-col gap-2 pt-4 text-gray-700'>
                        <label className='text-lg font-semibold'>Your Name (Required)</label>
                        <input type="text" placeholder='John doe' className='p-2 bg-[#f4f5f4] rounded-lg' />
                    </div>

                    <div className='flex flex-col gap-2 pt-4 text-gray-700'>
                        <label className='text-lg font-semibold'>Your Email Address (Required)</label>
                        <input type="text" placeholder='John doe@gmail.com' className='p-2 bg-[#f4f5f4] rounded-lg' />
                    </div>

                    <div className='flex flex-col gap-2 pt-4 text-gray-700'>
                        <label className='text-lg font-semibold'>Reason For Contact</label>
                        <input type="text" placeholder='Advertising' className='p-2 bg-[#f4f5f4] rounded-lg' />
                    </div>

                    <div className='flex flex-col gap-2 pt-4 text-gray-700'>
                        <label className='text-lg font-semibold'>Your Message Here</label>
                        <textarea placeholder='John doe' className='p-6 bg-[#f4f5f4] rounded-lg' />
                    </div>

                    <div>
                        <button className='bg-green-500 text-white px-8 py-3 rounded-full mt-4'>Seab Now</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default page
