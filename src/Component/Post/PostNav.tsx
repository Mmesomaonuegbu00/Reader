'use client';
import React from 'react'




const PostNav = ({ title }: { title: string }) => (
    <p className="uppercase font-semibold text-gray-600 hover:text-green-500 cursor-pointer underline decoration-2 decoration-green-500 underline-offset-4  text-sm" >
      {title}
    </p>
  );
  

export default PostNav
