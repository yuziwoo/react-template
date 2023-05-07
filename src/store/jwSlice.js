import { createSlice } from '@reduxjs/toolkit'

let jwState = createSlice({
  name: "jwState",
  initialState: `/${document.URL.split("/")[3].trim()}`,
  reducers: {
    resetJW(state, action) {
      return action.payload;
    }
  }
})

export let { resetJW } = jwState.actions;
export default jwState;