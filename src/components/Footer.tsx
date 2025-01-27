import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from 'react-icons/fa6';

const Footer: React.FC = () => {
    return (
        <footer className="flex flex-col py-10 px-5 md:px-16 bg-[#143755]">
            <div className="flex flex-col md:flex-row justify-between mb-5">
                <div>
                    <p className="text-xs font-[800] mb-3">GET A PROJECT?</p>
                    <p className="w-1/2 text-4xl font-semibold uppercase">let’s connect</p>
                </div>
                <div className='text-white mb-5 md:my-0 my-5'>
                    <h1 className='text-[15px] font-semibold mb-3'>LINKS</h1>
                    <div className='flex flex-row'>
                        <div className='mr-10'>
                            <Link href="/" className="block font-[200] text-[14px] mb-3">Home</Link>
                            <Link href="/services" className="block font-[200] text-[14px] mb-3">Services</Link>
                            <Link href="/about" className="block font-[200] text-[14px] mb-3">About</Link>
                        </div>
                        <div>
                            <Link href="/projects" className="block font-[200] text-[14px] mb-3">Projects</Link>
                            <Link href="#link2" className="block font-[200] text-[14px] mb-3">Blog</Link>
                            <Link href="/portofolio" className="block font-[200] text-[14px] mb-3">Portofolio</Link>
                        </div>
                    </div>
                </div>
                <div className='text-white'>
                    <h1 className='text-[15px] font-semibold mb-3'>SERVICES</h1>
                    <div className=''>
                        <Link href="/services/#design" className="block font-[200] text-[14px] mb-3">Design Development & Space Planning</Link>
                        <Link href="/services/#finishing" className="block font-[200] text-[14px] mb-3">Finishing & Partitioning Work</Link>
                        <Link href="/services/#furniture" className="block font-[200] text-[14px] mb-3">Furniture & Decoration</Link>
                    </div>
                </div>
            </div>
            <div className="w-full bg-[#183E5E] rounded-lg p-5 flex flex-col md:flex-row justify-between md:items-center mb-5 border-[2px] border-[#1B4D77] space-y-4 md:space-y-0 md:my-5">
                <div className="flex items-center">
                    <div className="w-10 h-10 bg-[#1B4D77] rounded-[8px] flex items-center justify-center mr-3">
                        <div className='w-5 h-5 relative'>
                            <Image 
                                src="/icons/locations.svg" 
                                alt="Location" 
                                fill
                            />
                        </div>
                    </div>
                    <p>3 KG 686 st, Kigali</p>
                </div>
                <div className="flex items-center">
                    <div className="w-10 h-10 bg-[#1B4D77] rounded-[8px] flex items-center justify-center mr-3">
                        <div className='w-5 h-5 relative'>
                                <Image 
                                    src="/icons/mail.svg" 
                                    alt="Location" 
                                    fill
                                />
                        </div>
                    </div>
                    <p> info@mozaikconcepts.com</p>
                </div>
                <div className="flex items-center">
                    <div className="w-10 h-10 bg-[#1B4D77] rounded-[8px] flex items-center justify-center mr-3">
                        <div className='w-5 h-5 relative'>
                            <Image 
                                src="/icons/phone.svg" 
                                alt="Location" 
                                fill
                            />
                        </div>
                    </div>
                    <p>+250 791 903 218</p>
                </div>
            </div>
            <div className="flex md:flex-row flex-col-reverse justify-between items-center mt-10">
                <p className='text-sm font-bold'>Mozaik Concepts © {new Date().getFullYear()}  All rights reserved</p>
                <div className='flex mb-5 md:mb-0'>
                    <a href="https://www.facebook.com" target='_blank' className="w-9 h-9 bg-white rounded-full flex items-center justify-center mr-3" rel="noopener noreferrer">
                        <FaFacebookF className='text-[#1B4D77] text-xl' />
                    </a>
                    <a href="#" className="w-9 h-9 bg-white rounded-full flex items-center justify-center mr-3">
                        <FaLinkedinIn className='text-[#1B4D77] text-xl' />
                    </a>
                    <a href="#" className="w-9 h-9 bg-white rounded-full flex items-center justify-center mr-3">
                        <FaInstagram className='text-[#1B4D77] text-xl' />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
