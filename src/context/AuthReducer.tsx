import { AuthState } from './AuthContext';


export type AuthAction = | { type : 'signIn', payLoad: string}
                         | { type : 'logOut'}
                         | { type : 'pagoActual',payLoad: string}

export const authReducer = (initialState: AuthState, action: AuthAction):AuthState => {
    switch(action.type){
            case 'signIn':{
                return{
                    ...initialState,
                    isLoggedIn: true,
                    userName: action.payLoad
                }
            }
            case 'logOut':{
                return{
                    ...initialState,
                    isLoggedIn: false,
                    userName: undefined
                }
            }
            case 'pagoActual':{
                return{
                    ...initialState,
                    metodoPago: action.payLoad
                }
            }
            default:{
                break;
            }
    }
    return initialState;
}
