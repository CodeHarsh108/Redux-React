import { configureStore } from "@reduxjs/toolkit";

const initialState = {
    post: {
        post: [],
        loading: false,
        error: null,
    },
};

export const store = configureStore({

});