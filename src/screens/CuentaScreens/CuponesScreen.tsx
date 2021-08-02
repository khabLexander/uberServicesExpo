import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { stylesCuenta } from '../../themes/CuentaStyles';
import Icon from 'react-native-vector-icons/Ionicons';

export const CuponesScreen = () => {
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
                    Cupones
                </Text>
            </View>
            <View style={{justifyContent:'space-between', marginTop:'4%', marginRight:'4%'}}>
                <Text style={stylesCuenta.menuEfectivo}>Cupones</Text>
                <View style={stylesCuenta.tagCupon}>
                    <Icon style={stylesCuenta.iconBack} name={'pricetag-outline'} size={90} color="#757373" />
                </View>
            </View>
            <Text style={{fontSize:15, fontWeight:'bold', marginTop:'4%', marginLeft:'5%'}}>
                No tienes cupones en este momento
            </Text>
            <Text style={{marginLeft:'5%', marginTop:'3%', fontSize:15, marginRight:'2%'}}>
                Las organizaciones pueden enviarte cupones para cubrir viajes o comidas
            </Text>
        </View>
    )
}
