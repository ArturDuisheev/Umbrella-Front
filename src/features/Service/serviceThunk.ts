import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { ServicePage } from '../../../types';

export const fetchServicePage = createAsyncThunk<ServicePage[]>(
  'servicePage/fetchServicePage',
  async () => {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/service/get/`);
    return response.data;
  },
);
