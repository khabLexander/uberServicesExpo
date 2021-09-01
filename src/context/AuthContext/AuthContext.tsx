import React, { useReducer } from "react";

//Estructura de la información

import { createContext } from "react";
import { UserModel } from "src/models/user.model";
import { authReducer } from "./AuthReducer";
// import { AuthAction, authReducer } from './AuthReducer';
import { ProductModel } from '../../models/product.model';



//Encapsular en estado inicial
//atributos
//comaprtidos en toda la app
export const AuthInitialState: UserModel = {
  id: 7,
  avatar: 'algunaimagen',
  username: '12121212',
  lastname: 'alimaña',
  name: 'juanito',
  email: 'alimaña@hotmail.com',
  birthdate: 'null',
  isLoggedIn: false,
  //este token quemado para evitar logearme a cada rato
  token: '1|7gtFj6nLywo3a6k4VxFiAU3E8wziBlkDvuNDz1sm',
  clientPaymentMethod: '',
  clientId: 21,
  products: [],
  total: 0
};

//Encapsular  en el estado inicial
//los atributos y METODOS
// compartidos en toda la app

export interface AuthContextProps {
  authState: UserModel;
  //mas complejo a futuro  recibe a fuerzas un userName  o correo y contraseña
  signIn: (user: UserModel) => void;
  logOut: () => void;
  pagoActual: (metodoPago: string) => void;
  addCarrito: (user: UserModel) => void;
}

//Mi contexto creado Mi contexto creasdo Mi contexto creado
export const AuthContext = createContext({} as AuthContextProps);
//Mi contexto creado Mi contexto creado Mi contexto creado


//Proveedor contexto de usuario logeado a toda la aplicación

export const AuthProvider = ({ children }: any) => {
  const [authState, dispatch] = useReducer(authReducer, AuthInitialState);

  const signIn = (user: UserModel) => {
    dispatch({ type: "signIn", payLoad: user });
  };

  const logOut = () => {
    dispatch({ type: "logOut" });
  };
  const pagoActual = (metodoPago: string) => {
    dispatch({ type: "pagoActual", payLoad: metodoPago });
  };
  const addCarrito = (user: UserModel) => {
    dispatch({ type: "addCarrito", payLoad: user });
  };

  return (
    <AuthContext.Provider
      value={{
        authState,
        signIn,
        logOut,
        pagoActual,
        addCarrito
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
