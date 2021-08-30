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
import DetallesScreen from "../screens/ExplorarScreens/DetallesScreen";
import ComidaScreen from "../screens/ExplorarScreens/ComidaScreen";
import LocalScreen from "../screens/ExplorarScreens/LocalScreen";
import { FavoritesScreen } from '../screens/CuentaScreens/FavoritesScreen';
import { EnterpriseScreen } from "@component/InicioScreens/EnterpriseScreen";
import NegocioDetailsScreen from '../screens/InicioScreens/NegocioDetailsScreen';
import ExplorarScreen from '../screens/ExplorarScreens/ExplorarScreen';

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
      <Stack.Screen name="FavoritesScreen" component={FavoritesScreen} />
      {/*Derivados de Inicio*/}
      <Stack.Screen name="NegocioDetailsScreen" component={NegocioDetailsScreen} />
      <Stack.Screen name="EnterpriseScreen" component={EnterpriseScreen} />

      {/*Derivados de EXplorar*/}
      <Stack.Screen name="LocalScreen" component={LocalScreen} />
      <Stack.Screen name="ComidaScreen" component={ComidaScreen} />
      <Stack.Screen name="DetallesScreen" component={DetallesScreen} />
    </Stack.Navigator>
  );
};
