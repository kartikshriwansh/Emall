import { configureStore } from "@reduxjs/toolkit";
import masterSlice from "./slicer";
import cartSlice from './CartSlice'
import wishSlice from './WishlistSlice'
import UserSlice from './UserSlice'
const store=configureStore({
        reducer:{
            masterData:masterSlice,
            cartData:cartSlice,
            wishData:wishSlice,
            Userdata:UserSlice
        }
})
export default store;