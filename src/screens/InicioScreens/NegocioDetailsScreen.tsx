import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';





const NeogicioDetailsScreen = ({imagen, name}: any) => {

    console.log(name)
    return (
        <View style={styles.modalContainer}>
            <Text style={styles.title}>{name}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    title:{
        fontSize: 25,
        fontWeight:'bold',
        textAlign:'center',
    },
    modalContainer:{
        top:30,
        
    }
});

export default NeogicioDetailsScreen
