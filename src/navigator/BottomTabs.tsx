import React, { useContext } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Platform } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";
import { colores } from "../themes/BottomTabStyles";
import { InicioScreen } from "../screens/InicioScreens/InicioScreen";
import { PedidosScreen } from "../screens/PedidosScreens/PedidosScreen";
import { CuentaScreen } from "../screens/CuentaScreens/CuentaScreen";
import { AuthContext } from "../context/AuthContext/AuthContext";
import ExplorarScreen from "@component/ExplorarScreens/ExplorarScreen";

const BottomTabAndroid = createMaterialBottomTabNavigator();

export const BottomTabs = () => {
  return (
    <BottomTabAndroid.Navigator
      sceneAnimationEnabled={true}
      barStyle={{
        backgroundColor: colores.primary,
      }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          let iconName: string = "";
          switch (route.name) {
            case "InicioScreen":
              iconName = "home";
              break;
            case "ExplorarScreen":
              iconName = "search-circle";
              break;
            case "PedidosScreen":
              iconName = "newspaper";
              break;
            case "CuentaScreen":
              iconName = "person";
              break;
          }
          return <Icon name={iconName} size={20} color="#000000" />;
        },
      })}
    >
      <BottomTabAndroid.Screen
        name="InicioScreen"
        options={{ title: "Inicio" }}
        component={InicioScreen}
      />
      <BottomTabAndroid.Screen
        name="ExplorarScreen"
        options={{ title: "Explorar" }}
        component={ExplorarScreen}
      />
      <BottomTabAndroid.Screen
        name="PedidosScreen"
        options={{ title: "Pedidos" }}
        component={PedidosScreen}
      />
      <BottomTabAndroid.Screen
        name="CuentaScreen"
        options={{ title: "Cuenta" }}
        component={CuentaScreen}
      />
    </BottomTabAndroid.Navigator>
  );
};
