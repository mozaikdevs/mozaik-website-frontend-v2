'use client'
import React, { useEffect } from 'react';
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
    const { projects } = useSelector((state: any) => state.projects);

    const handleProjectClick = (projectId: string) => {
        const params = new URLSearchParams({
            id: projectId
        });
        router.push(`/portofolio/project-details?${params.toString()}`);
    };

    useEffect(() => {
        dispatch(getAllProjects());
    },[dispatch]);

    return (
        <section className='bg-[#141111] px-8 py-14'>
            <h2 className='text-sm text-center redex uppercase mb-5 font-semibold'>Project</h2>
            <h3 className='w-1/4 mx-auto text-2xl text-center uppercase font-[800] mb-20'>We design and carry out your projects</h3>
            {projects.map((project: Project) => (
                <div 
                    key={project._id} 
                    className='flex flex-col mx-auto w-1/2 mb-20 cursor-pointer'
                    onClick={() => handleProjectClick(project._id)}
                >
                    <div className='relative h-[400px] w-full rounded-lg'>
                        <Image
                            src={project.thumbnailAfter}
                            alt={project.name}
                            className='rounded-lg'
                            fill
                        />
                    </div>
                    <h4 className='uppercase mt-4 font-semibold'>{project.name}</h4>
                    <div className='flex justify-start mt-4 space-x-44 uppercase text-xs'>
                        <div>
                            <p className='text-[#9E9E9E]'>Client</p>
                            <p className='text-white mt-3'>{project.clientId.name}</p>
                        </div>
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
            ))}
            <button className='text-center text-sm mx-auto flex flex-col items-center text-white font-bold uppercase mt-36'>
                Scroll for more
                <div className='w-[35px] h-[35px] relative'>
                    <Image
                        src='/icons/scroll-white.svg'
                        alt='Scroll'
                        fill
                    />
                </div>
            </button>
        </section>
    );
};

export default ProjectSection;
