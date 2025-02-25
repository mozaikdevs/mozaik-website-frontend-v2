import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const API_BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:3003/api/v1';

export const getAllProjects = createAsyncThunk(
    'projects/getAllProjects',
    async (_, { rejectWithValue }) => {
      try {
        const response = await axios.get(`${API_BASE_URL}/projects`);
        return response.data;
      } catch (error: any) {
        return rejectWithValue(error.response?.data || 'Failed to fetch projects');
      }
    }
);



export const getAllClients = createAsyncThunk(
    'clients/getAllClients',
    async (_, { rejectWithValue }) => {
      try {
        const response = await axios.get(`${API_BASE_URL}/clients`);
        return response.data;
      } catch (error: any) {
        return rejectWithValue(error.response?.data || 'Failed to fetch clients');
      }
    }
);

export const getAllTestimonials = createAsyncThunk(
  'testimonials/getAlltestimonials',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/testimonials`);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data || 'Failed to fetch testimonials');
    }
  }
);

export const getAllBlogs = createAsyncThunk(
  'blogs/getAllBlogs',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/blogs`);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data || 'Failed to fetch blogs');
    }
  }
);

export const submitContactForm = createAsyncThunk(
  'contact/submitForm',
  async (payload: ContactFormData, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/contact-us`, {
        ...payload,
      });
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data || 'Failed to submit form');
    }
  }
);

export const submitPortofolioContactForm = createAsyncThunk(
  'footer/submitForm',
  async (payload: PortofolioContactFormData, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/contact-us`, {
        ...payload,
      });
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data || 'Failed to submit form');
    }
  }
);

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  topic: string;
  message: string;
}


interface PortofolioContactFormData {
  name: string;
  email: string;
  topic: string;
  message: string;
}
