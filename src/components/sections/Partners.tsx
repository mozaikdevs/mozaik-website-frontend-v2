import Image from 'next/image';
import React from 'react';

const Partners: React.FC = () => {
    return (
        <section className="flex flex-col space-y-8 bg-[#FAFAFA] py-20 px-16">
            <div className="flex justify-between items-end">
                <div>
                    <div className='flex justify-start items-center mb-10'>
                        <div className='h-4 w-3 bg-[#E09F1F] mr-2'></div>
                        <h2 className="text-md font-bold text-center uppercase text-black">PARTNERS</h2>
                        <div className='h-4 w-3 bg-[#E09F1F] ml-2'></div>
                    </div>
                    <p className="text-2xl text-black uppercase"><span className='font-[700]'>We WORK </span>WITH</p>
                    <p className="text-2xl text-black uppercase"><span className='font-[700]'>DIFFERENT</span> PARTNERS</p>
                </div>
                <div className='w-1/2'>
                    <p className='text-[#4C4B4B]'>We are passionate about delivering cutting-edge digital innovation, achieving remarkable results that we are proud of."</p>
                </div>
            </div>
            <div className="grid grid-cols-5 gap-0 px-20 py-10">
                {Array.from({ length: 10 }).map((_, index) => (
                    <div
                        key={index}
                        className={`w-[250px] h-[105px] flex items-center justify-center ${
                            (index % 2 !== 0)
                            ? 'bg-white rounded-lg'
                            : ''
                        }`}
                    >
                        <div className="relative w-[110px] h-[110px]">
                            <Image
                            src={`/images/logo${index + 1}.png`}
                            alt={`Partner ${index + 1}`}
                            layout="fill"
                            objectFit="contain"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Partners;
