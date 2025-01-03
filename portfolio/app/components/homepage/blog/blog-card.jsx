"use client"

// @flow strict
import { timeConverter } from '@/utils/time-converter';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import { BsHeartFill } from 'react-icons/bs';
import { FaCommentAlt } from 'react-icons/fa';

const extractImageUrl = (htmlContent) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlContent, 'text/html');
  const figure = doc.querySelector('figure img');

  return figure ? figure.src : null;
};

function BlogCard({ blog }) {

  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    if (blog[0].description.htmlContent) {
      const extractedUrl = extractImageUrl(blog.htmlContent);
      setImageUrl(extractedUrl);
    }
  }, [blog]);

  // const extractDate = (datetime) => {
  //   return datetime.split(' ')[0];
  // };
  
  // // Example usage
  // const datetimeString = blog[0]?.pubDate;
  // const date = extractDate(datetimeString);

  return (
    <div className="border border-[#1d293a] hover:border-[#464c6a] transition-all duration-500 bg-[#1b203e] rounded-lg relative group"
    >
      <div className="h-44 lg:h-52 w-auto cursor-pointer overflow-hidden rounded-t-lg">
        <Image
          src={imageUrl || "/Fine-tuning-stable-diffusion.png"} 
          height={1080}
          width={1920}
          alt=""
          className='h-full w-full group-hover:scale-110 transition-all duration-300'
        />
      </div>
      <div className="p-2 sm:p-3 flex flex-col">
        <div className="flex justify-between items-center text-[#16f2b3] text-sm">
          <div className="flex items-center gap-3">
            {/* <p className="flex items-center gap-1">
              <BsHeartFill />
              <span>{blog.public_reactions_count}</span>
            </p>
            {blog.comments_count > 0 &&
              <p className="flex items-center gap-1">
                <FaCommentAlt />
                <span>{blog.comments_count}</span>
              </p>
            } */}
          </div>
        </div>
        {/* <p className='text-sm lg:text-base text-[#d3d8e8] pb-3 lg:pb-6 line-clamp-3'>
          {blog[0].author}
        </p> */}
        <Link target='_blank' href={blog[0].link}>
          <p className='my-2 lg:my-3 cursor-pointer text-lg text-white sm:text-xl font-medium hover:text-violet-500'>
            {blog[0]?.title}
          </p>
        </Link>
        <p className='mb-2 text-sm text-[#16f2b3]'>
          Published date: {blog[0]?.pubDate}
        </p>
        
        {/* <div className="">
          <Link target='_blank' href={blog.url}>
            <button className='bg-violet-500 text-white px-3 py-1.5 rounded-full text-xs'>
              Read More
            </button>
          </Link>
        </div> */}
      </div>
    </div>
  );
};

export default BlogCard;