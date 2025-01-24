'use client'

import { AppDispatch } from '@/redux/store';
import { getAllBlogs } from '@/services/client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { MdArrowOutward, MdKeyboardArrowRight } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Blog } from '@/interfaces/blog';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { formatDate } from '@/utils';

const Magazine: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { blogs } = useSelector((state: any) => state.blogs);

    useEffect(() => {
        dispatch(getAllBlogs());
    }, [dispatch]);

    return (
        <section className="py-20 px-16 bg-[#143755]">
            <div className="flex justify-between items-end">
                <div>
                    <div className='flex justify-start items-center mb-5'>
                        <div className='h-4 w-3 bg-[#E09F1F] mr-2'></div>
                        <h2 className="text-md font-bold text-center uppercase text-white">magazine</h2>
                        <div className='h-4 w-3 bg-[#E09F1F] ml-2'></div>
                    </div>
                    <p className="text-2xl text-white uppercase font-[700]">Interior Design Insights</p>
                </div>
                <div className='w-1/3'>
                    <p className='text-[#D0D0D0]'>We are passionate about delivering cutting-edge digital innovation, achieving remarkable results that we are proud of."</p>
                </div>
            </div>

            <Swiper
                modules={[Autoplay]}
                spaceBetween={30}
                slidesPerView={3}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                loop={true}
                className="mt-20 mb-10"
            >
                {blogs.map((blog: Blog, index: number) => (
                    <SwiperSlide key={blog._id}>
                        <div className="px-4">
                            <div className="relative w-[90%] h-80 bg-gray-300 rounded-lg mb-4">
                                <Image 
                                    src={blog.thumbnail}
                                    alt="Blog Image" 
                                    layout="fill" 
                                    objectFit="cover" 
                                    className='rounded-lg'
                                />
                            </div>
                            <div className='flex text-sm text-[#B8B8B8]'>
                                <p className="text-gray-500 mr-2">Latest Blogs</p>
                                <p className="text-gray-500">
                                    {formatDate(blog.dateOfPublish)}
                                </p>
                            </div>
                            <h3 className="text-xl font-semibold mb-4 uppercase text-white">{blog.title}</h3>
                            <Link 
                                href={blog.linkToBlog}
                                target="_blank"
                                className="text-[#E5E5E5] text-sm flex items-center my-5"
                            >
                                Read more
                                <MdArrowOutward className='text-2xl ml-2'/>
                            </Link>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default Magazine;
