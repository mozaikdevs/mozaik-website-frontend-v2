import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';

const Navbar: React.FC = () => {
    return (
        <nav className="flex items-center justify-between p-4 bg-white  px-16">
            <Link href="/" className="logo">
                <Image
                    src="/images/logo.png"
                    alt="Mozaik concepts Logo"
                    width={150}
                    height={40}
                />
            </Link>
            <div className="flex space-x-12 text-black">
                <a href="#home" className="hover:text-gray-400 font-[500]">Services</a>
                <a href="#about" className="hover:text-gray-400 font-[500]">About</a>
                <a href="#services" className="hover:text-gray-400 font-[500]">Projects</a>
                <a href="#contact" className="hover:text-gray-400 font-[500]">Portofolio</a>
            </div>
            <div>
                <button className="flex justify-between bg-[#E09F1F] hover:bg-blue-700 text-white font-[600] py-3 px-5 rounded">
                    Get in Touch
                    <MdKeyboardArrowRight className='text-2xl ml-2' />
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
