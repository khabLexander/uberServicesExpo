import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
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
                <Icon name={'pricetag-sharp'} size={18} color={'#4AD811'}></Icon>
            </View>
            <View>
                <TouchableOpacity style={styles.textContainer}>
                    <Text style={{ fontSize: 16 }}>Abierto hasta las 9:30 PM </Text>
                    <Text style={{ fontSize: 16, }}>Toca para ver los horarios, direccion y mas </Text>
                    <View style={{ left: 340, bottom: 30 }}>
                        <Icon name={'chevron-forward-outline'} size={30}></Icon>
                    </View>
                </TouchableOpacity>
                <View style={{ left: 60, top: 23 }}>
                    <Icon name={'restaurant-outline'} size={22}></Icon>
                </View>
                <Text style={{ fontSize: 20, fontWeight: '200' }}>Menu</Text>
                <Image style={styles.imageMenu} source={require('../../assets/img/chizza.jpeg')}></Image>
                <View style={{bottom:100}}>
                    <Text style={{fontWeight:'900'}}>COMBO CHIZZA</Text>
                    <Text>$6.99</Text>
                    <Text>1 chizza + 1 papa frita pequeña + 1 gaseosa</Text>
                </View>

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
    textContainer: {
        top: 10
    },
    imageMenu: {
        width: 130,
        height: 130,
        left: 240
    }
});

export default NeogicioDetailsScreen
