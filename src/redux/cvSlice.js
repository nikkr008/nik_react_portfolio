import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { db } from '../utils/firebase';
import { doc, getDoc } from 'firebase/firestore';

// Create async thunk for fetching CV URL
export const fetchCvUrl = createAsyncThunk(
  'cv/fetchCvUrl',
  async (_, { rejectWithValue }) => {
    try {
      // Get document reference for "Resume" in "PersonalDocuments" collection
      const docRef = doc(db, "PersonalDocuments", "Resume");
      
      // Get the document
      const docSnap = await getDoc(docRef);
      
      if (!docSnap.exists()) {
        throw new Error('Resume document not found');
      }
      
      // Get the ResumeLink field from the document
      const data = docSnap.data();
      return data.ResumeLink;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  cvUrl: null,
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null
};

const cvSlice = createSlice({
  name: 'cv',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCvUrl.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchCvUrl.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.cvUrl = action.payload;
      })
      .addCase(fetchCvUrl.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  }
});

export default cvSlice.reducer; 