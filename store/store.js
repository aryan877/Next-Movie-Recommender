import { configureStore } from '@reduxjs/toolkit';
import notificationSlice from './notificationSlice';
import movieSlice from './movieSlice'

const store = configureStore({
  reducer: {
    notification: notificationSlice,
    movie: movieSlice,
  },
});

export default store;