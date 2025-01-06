import React from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';

const Projects: React.FC = () => {
    return (
        <section className="">
            <div className="container mx-auto px-4">
                <div className='flex justify-center items-center mb-10'>
                    <div className='h-4 w-3 bg-[#E09F1F] mr-2'></div>
                    <h2 className="text-md font-bold text-center uppercase text-black">Our Projects</h2>
                    <div className='h-4 w-3 bg-[#E09F1F] ml-2'></div>
                </div>
                <p className="text-3xl text-black text-center mb-8 md:px-[20%] font-[600] uppercase redex">Explore Our Projects: Inspiring Spaces, Exceptional Experiences.</p>
                <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-7 gap-8 mt-24">
                    <div className="flex items-end md:col-span-4 bg-cover bg-center bg-black bg-opacity-50 h-80 rounded-xl" style={{ backgroundImage: 'url(/images/2.png)' }}>
                        <div className="w-1/2 h-20 m-5 py-3 px-5 flex flex-col justify-center bg-black bg-opacity-50 backdrop-blur-sm rounded-xl">
                            <div className="flex justify-between text-white">
                                <span className='uppercase font-medium text-sm text-white'>Outdoor Shade</span>
                                <span className='redex text-sm font-[300]'> 90 sqm</span>
                            </div>
                            <div className="text-white mt-2">
                                <p className='text-white text-xs font-[300]'> <span className='text-[#9E9E9E] mr-2'>Client</span>Institut Francais</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-end justify-end md:col-span-3 bg-cover bg-center bg-black bg-opacity-50 h-80 rounded-xl" style={{ backgroundImage: 'url(/images/3.png)' }}>
                        <div className="md:w-[80%] h-20 m-5 py-3 px-5 flex flex-col justify-center bg-black bg-opacity-50 backdrop-blur-sm rounded-xl">
                            <div className="md:w-full flex justify-between text-white">
                                <span className='md:w-[60%] uppercase font-medium text-sm text-white'>Christmas Bazaar & Lighting Ceremony</span>
                                <span className='md:w-[22%] redex text-sm font-[300]'> 1000 sqm</span>
                            </div>
                            <div className="text-white mt-2">
                                <p className='text-white text-xs font-[300]'> <span className='text-[#9E9E9E] mr-2'>Client</span>Radisson Blu Hotel & Convention Centre</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-end md:col-span-3 bg-cover bg-center bg-black bg-opacity-50 h-80 rounded-xl" style={{ backgroundImage: 'url(/images/4.png)' }}>
                        <div className="w-3/4 h-20 m-5 py-3 px-5 flex flex-col justify-center bg-black bg-opacity-50 backdrop-blur-sm rounded-xl">
                            <div className="flex justify-between text-white">
                                <span className='uppercase font-medium text-sm text-white'>Co-working Office Spaces</span>
                                <span className='redex text-sm font-[300]'> 25 sqm</span>
                            </div>
                            <div className="text-white mt-2">
                                <p className='text-white text-xs font-[300]'> <span className='text-[#9E9E9E] mr-2'>Client</span>BPN Rwanda</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-end justify-end md:col-span-4 bg-cover bg-center bg-black bg-opacity-50 h-80 rounded-xl" style={{ backgroundImage: 'url(/images/5.png)' }}>
                        <div className="w-2/3 h-20 m-5 py-3 px-5 flex flex-col justify-center bg-black bg-opacity-50 backdrop-blur-sm rounded-xl">
                            <div className="flex justify-between text-white">
                                <span className='uppercase font-medium text-sm text-white'>Simba Center (Supermarket)</span>
                                <span className='redex text-sm font-[300]'> 1 500 sqm</span>
                            </div>
                            <div className="text-white mt-2">
                                <p className='text-white text-xs font-[300]'> <span className='text-[#9E9E9E] mr-2'>Client</span>ERI Rwanda</p>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="flex items-center justify-between mx-auto mt-20 bg-[#E09F1F] hover:bg-blue-700 text-white font-[600] py-3 px-5 rounded-[8px]">
                    View all projects
                    <MdKeyboardArrowRight className='text-2xl ml-2' />
                </button>
                <div>
            </div>
            </div>
        </section>
    );
};

export default Projects;
