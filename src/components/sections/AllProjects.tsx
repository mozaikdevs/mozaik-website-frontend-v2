import Image from 'next/image';
import React from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';

interface Project {
    id: number;
    title: string;
    client: string;
    size: string;
    details: string;
    imageUrl: string;
}

interface AllProjectsProps {
    projects: Project[];
}

const AllProjects: React.FC<AllProjectsProps> = ({ projects }) => {

    const truncateDetails = (details: string, charLimit: number) => {
        if (details.length > charLimit) {
            return details.slice(0, charLimit) + '...';
        }
        return details;
    };
    return (
        <div className="w-4/5 mx-auto py-20">
            {projects.map((project) => (
                <div key={project.id} className="w-full flex space-between items-center mb-20">
                    <div className="w-[45%] h-[300px] relative rounded-xl">
                        <Image 
                            src={project.imageUrl} 
                            alt={project.title} 
                            fill
                            className='rounded-xl'
                            // layout="responsive"
                        />
                    </div>
                    <div className="w-[45%] ml-[5%]">
                        <div className="flex justify-between">
                            <span className="w-1/2 uppercase font-bold text-sm text-black">{project.title}</span>
                            <span className='redex text-sm font-[400] text-black'>{project.size} sqm</span>
                        </div>
                        <div className="text-white mt-3 mb-5">
                            <p className='text-black text-sm font-[300]'> <span className='text-[#9E9E9E] mr-2'>Client</span>{project.client}</p>
                        </div>
                        <p className='text-[#474646] text-sm'>{truncateDetails(project.details,400)}</p>
                        <button className="flex items-center justify-between bg-[#E09F1F] hover:bg-blue-700 text-white font-[500] py-3 px-5 rounded-[8px] mt-5">
                            View projects
                            <MdKeyboardArrowRight className='text-2xl ml-2' />
                        </button>
                    </div>
                </div>
            ))}
            <button className='text-center text-sm mx-auto flex flex-col items-center text-black font-bold uppercase'>
                Scroll for more
                <div className='w-[35px] h-[35px] relative'>
                    <Image
                        src='/icons/scroll.svg'
                        alt='Scroll'
                        fill
                    />
                </div>
            </button>
        </div>
    );
};

export default AllProjects;
