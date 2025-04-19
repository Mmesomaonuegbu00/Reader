import Link from 'next/link'
import React from 'react'

const page = () => {
    return (
        <div>
            <div className='bg-[#f2f3f2] pt-[4vh]'>
                <div className='pt-16 pb-16 max-w-6xl mx-auto '>
                    <div className=' flex flex-col items-center justify-center'>

                        <h1 className='pt-20 text-gray-800 text-3xl md:text-4xl lg:text-5xl xl:text-[52px] font-bold text-center max-w-[550px] lg:leading-16'>
                            OUR PRIVACY POLICY
                        </h1>

                        <div className='flex cursor-pointer pt-4'>
                            <Link href='/' className='hover:text-green-500'>
                                <p>Home </p>
                            </Link>
                            /
                            <Link href='/privacy' className='active:text-green-500 text-green-500'>
                                <p>Privacy </p>
                            </Link>


                        </div>

                    </div>
                </div>
            </div>



            <div className='pt-[4vh]  pb-16 w-[80%] max-w-6xl mx-auto '>
                <h1 className='text-2xl font-bold '>
                    Responsibility of Contributors
                </h1>


                <p className='pt-4 text-gray-700'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus, donec nunc eros, ullamcorper id feugiat quisque aliquam sagittis.
                    Sem turpis sed viverra massa gravida pharetra. Non dui dolor potenti eu dignissim fusce.
                    Ultrices amet, in curabitur a arcu a lectus morbi id. Iaculis erat sagittis in tortor cursus.
                    Molestie urna eu tortor, erat scelerisque eget. Nunc hendrerit sed interdum lacus. Lorem quis viverra sed</p>

                <p className='pt-4 text-gray-700 pb-10'> pretium, aliquam sit. Praesent elementum magna amet, tincidunt eros, nibh in leo.
                    Malesuada purus, lacus, at aliquam suspendisse tempus. Quis tempus amet, velit nascetur sollicitudin.
                    At sollicitudin eget amet in. Eu velit nascetur sollicitudin erhdfvssfvrgss eget viverra nec elementum. Lacus,
                    facilisis tristique lectus in.
                </p>


                <h1 className='text-2xl font-bold '>
                    Gathering of Personal Information
                </h1>


                <p className='pt-4 text-gray-700 pb-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus, donec nunc eros, ullamcorper id feugiat quisque aliquam sagittis.
                    Sem turpis sed viverra massa gravida pharetra. Non dui dolor potenti eu dignissim fusce.
                    Ultrices amet, in curabitur a arcu a lectus morbi id. Iaculis erat sagittis in tortor cursus.
                    Molestie urna eu tortor, erat scelerisque eget. Nunc hendrerit sed interdum lacus. Lorem quis viverra sed
                </p>


                <h1 className='text-2xl font-bold '>
                    Protection of Personal- Information
                </h1>


                <p className='pt-4 text-gray-700'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus, donec nunc eros, ullamcorper id feugiat quisque aliquam sagittis.
                    Sem turpis sed viverra massa gravida pharetra. Non dui dolor potenti eu dignissim fusce.
                    Ultrices amet, in curabitur a arcu a lectus morbi id. Iaculis erat sagittis in tortor cursus.
                    Molestie urna eu tortor, erat scelerisque eget. Nunc hendrerit sed interdum lacus. Lorem quis viverra sed
                </p>
            </div>
        </div>
    )
}

export default page
