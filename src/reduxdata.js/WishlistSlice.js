import { createSlice } from "@reduxjs/toolkit";
const slice=createSlice({
    name:'Wish',
    initialState:{
        value:[]
    },
    reducers:{
        addWishItem:(state,action)=>{
            state.value=[...state.value,action.payload]
        },
        removeWishItem:(state,action)=>{
            state.value=[...state.value.filter(data=>data._id!=action.payload)]
        },
    }
})
export const{addWishItem,removeWishItem}=slice.actions;
export default slice.reducer;