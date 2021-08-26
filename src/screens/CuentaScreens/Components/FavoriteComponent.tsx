import React from 'react'
import { Text, View } from 'react-native';
import { stylesCuenta } from '../../../themes/CuentaStyles';
import { ScrollView } from 'react-native-gesture-handler';
import { FavoriteModel } from '../../../models/favorite.model';


interface Props {
    data: FavoriteModel,
}

export const FavoriteComponent = ({ data }: Props) => {

    return (
            <View style={stylesCuenta.tarjeta}>
                <Text>{data.id}</Text>
                <Text>{data.name}</Text>
                <Text>{data.description}</Text>

            </View>
    )
}
