import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { stylesLogin } from '../../themes/LoginStyles';

export const LoginScreen = (props:any) => {

    return (
        <View>
            <Text>Login AQUI TRABAJA HENRY</Text>
            <TouchableOpacity
                    style={{
                        ...stylesLogin.botonGrande,
                        backgroundColor:'#ffffff'
                        }}
                    onPress={()=> props.navigation.navigate('BottomTabs')}
                >
                <Text style={stylesLogin.botonGrandeTexto}> INICIAR SESIÓN </Text>
            </TouchableOpacity>
            

        </View>
    )
}

