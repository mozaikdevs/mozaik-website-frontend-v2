import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const API_BASE_URL = 'http://localhost:3003/api/v1';

// const apiClient = axios.create({
//     baseURL: API_BASE_URL,
//     headers: {
//         'Content-Type': 'application/json',
//     },
// });

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
