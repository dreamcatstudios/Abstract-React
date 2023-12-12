import { configureStore, createSlice } from "@reduxjs/toolkit";

// State management for the mobile app
const appState = createSlice({
  name: "appState",
  initialState: { appNames: ["homescreen"] },
  reducers: {
    pushApp: (state, action) => {
      state.appNames.push(action.payload);
    },
    popApp: (state) => {
      if (state.appNames.length > 1) state.appNames.pop();
    },
  },
});

// Store
const mobileStore = configureStore({
  reducer: {
    appState: appState.reducer,
  },
});

// Export the actions, reducer, and store
export const { pushApp, popApp } = appState.actions;
export { mobileStore, appState };
