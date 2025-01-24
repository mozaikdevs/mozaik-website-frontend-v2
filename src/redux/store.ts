import { configureStore } from '@reduxjs/toolkit'
import projectReducer from './features/projectSlice'
import clientReducer from './features/clientSlice'

export const store = configureStore({
  reducer: {
    projects: projectReducer,
    clients: clientReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
