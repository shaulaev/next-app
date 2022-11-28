import { configureStore } from "@reduxjs/toolkit";
import user from "./userSlice"
import thunk from "redux-thunk";

export default configureStore({
    reducer: {
        user
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
    devTools: true
})