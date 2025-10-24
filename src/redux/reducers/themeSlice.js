import { createSlice } from "@reduxjs/toolkit";

//initial state
const initialState = {
    mode: "light"
}

//create slice
const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        //theme actions
        toggleMode: (state) => {
            state.mode = state.mode === "light" ? "dark" : "light";
        }
    }
});

//export actions
export const { toggleMode } = themeSlice.actions;

//export reducer
export default themeSlice.reducer;