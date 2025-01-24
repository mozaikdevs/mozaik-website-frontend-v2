import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '@/redux/store';
import { getAllClients } from '@/services/client';
import Image from 'next/image';

interface Client {
    _id: string;
    name: string;
    email: string;
    phone: string;
    logo: string;
    streetAddress: string;
    city: string;
    companySector: string;
    googleDriveDataLink: string;
    createdAt: string;
    updatedAt: string;
}

const Partners: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const allClients = useSelector((state: any) => state.clients.clients);

    useEffect(() => {
        dispatch(getAllClients());
    }, [dispatch]);

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
            <div className={`grid ${allClients.length <= 10 ? allClients.length % 2 === 0 ? `grid-cols-${allClients.length/2}` : `grid-cols-${(allClients.length + 1)/2}` : 'grid-cols-5'} gap-0 px-20 py-10 mx-auto`}>
                {allClients.map((client: Client, index: number) => (
                    <div
                        key={client._id}
                        className={`w-[250px] h-[105px] flex items-center justify-center ${
                            (index + 1) % 2 !== 0 ? 'bg-white rounded-lg' : ''
                        }`}
                    >
                        <div className="relative w-[110px] h-[110px]">
                            <Image
                                src={client.logo}
                                alt={client.name}
                                layout="fill"
                                objectFit="contain"
                                priority
                            />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Partners;
