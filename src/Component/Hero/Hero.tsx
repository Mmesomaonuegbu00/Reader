import React from 'react'

const chips = [
    'Lifestyle', 'Health', 'Fitness', 'Technology', 'Fashion', 'city', 'sports', 'news', 'entertainment', 'business', 'education', 'science', 'politics', 'history', 'art', 'culture', 'music', 'movies', 'books', 'photography', 'design', 'gaming', 'programming', 'web development'
]

export default function Hero() {
    return (
        <div
            className="relative bg-[#f2f3f2] pt-[4vh]"
            style={{
                backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="%23dcecdc" d="M0,320L48,294.7C96,269,192,213,288,202.7C384,192,480,224,576,224C672,224,768,192,864,170.7C960,149,1056,139,1152,144C1248,149,1344,171,1392,181.3L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>')`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'bottom'
            }}
        >
            <div className="pt-16 pb-16 w-[90%] lg:w-[80%] mx-auto ">
                <div className="flex flex-col items-center justify-center">
                    <h1 className="pt-20 text-gray-800 text-3xl md:text-4xl lg:text-5xl xl:text-[52px] font-bold text-center max-w-[550px] lg:leading-16">
                        What Would You <br />
                        Like To Read Today?
                    </h1>

                    <p className="bg-green-500 rounded-full w-6 h- 6 hidden md:block"></p>
                    <div className="flex flex-wrap gap-2 justify-center mt-10 max-w-[900px]">
                        {chips.map((chip, index) => (
                            <div
                                key={index}
                                className="bg-transparent text-gray-500 text-sm px-4 py-1 rounded-full border border-green-500 hover:bg-green-500 hover:text-white transition duration-300 cursor-pointer font-sans"
                            >
                                {chip}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Fixed shapes for manual arrangement */}
       
            <p className="bg-green-500 rounded-lg w-6 h-6 position: absolute top-[80%] left-[10%] hidden md:block"></p>
            <p className="bg-green-500 rounded-full w-6 h-6 position: absolute top-[40%] left-[70%] hidden md:block"></p>
            <p className="bg-green-500 rounded-full w-6 h-6 position: absolute top-[90%] left-[90%]"></p>
        </div>
    )
}