'use client'

import { AppDispatch } from '@/redux/store';
import { getAllBlogs } from '@/services/client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { MdArrowOutward } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
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
        <section className="py-20 md:px-16 px-5 bg-[#143755]">
            <div className="flex md:flex-row flex-col md:justify-between justify-center items-start">
                <div>
                    <div className='flex md:justify-start justify-center items-center mb-5'>
                        <div className='h-4 w-3 bg-[#E09F1F] mr-2'></div>
                        <h2 className="text-md font-bold text-center uppercase text-white">magazine</h2>
                        <div className='h-4 w-3 bg-[#E09F1F] ml-2'></div>
                    </div>
                    <p className="md:text-2xl text-xl text-white uppercase font-[700] md:text-start text-center">Interior Design Insights</p>
                </div>
                <div className='md:w-1/3 w-full'>
                    <p className='text-[#D0D0D0] md:text-start text-center'>Read about the latest news, trends and updates on commercial interior design."</p>
                </div>
            </div>

            <Swiper
                modules={[Autoplay]}
                spaceBetween={30}
                // slidesPerView={3}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                loop={true}
                className="mt-20 mb-10"
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 3,
                    },
                }}
            >
                {blogs.map((blog: Blog) => (
                    <SwiperSlide key={blog._id}>
                        <div className="px-4">
                            <div className="relative md:w-[90%] w-full md:h-80 h-64 bg-gray-300 rounded-lg mb-4">
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
                            <h3 className="md:text-xl text-lg font-semibold mb-4 uppercase text-white">{blog.title}</h3>
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
