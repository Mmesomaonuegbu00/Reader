import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';

interface RecentProps {
    gaming: { id: number; headed: string; content: string; image: string; published: string; poster: string; name: string }[];
}

const customImages = [
    '/r7.jpg',
    '/r2.webp',
    '/r3.webp',
    '/r4.webp',
    '/r5.webp',
    '/r8.jpg',
    '/r9.jpg',

];

const list = [
    'creativity', 'demo', 'elements', 'food', 'microwave', 'natural', 'newyorkcity', 'nice', 'tech', 'videography', ' vlog', 'wonderland'

];

function getRandomAuthors(data: RecentProps['gaming'], count: number) {
    const shuffled = [...new Set(data.map(item => item.poster))].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

const Recent: React.FC<RecentProps> = ({ gaming }) => {
    const authorOne = getRandomAuthors(gaming, 1)[0];
    const authorsFive = getRandomAuthors(gaming, 3);


    return (
        <div className='pt-16'>
            <div className='w-[90%] lg:w-[80%] mx-auto py-10'>

                <h1 className='text-2xl font-bold mb-4 hover:text-green-500 cursor-pointer underline decoration-2 decoration-green-500 underline-offset-8'>Recent Posts</h1>

                <div className='grid grid-cols-1 xl:grid-cols-2 gap-10'>
                    <div className='w-[100%]'>
                        <div className='flex flex-col gap-10 mt-8 capitalize'>
                            {gaming.slice(0, 7).map((item, index) => (
                                <Link key={item.id} href={`/post/${item.id}`}>
                                    <div className='flex flex-col gap-2 bg-white shadow-xl p-3 rounded-lg max-w-[100%] lg:w-[100%] xl:w-[900px] h-[100%] lg:h-[500px] cursor-pointer'>
                                        <Image
                                            src={customImages[index] || item.image || '/r10.jpg'}
                                            alt={item.headed}
                                            width={900}
                                            height={500}
                                            style={{ width: '100%', height: 'auto' }}
                                            className='w-full max-h-[300px] object-cover rounded-lg'
                                        />

                                        <div className='flex flex-col justify-center'>
                                            <h1 className='text-xl font-semibold hover:text-green-500 cursor-pointer'>{item.headed}</h1>
                                            <p>{item.published}</p>
                                            <p className='line-clamp-3 pt-2 text-sm'>{item.content}</p>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className='flex flex-col gap-6 w-[100%] lg:w-2/3'>

                        <div className='mt-8'>
                            <div className='bg-white shadow-xl rounded-lg w-[100%] h-[100%]'>
                                <p className='h-[4px] bg-green-500 w-full'></p>
                                <h1 className='text-xl font-semibold p-4 text-center'>SEARCH</h1>
                                <div className='grid grid-cols-1 items-center gap-2 p-4'>
                                    <input type="text" placeholder='Search...' className='border border-gray-300 rounded-full px-4 py-2 w-full bg-[#f2f3f2]' />
                                    <button className='bg-green-500 text-white px-4 py-3 rounded-full w-full mt-4'>SEARCH</button>
                                </div>
                            </div>

                        </div>


                        <div className='pt-8'>
                            <div className='bg-white shadow-xl rounded-lg w-full h-[100%]'>
                                <p className='h-[4px] bg-green-500 w-full'></p>
                                <h1 className='text-xl font-semibold p-4 text-center'>HI I&apos;M {authorOne}</h1>
                                <div className='flex flex-col items-center justify-center gap-4 p-4'>
                                    <a
                                        href={`https://www.reddit.com/u/${authorOne}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className='text-green-600 font-medium hover:underline flex items-center gap-2'
                                    >
                                        <Image
                                            src={'/alex.webp'}
                                            alt={authorOne}
                                            width={200}
                                            height={200}
                                            style={{ height: 'auto', maxWidth: '100%' }}
                                            className='rounded-full'
                                        />
                                    </a>

                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel in in donec iaculis tempus odio nunc laoreet . Libero ullamcorper.
                                    </p>
                                    <Link href={`/post/${gaming[0].id}`} className='text-green-500 font-semibold hover:underline'>
                                        <button className='bg-green-500 text-white px-4 py-3 rounded-full w-full mt-4'>ABOUT ME</button>
                                    </Link>
                                </div>
                            </div>

                        </div>



                        <div className='pt-8'>
                            <div className='relative w-full h-[500px]'>
                                <Image
                                    src='/r6.webp'
                                    alt='image'
                                    fill
                                    className='object-cover rounded-lg'
                                />
                                <div className='absolute inset-0 bg-[rgba(0,0,0,0.6)] rounded-lg'></div>
                                <div className='relative h-full text-white flex flex-col items-center justify-center text-center'>
                                    <h2 className='font-semibold text-lg'>Create Stunning Website!!</h2>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur sociis. Etiam nunc amet id dignissim. Feugiat id tempor vel sit ornare.
                                    </p>
                                    <button className='bg-green-500 text-white px-8 py-3 rounded-full mt-4'>ABOUT ME</button>
                                </div>


                            </div>


                        </div>

                        <div className='pt-8'>
                            <div className='bg-white shadow-xl rounded-lg w-full h-full'>
                                <p className='h-[4px] bg-green-500 w-full'></p>
                                <h1 className='text-xl font-semibold p-4 text-center'>AUTHORS</h1>

                                <div className='flex flex-col gap-4 p-4'>
                                    {authorsFive.map((author, i) => (
                                        <Link
                                            key={i}
                                            href={`https://www.reddit.com/u/${author}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className='flex items-center gap-4 hover:text-green-500 transition-all duration-200 border-b border-b-gray-500 pb-8'
                                        >
                                            <Image
                                                src="/alex.webp"
                                                alt={author}
                                                width={70}
                                                height={70}
                                                className="rounded-full w-[70px] h-[70px] object-cover"
                                            />
                                            <div className='flex-1'>
                                                <p className="font-medium text-lg">{author}</p>
                                                <p className='text-gray-500 text-base'>Author & developer of Bexer</p>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>

                        </div>


                        <div className='mt-8'>
                            <div className='bg-white shadow-xl rounded-lg w-full h-[100%]'>
                                <p className='h-[4px] bg-green-500 w-full'></p>
                                <h1 className='text-xl font-semibold p-4 text-center'>Never Miss A News</h1>
                                <div className='grid grid-cols-1 items-center gap-2 p-4'>
                                    <input type="text" placeholder='Search...' className='border border-gray-300 rounded-full px-4 py-2 w-full bg-[#f2f3f2]' />
                                    <button className='bg-green-500 text-white px-4 py-3 rounded-full w-full mt-4'>SUBSCRIBE NOW</button>
                                </div>
                            </div>

                        </div>



                        <div className='mt-8'>
                            <div className='bg-white shadow-xl rounded-lg w-full h-[100%]'>
                                <p className='h-[4px] bg-green-500 w-full'></p>
                                <h1 className='text-xl font-semibold p-4 text-center'>CATEGORIES</h1>
                                <ul className='flex flex-col gap-6 px-4'>
                                    {list.map((item, index) => (
                                        <li key={index} className='text-sm text-gray-500 border-b border-b-gray-400 pb-4 px-8 hover:text-green-500 transition-all duration-200 capitalize'> <span className='text-green-500'>#</span> {item}</li>
                                    ))}
                                </ul>

                            </div>

                        </div>


                        <div className='mt-8'>
                            <div className='bg-white shadow-xl rounded-lg w-full h-[100%]'>
                                <p className='h-[4px] bg-green-500 w-full'></p>
                                <h1 className='text-xl font-semibold p-4 text-center'>CATEGORIES</h1>

                                <div className='flex flex-col gap-5 mt-8'>
                                    {gaming.slice(0, 2).map((item) => (
                                        <Link key={item.id} href={`/post/${item.id}`}>
                                            <div className='flex flex-row gap-2 shadow-md shadow-green-50 p-3 rounded-lg w-full cursor-pointer'>
                                                <Image
                                                    src={item.image || '/placeholder.jpg'}
                                                    alt={item.headed}
                                                    width={100}
                                                    height={100}
                                                    priority
                                                    className='w-[100px] h-[100px] object-cover rounded-lg'
                                                />
                                                <div className='flex flex-col justify-center'>
                                                    <h1 className='text-sm font-semibold  hover:text-green-500 cursor-pointer'>{item.headed}</h1>
                                                    <p className='text-sm text-gray-800'>{item.published}</p>
                                                    <p className='text-sm text-gray-800'>{item.name}</p>
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
                                </div>

                            </div>

                        </div>


                        <div className='mt-8'>
                            <div className='bg-white shadow-xl rounded-lg w-full h-[100%]'>
                                <p className='h-[4px] bg-green-500 w-full'></p>
                                <h1 className='text-xl font-semibold p-4 text-center'>CATEGORIES</h1>

                                <div className='flex flex-wrap gap-2 justify-center  max-w-[900px] pb-16'>
                                    {list.map((item, index) => (
                                        <div key={index} className='bg-transparent text-gray-500 text-sm px-4 py-1 rounded-full border border-green-500 hover:bg-green-500 hover:text-white transition duration-300 cursor-pointer font-sans'>
                                            {item}
                                        </div>
                                    ))}
                                </div>

                            </div>

                        </div>


                        <div className='mt-8'>
                            <div className='bg-white shadow-xl rounded-lg w-full h-[100%]'>
                                <p className='h-[4px] bg-green-500 w-full'></p>
                                <h1 className='text-xl font-semibold p-4 text-center'>SOCIAL LINKS</h1>
                                <div className='flex justify-between pb-16 px-16 pt-4'>
                                    <FaFacebook className='text-gray-500 text-2xl hover:text-green-500' />
                                    <FaTwitter className='text-gray-500 text-2xl hover:text-green-500' />
                                    <FaLinkedin className='text-gray-500 text-2xl hover:text-green-500' />
                                    <FaGithub className='text-gray-500 text-2xl hover:text-green-500' />
                                    <FaYoutube className='text-gray-500 text-2xl hover:text-green-500' />


                                </div>
                            </div>

                        </div>


                    </div>
                </div>

            </div>
        </div>
    )
}

export default Recent
