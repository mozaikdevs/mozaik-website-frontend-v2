import MoreProjects from '@/components/MoreProjects';
import Image from 'next/image';
import React from 'react';

const ProjectDetails: React.FC = () => {
    return (
        
        <div className='bg-white min-h-screen py-8 px-20'>
            <section className='relative'>
                <div className="flex rounded-xl">
                    <div className="relative w-1/2 rounded-xl">
                        <img src="/images/2.png" alt="Before" className="w-full h-full grayscale rounded-l-xl" />
                        <div className="absolute top-7 left-7 bg-white text-black px-5 py-2 rounded-xl redex font-bold">BEFORE</div>
                    </div>
                    <div className="relative w-1/2 rounded-xl">
                        <img src="/images/3.png" alt="After" className="w-full h-full rounded-r-xl" />
                        <div className="absolute top-7 left-7 bg-white text-black px-5 py-2 rounded-xl redex font-bold">AFTER</div>
                    </div>
                </div>
                <div className="absolute bottom-4 left-4 w-2/3 p-5 rounded-xl flex justify-between mt-4 bg-white">
                    <div className="">
                        <div className="text-[#9E9E9E] uppercase text-sm">project</div>
                        <div className="font-[500] text-sm mt-2 text-black redex uppercase">Outdoor Shade</div>
                    </div>
                    <div className="">
                        <div className="text-[#9E9E9E] uppercase text-sm">Client</div>
                        <div className="font-[500] text-sm mt-2 text-black redex uppercase">Institut Francais</div>
                    </div>
                    <div className="">
                        <div className="text-[#9E9E9E] uppercase text-sm">project type</div>
                        <div className="font-[500] text-sm mt-2 text-black redex uppercase">Corporate</div>
                    </div>
                    <div className="">
                        <div className="text-[#9E9E9E] uppercase text-sm">area</div>
                        <div className="font-[500] text-sm mt-2 text-black redex">90 sqm</div>
                    </div>
                </div>

            </section>
            <section className='flex justify-between items-center my-20'>
                <div className="flex flex-col">
                    <div className="text-black uppercase text-xl font-[400]">Project</div>
                    <div className="text-black uppercase text-xl font-bold">Description</div>
                </div>
                <p className="w-[60%] text-[#474646] text-sm">
                We re-imagined outdoor living, creating a space that effortlessly combined modern versatility with cozy charm and the warmth of kitenge-inspired cultural touches. More than just meeting practical needs, it became a vibrant and welcoming setting where every moment felt special, enriched by meaningful cultural details that made the experience truly unforgettable.
                </p>
            </section>
            <section className=''>
                <div className="grid grid-cols-3 gap-4">
                    <div className="flex flex-col gap-4">
                        <Image src="/images/2.png" alt="Gallery Image 1" width={200} height={200} className="w-full h-full object-cover rounded-xl" />
                        <Image src="/images/3.png" alt="Gallery Image 2" width={200} height={200} className="w-full h-full object-cover rounded-xl" />
                    </div>
                    <div className="flex flex-col gap-4">
                        <Image src="/images/4.png" alt="Gallery Image 3" width={200} height={200} className="w-full h-full object-cover rounded-xl" />
                        <Image src="/images/5.png" alt="Gallery Image 4" width={200} height={200} className="w-full h-full object-cover rounded-xl" />
                    </div>
                    <div className="flex">
                        <Image src="/images/6.png" alt="Gallery Image 5" width={200} height={400} className="w-full h-full object-cover rounded-xl" />
                    </div>
                </div>
            </section>
            <MoreProjects/>
        </div>
    );
};

export default ProjectDetails;
