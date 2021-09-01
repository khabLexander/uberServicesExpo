import { Text, View, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { AuthContext } from '../../context/AuthContext/AuthContext';
import { appAPI } from '../../api/appAPI';
import { CarritoComponent } from '../../components/CarritoComponent';
import Icon from 'react-native-vector-icons/Ionicons';
import { ActivityIndicator } from 'react-native-paper';
import React, { useContext, useEffect, useState } from 'react'

export const PedidosScreen = () => {
    const { authState, signIn } = useContext(AuthContext);

    return (
        <View>
            <Text>Proximamente</Text>
            <View style={{ bottom: -588 }}>
                {authState.products.length > 0 && <CarritoComponent />}
            </View>

        </View>
    )
}
