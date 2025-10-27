import { createSlice } from "@reduxjs/toolkit";

//initial state
const initialState = {
    items: [],
    total: 0,
}

//create the cart slice
const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        //add actions to add and remove item from cart.
        addItemToCart: (state, action) => {
            const existingItem = state.items.find((item) => item.id === action.payload.id);
            if (existingItem) {
                existingItem.quantity++;
                state.total += parseFloat(action.payload.price.slice(1));
                return;
            }
            state.items.push({...action.payload, quantity: 1});
            state.total += parseFloat(action.payload.price.slice(1));
        },

        removeItemFromCart: (state, action) => {
            const price = parseFloat(action.payload.price.slice(1));
            const exisitingItem = state.items.find((item) => item.id === action.payload.id);
            if (exisitingItem.quantity > 1) {
                exisitingItem.quantity--;
                state.total -= price;
            } else {
                state.items = state.items.filter((item) => item.id !== action.payload.id);
                state.total -= price;
            }
            if (state.total < 0) state.total = 0; 
        },

        clearCart: (state) => {
            state.items = [];
            state.total = 0;
        },

        removeItemCompletely: (state, action) => {
            const price = parseFloat(action.payload.price.slice(1)) * action.payload.quantity;
            state.items = state.items.filter((item) => item.id !== action.payload.id);
            state.total -= price;
        },
    }
});

export const { addItemToCart, removeItemFromCart, clearCart, removeItemCompletely, } = cartSlice.actions;
export default cartSlice.reducer;