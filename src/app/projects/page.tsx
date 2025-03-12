'use client'

import AllProjects from '@/components/AllProjects';
import DefaultLayout from '@/components/DefaultLayout';
import { AppDispatch, RootState } from '@/redux/store';
import { getAllProjects } from '@/services/client';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const ProjectsPage: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const {projects, loading} = useSelector((state: RootState) => state.projects);

    useEffect(() => {
        dispatch(getAllProjects());
    },[dispatch]);

    return (
        <DefaultLayout>
            <div className="bg-white min-h-screen md:px-16 px-5">
                <section className="flex justify-between items-end bg-[#FAFAFA] rounded-xl p-10 md:flex-row flex-col">
                    <div>
                        <div className='flex justify-start items-center mb-10'>
                            <div className='h-4 w-3 bg-[#E09F1F] mr-2'></div>
                            <h2 className="text-md font-bold text-center uppercase text-black redex">OUR PROJECTS</h2>
                            <div className='h-4 w-3 bg-[#E09F1F] ml-2'></div>
                        </div>
                        <p className="md:text-2xl text-xl text-black uppercase font-[300]">Experience from <span className='font-[700]'>over {projects.length}+ </span>projects</p>
                        <p className="text-2xl text-black uppercase"><span className='font-[700]'>for your</span> company</p>
                    </div>
                    <div className='md:w-1/2 w-full md:mt-0 mt-5'>
                        <p className='text-[#4C4B4B] outfit'>From finishing and partitioning to bespoke furniture and decor, our team combines style and innovation to create unique, transformative environments that reflect our clients' vision and lifestyle."</p>
                    </div>
                </section>
                <AllProjects projects={projects} loading={loading}/>
            </div>
        </DefaultLayout>
    );
};

export default ProjectsPage;
