import React, { useState } from 'react'
import { View, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { stylesCuenta } from '../../themes/CuentaStyles';
import Icon from 'react-native-vector-icons/Ionicons';
import { TextInput } from 'react-native-paper';

export const AgregarCuponScreen = () => {

        const navigation =  useNavigation();
        const [cupon, setCupon] = useState<string>();
        return (
            <View>
                <View style={stylesCuenta.bannerTop}>
                    <TouchableOpacity
                        onPress={()=>navigation.goBack()}
                    >
                        <Icon style={stylesCuenta.iconBack} name={'arrow-back'} size={25} color="#000000" />
                    </TouchableOpacity>
                </View>

                <Text style={stylesCuenta.menuEfectivo}>Agrega el código del cupón</Text>

                <Text style={{fontSize:15, fontWeight:'bold', marginTop:'4%', marginLeft:'5%'}}></Text>

                <TextInput
                    style={stylesCuenta.inputText}
                    placeholder="Ingrese el código del cupón "
                    onChangeText={cupon=> setCupon(cupon)}
                    defaultValue={cupon}
                />
                <Text style={{marginLeft:'5%', marginTop:'3%', fontSize:15}}>
                    Ingresa el código para acceder al cupón y usarlo.
                </Text>
            </View>
        )
}
