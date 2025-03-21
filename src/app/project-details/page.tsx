'use client'
import DefaultLayout from '@/components/DefaultLayout';
import MoreProjects from '@/components/MoreProjects';
import { Project } from '@/interfaces/project';
import { AppDispatch } from '@/redux/store';
import { getAllProjects } from '@/services/client';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import React, { Suspense, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { MdFullscreen, MdFullscreenExit } from 'react-icons/md';

const ProjectDetails = () => {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <ProjectDetailsContent />
      </Suspense>
    );
};

const ProjectDetailsContent: React.FC = () => {
    const searchParams = useSearchParams();
    const dispatch = useDispatch<AppDispatch>();
    const containerRef = useRef<HTMLDivElement>(null);
    const projectId = searchParams.get('id');
    const project = useSelector((state: any) => state.projects.projects.find((project: Project) => project._id === projectId));
    const [showAfter, setShowAfter] = useState(false);
    const [loading, setLoading] = useState(true);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);

    useEffect(() => {
        dispatch(getAllProjects());
    },[dispatch]);

    useEffect(() => {
        if (project) {
            setLoading(false);
        }
    }, [project]);

    const handleFullscreen = (src: string) => {
        setFullscreenImage(src);
        setIsFullscreen(true);
    };

    const exitFullscreen = () => {
        setFullscreenImage(null);
        setIsFullscreen(false);
    };

    // Handle scroll
    const handleScroll = (e: WheelEvent) => {
        if (!containerRef.current) return;
        
        if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
            if (e.deltaX > 0 && !showAfter) {
                setShowAfter(true);
            } else if (e.deltaX < 0 && showAfter) {
                setShowAfter(false);
            }
        }
    };

    // Handle touch
    const handleTouch = () => {
        let startX: number;
        
        const touchStart = (e: TouchEvent) => {
            startX = e.touches[0].clientX;
        };

        const touchEnd = (e: TouchEvent) => {
            const diffX = startX - e.changedTouches[0].clientX;
            if (Math.abs(diffX) > 50) { // threshold of 50px
                if (diffX > 0 && !showAfter) {
                    setShowAfter(true);
                } else if (diffX < 0 && showAfter) {
                    setShowAfter(false);
                }
            }
        };

        return { touchStart, touchEnd };
    };

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        container.addEventListener('wheel', handleScroll);
        const { touchStart, touchEnd } = handleTouch();
        container.addEventListener('touchstart', touchStart);
        container.addEventListener('touchend', touchEnd);

        return () => {
            container.removeEventListener('wheel', handleScroll);
            container.removeEventListener('touchstart', touchStart);
            container.removeEventListener('touchend', touchEnd);
        };
    }, [showAfter]);

    if (loading) {
        return <SkeletonProjectDetails />;
    }

    return (
        <DefaultLayout>
            <div className='bg-white min-h-screen py-8 md:px-20 px-0'>
                <section className='relative'>
                    <div className="flex md:rounded-xl rounded-none md:h-[400px] md:flex-row flex-col">
                        {/* Desktop View */}
                        <div className="hidden md:flex md:flex-row w-full">
                            <div className="relative w-1/2 h-full rounded-xl">
                                <img src={project?.thumbnailBefore} alt="Before" className="w-full h-full grayscale md:rounded-l-xl" />
                                <div className="absolute top-7 left-7 bg-white text-black px-5 py-2 rounded-xl redex font-bold">BEFORE</div>
                            </div>
                            <div className="relative w-1/2 h-full rounded-xl">
                                <img src={project?.thumbnailAfter} alt="After" className="w-full h-full md:rounded-r-xl" />
                                <div className="absolute top-7 left-7 bg-white text-black px-5 py-2 rounded-xl redex font-bold">AFTER</div>
                            </div>
                        </div>

                        {/* Mobile View with Toggle */}
                        <div
                            ref={containerRef}
                            className="md:hidden relative w-full h-[400px] overflow-hidden"
                        >
                            <div
                                className="relative w-full h-full transition-transform duration-300 ease-in-out"
                                style={{
                                    transform: `translateX(${showAfter ? '-100%' : '0'})`
                                }}
                            >
                                <div className="absolute inset-0">
                                  <Image
                                    src={project?.thumbnailBefore}
                                    alt="Before"
                                    layout="fill"
                                    objectFit="cover"
                                    className="grayscale"
                                  />
                                  <div className="absolute top-7 left-7 bg-white text-black px-5 py-2 rounded-xl redex font-bold">
                                    BEFORE
                                  </div>
                                </div>
                                <div className="absolute inset-0 translate-x-full">
                                  <Image
                                    src={project?.thumbnailAfter}
                                    alt="Before"
                                    layout="fill"
                                    objectFit="cover"
                                    className="grayscale"
                                  />
                                  <div className="absolute top-7 left-7 bg-white text-black px-5 py-2 rounded-xl redex font-bold">
                                      AFTER
                                  </div>
                                </div>
                            </div>

                            {/* Navigation Arrows */}
                            <div className="absolute z-50 inset-y-0 left-4 right-4 flex justify-between items-center">
                                <button
                                    onClick={() => setShowAfter(false)}
                                    className={`p-2 rounded-full bg-black ${!showAfter && 'opacity-50'}`}
                                    disabled={!showAfter}
                                >
                                    <IoIosArrowBack size={24} />
                                </button>
                                <button
                                    onClick={() => setShowAfter(true)}
                                    className={`p-2 rounded-full bg-black ${showAfter && 'opacity-50'}`}
                                    disabled={showAfter}
                                >
                                    <IoIosArrowForward size={24} />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Project Info Section */}
                    <div className="absolute md:bottom-4 left-4 bottom-4 md:w-2/3 w-[90%] p-5 rounded-xl grid md:grid-cols-4 grid-cols-2 md:gap-y-0 gap-y-4 mt-4 bg-white">
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
                  <div className="flex flex-col gap-y-4">
                      <div className="relative w-full md:h-[450px] h-[300px]">
                          <Image 
                              src={project.images[0]} 
                              alt="Gallery Image 1" 
                              layout="fill"
                              quality={100}
                              className="object-cover rounded-xl" 
                          />
                          <button
                              onClick={() => handleFullscreen(project.images[0])}
                              className="absolute bottom-2 right-2 p-2 bg-black bg-opacity-30 text-white rounded-full"
                          >
                              <MdFullscreen size={20} />
                          </button>
                      </div>
                      <div className="relative w-full md:h-[250px] h-[300px]">
                          <Image 
                              src={project.images[1]} 
                              alt="Gallery Image 2" 
                              layout="fill"
                              quality={100}
                              className="object-cover rounded-xl" 
                          />
                          <button
                              onClick={() => handleFullscreen(project.images[1])}
                              className="absolute bottom-2 right-2 p-2 bg-black bg-opacity-30 text-white rounded-full"
                          >
                              <MdFullscreen size={20} />
                          </button>
                      </div>
                  </div>
                  <div className="flex flex-col gap-y-4">
                      <div className="relative w-full md:h-[300px] h-[300px]">
                          <Image 
                              src={project.images[2]} 
                              alt="Gallery Image 3" 
                              layout="fill"
                              quality={100}
                              className="object-cover rounded-xl" 
                          />
                          <button
                              onClick={() => handleFullscreen(project.images[2])}
                              className="absolute bottom-2 right-2 p-2 bg-black bg-opacity-30 text-white rounded-full"
                          >
                              <MdFullscreen size={20} />
                          </button>
                      </div>
                      <div className="relative w-full md:h-[400px] h-[300px]">
                        <Image 
                          src={project.images[3]} 
                          alt="Gallery Image 4" 
                          layout="fill"
                          quality={100}
                          className="object-cover rounded-xl" 
                        />
                        <button
                            onClick={() => handleFullscreen(project.images[3])}
                            className="absolute bottom-2 right-2 p-2 bg-black bg-opacity-30 text-white rounded-full"
                        >
                            <MdFullscreen size={20} />
                        </button>
                      </div>
                  </div>
                  <div className="relative w-full md:h-[716px] h-[300px]">
                      <Image 
                         src={project.images[4]}  
                          alt="Gallery Image 5" 
                          layout="fill"
                          quality={100}
                          className="object-cover rounded-xl" 
                      />
                      <button
                          onClick={() => handleFullscreen(project.images[4])}
                          className="absolute bottom-2 right-2 p-2 bg-black bg-opacity-30 text-white rounded-full"
                      >
                          <MdFullscreen size={20} />
                      </button>
                  </div>
              </div>
                </section>
                <MoreProjects currentProjectId={projectId || ''} />
            </div>

            {isFullscreen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
                    <Image 
                        src={fullscreenImage!} 
                        alt="Fullscreen Image" 
                        layout="fill" 
                        objectFit="contain" 
                        quality={100} 
                    />
                    <button
                        onClick={exitFullscreen}
                        className="absolute bottom-4 right-4 p-2 bg-white bg-opacity-50 text-black rounded-full"
                    >
                        <MdFullscreenExit size={24} />
                    </button>
                </div>
            )}
        </DefaultLayout>
    );
};

const SkeletonProjectDetails: React.FC = () => {
    return (
      <div className='bg-white min-h-screen py-8 md:px-20 px-0 animate-pulse'>
        <section className='relative'>
          <div className="flex md:rounded-xl rounded-none md:h-[400px] md:flex-row flex-col">
            {/* Desktop View */}
            <div className="hidden md:flex md:flex-row w-full">
              <div className="relative w-1/2 h-full rounded-xl bg-gray-300"></div>
              <div className="relative w-1/2 h-full rounded-xl bg-gray-300"></div>
            </div>
  
            {/* Mobile View with Toggle */}
            <div className="md:hidden relative w-full h-[400px] overflow-hidden">
              <div className="relative w-full h-full bg-gray-300"></div>
            </div>
          </div>
  
          {/* Project Info Section */}
          <div className="absolute md:bottom-4 left-4 bottom-[27rem] md:w-2/3 w-[90%] p-5 rounded-xl grid md:grid-cols-4 grid-cols-2 md:gap-y-0 gap-y-4 mt-4 bg-gray-300"></div>
        </section>
  
        {/* Project Description */}
        <section className='mt-10 px-5'>
          <div className='bg-gray-300 h-6 w-1/2 mb-4 rounded'></div>
          <div className='bg-gray-300 h-4 w-full mb-2 rounded'></div>
          <div className='bg-gray-300 h-4 w-full mb-2 rounded'></div>
          <div className='bg-gray-300 h-4 w-full mb-2 rounded'></div>
          <div className='bg-gray-300 h-4 w-full mb-2 rounded'></div>
          <div className='bg-gray-300 h-4 w-3/4 mb-2 rounded'></div>
        </section>
  
        {/* Section of Images */}
        <section className='mt-10 px-5 grid grid-cols-1 md:grid-cols-3 gap-4'>
          <div className='bg-gray-300 h-64 rounded'></div>
          <div className='bg-gray-300 h-64 rounded'></div>
          <div className='bg-gray-300 h-64 rounded'></div>
        </section>
      </div>
    );
};

export default ProjectDetails;
