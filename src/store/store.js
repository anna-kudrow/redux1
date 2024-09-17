import { configureStore } from "@reduxjs/toolkit";
import { toggleThemeReducer } from "./toggleReducer";

export const store = configureStore({
    reducer: {
        theme: toggleThemeReducer,
    }
})