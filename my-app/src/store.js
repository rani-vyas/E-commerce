import { configureStore, getDefaultMiddleware, } from "@reduxjs/toolkit";
import categorySlice from "./slice/categorySlice";
import cartSlice from "./slice/cartSlice";
import productSlice from "./slice/productSlice";
import  OrderSlice  from "./slice/ordersSlice";
import  { userSlice } from "./slice/registeruserSlice";
import { loginUserSlice } from "./slice/loginSlice";




export const store = configureStore({
  reducer:{
    userRegister:userSlice,
    loginSlice:loginUserSlice,
    categories:categorySlice,
    Product:productSlice,
    carts:cartSlice,
    Orders: OrderSlice,
  },
})
