import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';



export const CardInicio = ({ imagen, name}: any) => {

    const navigation = useNavigation();
    

    return (
        <TouchableOpacity style={{ ...styles.cardContainer }} onPress={() => navigation.navigate('NeogicioDetailsScreen' ,name ) } >
            <Icon name={'heart-outline'} size={30} style={styles.iconCard} color="#000000" />
            <View >
                <Image source={{ uri: imagen }} style={styles.imagenCard}>

                </Image>
            </View>

        </TouchableOpacity>
    )
}

export default CardInicio

const styles = StyleSheet.create({

    cardContainer: {
        marginHorizontal: 35,
        backgroundColor: 'white',
        height: 260,
        width: 400,
        marginBottom: 25,
        marginTop: 40,
        borderRadius: 10,
        left: -30,
        paddingHorizontal: 100,
        // borderWidth: 0.5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.43,
        shadowRadius: 9.51,

        elevation: 15,
    },
    imagenCard: {
        width: 300,
        height: 150,
        right: 70,
        bottom:10

    },
    iconCard: {
        left:250
    }
})
