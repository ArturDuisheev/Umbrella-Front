import { createAsyncThunk } from '@reduxjs/toolkit';
import { Review } from '../../../../types';
import axios from 'axios';

export const fetchReviews = createAsyncThunk<Review[]>('reviews/fetchReviews', async () => {
  const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/reviews/get/`);
  return response.data;
});
