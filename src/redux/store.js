import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "../redux/reducers/themeSlice"
import cartSlice from "../redux/reducers/cartSlice";


const store = configureStore({
    reducer: {
        //add all reducer slice here
        theme: themeSlice,
        carts: cartSlice,
    }
});

export default store;