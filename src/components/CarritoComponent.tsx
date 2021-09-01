import React, { useRef, useContext } from 'react'
import { View, TouchableOpacity, Text } from 'react-native';
import { Modalize } from 'react-native-modalize';
import { AuthContext } from '../context/AuthContext/AuthContext';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

export const CarritoComponent = () => {
    const { authState, signIn } = useContext(AuthContext);
    const navigation = useNavigation();

    const onOpen = () => {
        navigation.navigate('OrderScreen' as never)
    }
    return (
        <TouchableOpacity
            onPress={onOpen}
            style={{
                backgroundColor: 'black', height: 70, width: '90%', borderRadius: 5, margin: 'auto', left: '5%'
            }}
        >
            <Text style={{ color: 'white', textAlign: 'center', fontSize: 25, marginTop: 15 }}>
                ({authState.products.length}) Ver carrito
            </Text>
        </TouchableOpacity>

    )
}
