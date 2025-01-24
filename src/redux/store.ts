import { configureStore } from '@reduxjs/toolkit'
import projectReducer from './features/projectSlice'
import clientReducer from './features/clientSlice'
import testimonialReducer from './features/testimonialSlice'

export const store = configureStore({
  reducer: {
    projects: projectReducer,
    clients: clientReducer,
    testimonials: testimonialReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
