import React, { useContext } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { BottomTabs } from "./BottomTabs";
import { Register } from "@component/Login/Register";
import { Login } from "@component/Login/Login";
import { C19SeguridadScreen } from "../screens/CuentaScreens/C19SeguridadScreen";
import { MetodoPagoScreen } from "../screens/CuentaScreens/MetodoPagoScreen";
import { EfectivoScreen } from "../screens/CuentaScreens/EfectivoScreen";
import { CuponesScreen } from "../screens/CuentaScreens/CuponesScreen";
import { TarjetaScreen } from "../screens/CuentaScreens/TarjetaScreen";
import { AgregarCuponScreen } from "../screens/CuentaScreens/AgregarCuponScreen";
import NeogicioDetailsScreen from "../screens/InicioScreens/NegocioDetailsScreen";
import CardInicio from "../screens/InicioScreens/CardInicio";
import DetallesScreen from "../screens/ExplorarScreens/DetallesScreen";
import ComidaScreen from "../screens/ExplorarScreens/ComidaScreen";
import LocalScreen from "../screens/ExplorarScreens/LocalScreen";

const Stack = createStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="BottomTabs"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="Register"
        options={{ title: "Login" }}
        component={Register}
      />
      <Stack.Screen
        name="Login"
        options={{ title: "Login" }}
        component={Login}
      />
      <Stack.Screen name="BottomTabs" component={BottomTabs} />
      {/* Derivados de Cuenta Screen */}
      <Stack.Screen name="C19SeguridadScreen" component={C19SeguridadScreen} />
      <Stack.Screen name="MetodoPagoScreen" component={MetodoPagoScreen} />
      <Stack.Screen name="EfectivoScreen" component={EfectivoScreen} />
      <Stack.Screen name="CuponesScreen" component={CuponesScreen} />
      <Stack.Screen name="TarjetaScreen" component={TarjetaScreen} />
      <Stack.Screen name="AgregarCuponScreen" component={AgregarCuponScreen} />
      {/*Derivados de Inicio*/}
      <Stack.Screen name="CardInicio" component={CardInicio} />
      <Stack.Screen
        name="NeogicioDetailsScreen"
        component={NeogicioDetailsScreen}
      />
      {/*Derivados de EXplorar*/}
      <Stack.Screen name="LocalScreen" component={LocalScreen} />
      <Stack.Screen name="ComidaScreen" component={ComidaScreen} />
      <Stack.Screen name="DetallesScreen" component={DetallesScreen} />
    </Stack.Navigator>
  );
};
