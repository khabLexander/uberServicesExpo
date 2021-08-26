import { DrawerScreenProps } from '@react-navigation/drawer'
import React, { useEffect } from 'react'
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import CardInicio from './CardInicio';






interface Props extends DrawerScreenProps<any, any> { };

export const InicioScreen = (props: Props) => {

    useEffect(() => {
        // console.log(props)
        // props.navigation.setOptions({

        // })
    }, [])
    return (
        
        <View style={styles.inicioContainer}>
            <View style={styles.tituloContainer}>
                <Text style={styles.titulo}>Que deseas pedir hoy?  </Text>
            </View>

            <ScrollView>
                <CardInicio name ="KFC (Baca Ortiz)" imagen="https://wwwhatsnew.com/wp-content/uploads/2018/12/imagen1-730x359.jpg"  ></CardInicio>
                <CardInicio name ="MacDonalds" imagen ="https://media.cdnp.elobservador.com.uy/062021/1623675656992.jpg"></CardInicio>
                <CardInicio name ="Burger King" imagen= 'Burger King'></CardInicio>
            </ScrollView>


        </View>


    )
}

const styles = StyleSheet.create({

    inicioContainer: {
        flex: 1,
        backgroundColor: 'white'
    },


    titulo: {
        fontSize: 20,
        fontWeight: 'bold',
       
    },
    tituloContainer: {
        top: 20,
        right: -100,
    }
});