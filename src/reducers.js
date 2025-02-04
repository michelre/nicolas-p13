import { createSlice } from '@reduxjs/toolkit'
import { getUserAction, signinAction, updateUserAction } from './actions'


const initialState = {
  firstName: '',
  lastName: '',
  token: localStorage.getItem('token'),
  error: null,
  loading: false
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
      state.loading = false
    }),
    builder.addCase(signinAction.pending, (state) => {
      state.error = null
      state.loading = true
    }),
    builder.addCase(signinAction.rejected, (state, action) => {
      state.error = action.error.message
      state.loading = false
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