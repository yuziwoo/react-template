import { configureStore } from '@reduxjs/toolkit'
import jwState from "./../store/jwSlice.js"

export default configureStore({
  reducer: {
    jwState: jwState.reducer,
  }
})