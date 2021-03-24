import { createSlice } from "@reduxjs/toolkit";

export const searchStringSlice = createSlice({
    name:'searchString',

    initialState:{
        searchString : ""
    },
    reducers:{
        add: (state, action) =>{
            state.searchString = action.payload
        },
        clear:state => {
            state.searchString = ""
        }
    }
})

export const {add, clear} = searchStringSlice.actions
export default searchStringSlice.reducer