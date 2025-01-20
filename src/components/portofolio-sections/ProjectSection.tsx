import React from 'react';
import Image from 'next/image';

interface Project {
    id: number;
    imageUrl: string;
    title: string;
    details: {
        client: string;
        date: string;
        area: string;
    };
}

const projects: Project[] = [
    {
        id: 1,
        imageUrl: '/images/1.jpg',
        title: 'ProConceptualization and Implementation',
        details: {
            client: 'Detail 1',
            date: 'Description 1',
            area: 'Area 1'
        },
    },
    // Add more projects as needed
];

const ProjectSection: React.FC = () => {
    return (
        <section className='bg-[#141111] px-8 py-14'>
            <h2 className='text-sm text-center redex uppercase mb-5 font-semibold'>Project</h2>
            <h3 className='w-1/4 mx-auto text-2xl text-center uppercase font-[800] mb-20'>We design and carry out your projects</h3>
            {projects.map((project) => (
                <div key={project.id} className='flex flex-col mb-8 mx-auto w-1/2'>
                    <div className='relative h-[400px] w-full rounded-lg'>
                        <Image
                            src={project.imageUrl}
                            alt={project.title}
                            className='rounded-lg'
                            fill
                        />
                    </div>
                    <h4 className='uppercase mt-4 font-semibold'>{project.title}</h4>
                    <div className='flex justify-start mt-4 space-x-44 uppercase text-xs'>
                        <div>
                            <p className='text-[#9E9E9E]'>Client</p>
                            <p className='text-white mt-3'>{project.details.client}</p>
                        </div>
                        <div>
                            <p className='text-[#9E9E9E]'>Date</p>
                            <p className='text-white mt-3'>{project.details.date}</p>
                        </div>
                        <div>
                            <p className='text-[#9E9E9E]'>Area</p>
                            <p className='text-white mt-3'>{project.details.area}</p>
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
