import { configureStore } from "@reduxjs/toolkit";
import invoiceslice from "../slice/invoiceslice";
import thunkMiddleware from "redux-thunk"; // Import directly


const middleware = [thunkMiddleware]; // Create array with middleware

export const store = configureStore({
    reducer: {
        invoiceslice
    },
    // middleware: middleware
});