import {createSlice} from '@reduxjs/toolkit'

const productSlice = createSlice({
  name: 'product',
  initialState: {
    data: null,
    isLoading: false,
  },
  reducers: {
    addProduct (state, action) {
      state.data = action.payload
    },
  },
})

export const {addProduct} = productSlice.actions
export default productSlice.reducer
