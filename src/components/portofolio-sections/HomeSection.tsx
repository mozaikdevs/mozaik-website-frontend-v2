import React from 'react';

const HomeSection: React.FC = () => {
    return (
        <div className="relative flex justify-center items-center min-h-[calc(100vh-80px)] w-full bg-gradient-to-b from-black to-[#2c210d] my-auto">
            <div className='w-full'>
                <h1 className='w-full text-center text-9xl redex text-white font-black uppercase'>mozaik <span className='font-[200]'>concept</span></h1>
                <div className='w-2/3 mx-auto flex justify-between items-center mt-14'>
                    <div className='w-[25%] flex items-center'>
                        <div className='bg-[#FFBF4B] w-[10px] h-[58px] rounded-[8px]'></div>
                        <h1 className='text-white uppercase font-semibold ml-5 text-sm'>
                            Design Development and  Space Planning
                        </h1>
                    </div>
                    <div className='w-[25%] flex items-center'>
                        <div className='bg-[#FFBF4B] w-[10px] h-[58px] rounded-[8px]'></div>
                        <h1 className='text-white uppercase font-semibold ml-5 text-sm'>
                            Finishing  and Partitioning Work
                        </h1>
                    </div>
                    <div className='w-[25%] flex items-center'>
                        <div className='bg-[#FFBF4B] w-[10px] h-[58px] rounded-[8px]'></div>
                        <h1 className='text-white uppercase font-semibold ml-5 text-sm'>
                            furniture and decoration
                        </h1>
                    </div>
                </div>
            </div>
            <h1 className='absolute text-center bottom-10 outfit text-white uppercase font-[300]'>SCROLL DOWN</h1>
        </div>
    );
};

export default HomeSection;
