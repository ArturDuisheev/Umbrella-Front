import { createAsyncThunk } from '@reduxjs/toolkit';
import { Portfolio } from '../../../../types';
import axios from 'axios';

export const fetchPortfolios = createAsyncThunk<Portfolio[]>(
  'portfolios/fetchPortfolios',
  async () => {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/portfolio/get/`);
    return response.data;
  },
);
