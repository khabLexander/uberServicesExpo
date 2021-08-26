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
import { FavoriteContext } from '../../context/FavoriteContext/FavoriteContext';
import { ScrollView } from 'react-native-gesture-handler';

let data: FavoriteModel[] = [];

export const FavoritesScreen = () => {
    const navigation = useNavigation();
    const { authState, signIn } = useContext(AuthContext);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        getFavorites();
    }, [])
    const getFavorites = async () => {
        const resp = await appAPI.get(`/clients/${5}/products`, { headers: { "Authorization": `Bearer ${authState.token}` } })
        if (resp) {
            data = resp.data.data
            console.log(data);
            setIsLoading(false);
        } else {
            console.log('Error');
        }
    };

    return (
        <ScrollView>
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
            <View>
                {
                    isLoading ?
                        <Text>
                            asdlkasdmkañsd
                        </Text> :
                        <View style={stylesCuenta.tarjetas}>
                            {
                                data.map(m => (
                                    <FavoriteComponent key={m.id} data={m} />
                                ))
                            }
                        </View>
                }
            </View>
        </ScrollView>
    )
}
