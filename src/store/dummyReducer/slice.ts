import { createSlice } from '@reduxjs/toolkit';

interface DummyReducer {
  data: number;
}
export default createSlice({
  name: 'dummyReducer',
  initialState: { data: 0 },
  reducers: {
    setData: (state, { payload: { data } }) => ({
      ...state,
      data
    })
  }
});
