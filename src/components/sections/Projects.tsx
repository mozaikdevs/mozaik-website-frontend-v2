'use client'

import { AppDispatch } from '@/redux/store';
import { getAllProjects } from '@/services/client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';

const Projects: React.FC = () => {
    
    const dispatch = useDispatch<AppDispatch>();
    const router = useRouter();
    const { projects, loading } = useSelector((state: any) => state.projects);

    useEffect(() => {
        dispatch(getAllProjects());
    },[dispatch]);

    const handleProjectClick = (projectId: string) => {
        const params = new URLSearchParams({
            id: projectId
        });
        router.push(`/project-details?${params.toString()}`);
    };

    return (
        <section className="">
            <div className="container mx-auto px-4">
                <div className='flex justify-center items-center mb-10'>
                    <div className='h-4 w-3 bg-[#E09F1F] mr-2'></div>
                    <h2 className="text-md font-bold text-center uppercase text-black">Our Projects</h2>
                    <div className='h-4 w-3 bg-[#E09F1F] ml-2'></div>
                </div>
                <p className="md:text-3xl text-xl text-black text-center mb-8 md:px-[20%] font-[600] uppercase redex">Explore Our Projects: Inspiring Spaces, Exceptional Experiences.</p>
                {loading ? (
                Array.from({ length: 2 }).map((_, index) => (
                    <SkeletonProjectCard key={index} />
                ))
                ) : (
                <div className="md:w-[90%] w-full mx-auto grid grid-cols-1 md:grid-cols-7 gap-8 mt-24">
                    <div 
                        className="flex items-end md:col-span-4 bg-cover bg-center bg-black bg-opacity-50 md:h-80 h-64 rounded-xl cursor-pointer"
                        style={{ backgroundImage: `url(${projects[0]?.thumbnailAfter})` }}
                        onClick={() => handleProjectClick(projects[0]?._id)}
                    >
                        <div className="md:w-3/4 w-full h-20 m-5 py-3 px-5 flex flex-col justify-center bg-black bg-opacity-50 backdrop-blur-sm rounded-xl cursor-pointer">
                            <div className="flex justify-between text-white">
                                <span className='uppercase font-medium text-sm text-white'>{projects[0]?.name}</span>
                                <span className='redex text-sm font-[300]'>{projects[0]?.areaSize} {projects[0]?.areaUnit}</span>
                            </div>
                            <div className="text-white mt-2">
                                <p className='text-white text-xs font-[300]'> <span className='text-[#9E9E9E] mr-2'>Client</span>{projects[0]?.clientId.name}</p>
                            </div>
                        </div>
                    </div>
                    <div 
                        className="flex items-end justify-end md:col-span-3 bg-cover bg-center bg-black bg-opacity-50 md:h-80 h-64 rounded-xl cursor-pointer" 
                        style={{ backgroundImage: `url(${projects[1]?.thumbnailAfter})` }}
                        onClick={() => handleProjectClick(projects[1]?._id)}    
                    >
                        <div className="md:w-[80%] w-full h-20 m-5 py-3 px-5 flex flex-col justify-center bg-black bg-opacity-50 backdrop-blur-sm rounded-xl cursor-pointer">
                            <div className="md:w-full flex justify-between text-white">
                                <span className='md:w-[60%] uppercase font-medium text-sm text-white'>{projects[1]?.name}</span>
                                <span className='md:w-[22%] redex text-sm font-[300]'> {projects[1]?.areaSize} {projects[1]?.areaUnit}</span>
                            </div>
                            <div className="text-white mt-2">
                                <p className='text-white text-xs font-[300]'> <span className='text-[#9E9E9E] mr-2'>Client</span>{projects[2]?.clientId.name}</p>
                            </div>
                        </div>
                    </div>
                    <div 
                        className="flex items-end md:col-span-3 bg-cover bg-center bg-black bg-opacity-50 md:h-80 h-64 rounded-xl" 
                        style={{ backgroundImage: `url(${projects[2]?.thumbnailAfter})` }}
                        onClick={() => handleProjectClick(projects[2]?._id)}    
                    >
                        <div className="md:w-3/4 w-full h-20 m-5 py-3 px-5 flex flex-col justify-center bg-black bg-opacity-50 backdrop-blur-sm rounded-xl">
                            <div className="flex justify-between text-white">
                                <span className='uppercase font-medium text-sm text-white'>{projects[2]?.name}</span>
                                <span className='redex text-sm font-[300]'> {projects[2]?.areaSize} {projects[2]?.areaUnit}</span>
                            </div>
                            <div className="text-white mt-2">
                                <p className='text-white text-xs font-[300]'> <span className='text-[#9E9E9E] mr-2'>Client</span>{projects[2]?.clientId.name}</p>
                            </div>
                        </div>
                    </div>
                    <div 
                        className="flex items-end justify-end md:col-span-4 bg-cover bg-center bg-black bg-opacity-50 md:h-80 h-64 rounded-xl" 
                        style={{ backgroundImage: `url(${projects[3]?.thumbnailAfter})` }}
                        onClick={() => handleProjectClick(projects[3]?._id)}    
                    >
                        <div className="md:w-3/4 w-full h-20 m-5 py-3 px-5 flex flex-col justify-center bg-black bg-opacity-50 backdrop-blur-sm rounded-xl">
                            <div className="flex justify-between text-white">
                                <span className='uppercase font-medium text-sm text-white'>{projects[3]?.name}</span>
                                <span className='redex text-sm font-[300]'> {projects[3]?.areaSize} {projects[3]?.areaUnit}</span>
                            </div>
                            <div className="text-white mt-2">
                                <p className='text-white text-xs font-[300]'> <span className='text-[#9E9E9E] mr-2'>Client</span>{projects[3]?.clientId.name}</p>
                            </div>
                        </div>
                    </div>
                </div>
                )}
                <div className='w-full flex justify-center'>
                    <Link 
                        href='/projects' 
                        className="flex items-center justify-between mt-8 bg-[#E09F1F] hover:bg-[#ae7c18] text-white font-[600] py-3 px-5 rounded-[8px]"
                    >
                        View all projects
                        <MdKeyboardArrowRight className='text-2xl ml-2' />
                    </Link>
                </div>
                <div>
            </div>
            </div>
        </section>
    );
};
const SkeletonProjectCard: React.FC = () => {
    return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 m-5">
      {Array.from({ length: 2 }).map((_, index) => (
        <div key={index} className="flex items-end bg-gray-300 md:h-80 h-64 rounded-xl animate-pulse">
        <div className="md:w-3/4 w-full h-20 m-5 py-3 px-5 flex flex-col justify-center bg-gray-400 rounded-xl">
          <div className="flex justify-between text-gray-500">
            <span className='bg-gray-400 h-4 w-1/2'></span>
            <span className='bg-gray-400 h-4 w-1/4'></span>
          </div>
          <div className="mt-2">
            <p className='bg-gray-400 h-4 w-3/4'></p>
          </div>
        </div>
        </div>
      ))}
    </div>
    );
  };

export default Projects;
