import { UserModel } from '../../models/user.model';
import { ProductModel } from '../../models/product.model';

export type LoginUser = {
  userName: string;
  password: string;
};

export type AuthAction =
  | { type: "signIn"; payLoad: UserModel }
  | { type: "logOut" }
  | { type: "pagoActual"; payLoad: string }
  | { type: "addCarrito"; payLoad: UserModel }

export const authReducer = (initialState: UserModel, action: AuthAction): UserModel => {
  switch (action.type) {
    case "signIn": {

      return {
        ...initialState,
        isLoggedIn: true,
        username: action.payLoad.username,
        name: action.payLoad.name,
        lastname: action.payLoad.lastname,
        token: action.payLoad.token,
        id: action.payLoad.id,
        clientPaymentMethod: action.payLoad.clientPaymentMethod,
        clientId: action.payLoad.clientId
      };
    }
    case "logOut": {
      return {
        ...initialState,
        isLoggedIn: false,
        username: undefined,
      };
    }
    case "addCarrito": {
      return {
        ...initialState,
        products: action.payLoad.products,
        total: action.payLoad.total
      }
    }
    // case "pagoActual": {
    //   return {
    //     ...initialState,
    //     metodoPago: action.payLoad,
    //   };
    // }
    default: {
      break;
    }
  }
  return initialState;
};
