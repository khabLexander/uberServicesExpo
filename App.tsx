import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { BottomTabs } from "./src/navigator/BottomTabs";
import { StackNavigator } from "./src/navigator/StackNavigator";
import { AuthProvider } from "./src/context/AuthContext/AuthContext";

import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaProvider style={{ flex: 1 }}>
      <NavigationContainer>
        <AppState>
          <StackNavigator />
        </AppState>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

//Con este método
//puedo determinar a que componentes
//dentro de la navegación le otorgo o no
// el AuthContext
// caso contrario podria llamar directamente al
//AuthProvider y encapsular al StackNavigator

const AppState = ({ children }: any) => {
  return <AuthProvider>
    {children}
  </AuthProvider>
};
