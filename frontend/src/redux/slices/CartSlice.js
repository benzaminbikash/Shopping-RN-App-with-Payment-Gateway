import {createSlice} from '@reduxjs/toolkit'

const cartList = createSlice({
  name: 'cart',
  initialState: {
    data: [],
  },
  reducers: {
    cartAdd (state, action) {
      const itemIncart = state.data.find(item => item.id === action.payload.id)
      if (itemIncart) {
        itemIncart.qty++
      } else {
        state.data.push({...action.payload})
      }
    },
    increamentCart (state, action) {
      const item = state.data.find(item => item.id === action.payload)
      if (item) {
        item.qty++
      }
    },
    decreamentcart (state, action) {
      const item = state.data.find(item => item.id === action.payload)
      if (item) {
        if (item.qty > 1) {
          item.qty--
        } else {
          state.data = state.data.filter(i => i.id !== action.payload)
        }
      }
    },
  },
})

export const {cartAdd, increamentCart, decreamentcart} = cartList.actions
export default cartList.reducer
