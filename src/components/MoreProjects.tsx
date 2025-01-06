import React from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';

const MoreProjects: React.FC = () => {
    return (
        <section className='py-20'>
            <h2 className="text-2xl text-black redex font-bold mb-3">More Projects</h2>
            <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-7 gap-8 mt-10">
                <div className="flex items-end md:col-span-4 bg-cover bg-center bg-black bg-opacity-50 h-80 rounded-xl" style={{ backgroundImage: 'url(/images/2.png)' }}>
                    <div className="w-1/2 h-20 m-5 py-3 px-5 flex flex-col justify-center bg-black bg-opacity-50 backdrop-blur-sm rounded-xl">
                        <div className="flex justify-between text-white">
                            <span className='uppercase font-bold text-sm redex text-white'>Outdoor Shade</span>
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
                            <span className='md:w-[60%] uppercase font-bold text-sm redex text-white'>Christmas Bazaar & Lighting Ceremony</span>
                            <span className='md:w-[22%] redex text-[#9E9E9E] text-sm font-[300]'> 1000 sqm</span>
                        </div>
                        <div className="text-white mt-2">
                            <p className='text-white text-xs font-[300]'> <span className='text-[#9E9E9E] mr-2'>Client</span>Radisson Blu Hotel & Convention Centre</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full flex justify-end'>
                <button className="flex items-center justify-between mt-8 bg-[#E09F1F] hover:bg-blue-700 text-white font-[600] py-3 px-5 rounded-[8px]">
                    View all projects
                    <MdKeyboardArrowRight className='text-2xl ml-2' />
                </button>
            </div>
        </section>
    );
};

export default MoreProjects;
