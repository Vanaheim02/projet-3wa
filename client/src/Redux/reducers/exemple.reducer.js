import { createSlice } from "@reduxjs/toolkit";

const STATE = {
    example: "example",
};

const exampleSlice = createSlice({
    name: "example",
    initialState: STATE,
    reducers: {
        doSomething: (state, action) => {
            return { ...state };
        },
        add: (state, action) => {
            return { ...state };
        },
    },
});

export const { doSomething, add } = exampleSlice.actions;
export default exampleSlice.reducer;
