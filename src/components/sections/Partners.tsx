'use client'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '@/redux/store';
import { getAllClients } from '@/services/client';
import Image from 'next/image';
import { Client } from '@/interfaces/client';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

const Partners: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { clients, loading } = useSelector((state: any) => state.clients);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        dispatch(getAllClients());
    }, [dispatch]);

    const handleNext = () => {
        if (currentIndex + 10 < clients.length) {
            setCurrentIndex(currentIndex + 10);
        }
    };

    const handlePrev = () => {
        if (currentIndex - 10 >= 0) {
            setCurrentIndex(currentIndex - 10);
        }
    };

    const displayedClients = clients.slice(currentIndex, currentIndex + 10);

    return (
        <section className="flex flex-col space-y-8 bg-[#FAFAFA] md:py-20 py-5 md:px-16 px-5">
            <div className="w-full flex md:flex-row flex-col md:justify-between justify-center md:items-center items-center">
                <div>
                    <div className='flex md:justify-start justify-center text-center items-center md:mb-10 mb-3'>
                        <div className='h-4 w-3 bg-[#E09F1F] mr-2'></div>
                        <h2 className="text-md font-bold text-center uppercase text-black">PARTNERS</h2>
                        <div className='h-4 w-3 bg-[#E09F1F] ml-2'></div>
                    </div>
                    <p className="w-full md:text-2xl text-xl text-black uppercase text-center md:text-start"><span className='font-[700]'>We WORK </span>WITH</p>
                    <p className="w-full md:text-2xl text-xl text-black uppercase text-center md:text-start mb-8 md:mb-0"><span className='font-[700]'>DIFFERENT</span> PARTNERS</p>
                </div>
                <div className='md:w-1/2 w-full'>
                    <p className='text-[#4C4B4B] md:text-start text-center 2xl:text-lg'>We are passionate about delivering cutting-edge digital innovation, achieving remarkable results that we are proud of.</p>
                </div>
            </div>
            <div className={`grid ${clients.length <= 10 ? clients.length % 2 === 0 ? `md:grid-cols-${clients.length/2}` : `md:grid-cols-${(clients.length + 1)/2}` : 'md:grid-cols-5'} grid-cols-2 gap-0 md:px-20 px-0 py-10 mx-auto`}>
                {loading ? (
                    Array.from({ length: 6 }).map((_, index) => (
                        <SkeletonPartnerCard key={index} />
                    ))
                ) : (
                    displayedClients.map((client: Client, index: number) => (
                    <div
                        key={client._id}
                        title={client.name}
                        className={`md:w-[250px] w-[130px] md:h-[105px] h-[80px] flex items-center justify-center ${
                            (index + 1) % 2 !== 0 ? 'bg-white rounded-lg' : ''
                        }`}
                    >
                        <div title={client.name} className="relative md:w-[150px] w-[95px] md:h-[150px] h-[95px]">
                            <Image
                                src={client.logo}
                                alt={client.name}
                                layout="fill"
                                objectFit="contain"
                                priority
                            />
                        </div>
                    </div>
                )))}
            </div>
            <div className='flex justify-end space-x-5'>
                <button 
                    onClick={handlePrev} 
                    className={`bg-white rounded-xl z-10 p-3 ${currentIndex - 10 < 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                    disabled={currentIndex - 10 < 0}
                >
                    <MdKeyboardArrowLeft className="text-4xl text-black" />
                </button>
                <button 
                    onClick={handleNext} 
                    className={`bg-white rounded-xl z-10 p-3 ${currentIndex + 10 >= clients.length ? 'opacity-50 cursor-not-allowed' : ''}`}
                    disabled={currentIndex + 10 >= clients.length}
                >
                    <MdKeyboardArrowRight className="text-4xl text-black" />
                </button>
            </div>
        </section>
    );
};

const SkeletonPartnerCard: React.FC = () => {
    return (
      <div className="md:w-[250px] w-[130px] md:h-[105px] h-[80px] flex items-center justify-center bg-gray-300 animate-pulse rounded-lg space-x-2">
        <div className="relative md:w-[90px] w-[95px] md:h-[110px] h-[65px] bg-gray-400"></div>
      </div>
    );
};

export default Partners;
