'use client';
import { configureStore } from '@reduxjs/toolkit'
import darkModeReducer from './Features/darkmode/darkModeSlice'

export const store = configureStore({
  reducer: {
    darkMode: darkModeReducer,
  },
})

export { useSelector, useDispatch } from 'react-redux';
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
