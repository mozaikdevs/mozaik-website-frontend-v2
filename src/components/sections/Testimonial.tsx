'use client'
import { AppDispatch } from '@/redux/store';
import { getAllTestimonials } from '@/services/client';
import Image from 'next/image'
import React, { useEffect, useState, useRef } from 'react'
import { FaQuoteLeft } from 'react-icons/fa';
import { IoIosArrowRoundForward } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';

const Testimonial: React.FC = () => {

    //interfaces

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
    
    interface Testimonial {
      _id: string;
      clientId: Client;
      name: string;
      employeePosition: string;
      content: string;
      attachment: string;
      priority: number;
      createdAt: string;
      updatedAt: string;
    }

    // State and refs
    const [currentSlide, setCurrentSlide] = useState(0)
    const autoScrollInterval = 5000
    const carouselRef = useRef<HTMLDivElement>(null)

    const dispatch = useDispatch<AppDispatch>();
    const { testimonials } = useSelector((state: any) => state.testimonials);
    useEffect(() => {
        dispatch(getAllTestimonials());
    },[dispatch]);

  // Create array with duplicated items for infinite loop
  const allSlides = [...testimonials, ...testimonials, ...testimonials, ...testimonials]

  // Automatically move to the next slide after a set interval
  useEffect(() => {
    const interval = setInterval(nextSlide, autoScrollInterval)
    return () => clearInterval(interval)
  }, [currentSlide])

  const nextSlide = () => {
    setCurrentSlide(prev => {
      // When reaching end of original set, reset to start
      if (prev >= testimonials.length - 1) {
        setTimeout(() => {
          setCurrentSlide(0)
        }, 500)
        return testimonials.length
      }
      return prev + 1
    })
  }

  const prevSlide = () => {
    setCurrentSlide(prev => {
      if (prev <= 0) {
        // Reset to last slide seamlessly
        setTimeout(() => {
          setCurrentSlide(testimonials.length - 1)
        }, 500)
        return -1
      }
      return prev - 1
    })
  }

  // Handle touch swipe events for mobile devices
  useEffect(() => {
    const carousel = carouselRef.current;
    let startX: number | null = null;

    const handleTouchStart = (e: TouchEvent) => {
      startX = e.touches[0].clientX;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!startX) return;
      const moveX = e.touches[0].clientX;
      const difference = startX - moveX;

      if (difference > 50) {
        // Swipe left
        nextSlide();
      } else if (difference < -50) {
        // Swipe right
        prevSlide();
      }

      startX = null;
    };

    if (carousel) {
      carousel.addEventListener('touchstart', handleTouchStart);
      carousel.addEventListener('touchmove', handleTouchMove);
    }

    return () => {
      if (carousel) {
        carousel.removeEventListener('touchstart', handleTouchStart);
        carousel.removeEventListener('touchmove', handleTouchMove);
      }
    };
  }, []);

  return (
    <div className='flex w-full h-full justify-between items-center py-20 bg-[#FAFAFA]'>
        <div ref={carouselRef} id="default-carousel" className="relative w-full h-full overflow-hidden" data-carousel="slide">
            {/* Carousel wrapper */}
            <div className="w-[95%] px-[5%] relative overflow-hidden rounded-lg mb-14">
                <div className='mb-28'>
                    <div className='flex justify-center items-center mb-10'>
                        <div className='h-4 w-3 bg-[#E09F1F] mr-2'></div>
                        <h2 className="text-md font-bold text-center uppercase text-black">Testimonials</h2>
                        <div className='h-4 w-3 bg-[#E09F1F] ml-2'></div>
                    </div>
                    <p className="text-3xl text-black text-center mb-16 md:px-[20%] font-[300] uppercase ">Our clients’ <span className='font-[700]'>stories</span>  show how we bring <span className='font-[700]'>their visions </span>to life with custom <span className='font-[700]'>design solutions.</span>.</p>
                </div>
            <div className="relative overflow-hidden">
            <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                transform: `translateX(-${(currentSlide) * 33.33}%)`,
                }}
            >
                {allSlides.map((testimonial: Testimonial, index: number) => (
                    <div 
                    key={index} 
                    className='min-w-[33.33%] p-5 bg-white mx-5 rounded-xl' // Fixed width and spacing
                >
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
                        <p className="text-gray-600 text-sm">{testimonial.employeePosition}</p>
                        </div>
                    </div>

                    {/* Body */}
                    <div className="flex mb-4 items-start">
                    <FaQuoteLeft className='text-4xl text-[#2D2A2A] mr-4' />
                    <p className="text-gray-800 text-sm">{testimonial.content}</p>
                    </div>

                    {/* Read More Button */}
                    <button className="flex items-center bg-[#FFF9EF] text-black hover:underline px-5 py-2 rounded-xl uppercase font-bold text-sm">
                    Read more
                    <IoIosArrowRoundForward className='text-black text-3xl ml-2' />
                    </button>
                </div>
                ))}
            </div>
            </div>
            </div>

            {/* Slider indicators */}
            <div className="absolute z-30 flex -translate-x-1/2 bottom-0 left-1/2 space-x-3 rtl:space-x-reverse mt-20">
            {testimonials.map((testimonial : Testimonial, index: number) => (
                <button
                  key={index}
                  type="button"
                  className={`h-[9px] ${index === currentSlide ? 'bg-black w-[94px]' : 'bg-[#EBEBEB] w-[31px]'}`}
                  aria-label={`Slide ${index + 1}`}
                  onClick={() => setCurrentSlide(index)}
                ></button>
            ))}
            </div>
        </div>
    </div>
  );
}

export default Testimonial;
