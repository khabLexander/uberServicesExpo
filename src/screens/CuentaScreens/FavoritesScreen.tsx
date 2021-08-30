import React, { useContext, useEffect } from 'react'
import { View, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { stylesCuenta } from '../../themes/CuentaStyles';
import Icon from 'react-native-vector-icons/Ionicons';
import { FavoriteComponent } from './Components/FavoriteComponent';
import { appAPI } from '../../api/appAPI';
import { AuthContext } from "../../context/AuthContext/AuthContext";
import { useState } from 'react';
import { FavoriteModel } from '../../models/favorite.model';
import { ScrollView } from 'react-native-gesture-handler';
import { ActivityIndicator } from 'react-native-paper';

let data: FavoriteModel[];

export const FavoritesScreen = () => {
    const navigation = useNavigation();
    const { authState, signIn } = useContext(AuthContext);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        getFavorites();
    }, [isLoading])
    const getFavorites = async () => {
        const resp = await appAPI.get(`/clients/${authState.clientId}/products`, { headers: { "Authorization": `Bearer ${authState.token}` } })
        if (resp) {
            data = resp.data.data
            setIsLoading(false);
        } else {
            console.log('Error ' + resp);
        }
    };
    return (
        <>
            <View style={stylesCuenta.bannerTop}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                >
                    <Icon style={stylesCuenta.iconBack} name={'arrow-back'} size={25} color="#000000" />
                </TouchableOpacity>
                <Text style={stylesCuenta.covidTitle}>
                    Tus favoritos
                </Text>
            </View>
            <>
                {
                    isLoading ?
                        <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}>
                            <ActivityIndicator color="black" size={100} />
                        </View>
                        :
                        <ScrollView style={stylesCuenta.tarjetas}>
                            {
                                data.map(m => (
                                    <FavoriteComponent
                                        key={m.id}
                                        data={m}
                                        setIsLoading={setIsLoading}
                                    />
                                ))
                            }
                        </ScrollView>
                }
            </>
        </>
    )
}
