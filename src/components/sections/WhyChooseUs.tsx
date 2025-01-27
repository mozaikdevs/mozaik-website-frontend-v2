import React from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';

const WhyChooseUs: React.FC = () => {
    return (
        <div className="w-full bg-cover bg-center md:p-20 p-5 md:my-20 my-10" style={{ backgroundImage: 'url(/images/6.png)'}}>
            <div className="flex flex-col items-center bg-black bg-opacity-70 md:px-56 px-5 md:py-20 py-10 rounded-[24px]">
                <div className='flex justify-center text-center items-center mb-10'>
                    <div className='h-4 w-3 bg-[#E09F1F] mr-2'></div>
                    <h2 className="text-md font-bold text-center uppercase text-white">wHY CHOOSE US</h2>
                    <div className='h-4 w-3 bg-[#E09F1F] ml-2'></div>
                </div>
                <p className="md:w-2/3 w-full md:text-2xl text-lg mb-8 text-center uppercase font-[500]">Workspaces are living spaces. That is why they must be carefully thought out</p>
                <div className="w-full flex md:flex-row flex-col md:justify-between justify-start md:space-x-4 space-y-8">
                    <p className="md:w-[40%] w-full border-l-4 border-white pl-4">We leverage innovative technology and smart design to transform workspaces into hubs of efficiency and collaboration.</p>
                    <p className="md:w-[40%] w-full border-l-4 border-white pl-4">Our approach blends creativity with purpose, shaping environments that inspire productivity and support growth.</p>
                </div>
                <button className="flex items-center text-sm justify-start mx-auto mt-20 bg-[#E09F1F] hover:bg-[#ae7c18] text-white font-[500] py-3 md:px-8 px-4 rounded-[8px]">
                    Request for a Free Consultation
                    <MdKeyboardArrowRight className='text-2xl ml-2' />
                </button>
            </div>
        </div>
    );
};

export default WhyChooseUs;
