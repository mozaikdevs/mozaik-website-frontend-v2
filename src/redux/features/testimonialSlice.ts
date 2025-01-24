import { getAllTestimonials } from '@/services/client';
import { createSlice } from '@reduxjs/toolkit';

interface testimonialState {
  testimonials: any[];
  loading: boolean;
  error: string | null;
}

const initialState: testimonialState = {
  testimonials: [],
  loading: false,
  error: null,
};

const testimonialSlice = createSlice({
  name: 'testimonials',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllTestimonials.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllTestimonials.fulfilled, (state, action) => {
        state.loading = false;
        state.testimonials = action.payload;
      })
      .addCase(getAllTestimonials.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default testimonialSlice.reducer;
