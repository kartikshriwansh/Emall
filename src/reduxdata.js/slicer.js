import { createSlice } from "@reduxjs/toolkit";
const slice=createSlice({
    name:'master',
    initialState:{
        value:{
            Category:[],
            Brand:[],
            Product:[],
        }
    },
    reducers:{
        AddCategory:(state,action)=>{
            state.value={...state.value,Category:action.payload}
        },
        AddBrand:(state,action)=>{
            state.value={...state.value,Brand:action.payload}
        },
        AddProduct:(state,action)=>{
            state.value={...state.value,Product:action.payload}
        },
    }
})
export const{AddBrand,AddCategory,AddProduct}=slice.actions;
export default slice.reducer;