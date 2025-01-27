import { Project } from '@/interfaces/project';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { useSelector } from 'react-redux';

interface MoreProjectsProps {
    currentProjectId: string;
}

const MoreProjects: React.FC<MoreProjectsProps> = ({ currentProjectId }) => {
    const router = useRouter();
    const projects = useSelector((state: any) => state.projects.projects.filter((project: Project) => project._id !== currentProjectId));
    const randomProjects = projects.sort(() => 0.5 - Math.random()).slice(0, 2);

    const handleProjectClick = (projectId: string) => {
        const params = new URLSearchParams({
            id: projectId
        });
        router.push(`/project-details?${params.toString()}`);
    };

    return (
        <section className='py-20 md:px-0 px-5'>
            <h2 className="md:text-2xl text-xl md:text-start text-center text-black redex font-bold mb-3">More Projects</h2>
            <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-8 gap-8 mt-10">
                {randomProjects.map((project: Project) => (
                    <div 
                        key={project._id} 
                        className="flex items-end md:col-span-4 bg-cover bg-center bg-black bg-opacity-50 md:h-80 h-64 rounded-xl cursor-pointer" 
                        style={{ backgroundImage: `url(${project.thumbnailAfter})` }}
                        onClick={() => handleProjectClick(project._id)}
                    >
                        <div className="md:w-2/3 w-full h-20 m-5 py-3 px-5 flex flex-col justify-center bg-black bg-opacity-50 backdrop-blur-sm rounded-xl">
                            <div className="flex justify-between text-white">
                                <span className='uppercase font-bold text-sm redex text-white'>{project.name}</span>
                                <span className='redex text-sm font-[300]'> {project.areaSize} {project.areaUnit}</span>
                            </div>
                            <div className="text-white mt-2">
                                <p className='text-white text-xs font-[300]'> <span className='text-[#9E9E9E] mr-2'>Client</span>{project.clientId.name}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className='w-full flex md:justify-end justify-center'>
                <Link 
                    href='/projects' 
                    className="flex items-center justify-between mt-8 bg-[#E09F1F] hover:bg-blue-700 text-white font-[600] py-3 px-5 rounded-[8px]"
                >
                    View all projects
                    <MdKeyboardArrowRight className='text-2xl ml-2' />
                </Link>
            </div>
        </section>
    );
};

export default MoreProjects;
