import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';




const NeogicioDetailsScreen = ({ imagen, name }: any) => {

    console.log(name)
    return (
        <View style={styles.modalContainer}>
            <Text style={styles.title}>{name}</Text>
            <View style={styles.iconStar}>
                <Icon name={'star-sharp'} size={18} ></Icon>
            </View>
            <View style={{ bottom: 8, left: 25, }}>
                <Text style={{ fontSize: 15 }}>4.5 (220 calificaciones) * Pollo * $$ * </Text>
            </View>
            <View style={{ left: 280, bottom: 25 }}>
                <Icon name={'pricetag-sharp'} size={18} color={'green'}></Icon>
            </View>
            <View>
                <TouchableOpacity style={styles.textContainer}>
                    <Text style={{fontWeight:'200', fontSize:16}}>Abierto hasta las 9:30 PM </Text>
                    <Text style={{fontSize:16, }}>Toca para ver los horarios, direccion y mas </Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    title: {
        fontSize: 25,
        fontWeight: 'bold',

    },
    modalContainer: {
        top: 20,
        left: 20,
        flex: 1,

    },
    iconStar: {
        top: 10,
    },
    textContainer:{
        bottom:20
    },
});

export default NeogicioDetailsScreen
