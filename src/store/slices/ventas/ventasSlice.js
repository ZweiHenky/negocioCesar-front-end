import { createSlice } from '@reduxjs/toolkit';

export const ventasSlice = createSlice({
   name: 'ventas',
   initialState: {
        isSaving: false,
        ventas: [],
        active: [],
        message: [],
        messageVentas: null
    },
   reducers: { 
        saving: (state) =>{
            state.isSaving = true
        },
        setVentas: (state, {payload})=>{
            state.ventas = payload
        },
        addVentas: (state, {payload}) =>{
            state.ventas.push(payload)
        },
        active: (state, {payload}) =>{
            state.active.push(payload)
        },
        setMessage: (state, {payload}) =>{
            state.message.push(payload)
        },
        setErrorMessageMostrar: (state, {payload}) =>{
            state.messageVentas = payload?.message
        }

   }
});

export const { saving, setVentas, active, setMessage, setErrorMessageMostrar, addVentas } = ventasSlice.actions;