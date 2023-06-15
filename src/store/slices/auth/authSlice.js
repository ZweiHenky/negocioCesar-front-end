import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  status: 'no-autenticado',
  email: null,
  nombre: null,
  local: null,
  role: null,
  statusUser: null,
  errorMessage: null,

}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, {payload}) =>{
      state.status = "autenticado"
      state.email = payload.email
      state.nombre = payload.nombre
      state.local = payload.local
      state.role = payload.role
      state.statusUser = payload.status
      state.errorMessage = null
    },
    logout: (state, {payload}) =>{
      state.status = "no-autenticado"
      state.email = null
      state.nombre = null
      state.local = null
      state.role = null
      state.statusUser = null
      state.errorMessage = payload?.message

    },
    checkCredentials: (state) =>{
      state.status = "checando"
    }
  },
})

// Action creators are generated for each case reducer function
export const { login, logout, checkCredentials } = authSlice.actions
