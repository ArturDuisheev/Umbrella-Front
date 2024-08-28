import { createAsyncThunk } from '@reduxjs/toolkit';
import { Founder } from '../../../../types';
import axios from 'axios';

export const fetchFounders = createAsyncThunk<Founder[]>('founders/fetchFounders', async () => {
  const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/about_page/get_founders/`);
  return response.data;
});
