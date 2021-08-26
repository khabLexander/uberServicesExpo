import React, { useRef } from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import { Modalize } from 'react-native-modalize';
import NeogicioDetailsScreen from './NegocioDetailsScreen';



export const CardInicio = ({ imagen, name }: any) => {

    const modalizeRef = useRef<Modalize>(null);

    const onOpen = () => {
        modalizeRef.current?.open();
    }

    const onClose = () => {
        modalizeRef.current?.close();
    }


    return (
        <>
            <View >
                <TouchableOpacity onPress={onOpen} style={styles.cardContainer}>

                    <View style={styles.iconCard}>
                        <Icon name={'heart-outline'} size={30} color="#000000" />
                    </View>
                    <View >
                        <Image source={{ uri: imagen }} style={styles.imagenCard}></Image>
                    </View>
                    <View style={styles.textCard}>
                        <Text style={styles.title}>{name}</Text>
                    </View>
                </TouchableOpacity>
            </View>

            <Modalize ref={modalizeRef} snapPoint={600}>
                <View>
                    <View style={styles.closeIcon}>
                        <Icon name={'close-outline'} size={35} color="#000000" onPress={onClose}></Icon>
                    </View>
                    <View>
                        <NeogicioDetailsScreen imagen={imagen} name={name}></NeogicioDetailsScreen>
                    </View>
                </View>

            </Modalize>
        </>
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
        bottom: 10

    },
    iconCard: {
        left: 250,
        top: 10
    },
    title: {
        fontSize: 20,

    },
    closeIcon: {

        left: 350,
        top: 20,
    },
    textCard: {
        right: 95,
        top: 5,
       
    }
})
