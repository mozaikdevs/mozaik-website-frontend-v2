import DefaultLayout from '@/components/DefaultLayout';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';

const Services: React.FC = () => {
    return (
        <DefaultLayout>
            <div className='min-h-screen bg-white md:px-16 px-5'>
                <section className="flex justify-between items-end bg-[#FAFAFA] rounded-xl p-12 md:flex-row flex-col">
                    <div>
                        <div className='flex justify-start items-center mb-10'>
                            <div className='h-4 w-3 bg-[#E09F1F] mr-2'></div>
                            <h2 className="text-md font-bold text-center uppercase text-black redex">OUR SERVICES</h2>
                            <div className='h-4 w-3 bg-[#E09F1F] ml-2'></div>
                        </div>
                        <p className="md:text-2xl text-xl text-black uppercase font-[200] redex"><span className='font-[600]'>transforming </span>Spaces<span className='font-[700]'> with</span></p>
                        <p className="md:text-2xl text-xl text-black uppercase font-[200] redex">Innovative Design<span className='font-[600]'> Solutions</span></p>
                    </div>
                    <div className='md:w-1/2 w-full'>
                        <p className='text-[#000] md:text-base text-sm outfit'>We provide comprehensive interior design services, including Design Development & Space Planning, Finishing & Partitioning Work, and Furniture & Decorations, to transform spaces with style and innovation.
                        </p>
                    </div>
                </section>
                <section id='design' className="flex justify-between items-center md:p-12 p-0 md:mx-16 mx-0 my-20 md:flex-row flex-col">
                    <div className='md:w-1/2 w-full flex justify-between md:mb-0 mb-20'>
                        <div className="w-[45%] md:h-[400px] h-[300px] rounded-xl relative">
                            <Image
                                src="/images/10.png" 
                                alt="Description" 
                                className="rounded-xl" 
                                fill
                            />
                        </div>
                        <div className="w-[45%] md:h-[400px] h-[300px] rounded-xl relative md:ml-4 ml-0">
                            <Image
                                src="/images/11.png" 
                                alt="Description" 
                                className="rounded-xl" 
                                fill
                            />
                        </div>
                    </div>
                    <div className="md:w-[45%] w-full md:pr-20 pr-0">
                        <h2 className="md:w-2/3 w-full md:text-xl text-lg font-bold uppercase text-black mb-4">Design Development and  Space Planning</h2>
                        <p className="text-[#4C4B4B] md:text-base text-sm mb-4 text-justify">We have a dedicated team that can transform any space, big
                            or small, into a perfect working environment for you. We
                            consider your specific needs and focus on key elements
                            such as comfort, lighting, and sound. Once we have a good
                            idea of what you want and the space constraints, we propose
                            customized solutions. 

                        </p>
                        <p className="text-[#4C4B4B] md:text-base text-sm text-justify">To help you visualize the final result,
                            we create 2D or 3D plans. These plans allow us to identify
                            and solve potential issues before they arise, saving time and
                            increasing efficiency in our work."
                        </p>
                        <Link href="/#contact" className="inline-flex items-center mt-10 capitalize justify-between bg-[#E09F1F] hover:bg-[#ae7c18] text-white font-[600] py-3 px-5 rounded-[8px]">
                            Request free consultation
                            <MdKeyboardArrowRight className='text-2xl ml-2' />
                        </Link>
                    </div>
                </section>
                <section id="finishing" className="flex md:flex-row-reverse flex-col justify-between items-center md:p-12 p-0 md:mx-16 mx-0 my-20">
                    <div className='md:w-1/2 w-full flex justify-between'>
                        <div className="w-[45%] md:h-[400px] h-[300px] rounded-xl relative">
                            <Image
                                src="/images/12.png" 
                                alt="Description" 
                                className="rounded-xl" 
                                fill
                            />
                        </div>
                        <div className="w-[45%] md:h-[400px] h-[300px] rounded-xl relative md:ml-4 ml-0">
                            <Image 
                                src="/images/18.jpg" 
                                alt="Description" 
                                className="rounded-xl object-cover" 
                                fill
                            />
                        </div>
                    </div>
                    <div className="md:w-[45%] w-full md:pr-10 pr-0 md:mt-0 mt-14">
                        <h2 className="md:w-1/2 w-full md:text-xl text-lg font-bold uppercase text-black mb-4">Finishing and Partitioning Work</h2>
                        <p className="text-[#4C4B4B] md:text-base text-sm mb-4 text-justify">"From the beginning of each project, we work with you to create the ideal atmosphere for your new space. We guide you on the choice of colors, materials, flooring type, acoustics, lighting, and layout – it's our specialty. Moreover, we are capable of managing projects of all sizes, overseeing
                        every aspect of the construction."
                        </p>
                        <Link href="/#contact" className="inline-flex items-center mt-10 capitalize justify-between bg-[#E09F1F] hover:bg-[#ae7c18] text-white font-[600] py-3 px-5 rounded-[8px]">
                            Request free consultation
                            <MdKeyboardArrowRight className='text-2xl ml-2' />
                        </Link>
                    </div>
                </section>
                <section id="furniture" className="flex justify-between items-center md:p-12 p-0 md:mx-16 mx-0 md:py-20 py-0 md:flex-row flex-col">
                    <div className='md:w-1/2 w-full flex justify-between'>
                        <div className="w-[45%] md:h-[400px] h-[300px] rounded-xl relative">
                            <Image
                                src="/images/19.JPG" 
                                alt="Description" 
                                className="rounded-xl object-cover" 
                                fill
                            />
                        </div>
                        <div className="w-[45%] md:h-[400px] h-[300px] rounded-xl relative md:ml-4 ml-0">
                            <Image 
                                src="/images/20.JPG" 
                                alt="Description" 
                                className="rounded-xl object-cover" 
                                fill
                            />
                        </div>
                    </div>
                    <div className="md:w-[45%] w-full md:pr-20 pr-0 md:my-0 my-10">
                        <h2 className="md:w-1/2 w-full md:text-xl text-lg font-bold uppercase text-black mb-4">Furniture and Decorations</h2>
                        <p className="text-[#4C4B4B] md:text-base text-sm mb-4 text-justify">"A key stage in the arrangement, furniture brings life to a space. Designing furniture is not just about choosing a desk from a vendor. It's much more than that. It's about thinking about spaces as a whole to serve a vision, usage, and functionality objectives, as well as aesthetics and comfort."
                        </p>
                        <Link href="/#contact" className="inline-flex items-center mt-10 capitalize bg-[#E09F1F] hover:bg-[#ae7c18] text-white font-[600] py-3 px-5 rounded-[8px]">
                            Request free consultation
                            <MdKeyboardArrowRight className='text-2xl ml-2' />
                        </Link>
                    </div>
                </section>
            </div>
        </DefaultLayout>
    );
};

export default Services;
