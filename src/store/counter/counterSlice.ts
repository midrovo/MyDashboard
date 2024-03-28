import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CounterState {
    count: number,
    isReady: boolean
}

const valueCount = ( value : number ) => value

const initialState : CounterState = {
  count: 5,
  isReady: false,
}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    initCounterState(state, action : PayloadAction<number>) {
      if( state.isReady ) return;

      state.count = action.payload
      state.isReady = true;
    },
    
    addOne(state) {
      state.count++;
    },

    substracOne(state) {
      if(state.count > 1) {
        state.count--;
      }
    },

    resetCount(state, action : PayloadAction<number>) {
      state.count = action.payload
    }
  }
});

export const { addOne, substracOne, resetCount, initCounterState } = counterSlice.actions;

export default counterSlice.reducer;