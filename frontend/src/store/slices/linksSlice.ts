import { ILink } from '../../types';
import { createSlice } from '@reduxjs/toolkit';
import { shortenLink } from '../thunks/linksThunk.ts';
import { RootState } from '../../app/store.ts';

interface ILinksState {
  link: ILink | null;
  loading: boolean;
  error: boolean;
}

const initialState: ILinksState = {
  link: null,
  loading: false,
  error: false,
};

export const selectLink = (state: RootState) => state.links.link;
export const selectLoading = (state: RootState) => state.links.loading;

export const linksSlice = createSlice({
  name: 'links',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(shortenLink.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(shortenLink.fulfilled, (state, action) => {
        state.loading = false;
        state.link = action.payload;
      })
      .addCase(shortenLink.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export const linksReducer = linksSlice.reducer;