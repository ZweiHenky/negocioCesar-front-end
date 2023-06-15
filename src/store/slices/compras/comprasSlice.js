import { createSlice } from '@reduxjs/toolkit';

export const comprasSlice = createSlice({
   name: 'compras',
   initialState: {
        isSaving: false,
        errorMessage: null,
        compras: [],
        isActive: ''
    },
   reducers: {
        startSaving: (state) =>{
            state.isSaving = true
        },
        saveCompra: (state, {payload}) => {
            state.isActive = payload
            state.compras.push(payload)
            state.isSaving = false
        },
        setErrorMessage: (state, {payload}) =>{
            state.errorMessage = payload?.message
        },
        setCompras: (state, {payload}) =>{
            state.compras = payload
        }   
   }
});
export const { startSaving, saveCompra, setErrorMessage, setCompras } = comprasSlice.actions;