import Link from 'next/link';
import React from 'react';

const Services: React.FC = () => {
    return (
        <div className="md:py-44 py-32" style={{ backgroundImage: "url('/images/bg-6.png')", backgroundPosition: '30% -30%' }}>
            <div className="md:px-[77px] px-5">
                <div className='flex justify-center items-center mb-10'>
                    <div className='h-4 w-3 bg-[#E09F1F] mr-2'></div>
                    <h2 className="text-md font-bold text-center uppercase text-black">Our Services</h2>
                    <div className='h-4 w-3 bg-[#E09F1F] ml-2'></div>
                </div>
                <p className="md:text-3xl text-xl text-black text-center mb-8 md:px-[20%] font-[300] uppercase">We provide  <span className='font-[700]'>comprehensive interior design</span>  services, to transform spaces with <span className='font-[700]'>style and innovation</span></p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:mt-24 mt-12">
                    <section className="bg-[#F9F9F9] p-6 rounded-lg">
                        <h3 className="text-md font-bold mb-2 uppercase text-black 2xl:text-xl">Design Development 
                        and  Space Planning</h3>
                        <p className="text-[#494949] text-sm mb-4 2xl:text-base">We have a dedicated team that can transform any space, big or small, into a perfect working environment for you. We consider your specific needs and focus on key elements such as comfort, lighting, and sound.</p>
                        <Link href="/services/#design" className="flex items-center text-black hover:text-[#ae7c18] uppercase text-xs font-semibold 2xl:text-base">Know more <span className='text-xl ml-2'>→</span></Link>
                    </section>
                    
                    <section className="bg-[#1B4D77] p-6 rounded-lg">
                        <h3 className="text-md font-bold mb-2 uppercase text-white md:w-[70%] 2xl:text-xl">Finishing 
                        and Partitioning Work</h3>
                        <p className="text-[#D8D8D8] font-[200] text-sm mb-4 2xl:text-base">From the beginning of each project, we work with you to create the ideal atmosphere for your new space. We guide you on the choice of colors, materials, flooring type, acoustics, lighting, and layout – it's our specialty.</p>
                        <Link href="/services/#finishing" className="flex items-center text-[#E09F1F] hover:text-[#ae7c18] uppercase text-xs font-semibold 2xl:text-sm">Know more <span className='text-xl ml-2'>→</span></Link>
                    </section>
                    
                    <section className="bg-[#F9F9F9] p-6 rounded-lg 2xl:text-xl">
                        <h3 className="text-md font-bold mb-2 uppercase text-black">Furniture and decoration</h3>
                        <p className="text-[#494949] text-sm mb-4 2xl:text-base">A key stage in the arrangement,furniture brings life to aspace. Designing furniture is not just about choosing a desk from a vendor. It's much more than that. It's about thinkingabout spaces as a whole to serve a vision, usage, and functionality objectives, as well as aesthetics and comfort."</p>
                        <Link href="/services/#furniture" className="flex items-center text-black hover:text-[#ae7c18] uppercase text-xs font-semibold 2xl:text-base">Know more <span className='text-xl ml-2'>→</span></Link>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Services;
