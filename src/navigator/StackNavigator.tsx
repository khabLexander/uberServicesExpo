import React, { useContext } from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { BottomTabs } from './BottomTabs';
import { LoginScreen } from '../screens/Login/LoginScreen';
import { C19SeguridadScreen } from '../screens/CuentaScreens/C19SeguridadScreen';
import { MetodoPagoScreen } from '../screens/CuentaScreens/MetodoPagoScreen';
import { EfectivoScreen } from '../screens/CuentaScreens/EfectivoScreen';
import { CuponesScreen } from '../screens/CuentaScreens/CuponesScreen';
import { TarjetaScreen } from '../screens/CuentaScreens/TarjetaScreen';
import { AgregarCuponScreen } from '../screens/CuentaScreens/AgregarCuponScreen';
import NeogicioDetailsScreen from '../screens/InicioScreens/NegocioDetailsScreen';
import CardInicio from '../screens/InicioScreens/CardInicio';


const Stack = createStackNavigator();

export const StackNavigator = () => {

    return (
     <Stack.Navigator
        initialRouteName="LoginScreen"
        screenOptions={{
            headerShown:false,
        }}
     >
        <Stack.Screen name="LoginScreen"  options={{title:"Login"}} component={LoginScreen}/>
        <Stack.Screen name="BottomTabs"   component={BottomTabs}/>
        {/* Derivados de Cuenta Screen */}
        <Stack.Screen name="C19SeguridadScreen" component={C19SeguridadScreen} />
        <Stack.Screen name="MetodoPagoScreen" component={MetodoPagoScreen} />
        <Stack.Screen name="EfectivoScreen" component={EfectivoScreen} />
        <Stack.Screen name="CuponesScreen" component={CuponesScreen} />
        <Stack.Screen name="TarjetaScreen" component={TarjetaScreen} />
        <Stack.Screen name="AgregarCuponScreen" component={AgregarCuponScreen} />
        {/*Derivados de Inicio*/}
        <Stack.Screen name="CardInicio" component={CardInicio} />
        <Stack.Screen name="NeogicioDetailsScreen" component={NeogicioDetailsScreen} />
        
     </Stack.Navigator>

    )
}
