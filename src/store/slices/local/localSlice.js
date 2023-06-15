import { createSlice } from '@reduxjs/toolkit';

export const localSlice = createSlice({
   name: 'local',
   initialState: {
        productos: [],
        setMessageError: null 
    },
   reducers: {
        setProductos: (state, {payload})=>{
            state.productos = payload
        },
        setError: (state, {payload}) => {
            state.setMessageError = payload?.message
        }
   }
});
export const { setProductos, setError } = localSlice.actions;