import React from 'react'
import { View, Text } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack';


interface Props extends StackScreenProps<any,any>{

}


const NeogicioDetailsScreen = ({route}:Props) => {

    const params = route.params

    console.log(params);
    return (
        <View>
            <Text>{params}</Text>
        </View>
    )
}

export default NeogicioDetailsScreen
