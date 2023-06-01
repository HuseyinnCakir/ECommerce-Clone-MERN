import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  name: '',
  status: 'idle',
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {},
})

export const {} = userSlice.actions

export default userSlice.reducer
