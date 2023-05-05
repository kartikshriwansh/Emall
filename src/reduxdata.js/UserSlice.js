import { createSlice } from "@reduxjs/toolkit";
const slice=createSlice({
    name:'UserSlice',
    initialState:{
        value:{
            isLogin:false,
            token:undefined,
            username:undefined
        }
    },
    reducers:{
        Changelogin:(state,action)=>{
            state.value=action.payload
            console.log(state.value.isLogin)
        },
        removeUser:(state,action)=>{
            state.value={
                isLogin:false,
                token:undefined,
                username:undefined
            }
        }
    }
})
export const{Changelogin,removeUser}=slice.actions;
export default slice.reducer;