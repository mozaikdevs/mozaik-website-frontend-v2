import { getAllClients } from '@/services/client';
import { createSlice } from '@reduxjs/toolkit';

interface clientState {
  clients: any[];
  loading: boolean;
  error: string | null;
}

const initialState: clientState = {
  clients: [],
  loading: false,
  error: null,
};

const clientSlice = createSlice({
  name: 'clients',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllClients.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllClients.fulfilled, (state, action) => {
        state.loading = false;
        state.clients = action.payload;
      })
      .addCase(getAllClients.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default clientSlice.reducer;
