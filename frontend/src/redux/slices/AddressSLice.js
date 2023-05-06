import {createSlice} from '@reduxjs/toolkit'

const AddressList = createSlice({
  name: 'address',
  initialState: {
    data: [],
  },
  reducers: {
    addressAdd (state, action) {
      state.data.push(action.payload)
    },
    deleteAdd (state, action) {
      let newArra = state.data.filter(item => item.id !== action.payload)
      state.data = newArra
    },
  },
})

export const {addressAdd, deleteAdd} = AddressList.actions
export default AddressList.reducer
