import { createSlice } from '@reduxjs/toolkit';

export interface CalloutState {
  isCalloutVisible: boolean;
}

const initialState: CalloutState = {
  isCalloutVisible: false,
};

export const calloutSlice = createSlice({
  name: 'callout',
  initialState,
  reducers: {
    toggleCallout: (state) => {
      state.isCalloutVisible = !state.isCalloutVisible;
    },
    hideCallout: (state) => {
      state.isCalloutVisible = false;
    },
    showCallout: (state) => {
      state.isCalloutVisible = true;
    },

    /**
      as a 2nd parameter you can use PayloadAction
      isisCalloutVisible: (state, action: PayloadAction<boolean>) {
        lab lab lab
        => action.payload
      }
    */
  },
});

// Action creators are generated for each case reducer function
export const { toggleCallout, hideCallout, showCallout } = calloutSlice.actions;

export default calloutSlice.reducer;
