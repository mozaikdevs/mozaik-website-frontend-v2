'use client'
import DefaultLayout from '@/components/DefaultLayout';
import MoreProjects from '@/components/MoreProjects';
import { Project } from '@/interfaces/project';
import { AppDispatch } from '@/redux/store';
import { getAllProjects } from '@/services/client';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const ProjectDetails: React.FC = () => {
    const searchParams = useSearchParams();
    const dispatch = useDispatch<AppDispatch>();
    const projectId = searchParams.get('id');
    const project = useSelector((state: any) => state.projects.projects.find((project: Project) => project._id === projectId));
    
    useEffect(() => {
        dispatch(getAllProjects());
    },[dispatch]);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (project) {
            setLoading(false);
        }
    }, [project]);

    if (loading) {
        return <div className="text-white">Loading...</div>;
    }
    return (
        <DefaultLayout>
            <div className='bg-white min-h-screen py-8 md:px-20 px-0'>
                <section className='relative'>
                    <div className="flex md:rounded-xl rounded-none md:h-[400px] h-[800px] md:flex-row flex-col">
                        <div className="relative md:w-1/2 w-full h-full rounded-xl">
                            <img src={project?.thumbnailBefore} alt="Before" className="w-full h-full grayscale md:rounded-l-xl rounded-none" />
                            <div className="absolute top-7 left-7 bg-white text-black px-5 py-2 rounded-xl redex font-bold">BEFORE</div>
                        </div>
                        <div className="relative md:w-1/2 w-full h-full rounded-xl">
                            <img src={project?.thumbnailAfter} alt="After" className="w-full h-full md:rounded-r-xl rounded-none" />
                            <div className="absolute top-7 left-7 bg-white text-black px-5 py-2 rounded-xl redex font-bold">AFTER</div>
                        </div>
                    </div>
                    <div className="absolute md:bottom-4 left-4 bottom-[27rem] md:w-2/3 w-[90%] p-5 rounded-xl grid md:grid-cols-4 grid-cols-2 md:gap-y-0 gap-y-4 mt-4 bg-white">
                        <div className="">
                            <div className="text-[#9E9E9E] uppercase text-sm">project</div>
                            <div className="font-[500] text-sm mt-2 text-black redex uppercase">{project?.name}</div>
                        </div>
                        <div className="">
                            <div className="text-[#9E9E9E] uppercase text-sm">Client</div>
                            <div className="font-[500] text-sm mt-2 text-black redex uppercase">{project?.clientId.name}</div>
                        </div>
                        <div className="">
                            <div className="text-[#9E9E9E] uppercase text-sm">project type</div>
                            <div className="font-[500] text-sm mt-2 text-black redex uppercase">{project?.type}</div>
                        </div>
                        <div className="">
                            <div className="text-[#9E9E9E] uppercase text-sm">area</div>
                            <div className="font-[500] text-sm mt-2 text-black redex">{project?.areaSize} {project?.areaUnit}</div>
                        </div>
                    </div>

                </section>
                <section className='flex md:justify-between md:items-center my-20 md:px-0 px-5 md:flex-row flex-col items-start'>
                    <div className="flex flex-col">
                        <div className="text-black uppercase text-xl font-[400]">Project</div>
                        <div className="text-black uppercase text-xl font-bold">Description</div>
                    </div>
                    <p className="md:w-[60%] w-full text-[#474646] text-sm md:mt-0 mt-5">
                    {project?.description}
                    </p>
                </section>
                <section className='md:p-0 p-5'>
                    <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
                        <div className="flex flex-col gap-4">
                            <Image src={project.images[0]} alt="Gallery Image 1" width={200} height={180} className="w-full h-full object-cover rounded-xl" />
                            <Image src={project.images[1]} alt="Gallery Image 2" width={200} height={180} className="w-full h-full object-cover rounded-xl" />
                        </div>
                        <div className="flex flex-col gap-4">
                            <Image src={project.images[2]} alt="Gallery Image 3" width={200} height={180} className="w-full h-full object-cover rounded-xl" />
                            <Image src={project.images[3]} alt="Gallery Image 4" width={200} height={180} className="w-full h-full object-cover rounded-xl" />
                        </div>
                        <div className="flex">
                            <Image src={project.images[4]} alt="Gallery Image 5" width={200} height={360} className="w-full h-full object-cover rounded-xl" />
                        </div>
                    </div>
                </section>
                <MoreProjects currentProjectId={projectId || ''}/>
            </div>
        </DefaultLayout>
    );
};

export default ProjectDetails;
