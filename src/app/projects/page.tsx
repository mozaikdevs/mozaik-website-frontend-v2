'use client'

import AllProjects from '@/components/AllProjects';
import DefaultLayout from '@/components/DefaultLayout';
import { AppDispatch } from '@/redux/store';
import { getAllProjects } from '@/services/client';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const ProjectsPage: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const allProjects = useSelector((state: any) => state.projects.projects);

    useEffect(() => {
        dispatch(getAllProjects());
    },[dispatch]);

    return (
        <DefaultLayout>
            <div className="bg-white min-h-screen px-16">
                <section className="flex justify-between items-end bg-[#FAFAFA] rounded-xl p-10">
                    <div>
                        <div className='flex justify-start items-center mb-10'>
                            <div className='h-4 w-3 bg-[#E09F1F] mr-2'></div>
                            <h2 className="text-md font-bold text-center uppercase text-black redex">OUR PROJECTS</h2>
                            <div className='h-4 w-3 bg-[#E09F1F] ml-2'></div>
                        </div>
                        <p className="text-2xl text-black uppercase font-[300]">Experience from <span className='font-[700]'>over 80+ </span>projects</p>
                        <p className="text-2xl text-black uppercase"><span className='font-[700]'>for your</span> company</p>
                    </div>
                    <div className='w-1/2'>
                        <p className='text-[#4C4B4B]'>From finishing and partitioning to bespoke furniture and decor, our team combines style and innovation to create unique, transformative environments that reflect our clients' vision and lifestyle."</p>
                    </div>
                </section>
                <AllProjects projects={allProjects}/>
            </div>
        </DefaultLayout>
    );
};

export default ProjectsPage;
