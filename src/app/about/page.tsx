import Image from 'next/image';
import React from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';

const About: React.FC = () => {
    const reasons = [
        'We address Rwanda’s material challenges with creative, effective solutions tailored to your needs.',
        'Our work reflects your brand and vision, creating spaces that truly represent you.',
        'Years of experience in corporate, retail, and hospitality interiors.',
        'We handle every detail so you can focus on running your business.',
        'Projects are completed on time and within budget without compromising quality',
        'Designs that maximize functionality, flow, and efficiency.',
        'Spaces that captivate and leave a lasting impression on clients and customers',
        'We bring modern design trends while staying true to Rwanda’s unique context.',
        'Sustainable materials and practices are at the heart of our designs.',
        'Our designs enhance the appeal and market value of your property or business.',
        'Collaborations with skilled local artisans and trusted suppliers ensure high-quality results.',
        'Spaces designed to inspire employees and foster creativity.',
    ];
    return (
        <div className='min-h-screen bg-white'>
            <section className="flex justify-between items-end bg-[#FAFAFA] rounded-xl p-12 mx-16">
                <div>
                    <div className='flex justify-start items-center mb-10'>
                        <div className='h-4 w-3 bg-[#E09F1F] mr-2'></div>
                        <h2 className="text-md font-bold text-center uppercase text-black redex">ABOUT US</h2>
                        <div className='h-4 w-3 bg-[#E09F1F] ml-2'></div>
                    </div>
                    <p className="text-2xl text-black uppercase font-[700]">End-to-end turnkey </p>
                    <p className="text-2xl text-black uppercase font-[700]">office design and build</p>
                </div>
                <div className='w-1/2'>
                    <p className='text-[#4C4B4B]'>It is our mission to operate our business with care, honesty and integrity. We leverage all of this knowledge to act as trusted advisers to our clients.</p>
                </div>
            </section>
            <section className="mt-12 mx-16">
                <div className='flex flex-col justify-start items-center mb-10'>
                    <h2 className="text-md font-bold text-center uppercase text-black redex mb-5">WHY CHOOSE US</h2>
                    <p className="w-1/2 mx-auto text-center text-xl text-black uppercase font-[700] mb-8">We maintain clear communication with you throughout the entire project, providing transparency and peace of mind every step of the way.</p>
                </div>
                <div className="grid grid-cols-3 gap-4 px-32">
                    {reasons.map((reason, index) => (
                        <div
                            key={index}
                            className={`p-10 text-sm rounded-xl ${((index % 3 === 0 || index % 3 === 2) && (Math.floor(index / 3) % 2 === 0)) || (index % 3 === 1 && Math.floor(index / 3) % 2 !== 0) ? 'bg-[#F8F8F8]' : ''}`}
                        >
                            <p className="text-black">{reason}</p>
                        </div>
                    ))}
                </div>
                <button className="flex capitalize items-center mx-auto justify-between bg-[#E09F1F] hover:bg-blue-700 text-white font-[500] py-3 px-5 rounded-[8px] mt-5">
                    request free consultation
                    <MdKeyboardArrowRight className='text-2xl ml-2' />
                </button>
            </section>
            <section className="w-full bg-[#FAFAFA] rounded-xl py-28 px-56 mt-12 flex items-center">
                <div className="w-1/2 h-[300px] rounded-xl relative">
                    <Image 
                        src="/images/8.png" 
                        alt="Description" 
                        className="rounded-xl" 
                        fill
                    />
                </div>
                <div className="w-1/2 pl-12">
                    <div className='flex justify-start items-center mb-10'>
                        <div className='h-4 w-3 bg-[#E09F1F] mr-2'></div>
                        <h2 className="text-md font-bold text-center uppercase text-black redex">our vision</h2>
                        <div className='h-4 w-3 bg-[#E09F1F] ml-2'></div>
                    </div>                    
                    <h3 className="text-md font-bold text-black mb-5">Our vision is to be a reputable, sustainable, and desirable premier professional/commercial interior architecture firm of the African market place providing the state-of-the-art innovative designs and superior quality finishing.</h3>
                    <p className="text-sm text-[#4C4B4B]">We will continue to leverage on our many years of professional experience to consistently deliver exclusive design services that bring a complete satisfaction of our partners and client’s requirements.</p>
                </div>
            </section>
            <section className="w-full rounded-xl py-28 px-56 flex flex-row-reverse items-center">
                <div className="w-1/2 h-[300px] rounded-xl relative">
                    <Image 
                        src="/images/9.png" 
                        alt="Description" 
                        className="rounded-xl" 
                        fill
                    />
                </div>
                <div className="w-1/2 pr-12">
                    <div className='flex justify-start items-center mb-10'>
                        <div className='h-4 w-3 bg-[#E09F1F] mr-2'></div>
                        <h2 className="text-md font-bold text-center uppercase text-black redex">Our mission</h2>
                        <div className='h-4 w-3 bg-[#E09F1F] ml-2'></div>
                    </div>                    
                    <h3 className="text-md font-bold text-black mb-5">Our mission is to create reward experience and value that combine functionality with high quality and innovation for our customers.</h3>
                    <p className="text-sm text-[#4C4B4B]">We want every partner and client experience to be the talk of a life time. Also, to define the most sophisticated and superior standard of quality in every exterior and interior designs.</p>
                </div>
            </section>
        </div>
    );
};

export default About;
