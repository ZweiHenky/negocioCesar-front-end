import { checkCredentials, logout,login } from "./authSlice"

export const startCreateUSer = ({email, nombre, local, password}) =>{
    return async(dispatch) =>{

        dispatch(checkCredentials())

        let res = await fetch("https://negociocesarbackend-production.up.railway.app/auth/register",{
            method: 'POST',
            body: JSON.stringify({
                email,
                nombre,
                local,
                password
            }),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
        let data = await res.json()
        
        if (!res.ok) {
            let {message} = data
            return dispatch(logout({message}))
        }
        console.log(data);
        dispatch(login({email,nombre,password,local}))
    }
}

export const startLoginWithEmailAndPassword = ({email,password}) =>{
    return async(dispatch) =>{
        dispatch(checkCredentials)
        let res = await fetch("https://negociocesarbackend-production.up.railway.app/auth/login", {
            method: 'POST',
            body:JSON.stringify({
                email,
                password
            }),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
            })

        let data = await res.json()

        if (!res.ok) {
            let {messgae} = data
            let message = messgae
            return dispatch(logout({message}))
        }else{
            let {nombre,email,local,access_token, role, status} = data
            localStorage.setItem('access_token', access_token)
            dispatch(login({nombre,email,local,role,status}))
        }

}
}