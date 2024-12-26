import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosApi from '../../axiosApi.ts';
import { ILink } from '../../types';

export const shortenLink = createAsyncThunk(
  'links/shortenLink',
  async (originalUrl: string) => {
    const response = await axiosApi.post<ILink>('/links', {originalUrl});
    return response.data;
  },
);