import { createContext,useReducer } from "react";


export const userContext = createContext();



const initial ={
    isLogin: false,
    user:{}
}