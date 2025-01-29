import { createSlice } from '@reduxjs/toolkit'
import { getUserAction, signinAction, updateUserAction } from './actions'


const initialState = {
  firstName: '',
  lastName: '',
  token: localStorage.getItem('token'),
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setToken: (state, action) => {
        state.token = action.payload.token
    } 
  },
  extraReducers: (builder) => {
    builder.addCase(signinAction.fulfilled, (state, action) => {
      state.token = action.payload.token
    }),
    builder.addCase(getUserAction.fulfilled, (state, action) => {
      state.firstName = action.payload.firstName
      state.lastName = action.payload.lastName
    }),
    builder.addCase(updateUserAction.fulfilled, (state, action) => {
      state.firstName = action.payload.firstName
      state.lastName = action.payload.lastName
    })    
  },
})

// Action creators are generated for each case reducer function
export const { setUser, setToken } = userSlice.actions

export default userSlice.reducer