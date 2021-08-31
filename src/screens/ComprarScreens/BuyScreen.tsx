import React, { useRef, useState, useEffect } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Image, Platform } from 'react-native';
import { enviroment } from '../../../enviroment';
import MapView from 'react-native-maps';
// var MapView = require('react-native-maps');

import { stylesCuenta } from '../../themes/CuentaStyles';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';


export const BuyScreen = () => {

    const navigation = useNavigation();

    return (
        <View>
            <View style={stylesCuenta.bannerTop}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                >
                    <Icon style={stylesCuenta.iconBack} name={'arrow-back'} size={25} color="#000000" />
                </TouchableOpacity>
            </View>
            <Text>
                Working
            </Text>
            <View style={styles.container}>
                <MapView
                    style={{ flex: 1 }}
                    initialRegion={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
});