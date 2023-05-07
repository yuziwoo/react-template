import { createSlice } from '@reduxjs/toolkit'

let jwState = createSlice({
  name: "jwState",
  initialState: 0,
  reducers: {
    resetJW(state) {
      return state == 0 ? 1 : 0;
    }
  }
})

export let { resetJW } = jwState.actions;
export default jwState;