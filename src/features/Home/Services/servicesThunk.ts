import { createAsyncThunk } from '@reduxjs/toolkit';
import { Founder, Service } from '../../../../types';
import axios from 'axios';

export const fetchServices = createAsyncThunk<Service[]>('services/fetchServices', async () => {
  const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/service/main_page/`);
  return response.data;
});
