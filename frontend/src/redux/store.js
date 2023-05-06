import {configureStore} from '@reduxjs/toolkit'
import ProductSlice from './slices/ProductSlice'
import WishlistSlice from './slices/WishlistSlice'
import CartSlice from './slices/CartSlice'
import AddressSLice from './slices/AddressSLice'
import OrderSlice from './slices/OrderSlice'

export const store = configureStore({
  reducer: {
    product: ProductSlice,
    wishlist: WishlistSlice,
    cartlist: CartSlice,
    address: AddressSLice,
    order: OrderSlice,
  },
})
