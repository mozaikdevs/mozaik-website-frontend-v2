'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '@/redux/store';
import { getAllProjects } from '@/services/client';
import { Project } from '@/interfaces/project';
import { formatDate } from '@/utils';
import { useRouter } from 'next/navigation';


const ProjectSection: React.FC = () => {
    
    const dispatch = useDispatch<AppDispatch>();
    const router = useRouter();
    const { projects, loading } = useSelector((state: any) => state.projects);
    const [visibleCount, setVisibleCount] = useState(3);
    const projectsToShow = projects.slice(0, visibleCount);
    const hasMore = visibleCount < projects.length;

    const handleProjectClick = (projectId: string) => {
        const params = new URLSearchParams({
            id: projectId
        });
        router.push(`/portofolio/project-details?${params.toString()}`);
    };

    const loadMore = () => {
        setVisibleCount(prev => Math.min(prev + 3, projects.length));
    };

    useEffect(() => {
        dispatch(getAllProjects());
    },[dispatch]);

    return (
        <section className='bg-[#141111] px-8 py-14'>
            <h2 className='text-sm text-center redex uppercase mb-5 font-semibold text-white'>Project</h2>
            <h3 className='md:w-1/4 w-full mx-auto text-2xl text-center uppercase font-[800] mb-20 text-white'>We design and carry out your projects</h3>
            {loading ? (
            Array.from({ length: 3 }).map((_, index) => (
                <SkeletonProjectCard key={index} />
            ))
            ) : (
            projectsToShow.map((project: Project) => (
                <div 
                    key={project._id} 
                    className='flex flex-col mx-auto md:w-2/3 w-full mb-20 cursor-pointer'
                    onClick={() => handleProjectClick(project._id)}
                >
                    <div className='relative md:h-[500px] h-[300px] w-full rounded-lg'>
                        <Image
                            src={project.thumbnailAfter}
                            alt={project.name}
                            className='rounded-lg'
                            fill
                        />
                    </div>
                    <h4 className='uppercase mt-4 font-semibold text-white'>{project.name}</h4>
                    <div className='grid md:flex md:justify-start mt-4 md:space-x-44 space-x-0 md:space-y-0 space-y-3 uppercase text-xs md:flex-row flex-col'>
                        <div className='md:col-span-1'>
                            <p className='text-[#9E9E9E]'>Client</p>
                            <p className='text-white mt-3'>{project.clientId.name}</p>
                        </div>
                        <div className='md:col-span-1 grid grid-cols-2 gap-4 md:flex md:space-x-44'>
                            <div>
                                <p className='text-[#9E9E9E]'>Date</p>
                                <p className='text-white mt-3'>{formatDate(project.createdAt)}</p>
                            </div>
                            <div>
                                <p className='text-[#9E9E9E]'>Area</p>
                                <p className='text-white mt-3'>{project.areaSize} <span className='lowercase'>{project.areaUnit}</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            )))}
            {hasMore && (
                <button 
                    onClick={loadMore}
                    className='text-center text-sm mx-auto flex flex-col items-center text-white font-bold uppercase mt-36'
                >
                    Scroll for more
                    <div className='w-[35px] h-[35px] relative'>
                        <Image
                            src='/icons/scroll-white.svg'
                            alt='Scroll'
                            fill
                        />
                    </div>
                </button>
            )}
        </section>
    );
};

const SkeletonProjectCard: React.FC = () => {
    return (
      <div className='flex flex-col mx-auto w-1/2 mb-20 cursor-pointer animate-pulse'>
        <div className='relative h-[400px] w-full rounded-lg bg-gray-300'></div>
        <h4 className='uppercase mt-4 font-semibold bg-gray-300 h-6 w-3/4 rounded'></h4>
        <div className='flex justify-start mt-4 space-x-44 uppercase text-xs'>
          <div>
            <p className='text-[#9E9E9E]'>Client</p>
            <p className='bg-gray-300 h-4 w-1/2 mt-3 rounded'></p>
          </div>
          <div>
            <p className='text-[#9E9E9E]'>Date</p>
            <p className='bg-gray-300 h-4 w-1/2 mt-3 rounded'></p>
          </div>
          <div>
            <p className='text-[#9E9E9E]'>Area</p>
            <p className='bg-gray-300 h-4 w-1/2 mt-3 rounded'></p>
          </div>
        </div>
      </div>
    );
};

export default ProjectSection;
