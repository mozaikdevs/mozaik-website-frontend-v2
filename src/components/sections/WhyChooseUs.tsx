import React from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';

const WhyChooseUs: React.FC = () => {
    return (
        <div className="w-full bg-cover bg-center p-20 my-20" style={{ backgroundImage: 'url(/images/6.png)'}}>
            <div className="flex flex-col items-center bg-black bg-opacity-70 px-56 py-20 rounded-[24px]">
                <div className='flex justify-center text-center items-center mb-10'>
                    <div className='h-4 w-3 bg-[#E09F1F] mr-2'></div>
                    <h2 className="text-md font-bold text-center uppercase text-white">wHY CHOOSE US</h2>
                    <div className='h-4 w-3 bg-[#E09F1F] ml-2'></div>
                </div>
                <p className="w-2/3 text-2xl mb-8 text-center uppercase font-[500]">Workspaces are living spaces. That is why they must be carefully thought out</p>
                <div className="w-full flex flex-row justify-between space-x-4">
                    <p className="w-[40%] border-l-4 border-white pl-4">We leverage innovative technology and smart design to transform workspaces into hubs of efficiency and collaboration.</p>
                    <p className="w-[40%] border-l-4 border-white pl-4">Our approach blends creativity with purpose, shaping environments that inspire productivity and support growth.</p>
                </div>
                <button className="flex items-center justify-between mx-auto mt-20 bg-[#E09F1F] hover:bg-blue-700 text-white font-[500] py-3 px-8 rounded-[8px]">
                    Request for a Free Consultation
                    <MdKeyboardArrowRight className='text-2xl ml-2' />
                </button>
            </div>
        </div>
    );
};

export default WhyChooseUs;
