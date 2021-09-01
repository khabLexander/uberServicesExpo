import { DrawerScreenProps } from '@react-navigation/drawer'
import React, { useContext, useEffect, useState } from 'react'
import { Text, View, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../context/AuthContext/AuthContext';
import { appAPI } from '../../api/appAPI';
import { EnterpriseModel } from '../../models/enterprise.model';
import { ActivityIndicator } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import { CarritoComponent } from '../../components/CarritoComponent';

interface Props extends DrawerScreenProps<any, any> { };

let enterprises: EnterpriseModel[];
export const InicioScreen = (props: Props) => {

    const navigation = useNavigation();
    const { authState, signIn } = useContext(AuthContext);
    const [isLoading, setIsLoading] = useState(true);
    const [isLoadingDelivery, setIsLoadingDelivery] = useState(true);

    useEffect(() => {
        getEnterprises();
    }, [])

    const getEnterprises = async () => {
        const resp = await appAPI.get('/enterprises', { headers: { "Authorization": `Bearer ${authState.token}` } })
        if (resp) {
            enterprises = resp.data.data;
            setIsLoading(false)
        }
        else {
            console.log('Error' + resp)
        }
    }
    return (
        <>
            <View style={styles.inicioContainer}>
                <View style={styles.tituloContainer}>
                    <Text style={styles.titulo}>¿Qué deseas pedir hoy?  </Text>
                </View>
            </View>

            <>
                {
                    isLoading ?
                        <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}>
                            <ActivityIndicator color="black" size={100} />
                        </View>
                        :
                        <ScrollView>
                            {
                                enterprises.map(enterprise => (
                                    <TouchableOpacity style={{ marginTop: 30, marginBottom: -35 }}
                                        onPress={() => props.navigation.navigate("EnterpriseScreen", enterprise)}
                                        key={enterprise.id}
                                    >
                                        <View style={styles.cardContainer}>
                                            <Image source={{ uri: enterprise.img_url }} style={styles.imagenCard}></Image>
                                            <View style={styles.textCard}>
                                                <Text style={styles.title}>{enterprise.name}</Text>
                                            </View>
                                            <View style={styles.iconTag}>
                                                <Icon name={'pricetag-sharp'} size={20} color={'#4AD811'}></Icon>
                                                <Text style={{ fontWeight: 'bold' }}> Costo de envio</Text>
                                                <Text > ${(Math.random() * (1.5 - 0.5) + 0.5).toFixed(2)}</Text>
                                                <Text style={styles.calification}> {enterprise.calification}.{(Math.random() * (9 - 1 + 1) + 1).toFixed(0)} </Text>

                                            </View>
                                            <View>
                                                <Text style={styles.address}> {enterprise.address}</Text>
                                                <Text style={styles.country}> {enterprise.country}</Text>
                                            </View>
                                        </View>
                                    </TouchableOpacity>

                                ))
                            }
                        </ScrollView>
                }
            </>
            {authState.products.length > 0 && <CarritoComponent />}
        </>

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
    },
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
        marginTop: 20,
        resizeMode: 'contain',
        width: 395,
        height: 100,
        right: 100,
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
        marginTop: 40,
        right: 95,
        top: 5,

    },
    iconTag: {
        top: 10,
        right: 100,
        flexDirection: 'row',
        width: 500
    },
    calification: {
        position: 'absolute',
        left: 350,
        borderRadius: 100,
        width: 30,
        height: 30,
        textAlign: 'center',
        justifyContent: 'center',
        fontSize: 15,
        backgroundColor: '#b6b6b8'
    },
    address: {
        marginTop: 10,
        position: 'absolute',
        left: -80
    },
    country: {
        position: 'absolute',
        left: 200
    }
});