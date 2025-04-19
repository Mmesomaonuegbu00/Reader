import React from 'react'



const chips = [
    'Lifestyle', 'Health', 'Fitness', 'Technology', 'Fashion', 'city', 'sports', 'news', 'entertainment', 'business', 'education', 'science', 'politics', 'history', 'art', 'culture', 'music', 'movies', 'books', 'photography', 'design', 'gaming', 'programming', 'web development'
]


export default function Hero() {
    return (
        <div className='bg-[#f2f3f2] pt-[4vh]'>
            <div className='pt-16 pb-16 w-[90%] lg:w-[80%] mx-auto '>
                <div className=' flex flex-col items-center justify-center'>
                    <h1 className='pt-20 text-gray-800 text-3xl md:text-4xl lg:text-5xl xl:text-[52px] font-bold text-center max-w-[550px] lg:leading-16'>
                        What Would You <br />
                        Like To Read Today?
                    </h1>



                    <div className='flex flex-wrap gap-2 justify-center mt-10 max-w-[900px]'>
                        {chips.map((chip, index) => (
                            <div key={index} className='bg-transparent text-gray-500 text-sm px-4 py-1 rounded-full border border-green-500 hover:bg-green-500 hover:text-white transition duration-300 cursor-pointer font-sans'>
                                {chip}
                            </div>
                        ))}
                    </div>


                </div>

            </div>

        </div>
    )
}
