import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';

const CustomNavbar: React.FC = () => {
    return (
        <nav className="flex items-center justify-between p-4 bg-[#161515] outfit px-16">
            <Link href="/" className="logo">
                <Image
                    src="/images/dark-logo.png"
                    alt="Mozaik concepts Logo"
                    width={150}
                    height={40}
                />
            </Link>
            <div className='w-full flex justify-end items-center'>
                <div className="flex justify-end space-x-12 text-white text-sm font-normal mr-5">
                    <Link href="/services" className="hover:text-gray-400">Services</Link>
                    <Link href="/about" className="hover:text-gray-400">About</Link>
                    <Link href="/" className="hover:text-gray-400">Website</Link>
                </div>
                <button className="flex justify-between bg-[#FFFFFF] hover:bg-blue-700 text-black font-[600] py-3 px-8 rounded-[8px] text-sm">
                    Reach to us
                </button>
            </div>
        </nav>
    );
};

export default CustomNavbar;
