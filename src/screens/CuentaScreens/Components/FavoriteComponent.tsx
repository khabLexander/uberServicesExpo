import React, { useContext, useState } from 'react'
import { Image, Text, View, TouchableOpacity, Alert } from 'react-native';
import { stylesCuenta } from '../../../themes/CuentaStyles';
import { ScrollView } from 'react-native-gesture-handler';
import { FavoriteModel } from '../../../models/favorite.model';
import Icon from 'react-native-vector-icons/Ionicons';
import { appAPI } from '../../../api/appAPI';
import { AuthContext } from '../../../context/AuthContext/AuthContext';
import { useNavigation } from '@react-navigation/native';


interface Props {
    data: FavoriteModel,
    setIsLoading(state: boolean): void,
}

export const FavoriteComponent = ({ data, setIsLoading }: Props, props: any) => {
    const navigation = useNavigation();
    const uri = data.img_url;
    const { authState, signIn } = useContext(AuthContext);

    const showConfirmDialog = async () => {
        const resp = await appAPI.delete(`/clients/${data.client_id}/products/${data.product_id}`, { headers: { "Authorization": `Bearer ${authState.token}` } })
        if (resp) {
            setIsLoading(false);
            navigation.goBack()
        } else {
            console.log('Error obteniendo los productos del cliente');
        }
    };

    return (
        <View style={stylesCuenta.tarjeta}>
            <Image
                style={stylesCuenta.imageFavorites}
                source={{ uri }}
            />
            <View style={{ flexDirection: 'column' }}>
                <Text style={stylesCuenta.titleFavoriteName}>{data.name}</Text>
                <Text> $$ {data.price}</Text>
                <View style={{ flexDirection: 'column', width: '23%' }}>
                    <Text style={stylesCuenta.descriptionFavorite}>{data.description}</Text>
                </View>
            </View>
            <TouchableOpacity style={stylesCuenta.iconDelete}
                onPress={() => showConfirmDialog()}
            >
                <Icon
                    style={stylesCuenta.iconUser}
                    name={"trash-outline"}
                    size={20}
                    color="#bdb4af"
                />
            </TouchableOpacity>
        </View>
    )
}
