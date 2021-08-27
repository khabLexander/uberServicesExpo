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
                    <View style={styles.iconTag}>
                        <Icon name={'pricetag-sharp'} size={20} color={'#4AD811'}></Icon>
                        <Text> Costo de envio: $1.39 - 35-45 min</Text>
                    </View>
                </TouchableOpacity>
            </View>

            <Modalize ref={modalizeRef} snapPoint={700}>
                <TouchableOpacity onPress={onClose}>
                    <View style={styles.closeIcon}>
                        <Icon name={'close-outline'} size={35} color="#000000" ></Icon>
                    </View>
                    <View style={{flex:1, bottom:30}}>
                        <NeogicioDetailsScreen imagen={imagen} name={name}></NeogicioDetailsScreen>
                        
                    </View>
                </TouchableOpacity>

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
        marginBottom: 0,
        marginTop: 40,
        borderRadius: 10,
        left: -30,
        paddingHorizontal: 100,
        paddingBottom: 200,
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
        width: 395,
        height: 150,
        right:100,
        bottom: 10

    },
    iconCard: {
        left: 250,
        top: 10,
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

    },
    iconTag: {
        top:10,
        right: 100,
        flexDirection:'row',
        
    }
})
