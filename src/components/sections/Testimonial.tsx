'use client'
import type { Testimonial } from '@/interfaces/testimonial';
import { AppDispatch } from '@/redux/store';
import { getAllTestimonials } from '@/services/client';
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { FaQuoteLeft } from 'react-icons/fa';
import { IoIosArrowRoundForward } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { Swiper as SwiperType } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { truncateDetails } from '@/utils';
import Link from 'next/link';
import { MdArrowOutward } from 'react-icons/md';


const Testimonial: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { testimonials, loading } = useSelector((state: any) => state.testimonials);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedTestimonial, setSelectedTestimonial] = useState<Testimonial | null>(null);

    useEffect(() => {
        dispatch(getAllTestimonials());
    },[dispatch]);

    const handleReadMoreClick = (testimonial: Testimonial) => {
      setSelectedTestimonial(testimonial);
      setIsModalOpen(true);
    };
  
    const handleCloseModal = () => {
      setIsModalOpen(false);
      setSelectedTestimonial(null);
    };

  return (
    <div className='flex w-full h-full justify-between items-center md:py-20 py-10 bg-[#FAFAFA]'>
        <div className="relative w-full h-full overflow-hidden">
          {/* <div className="w-[95%] px-[5%] relative overflow-hidden rounded-lg mb-14"> */}
            <div className='md:mb-28 mb-16'>
              <div className='flex justify-center items-center mb-10'>
                <div className='h-4 w-3 bg-[#E09F1F] mr-2'></div>
                  <h2 className="text-md font-bold text-center uppercase text-black">Testimonials</h2>
                <div className='h-4 w-3 bg-[#E09F1F] ml-2'></div>
              </div>
              <p className="md:text-3xl text-xl text-black text-center md:mb-16 mb-5 md:px-[20%] font-[300] uppercase ">Our clients’ <span className='font-[700]'>stories</span>  show how we bring <span className='font-[700]'>their visions </span>to life with custom <span className='font-[700]'>design solutions.</span>.</p>
            </div>
          {/* </div> */}
          <div className='w-[80%] mx-auto'>
            <Swiper
              modules={[Autoplay, Pagination]}
              spaceBetween={50}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
                bulletClass: 'swiper-pagination-bullet',
                bulletActiveClass: 'swiper-pagination-bullet-active',
                renderBullet: function(this: SwiperType, index: number, className: string) {
                  return `<button class="${className} h-[9px] ${
                    this.realIndex === index ? 'w-[94px] bg-black' : 'w-[31px] bg-[#EBEBEB]'
                  }"></button>`;
                }
              }}
              loop={true}
              breakpoints={{
                  640: {
                      slidesPerView: 1,
                  },
                  768: {
                      slidesPerView: 2,
                  },
                  1024: {
                      slidesPerView: 2.5,
                  },
              }}
            >
              {loading ? (
                    Array.from({ length: 3 }).map((_, index) => (
                        <SwiperSlide key={index}>
                            <SkeletonTestimonialCard />
                        </SwiperSlide>
                    ))
              ) : (
              testimonials.map((testimonial: Testimonial, index: number) => (
                <SwiperSlide key={index}>
                  <div className='p-5 bg-white rounded-xl h-full'>
                    {/* Header */}
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 mr-4 bg-[#F2F2F2] rounded-xl flex items-center justify-center">
                        <Image
                          src={testimonial.clientId.logo}
                          alt={`${testimonial.name} logo`}
                          width={48}
                          height={48}
                          className="rounded-full"
                        />
                      </div>
                      <div>
                        <div className='flex text-black text-sm'>
                          <h2 className="mr-1">{testimonial.name.split(' ')[0]}</h2>
                          <h2 className="font-semibold uppercase">{testimonial.name.split(' ')[1]}</h2>
                        </div>
                        <p className="text-gray-600 text-sm">{testimonial.employeePosition} - {testimonial.clientId.name}</p> 
                      </div>
                    </div>

                    {/* Body */}
                    <div className="w-full flex md:flex-row justify-start flex-col mb-4 items-start">
                      <FaQuoteLeft className='w-[15%] md:text-2xl text-xl mb-5 md:mb-0 text-[#2D2A2A] -ml-3' />
                      <p className="w-[85%] text-gray-800 text-sm">{truncateDetails(testimonial.content, 280)}</p>
                    </div>

                    {/* Read More Button */}
                    <button 
                      className="flex items-center bg-[#FFF9EF] text-black hover:underline px-5 py-2 rounded-xl uppercase font-bold text-sm"
                      onClick={() => handleReadMoreClick(testimonial)}
                    >
                      Read more
                      <IoIosArrowRoundForward className='text-black text-3xl ml-2' />
                    </button>
                  </div>
                </SwiperSlide>
              )))}
            </Swiper>
          </div>
          {/* Modal */}
          {isModalOpen && selectedTestimonial && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              <div className="flex flex-row-reverse items-start bg-white px-5 rounded-xl w-11/12 md:w-1/2">
                <div className="flex justify-end">
                  <button onClick={handleCloseModal} className="text-black text-5xl">&times;</button>
                </div>
                <div className='p-5 bg-white rounded-xl h-full'>
                  {/* Header */}
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 mr-4 bg-[#F2F2F2] rounded-xl flex items-center justify-center">
                      <Image
                        src={selectedTestimonial.clientId.logo}
                        alt={`${selectedTestimonial.name} logo`}
                        width={48}
                        height={48}
                        className="rounded-full"
                      />
                    </div>
                    <div>
                      <div className='flex text-black text-sm'>
                        <h2 className="mr-1">{selectedTestimonial.name.split(' ')[0]}</h2>
                        <h2 className="font-semibold uppercase">{selectedTestimonial.name.split(' ')[1]}</h2>
                      </div>
                      <p className="text-gray-600 text-sm">{selectedTestimonial.employeePosition} - {selectedTestimonial.clientId.name}</p>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="w-full flex md:flex-row justify-start flex-col mb-4 items-start">
                    <FaQuoteLeft className='w-[15%] md:text-2xl text-xl mb-5 md:mb-0 text-[#2D2A2A] -ml-3' />
                    <p className="w-[85%] text-gray-800 text-sm">{selectedTestimonial.content}</p>
                  </div>

                  {/* PDF Attachment */}
                  <div className="mt-4">
                    <Link
                      href={selectedTestimonial.attachment}
                      target="_blank"
                      className="text-[#E09F1F] text-sm flex items-center my-5"
                    >
                      View Attachment
                      <MdArrowOutward className='text-2xl ml-2'/>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
    </div>
  );
}
const SkeletonTestimonialCard: React.FC = () => {
  return (
    <div className="p-5 bg-white rounded-xl h-full animate-pulse">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 mr-4 bg-gray-300 rounded-xl"></div>
        <div>
          <div className="flex text-black text-sm">
            <div className="bg-gray-300 h-4 w-16 mr-1"></div>
            <div className="bg-gray-300 h-4 w-24"></div>
          </div>
          <div className="bg-gray-300 h-4 w-32 mt-2"></div>
        </div>
      </div>
      <div className="w-full flex md:flex-row justify-start flex-col mb-4 items-start">
        <div className="w-[15%] md:text-2xl text-xl mb-5 md:mb-0 bg-gray-300 h-8"></div>
        <div className="w-[85%] bg-gray-300 h-24"></div>
      </div>
      <div className="flex items-center bg-gray-300 h-10 w-32 rounded-xl"></div>
    </div>
  );
};

export default Testimonial;
