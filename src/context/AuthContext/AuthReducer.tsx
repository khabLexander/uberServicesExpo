import { UserModel } from '../../models/user.model';

export type LoginUser = {
  userName: string;
  password: string;
};

export type AuthAction =
  | { type: "signIn"; payLoad: UserModel }
  | { type: "logOut" }
  | { type: "pagoActual"; payLoad: string };

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
        id: action.payLoad.id
      };
    }
    case "logOut": {
      return {
        ...initialState,
        isLoggedIn: false,
        username: undefined,
      };
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
