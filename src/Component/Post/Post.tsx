import React from 'react';
import PostNav from './PostNav';
import Link from 'next/link';
import Image from 'next/image';

interface PostProps {
  trending: { id: number; headed: string; content: string; image: string; published: string; poster: string; name: string }[];
  popular: { id: number; headed: string; content: string; image: string; published: string; poster: string; name: string }[];
  editorsPick: { id: number; headed: string; content: string; image: string; published: string; poster: string; name: string }[];
}

const Post: React.FC<PostProps> = ({ trending, popular, editorsPick }) => {
  return (
    <div className='pt-16'>
      <div className='w-[90%] lg:w-[80%] mx-auto py-10 border-b border-b-gray-300'>
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10  pb-16'>

          {/* Editors Pick */}
          <div className='flex flex-col gap-4'>
            <PostNav title='EDITORS PICK' />
            <div className='flex flex-col gap-4 mt-8'>
              {editorsPick.slice(0, 2).map((item) => (
                <Link href={`/post/${item.id}`} key={item.id} passHref>
                  <div className="flex flex-col gap-2 shadow-md p-3 rounded-lg w-full">
                    <Image
                      src={item.image}
                      alt={item.headed}
                      width={600}
                      height={200}
                      priority
                      style={{ height: 'auto', maxWidth: '100%' }}
                      className="w-full h-[200px] object-cover rounded-lg"
                    />
                    <h1 className='text-xl font-semibold  hover:text-green-500 cursor-pointer'>{item.headed}</h1>
                    <p>{item.published}</p>
                    <p>{item.name}</p>


                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Books (Trending) */}
          <div className='flex flex-col gap-4'>
            <PostNav title='BOOKS' />
            <div className='flex flex-col gap-5 mt-8'>
              {trending.slice(0, 5).map((item) => (
                <Link key={item.id} href={`/post/${item.id}`}>
                  <div className='flex flex-row gap-2 shadow-md shadow-green-50 p-3 rounded-lg w-full cursor-pointer'>
                    <Image
                      src={item.image || '/r10.jpg'}
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

          {/* Popular */}
          <div className='flex flex-col gap-4'>
            <PostNav title='POPULAR' />

            <div className='flex flex-col gap-4 mt-8'>
              {popular.slice(0, 2).map((item) => (
                <Link key={item.id} href={`/post/${item.id}`}>
                  <div className='flex flex-col gap-2 shadow-md p-3 rounded-lg w-full cursor-pointer'>
                    <Image
                      src={item.image || '/r7.jpg'}
                      alt={item.headed}
                      width={600}
                      height={200}
                      priority
                      style={{ height: 'auto', maxWidth: '100%' }}
                      className='w-[100%] xl:w-[500px] h-[200px] object-cover rounded-lg'
                    />
                    <h1 className='text-xl font-semibold  hover:text-green-500 cursor-pointer'>{item.headed}</h1>
                    <p className='text-sm text-gray-800'>{item.published}</p>
                    <p className='text-sm text-gray-800'>{item.name}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Post;
