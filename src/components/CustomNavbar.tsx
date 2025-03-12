'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

const CustomNavbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="z-50 w-full flex items-center justify-between p-4 bg-[#161515] outfit px-5 md:px-16">
            <Link href="/portfolio" className="logo relative w-[130px] h-[35px] md:w-[150px] md:h-[40px]">
                <Image
                    src="/images/dark-logo.png"
                    alt="Mozaik concepts Logo"
                    fill
                />
            </Link>
            <div className="hidden md:flex w-full justify-end items-center">
                <div className="flex justify-end space-x-12 text-white text-sm font-normal mr-5">
                    <Link href="/services" className="hover:text-gray-400">Services</Link>
                    <Link href="/about" className="hover:text-gray-400">About</Link>
                    <Link href="/" className="hover:text-gray-400">Website</Link>
                </div>
                <Link href="#footer" className="flex justify-between bg-[#FFFFFF] hover:bg-[#ae7c18] text-black hover:text-white font-[600] py-3 px-8 rounded-[8px] text-sm">
                    Reach to us
                </Link>
            </div>
            <div className="md:hidden flex items-center">
                <button onClick={toggleMenu} className="text-white">
                    {isMenuOpen ? (
                        <div className="w-10 h-10 rounded-lg bg-[#1D1D1D] flex items-center justify-center">
                            <Image src="/icons/xmark-dark.svg" alt="Close menu" width={20} height={20} />
                        </div>
                    ) : (
                        <div className="w-10 h-10 rounded-lg bg-[#1D1D1D] flex items-center justify-center">
                            <Image src="/icons/burger-dark.svg" alt="Open menu" width={20} height={20} />
                        </div>
                    )}
                </button>
            </div>
            {isMenuOpen && (
                <div className='fixed inset-0 top-[72px] bg-[#161515] z-[100] h-full w-screen flex items-start justify-center py-10'>
                    <div className="w-full text-white space-y-10 py-8 flex flex-col justify-start items-center h-full md:hidden">
                        <Link href="/services" className="hover:text-gray-400 font-[500]">Services</Link>
                        <Link href="/about" className="hover:text-gray-400 font-[500]">About</Link>
                        <Link href="/" className="hover:text-gray-400 font-[500]">Website</Link>
                        <Link href="#footer" onClick={() => setIsMenuOpen(false)} className="w-2/3 flex justify-center bg-[#FFFFFF] hover:bg-[#ae7c18] text-black hover:text-white font-[600] py-3 px-5 rounded-[8px] mt-10 mx-auto">
                            Reach to us
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default CustomNavbar;
