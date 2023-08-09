import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  data: {},
  status: 'idle',
  error: null,
};

const API_KEY = 'abaa07642505571f2a6cee8a00d4ec9a';

export const fetchAirData = createAsyncThunk('air/fetchAirData', async (location) => {
  const response = await axios.get(`https://api.openweathermap.org/geo/1.0/direct?q=${location},VE&limit=5&appid=${API_KEY}`);

  const { lat, lon } = response.data[0];

  const airData = await axios.get(`https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${API_KEY}`);

  return airData.data;
});

const airSlice = createSlice({
  name: 'air',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAirData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAirData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchAirData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default airSlice.reducer;
