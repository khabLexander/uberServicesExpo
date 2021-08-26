import React, { useReducer } from "react";
import { createContext } from "react";
import { FavoriteModel } from '../../models/favorite.model';
import { useState } from "react";


export interface FavoriteContextProps {
    favorites: FavoriteModel[];
    actualizar: (favoritos) => void;
}

//Mi contexto creado Mi contexto creado Mi contexto creado
export const FavoriteContext = createContext({} as FavoriteContextProps);
//Mi contexto creado Mi contexto creado Mi contexto creado

//Proveedor contexto de usuario logeado a toda la aplicación

export const FavoriteProvider = ({ children }: any) => {
    const [favorites, setFavorites] = useState();

    const actualizar = (favoritos) => {
        setFavorites(favoritos)
    };

    return (
        <FavoriteContext.Provider
            value={{
                favorites,
                actualizar
            }}
        >
            {children}
        </FavoriteContext.Provider>
    );
};
