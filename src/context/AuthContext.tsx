import React, { useReducer } from 'react'

//Estructura de la información

import { createContext } from "react"
import { authReducer } from './AuthReducer'
// import { AuthAction, authReducer } from './AuthReducer';

export interface AuthState{
    isLoggedIn: boolean,
    userName?: string
    nombre?: string,
    apellido?: string,
    correo?: string,
    photo?: string,
    metodoPago?: string
}

//Encapsular en estado inicial
//atributos
//comaprtidos en toda la app
export const AuthInitialState : AuthState = {
    isLoggedIn: false,
    userName: 'JuanAli',
    nombre: 'Juanito',
    apellido: 'Alimaña',
    correo: 'juanitoAlimaña@gmail.com',
    photo: '',
    metodoPago: 'efectivo'
}

//Encapsular  en el estado inicial 
//los atributos y METODOS
// compartidos en toda la app

export interface AuthContextProps{
    authState : AuthState,
    //mas complejo a futuro  recibe a fuerzas un userName  o correo y contraseña 
    signIn: (userName:string)=>void;
    logOut: ()=>void;
    pagoActual: (metodoPago:string)=>void;
}

//Mi contexto creado Mi contexto creado Mi contexto creado 
export const AuthContext = createContext({} as AuthContextProps)
//Mi contexto creado Mi contexto creado Mi contexto creado 

//Proveedor contexto de usuario logeado a toda la aplicación

export const AuthProvider = ({children}: any)=>{
    const [authState, dispatch] = useReducer(authReducer, AuthInitialState)
    
    const signIn = (userName: string)=>{
        dispatch({type: 'signIn', payLoad:userName})
    }

    const logOut = ()=>{
        dispatch({type: 'logOut'})
    }
    const pagoActual = (metodoPago: string)=>{
        dispatch({type: 'pagoActual', payLoad:metodoPago})
    }

    return (
        <AuthContext.Provider 
            value={{
                authState,
                signIn,
                logOut,
                pagoActual
            }}
        >
            {children}
        </AuthContext.Provider>
    )

}
