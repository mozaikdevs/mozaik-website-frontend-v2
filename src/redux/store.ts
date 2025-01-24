import { configureStore } from '@reduxjs/toolkit'
import projectReducer from './features/projectSlice'
import clientReducer from './features/clientSlice'
import testimonialReducer from './features/testimonialSlice'
import blogReducer from './features/blogSlice'

export const store = configureStore({
  reducer: {
    projects: projectReducer,
    clients: clientReducer,
    testimonials: testimonialReducer,
    blogs: blogReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
