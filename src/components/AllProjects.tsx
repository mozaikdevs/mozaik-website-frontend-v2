'use client'
import { Project } from '@/interfaces/project';
import { truncateDetails } from '@/utils';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';

interface AllProjectsProps {
    projects: Project[];
    loading: boolean;
}

// Add size range constants
const SIZE_RANGES = {
    small: { min: 0, max: 100 },
    medium: { min: 101, max: 300 },
    big: { min: 301, max: Infinity }
  } as const;
  
  type SizeRangeKey = keyof typeof SIZE_RANGES;

const AllProjects: React.FC<AllProjectsProps> = ({ projects, loading }) => {
    const [filteredProjects, setFilteredProjects] = useState(projects);
    const router = useRouter();
    const [visibleCount, setVisibleCount] = useState(3);
    const projectsToShow = filteredProjects.slice(0, visibleCount);
    const hasMore = visibleCount < filteredProjects.length;
    const [sizeRange, setSizeRange] = useState<string>('');
    const [projectType, setProjectType] = useState<string>('');

    const handleProjectClick = (projectId: string) => {
        const params = new URLSearchParams({
            id: projectId
        });
        router.push(`/project-details?${params.toString()}`);
    };

    const loadMore = () => {
        setVisibleCount(prev => Math.min(prev + 3, projects.length));
    };
    // Filter handlers
  const handleSizeRangeFilter = (projects: Project[]) => {
    if (!sizeRange) return projects;
    
    return projects.filter(project => {
      const size = project.areaSize;
      const range = SIZE_RANGES[sizeRange as SizeRangeKey];
      return size >= range.min && size <= range.max;
    });
  };

  const handleProjectTypeFilter = (projects: Project[]) => {
    if (!projectType) return projects;
    return projects.filter(project => project.type === projectType);
  };

    useEffect(() => {
        let filtered = [...projects];
        filtered = handleSizeRangeFilter(filtered);
        filtered = handleProjectTypeFilter(filtered);
        
        setFilteredProjects(filtered);
        setVisibleCount(3); // Reset to initial count when filters change
    }, [sizeRange, projectType, projects]);

  // Handle filter changes
  const handleSizeRangeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSizeRange(e.target.value);
  };

  const handleProjectTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setProjectType(e.target.value);
  };

    return (
        <div className="md:w-4/5 w-full mx-auto py-20">
            <div className="w-full flex justify-end mb-10">
                <div className="md:w-1/6 w-1/2 pr-2">
                    <select 
                        value={sizeRange}
                        onChange={handleSizeRangeChange}
                        className="mt-1 block text-black w-full pl-3 pr-10 py-2 bg-[#FBFBFB] h-[45px] md:text-base text-sm border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                    >
                        <option value="">Size Range</option>
                        <option value="small">Small (0-100 sqm)</option>
                        <option value="medium">Medium (101-300 sqm)</option>
                        <option value="big">Big (300+ sqm)</option>
                    </select>
                </div>
                <div className="md:w-1/6 w-1/2 pl-2">
                    <select 
                        value={projectType}
                        onChange={handleProjectTypeChange}
                        className="mt-1 block text-black w-full pl-3 pr-10 py-2 bg-[#FBFBFB] h-[45px] md:text-base text-sm border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                    >
                        <option value="">Project Type</option>
                        {Array.from(new Set(projects.map(project => project.type))).map((type, index) => (
                        <option key={index} value={type}>{type}</option>
                        ))}
                    </select>
                </div>
            </div>
            {loading ? (
                Array.from({ length: 3 }).map((_, index) => (
                <SkeletonProjectCard key={index} />
                ))
            ) : (
            projectsToShow.map((project, index) => (
                <div 
                    key={index} 
                    className="w-full flex space-between items-center mb-20 bg-[#FBFBFB] rounded-xl p-5 md:flex-row flex-col"
                >
                    <div className="md:w-[45%] w-full md:h-[300px] h-[230px] relative rounded-xl md:mb-0 mb-10">
                        <Image 
                            src={project.thumbnailAfter}
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
                            className="flex items-center justify-between bg-[#E09F1F] hover:bg-[#ae7c18] text-white font-[500] py-3 px-5 rounded-[8px] mt-5"
                            onClick={() => handleProjectClick(project._id)}
                        >
                            View project
                            <MdKeyboardArrowRight className='text-2xl ml-2' />
                        </button>
                    </div>
                </div>
            )))}
            {hasMore && (
                <button 
                    onClick={loadMore}
                    className={`text-center text-sm mx-auto flex flex-col items-center text-black font-bold uppercase`}
                >
                    Scroll for more
                    <div className='w-[35px] h-[35px] relative'>
                        <Image
                            src='/icons/scroll.svg'
                            alt='Scroll'
                            fill
                        />
                    </div>
                </button>
            )}

        </div>
    );
};

const SkeletonProjectCard: React.FC = () => {
    return (
      <div className="w-full flex space-between items-center mb-20 cursor-pointer bg-[#FBFBFB] rounded-xl p-5 md:flex-row flex-col animate-pulse">
        <div className="md:w-[45%] w-full md:h-[300px] h-[230px] relative rounded-xl md:mb-0 mb-10 bg-gray-300"></div>
        <div className="md:w-[45%] w-full ml-[5%]">
          <div className="flex justify-between">
            <span className="w-1/2 bg-gray-300 h-6 rounded"></span>
            <span className='bg-gray-300 h-6 w-1/4 rounded'></span>
          </div>
          <div className="mt-3 mb-5">
            <p className='bg-gray-300 h-4 w-3/4 rounded'></p>
          </div>
          <p className='bg-gray-300 h-24 rounded'></p>
          <div className="flex items-center justify-between bg-gray-300 h-10 w-32 rounded mt-5"></div>
        </div>
      </div>
    );
};

export default AllProjects;
