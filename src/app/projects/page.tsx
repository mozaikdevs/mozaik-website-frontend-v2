import AllProjects from '@/components/AllProjects';
import React from 'react';

const ProjectsPage: React.FC = () => {
    const projects = [
        {
            id: 1,
            title: 'Outdoor Shade',
            client: 'Institut Francais',
            size: '90',
            details: 'We re-imagined outdoor living, creating a space that effortlessly combined modern versatility with cozy charm and the warmth of kitenge-inspired cultural touches. More than just meeting practical needs, it became a vibrant and welcoming setting where every moment felt special, enriched by meaningful cultural details that made the experience truly unforgettable.',
            imageUrl: '/images/2.png'
        },
        {
            id: 2,
            title: 'Christmas Bazaar & Lighting Ceremony',
            client: 'Radisson Blu Hotel & Convention Centre',
            size: '1000',
            details: 'We brought Christmas traditions from around the world to life, creating an immersive celebration that delighted guests of all ages. By blending festive trees, decorations, and symbols from diverse cultures, it offered a truly unique and inclusive holiday experience. The interactive atmosphere sparked wonder and joy, allowing children to dream beyond the magic of Christmas as they explored traditions from across the globe. It wasn’t just a display—it was a journey that transcended borders and captured the universal spirit of the season.',
            imageUrl: '/images/3.png'
        },
        {
            id: 3,
            title: 'Simba Center (Supermarket)',
            client: 'ERI Rwanda',
            size: '1500',
            details: 'By transforming this supermarket into an extraordinary shopping destination, it offers a truly fancy experience unlike any other in Rwanda. The design seamlessly combines elegance with modern sophistication, creating a space that goes beyond shopping to deliver a premium experience. Every detail has been thoughtfully curated to immerse customers in an atmosphere of luxury and exclusivity, making each visit feel special and distinct.',
            imageUrl: '/images/4.png'
        }
    ];
    return (
        <div className="bg-white min-h-screen px-16">
            <section className="flex justify-between items-end bg-[#FAFAFA] rounded-xl p-10">
                <div>
                    <div className='flex justify-start items-center mb-10'>
                        <div className='h-4 w-3 bg-[#E09F1F] mr-2'></div>
                        <h2 className="text-md font-bold text-center uppercase text-black redex">OUR PROJECTS</h2>
                        <div className='h-4 w-3 bg-[#E09F1F] ml-2'></div>
                    </div>
                    <p className="text-2xl text-black uppercase font-[300]">Experience from <span className='font-[700]'>over 80+ </span>projects</p>
                    <p className="text-2xl text-black uppercase"><span className='font-[700]'>for your</span> company</p>
                </div>
                <div className='w-1/2'>
                    <p className='text-[#4C4B4B]'>From finishing and partitioning to bespoke furniture and decor, our team combines style and innovation to create unique, transformative environments that reflect our clients' vision and lifestyle."</p>
                </div>
            </section>
            <AllProjects projects={projects}/>
        </div>
    );
};

export default ProjectsPage;
