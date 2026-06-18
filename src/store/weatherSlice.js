import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchWeather = createAsyncThunk(
  "weather/fetchWeather",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(
        "https://api.open-meteo.com/v1/forecast?latitude=50.06&longitude=19.94&current_weather=true",
      );

      if (!response.ok) {
        throw new Error("Помилка завантаження погоди");
      }

      const data = await response.json();
      return data.current_weather;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    data: null,
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.pending, (state) => {
        state.isLoading = true;

        state.error = null;
      })
      .addCase(fetchWeather.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
        state.error = null;
      })
      .addCase(fetchWeather.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.data = null;
      });
  },
});

export default weatherSlice.reducer;
