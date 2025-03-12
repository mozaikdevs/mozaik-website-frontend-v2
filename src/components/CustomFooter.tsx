'use client'
import { AppDispatch } from '@/redux/store';
import { submitPortofolioContactForm } from '@/services/client';
import Link from 'next/link';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';

const CustomFooter: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const [loading, setLoading] = useState(false);
    const initialState = {
        name: '',
        email: '',
        message: '',
        topic: 'Portfolio',
    };
    const [formData, setFormData] = useState(initialState);

    const handleSubmit = async (e: React.FormEvent) => {
        
        e.preventDefault();
        setLoading(true);
        if(!formData.name || !formData.email || !formData.message){
            setLoading(false);
            if(!formData.name) return toast.error('Name is required');
            if(!formData.email) return toast.error('Email is required');
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if(!emailRegex.test(formData.email)) return toast.error('Invalid email address');
            if(!formData.message) return toast.error('Message is required');
        }
        try {
            await dispatch(submitPortofolioContactForm(formData)).unwrap();
            toast.success('Message sent successfully!');
            setFormData(initialState);
        } catch (error) {
            if(error){
                toast.error('Failed to send message. Please try again.');
            }
        } finally {
            setLoading(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };
    return (
        <footer id="footer" className="w-full bg-black text-white md:p-20 p-5">
            <ToastContainer/>
            <div className='w-full flex justify-between md:flex-row flex-col'>
                <div className='md:w-[40%] w-full'>
                    <h1 className='w-2/3 md:text-5xl text-3xl redex font-bold'>WHAT <span className='font-normal'>WE DO</span> FOR YOU</h1>
                    <div className='md:w-2/3 w-full flex justify-between redex my-8'>
                        <div className='w-[40%] flex flex-col text-sm'>
                            <Link href='/services/#design' className='my-1'>Consultancy</Link>
                            <Link href='/services/#design' className='my-1'>Design</Link>
                            <Link href='/services/#finishing' className='my-1'>Finishing and Partitioninng works</Link>
                        </div>
                        <div className='md:[40%] flex flex-col text-sm'>
                            <Link href='/services/#furniture' className='my-1'>Furniture</Link>
                            <Link href='/services/#furniture' className='my-1'>Decoration</Link>
                            <Link href='/services/#design' className='my-1'>Products Design</Link>
                        </div>
                    </div>
                </div>
                <div className='md:w-[40%] w-full'>
                    <h1 className='text-2xl redex'>Let's work together</h1>
                    <form className='mt-5' onSubmit={handleSubmit}>
                        <div className='flex justify-between md:flex-row flex-col'>
                            <input 
                                type="text" 
                                name="name" 
                                value={formData.name}
                                onChange={handleChange}
                                placeholder='Enter your full name' 
                                className='md:w-[45%] w-full bg-[#1D1D1D] text-sm text-[#AEABAB] p-3 md:mb-0 mb-3 outfit'
                            />
                            <input 
                                type="email" 
                                name="email" 
                                value={formData.email}
                                onChange={handleChange}
                                placeholder='Enter your Email' 
                                className='md:w-[45%] w-full bg-[#1D1D1D] text-sm text-[#AEABAB] p-3 outfit'
                            />
                        </div>
                        <textarea 
                            name="message" 
                            value={formData.message}
                            onChange={handleChange}
                            placeholder='Enter your message'
                            rows={4}
                            className='w-full bg-[#1D1D1D] text-sm text-[#AEABAB] p-3 mt-3 outfit'
                        >
                        </textarea>
                        <button 
                            type='submit'
                            disabled={loading}
                            className='w-full redex text-sm bg-white text-black uppercase font-black py-3 mt-3 disabled:opacity-50'
                        >
                            {loading ? 'Sending...' : 'Send Message'}
                        </button>
                    </form>
                </div>
            </div>
            <div className="container mx-auto text-center mt-20">
                <div className='flex justify-center items-center uppercase redex text-base'>
                    <Link href="https://www.instagram.com/mozaikconcepts?igsh=NnNjMWFubzQ3enJj" target='_blank'>INSTAGRAM</Link>
                    <Link href="https://www.linkedin.com/in/mozaik-concepts-ltd-83233b233" target='_blank' className='mx-6'>LINKEDIN</Link>
                    <Link href="https://www.facebook.com/share/12EyZfR9gSe/?mibextid=wwXIfr" target='_blank'>FACEBOOK</Link>
                </div>
                <p className="md:w-[20%] w-1/2 mx-auto text-sm text-[#8F8F8F] redex font-[300] mt-5">&copy; {new Date().getFullYear()} All rights reserved by Mozaik concepts</p>
            </div>
        </footer>
    );
};

export default CustomFooter;
