import { createSlice } from "@reduxjs/toolkit";
import {UserData} from "../../fakeDtata.js"


const initialState={
    value:UserData,
}

export const userSlice= createSlice({
    name:"users",
    initialState,
    reducers:{
        addUser:(state,action)=>{
            state.value.push(action.payload)
        },
        deletUser:(state,action)=>{
            state.value = state.value.filter((user)=>user.id !== action.payload.id)
        }

    },
});


export const {addUser,deletUser} = userSlice.actions
export default userSlice.reducer;