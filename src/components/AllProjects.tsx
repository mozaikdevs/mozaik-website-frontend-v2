import { Project } from '@/interfaces/project';
import { truncateDetails } from '@/utils';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';

interface AllProjectsProps {
    projects: Project[];
}

const AllProjects: React.FC<AllProjectsProps> = ({ projects }) => {
    const router = useRouter();

    const handleProjectClick = (projectId: string) => {
        const params = new URLSearchParams({
            id: projectId
        });
        router.push(`/project-details?${params.toString()}`);
    };
    return (
        <div className="md:w-4/5 w-full mx-auto py-20">
            {projects.map((project) => (
                <div 
                    key={project._id} 
                    className="w-full flex space-between items-center mb-20 cursor-pointer bg-[#FBFBFB] rounded-xl p-5 md:flex-row flex-col"
                >
                    <div className="md:w-[45%] w-full md:h-[300px] h-[230px] relative rounded-xl md:mb-0 mb-10">
                        <Image 
                            src='https://res.cloudinary.com/mozaikconcepts/image/upload/v1737702224/thg4isdant9qbnyhixbi.png'
                            alt={project.name} 
                            fill
                            className='rounded-xl'
                            // layout="responsive"
                        />
                    </div>
                    <div className="md:w-[45%] w-full ml-[5%]">
                        <div className="flex justify-between">
                            <span className="w-1/2 uppercase font-bold text-sm text-black">{project.name}</span>
                            <span className='redex text-sm font-[400] text-black'>{project.areaSize} {project.areaUnit}</span>
                        </div>
                        <div className="text-white mt-3 mb-5">
                            <p className='text-black text-sm font-[300]'> <span className='text-[#9E9E9E] mr-2'>Client</span>{project.clientId.name}</p>
                        </div>
                        <p className='text-[#474646] text-sm'>{truncateDetails(project.description,400)}</p>
                        <button 
                            className="flex items-center justify-between bg-[#E09F1F] hover:bg-blue-700 text-white font-[500] py-3 px-5 rounded-[8px] mt-5"
                            onClick={() => handleProjectClick(project._id)}
                        >
                            View project
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
