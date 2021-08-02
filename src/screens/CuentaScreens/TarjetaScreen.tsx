import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native';
import { stylesCuenta } from '../../themes/CuentaStyles';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

export const TarjetaScreen = () => {
    const navigation =  useNavigation();

    return (
        <View>
            <View style={stylesCuenta.bannerTop}>
                <TouchableOpacity
                    onPress={()=>navigation.goBack()}
                >
                    <Icon style={stylesCuenta.iconBack} name={'arrow-back'} size={25} color="#000000" />
                </TouchableOpacity>
                <Text style={stylesCuenta.covidTitle}>
                    Tarjeta
                </Text>
            </View>
            <View style={{flexDirection:'row', justifyContent:'space-between', marginTop:'4%', marginRight:'4%'}}>
                <Text style={stylesCuenta.menuEfectivo}>Tarjeta</Text>
                <Icon style={stylesCuenta.iconBack} name={'card-outline'} size={40} color="#000000" />
            </View>
            <Text style={{fontSize:15, fontWeight:'bold', marginTop:'4%', marginLeft:'5%'}}>Paga pedidos en efectivo</Text>
            <Text style={{marginLeft:'5%', marginTop:'3%', fontSize:15}}>Usa tarjeta para pagar los pedidos. Verás el montol total  pendiente al hacer tu pedido.
            </Text>
        </View>
    )
}
