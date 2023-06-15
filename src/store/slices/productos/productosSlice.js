import { createSlice } from '@reduxjs/toolkit';

export const productosSlice = createSlice({
   name: 'productos',
   initialState: {
        isSaving: false,
        messageSaved: '',
        productos: [],
        active: null,
    },
   reducers: {
        savingNewProduct: (state, action) =>{
            state.isSaving = true
        },
        addNewProduct: (state, action) =>{
            state.productos.push(action.payload)
            state.isSaving = false
        },
        setActiveProduto: (state, action) =>{
            state.active = action.payload
            state.messageSaved = null
        },
        setMessage: (state,{payload})=>{
            state.messageSaved = payload?.message
            state.isSaving = false
        },
        setProductos: (state, action) =>{
            state.productos = action.payload
        },
        setSaving: (state) =>{

        },
        updateProducto: (state, action) =>{
            state.active = action.payload
            state.isSaving = false
        },
        deteleByDetalle: (state, action) =>{

        }
   }
});
export const { newProduct, setMessage, setActiveProduto, savingNewProduct, addNewProduct, setProductos, updateProducto } = productosSlice.actions;