import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from 'react-icons/fa6';

const Footer: React.FC = () => {
    return (
        <footer className="flex flex-col py-10 px-16 bg-[#143755]">
            <div className="flex justify-between mb-5">
                <div>
                    <p className="text-xs font-[800] mb-3">GET A PROJECT?</p>
                    <p className="text-4xl font-semibold uppercase">let’s connect</p>
                </div>
                <div className='text-white'>
                    <h1 className='text-[15px] font-semibold mb-3'>LINKS</h1>
                    <div className='flex flex-row'>
                        <div className='mr-10'>
                            <a href="#link1" className="block font-[200] text-[14px] mb-3">Home</a>
                            <a href="#link2" className="block font-[200] text-[14px] mb-3">Services</a>
                            <a href="#link3" className="block font-[200] text-[14px] mb-3">About</a>
                        </div>
                        <div>
                            <a href="#link1" className="block font-[200] text-[14px] mb-3">Projects</a>
                            <a href="#link2" className="block font-[200] text-[14px] mb-3">Blog</a>
                            <a href="#link3" className="block font-[200] text-[14px] mb-3">Portofolio</a>
                        </div>
                    </div>
                </div>
                <div className='text-white'>
                    <h1 className='text-[15px] font-semibold mb-3'>SERVICES</h1>
                    <div className=''>
                        <a href="#link1" className="block font-[200] text-[14px] mb-3">Design Development & Space Planning</a>
                        <a href="#link2" className="block font-[200] text-[14px] mb-3">Finishing & Partitioning Work</a>
                        <a href="#link3" className="block font-[200] text-[14px] mb-3">Furniture & Decoration</a>
                    </div>
                </div>
            </div>
            <div className="w-full bg-[#183E5E] rounded-lg p-5 flex justify-between items-center mb-5 border-[2px] border-[#1B4D77] my-5">
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
            <div className="flex justify-between items-center mt-10">
                <p className='text-sm font-bold'>Mozaik Concepts © {new Date().getFullYear()}  All rights reserved</p>
                <div className='flex'>
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
