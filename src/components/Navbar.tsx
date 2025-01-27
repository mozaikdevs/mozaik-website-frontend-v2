'use client'

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';

const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="z-50 w-full flex items-center justify-between p-4 bg-white px-5 md:px-16">
            <Link href="/" className="logo relative w-[130px] h-[35px] md:w-[150px] md:h-[40px]">
                <Image
                    src="/images/logo.png"
                    alt="Mozaik concepts Logo"
                    fill
                />
            </Link>
            <div className="hidden md:flex space-x-12 text-black">
                <Link href="/services" className="hover:text-gray-400 font-[500]">Services</Link>
                <Link href="/about" className="hover:text-gray-400 font-[500]">About</Link>
                <Link href="/projects" className="hover:text-gray-400 font-[500]">Projects</Link>
                <Link href="/portofolio" className="hover:text-gray-400 font-[500]">Portofolio</Link>
            </div>
            <div className="hidden md:flex">
                <button className="flex justify-between bg-[#E09F1F] hover:bg-[#ae7c18] text-white font-[600] py-3 px-5 rounded-[8px]">
                    Get in Touch
                    <MdKeyboardArrowRight className='text-2xl ml-2' />
                </button>
            </div>
            <div className="md:hidden flex items-center">
                <button onClick={toggleMenu} className="text-black">
                    {isMenuOpen ? (
                        <div className="w-10 h-10 rounded-lg bg-[#F6F6F6] flex items-center justify-center">
                            <Image src="/icons/xmark.svg" alt="Close menu" width={20} height={20} />
                        </div>
                    ) : (
                        <div className="w-10 h-10 rounded-lg bg-[#F6F6F6] flex items-center justify-center">
                            <Image src="/icons/burger.svg" alt="Open menu" width={20} height={20} />
                        </div>
                    )}
                </button>
            </div>
            {isMenuOpen && (
                <div className='fixed inset-0 top-[72px] bg-white z-[100] h-full w-screen flex items-start justify-center py-10'>
                    <div className="w-full text-black space-y-10 py-8 flex flex-col justify-start items-center h-full md:hidden">
                        <Link href="/services" className="hover:text-gray-400 font-[500]">Services</Link>
                        <Link href="/about" className="hover:text-gray-400 font-[500]">About</Link>
                        <Link href="/projects" className="hover:text-gray-400 font-[500]">Projects</Link>
                        <Link href="/portofolio" className="hover:text-gray-400 font-[500]">Portofolio</Link>
                        <button className="w-2/3 flex justify-center bg-[#E09F1F] hover:bg-[#ae7c18] text-white font-[600] py-3 px-5 rounded-[8px] mt-10 mx-auto">
                            Get in Touch
                            <MdKeyboardArrowRight className='text-2xl ml-2' />
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
