'use client'

import { AppDispatch } from '@/redux/store';
import { getAllProjects } from '@/services/client';
import React, { useEffect } from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';

const Projects: React.FC = () => {
    
    const dispatch = useDispatch<AppDispatch>();
    const allProjects = useSelector((state: any) => state.projects.projects);

    useEffect(() => {
        dispatch(getAllProjects());
    },[dispatch]);

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
                    <div className="flex items-end md:col-span-4 bg-cover bg-center bg-black bg-opacity-50 h-80 rounded-xl" style={{ backgroundImage: `url(${allProjects[0]?.thumbnailAfter})` }}>
                        <div className="w-1/2 h-20 m-5 py-3 px-5 flex flex-col justify-center bg-black bg-opacity-50 backdrop-blur-sm rounded-xl">
                            <div className="flex justify-between text-white">
                                <span className='uppercase font-medium text-sm text-white'>{allProjects[0]?.name}</span>
                                <span className='redex text-sm font-[300]'>{allProjects[0]?.areaSize} {allProjects[0]?.areaUnit}</span>
                            </div>
                            <div className="text-white mt-2">
                                <p className='text-white text-xs font-[300]'> <span className='text-[#9E9E9E] mr-2'>Client</span>{allProjects[0]?.clientId.name}</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-end justify-end md:col-span-3 bg-cover bg-center bg-black bg-opacity-50 h-80 rounded-xl" style={{ backgroundImage: `url(${allProjects[1]?.thumbnailAfter})` }}>
                        <div className="md:w-[80%] h-20 m-5 py-3 px-5 flex flex-col justify-center bg-black bg-opacity-50 backdrop-blur-sm rounded-xl">
                            <div className="md:w-full flex justify-between text-white">
                                <span className='md:w-[60%] uppercase font-medium text-sm text-white'>{allProjects[1]?.name}</span>
                                <span className='md:w-[22%] redex text-sm font-[300]'> {allProjects[1]?.areaSize} {allProjects[1]?.areaUnit}</span>
                            </div>
                            <div className="text-white mt-2">
                                <p className='text-white text-xs font-[300]'> <span className='text-[#9E9E9E] mr-2'>Client</span>{allProjects[2]?.clientId.name}</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-end md:col-span-3 bg-cover bg-center bg-black bg-opacity-50 h-80 rounded-xl" style={{ backgroundImage: `url(${allProjects[2]?.thumbnailAfter})` }}>
                        <div className="w-3/4 h-20 m-5 py-3 px-5 flex flex-col justify-center bg-black bg-opacity-50 backdrop-blur-sm rounded-xl">
                            <div className="flex justify-between text-white">
                                <span className='uppercase font-medium text-sm text-white'>{allProjects[2]?.name}</span>
                                <span className='redex text-sm font-[300]'> {allProjects[2]?.areaSize} {allProjects[2]?.areaUnit}</span>
                            </div>
                            <div className="text-white mt-2">
                                <p className='text-white text-xs font-[300]'> <span className='text-[#9E9E9E] mr-2'>Client</span>{allProjects[2]?.clientId.name}</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-end justify-end md:col-span-4 bg-cover bg-center bg-black bg-opacity-50 h-80 rounded-xl" style={{ backgroundImage: `url(${allProjects[3]?.thumbnailAfter})` }}>
                        <div className="w-2/3 h-20 m-5 py-3 px-5 flex flex-col justify-center bg-black bg-opacity-50 backdrop-blur-sm rounded-xl">
                            <div className="flex justify-between text-white">
                                <span className='uppercase font-medium text-sm text-white'>{allProjects[3]?.name}</span>
                                <span className='redex text-sm font-[300]'> {allProjects[3]?.areaSize} {allProjects[3]?.areaUnit}</span>
                            </div>
                            <div className="text-white mt-2">
                                <p className='text-white text-xs font-[300]'> <span className='text-[#9E9E9E] mr-2'>Client</span>{allProjects[3]?.clientId.name}</p>
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
