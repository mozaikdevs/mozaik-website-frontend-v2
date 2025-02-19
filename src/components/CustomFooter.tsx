import Link from 'next/link';
import React from 'react';

const CustomFooter: React.FC = () => {
    return (
        <footer className="w-full bg-black text-white md:p-20 p-5">
            <div className='w-full flex justify-between md:flex-row flex-col'>
                <div className='md:w-[40%] w-full'>
                    <h1 className='w-2/3 md:text-5xl text-3xl redex font-bold'>WHAT <span className='font-normal'>WE DO</span> FOR YOU</h1>
                    <div className='md:w-2/3 w-full flex justify-between redex my-8'>
                        <div className='w-[40%] flex flex-col text-sm'>
                            <Link href='/services' className='my-1'>Consultancy</Link>
                            <Link href='/services' className='my-1'>Design</Link>
                            <Link href='/services' className='my-1'>Finishing and Partitioninng works</Link>
                        </div>
                        <div className='md:[40%] flex flex-col text-sm'>
                            <Link href='/services' className='my-1'>Furniture</Link>
                            <Link href='/services' className='my-1'>Decoration</Link>
                            <Link href='/services' className='my-1'>Products Design</Link>
                        </div>
                    </div>
                </div>
                <div className='md:w-[40%] w-full'>
                    <h1 className='text-2xl redex'>Lets work together</h1>
                    <form className='mt-5'>
                        <div className='flex justify-between md:flex-row flex-col'>
                            <input 
                                type="text" 
                                name="" 
                                id=""
                                placeholder='Enter your full  name' 
                                className='md:w-[45%] w-full bg-[#1D1D1D] text-sm text-[#AEABAB] p-3 md:mb-0 mb-3'
                            />
                            <input 
                                type="text" 
                                name="" 
                                id=""
                                placeholder='Enter your Email' 
                                className='md:w-[45%] w-full bg-[#1D1D1D] text-sm text-[#AEABAB] p-3'
                            />
                        </div>
                        <textarea 
                            name="" 
                            id="" 
                            placeholder='Enter your  message'
                            rows={4}
                            className='w-full bg-[#1D1D1D] text-sm text-[#AEABAB] p-3 mt-3'
                        >
                        </textarea>
                        <button 
                            type='submit'
                            className='w-full text-sm bg-white text-black uppercase font-[300] crisis py-3 mt-3'
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
            <div className="container mx-auto text-center mt-20">
                <div className='flex justify-center items-center uppercase redex text-base'>
                    <Link href="#" target='_blank'>INSTAGRAM</Link>
                    <Link href="#" target='_blank' className='mx-6'>LINKEDIN</Link>
                    <Link href="#" target='_blank'>twitter</Link>
                </div>
                <p className="md:w-[20%] w-1/2 mx-auto text-sm text-[#8F8F8F] redex font-[300] mt-5">&copy; {new Date().getFullYear()} All rights reserved by Mozaik concepts</p>
            </div>
        </footer>
    );
};

export default CustomFooter;
