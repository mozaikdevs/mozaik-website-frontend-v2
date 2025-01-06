import Image from 'next/image';
import React from 'react';
import { MdArrowOutward, MdKeyboardArrowRight } from 'react-icons/md';

const Magazine: React.FC = () => {
    const blogs = [
        {   
            url: '/images/7.png',
            date:'September 26,2024',
            title: 'Transforming Spaces: Top Trends in Modern Interior Design',
        },
        {
            url: '/images/7.png',
            date:'September 26,2024',
            title: 'Transforming Spaces: Top Trends in Modern Interior Design',
        },
        {
            url: '/images/7.png',
            date:'September 26,2024',
            title: 'Transforming Spaces: Top Trends in Modern Interior Design',
        }
    ];

    return (
        <section className=" py-20 px-16 bg-[#143755]">
            <div className="flex justify-between items-end">
                <div>
                    <div className='flex justify-start items-center mb-5'>
                        <div className='h-4 w-3 bg-[#E09F1F] mr-2'></div>
                        <h2 className="text-md font-bold text-center uppercase text-white">magazine</h2>
                        <div className='h-4 w-3 bg-[#E09F1F] ml-2'></div>
                    </div>
                    <p className="text-2xl text-white uppercase font-[700]">Interior Design Insights</p>
                </div>
                <div className='w-1/2'>
                    <p className='text-[#D0D0D0]'>We are passionate about delivering cutting-edge digital innovation, achieving remarkable results that we are proud of."</p>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-20 mt-20 mb-10 px-10">
                {blogs.map((card, index) => (
                    <div key={index} className="rounded-lg">
                        <div className="relative w-[90%] h-80 bg-gray-300 rounded-lg mb-4">
                            <Image 
                                src={card.url} 
                                alt="Blog Image" 
                                layout="fill" 
                                objectFit="cover" 
                                className='rounded-lg'
                            />
                        </div>
                        <div className='flex text-sm text-[#B8B8B8]'>
                            <p className="text-gray-500 mr-2">Latest Blogs</p>
                            <p className="text-gray-500">{card.date}</p>
                        </div>
                        <h2 className="text-white mb-2 uppercase text-md font-semibold my-5">{card.title}</h2>
                        <button className="text-[#E5E5E5] text-sm flex items-center my-5">
                            Read More 
                            <MdArrowOutward className='text-xl ml-2' />
                        </button>
                    </div>
                ))}
            </div>
            <button className="flex items-center justify-between mx-auto bg-[#E09F1F] hover:bg-blue-700 text-white font-[500] py-3 px-8 rounded-[8px]">
                view all articles
                <MdKeyboardArrowRight className='text-2xl ml-2' />
            </button>
        </section>
    );
};

export default Magazine;
