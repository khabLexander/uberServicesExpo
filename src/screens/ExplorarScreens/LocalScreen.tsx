import React, { useState, useEffect, useRef, useContext } from "react";
import { Text, View, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Modalize } from 'react-native-modalize';

import ComidaScreen from "./ComidaScreen";
import { ActivityIndicator } from 'react-native-paper';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { EnterpriseModel } from '../../models/enterprise.model';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../context/AuthContext/AuthContext';
import { appAPI } from '../../api/appAPI';
import { CategoryModel } from '../../models/category.model';
import { stylesCuenta } from '../../themes/CuentaStyles';
import { EnterpriseScreen } from '../InicioScreens/EnterpriseScreen';

interface Props extends DrawerScreenProps<any, any> { };

let enterprises: EnterpriseModel[];
// const {width,height}=Dimensions.get('screen')
export default function LocalScreen({ route }: any, props: Props) {

    const navigation = useNavigation();
    const category: CategoryModel = route.params;
    const { authState, signIn } = useContext(AuthContext);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getEnterprises();
    }, [])

    const getEnterprises = async () => {
        const resp = await appAPI.get(`/categories/${category.id}/enterprises`, { headers: { "Authorization": `Bearer ${authState.token}` } })
        if (resp) {
            enterprises = resp.data.data;
            setIsLoading(false)
        }
        else {
            console.log('Error' + resp)
        }
    }

    const modalizeRef = useRef<Modalize>(null);


    return (
        <>
            <View style={stylesCuenta.bannerTop}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                >
                    <Icon style={stylesCuenta.iconBack} name={'arrow-back'} size={25} color="#000000" />
                </TouchableOpacity>
                <Text style={stylesCuenta.covidTitle}>
                    Empresas de  {category.name}                </Text>
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
                                        onPress={() => navigation.navigate('EnterpriseScreen' as never, enterprise as never)}
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
        </>

    )
};
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
