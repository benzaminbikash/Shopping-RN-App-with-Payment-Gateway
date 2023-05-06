import {createSlice} from '@reduxjs/toolkit'

const WishListSlice = createSlice({
  name: 'wishlist',
  initialState: {
    data: [],
  },
  reducers: {
    addWishlist (state, action) {
      //   let temData = state.data
      //   temData.push(action.payload)
      //   state.data = temData
      state.data.push(action.payload)
    },
  },
})

export const {addWishlist} = WishListSlice.actions
export default WishListSlice.reducer
