import { createAsyncThunk } from '@reduxjs/toolkit';
import { Vacancy } from '../../../../types';
import axios from 'axios';

export const fetchVacancies = createAsyncThunk<Vacancy[]>('vacancies/fetchVacancies', async () => {
  const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/about_page/get_vacancy/`);
  return response.data;
});
