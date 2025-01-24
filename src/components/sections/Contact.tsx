'use client'
import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { submitContactForm } from '@/services/client';
import Image from 'next/image';
import React from 'react';
import { FaFacebookF } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/redux/store';

const Contact: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const [loading, setLoading] = useState(false);
    const initialState = {
        name: '',
        email: '',
        phone: '',
        topic: '',
        message: ''
      };
    const [formData, setFormData] = useState(initialState);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        
        try {
            await dispatch(submitContactForm(formData)).unwrap();
            toast.success('Message sent successfully!');
            setFormData(initialState);
        } catch (error) {
            toast.error('Failed to send message. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData(prev => ({
        ...prev,
        [e.target.name]: e.target.value
        }));
    };
    return (
        <section className="flex justify-between px-32 py-32">
            <ToastContainer />
            {/* First Element */}
            <div className="relative w-2/5 bg-[#143755] rounded-2xl p-10 text-white z-10">
                <div className='flex justify-start items-center'>
                    <div className='h-4 w-2 bg-[#E09F1F] mr-2'></div>
                    <h2 className="text-sm font-bold text-center uppercase text-[#E09F1F]">Reach out to us</h2>
                    <div className='h-4 w-2 bg-[#E09F1F] ml-2'></div>
                </div>
                <p className="w-1/2 text-2xl mb-2 capitalize font-bold my-5">We'd love to hear from you!</p>
                <p className="w-2/3 text-sm mb-8">Feel free to reach out to us with any questions or concerns.</p>
                <div className="space-y-8">
                    <div className="flex items-center">
                        <div className="w-16 h-12 bg-[#183E5E] rounded-[8px] flex items-center justify-center mr-5">
                            <div className='w-6 h-6 relative'>
                                <Image 
                                    src="/icons/locations2.svg" 
                                    alt="Location" 
                                    fill
                                />
                            </div>
                        </div>
                        <div>
                            <p className="font-bold">Address</p>
                            <p>3 KG 686 st, Kigali</p>
                        </div>
                    </div>
                    <div className="flex items-center my-10">
                        <div className="w-16 h-12 bg-[#183E5E] rounded-[8px] flex items-center justify-center mr-5">
                            <div className='w-6 h-6 relative'>
                                    <Image 
                                        src="/icons/mail2.svg" 
                                        alt="Location" 
                                        fill
                                    />
                            </div>
                        </div>
                        <div>
                            <p className="font-bold">Email</p>
                            <p>info@mozaikconcepts.com</p>
                        </div>
                    </div>
                    <div className="flex items-center ">
                        <div className="w-16 h-12 bg-[#183E5E] rounded-[8px] flex items-center justify-center mr-5">
                            <div className='w-6 h-6 relative'>
                                <Image 
                                    src="/icons/phone2.svg" 
                                    alt="Location" 
                                    fill
                                />
                            </div>
                        </div>
                        <div>
                            <p className="font-bold">Phone</p>
                            <p>+250 791 903 218</p>
                        </div>
                    </div>
                </div>
                <div className="absolute bottom-[-20px] right-[-60px] w-28 h-28 -z-10">
                    <Image 
                        src="/icons/decor.svg" 
                        alt="Decoration" 
                        layout="fill" 
                    />
                </div>
                <div className="absolute inset-0 bg-[#143755] rounded-2xl z-[-1]"></div>
            </div>

            {/* Second Element */}
            <div className="w-[50%]">
                <h2 className="text-3xl text-black mb-10 uppercase font-[300]">Send us <span className='font-[800]'>a Message</span></h2>
                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div className="flex space-x-4">
                        <div className='w-1/2 flex flex-col'>
                            <label className='text-[#535353] text-sm mb-2'>Full Name</label>
                            <input 
                                type="text"
                                name="name"
                                value={formData.name} 
                                placeholder="Enter your name" 
                                className="w-full bg-[#F9F9F9] text-sm h-[48px] text-[#AFAFAF] px-4 border-none rounded" 
                                onChange={handleChange}
                            />
                        </div>
                        <div className='w-1/2 flex flex-col'>
                            <label className='text-[#535353] text-sm mb-2'>Email</label>
                            <input 
                                type="email" 
                                name="email"
                                value={formData.email}
                                placeholder="Enter  your email" 
                                className="w-full bg-[#F9F9F9] text-sm h-[48px] text-[#AFAFAF] px-4 border-none rounded" 
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="flex space-x-4">
                        <div className='w-1/2 flex flex-col'>
                            <label className='text-[#535353] text-sm mb-2'>Phone Number</label>
                            <input 
                                type="text" 
                                name="phone"
                                value={formData.phone}
                                placeholder="Enter your phone number" 
                                className="w-full bg-[#F9F9F9] text-sm h-[48px] text-[#AFAFAF] px-4 border-none rounded" 
                                onChange={handleChange}
                            />
                        </div>
                        <div className='w-1/2 flex flex-col'>
                            <label className='text-[#535353] text-sm mb-2'>Topic</label>
                            <select 
                                name="topic"
                                value={formData.topic}
                                onChange={handleChange}
                                className="w-full bg-[#F9F9F9] text-sm h-[48px] text-[#AFAFAF] px-4 border-none rounded"
                                required
                                >
                                <option value="" disabled>Select topic</option>
                                <option value="general">General Inquiry</option>
                                <option value="support">Support</option>
                                <option value="feedback">Feedback</option>
                            </select>
                        </div>
                    </div>
                    <div className='w-full flex flex-col'>
                        <label className='text-[#535353] text-sm mb-2'>Message</label>
                        <textarea 
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Tell us something..." 
                            className="w-full bg-[#F9F9F9] text-sm h-32 text-[#AFAFAF] px-4 py-3 border-none rounded"
                        ></textarea>
                    </div>
                    <button 
                        type="submit" 
                        className="bg-[#E09F1F] text-white py-3 px-28 rounded text-sm my-10"
                    >
                        {loading ? 'Sending...' : 'Send Message'}
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
