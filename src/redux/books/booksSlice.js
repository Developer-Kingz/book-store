import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  data: [],
  loading: false,
  error: null,
};

const APPID = 'UG701wZQf5cDqaJUhVhJ';
const BASE_URL = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${APPID}`;

const fetchData = createAsyncThunk('data/fetchData', async () => {
  try {
    const response = await axios.get(`${BASE_URL}/books`);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
});

const createBookForApp = createAsyncThunk(
  'data/createBookForApp',
  async (bookData, API) => {
    try {
      await axios.post(`${BASE_URL}/books`, bookData);
      API.dispatch(fetchData());
      const response = API.getState().data;
      return response.data;
    } catch (error) {
      throw new Error(error);
    }
  },
);

const removeBookFromApp = createAsyncThunk(
  'data/removeBookFromApp',
  async (itemId, API) => {
    try {
      await axios.delete(`${BASE_URL}/books/${itemId}`);
      API.dispatch(fetchData());
      return itemId;
    } catch (error) {
      throw new Error(error);
    }
  },
);

const booksSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
    removeBook: (state, action) => {
      state.books = state.books.filter(
        (book) => book.bookId !== action.payload,
      );
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export { fetchData, createBookForApp, removeBookFromApp };
export const { addBook, removeBook } = booksSlice.actions;
export default booksSlice.reducer;
