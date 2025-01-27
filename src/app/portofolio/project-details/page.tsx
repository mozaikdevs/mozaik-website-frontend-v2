'use client'

import { Project } from '@/interfaces/project';
import { AppDispatch } from '@/redux/store';
import { getAllProjects } from '@/services/client';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import React, { Suspense, useEffect, useRef, useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';

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
    
        useEffect(() => {
            dispatch(getAllProjects());
        },[dispatch]);
    
    
        useEffect(() => {
            if (project) {
                setLoading(false);
            }
        }, [project]);
    
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
        return <div className="text-white">Loading...</div>;
    }

    return (
        <div className='bg-[#141111] min-h-screen py-8 md:px-20 px:0'>
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
                                <img
                                    src={project?.thumbnailBefore}
                                    alt="Before"
                                    className="w-full h-full grayscale"
                                />
                                <div className="absolute top-7 left-7 bg-white text-black px-5 py-2 rounded-xl redex font-bold">
                                    BEFORE
                                </div>
                            </div>
                            <div className="absolute inset-0 translate-x-full">
                                <img
                                    src={project?.thumbnailAfter}
                                    alt="After"
                                    className="w-full h-full"
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
                    <div className="text-white uppercase text-xl font-[400]">Project</div>
                    <div className="text-white uppercase text-xl font-bold">Description</div>
                </div>
                <p className="md:w-[60%] w-full text-[#F0F0F0] text-sm md:mt-0 mt-5">
                    {project?.description}
                </p>
            </section>
            <section className=''>
                <div className="grid md:grid-cols-3 grid-cols-1 gap-4 md:px-0 px-5">
                    <div className="flex flex-col gap-4">
                        <Image src={project.images[0]} alt="Gallery Image 1" width={200} height={200} className="w-full h-full object-cover rounded-xl" />
                        <Image src={project.images[1]} alt="Gallery Image 2" width={200} height={200} className="w-full h-full object-cover rounded-xl" />
                    </div>
                    <div className="flex flex-col gap-4">
                        <Image src={project.images[2]} alt="Gallery Image 3" width={200} height={200} className="w-full h-full object-cover rounded-xl" />
                        <Image src={project.images[3]} alt="Gallery Image 4" width={200} height={200} className="w-full h-full object-cover rounded-xl" />
                    </div>
                    <div className="flex">
                        <Image src={project.images[4]} alt="Gallery Image 5" width={200} height={400} className="w-full h-full object-cover rounded-xl" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProjectDetails;
