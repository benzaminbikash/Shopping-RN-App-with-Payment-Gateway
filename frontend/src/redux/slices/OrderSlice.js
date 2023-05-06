import {createSlice} from '@reduxjs/toolkit'

const orderSlice = createSlice({
  name: 'order',
  initialState: {
    data: null,
  },
  reducers: {
    orderProduct (state, action) {
      state.data.push(action.payload)
    },
  },
})

export const {orderProduct} = orderSlice.actions
export default orderSlice.reducer
