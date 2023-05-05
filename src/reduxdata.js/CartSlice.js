import { createSlice } from "@reduxjs/toolkit";
const slice=createSlice({
    name:'Cart',
    initialState:{
        value:[]
    },
    reducers:{
        addItem:(state,action)=>{
            console.log(action.payload)
            state.value=[...state.value,{product:action.payload,qty:1}]
        },
        removeItem:(state,action)=>{
            console.log(action.payload)
            state.value=[...state.value.filter(data=>data.product._id!=action.payload)]
        },
        increaseQuantity:(state,action)=>{
            state.value=state.value.map((ob)=>ob.product._id==action.payload?{product:ob.product,qty:ob.qty+1}:ob)
        },
        decreaseQuantity:(state,action)=>{
            state.value=state.value.map((ob)=>ob.product._id==action.payload?{product:ob.product,qty:ob.qty-1}:ob)
        }
    }
})
export const{addItem,removeItem,decreaseQuantity,increaseQuantity}=slice.actions;
export default slice.reducer;