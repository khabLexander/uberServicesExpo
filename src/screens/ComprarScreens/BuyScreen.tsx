import React, { useState, useEffect, useContext } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Image } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { stylesCuenta } from '../../themes/CuentaStyles';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import { AuthContext } from '../../context/AuthContext/AuthContext';
import { ActivityIndicator } from 'react-native-paper';
import { appAPI } from '../../api/appAPI';
import { DeliveryModel } from '../../models/delivery.model';
import { authenticationAPI } from '../../api/authenticationAPI';
import { UserModel } from 'src/models/user.model';
import { OrderModel } from '../../models/order.model';
import { ProductModel } from '../../models/product.model';

let deliveries: DeliveryModel[];
let randomGuy: DeliveryModel;
let user: UserModel;
let order: OrderModel = {};
let userProducts: UserModel = {};
let products: ProductModel[] = [];

export const BuyScreen = () => {

    const navigation = useNavigation();
    const { authState, signIn, addCarrito } = useContext(AuthContext);
    const [isLoading, setIsLoading] = useState(true);
    const [timerCount, setTimer] = useState(40)
    const [delivery, setDelivery] = useState('');
    useEffect(() => {
        let interval = setInterval(() => {
            setTimer(lastTimerCount => {
                lastTimerCount <= 1 && clearInterval(interval)
                if (timerCount === 0) {
                    setIsLoading(false)
                    navigation.navigate("DetalleEntrega" as never)
                }
                return lastTimerCount - 1
            })
        }, 1000) //each count lasts for a second
        //cleanup the interval on complete
        return () => clearInterval(interval)
    }, []);

    useEffect(() => {
        getDeliveries();
    }, [])


    const getDeliveries = async () => {
        let random = 0
        const resp = await appAPI.get('/deliveries', { headers: { "Authorization": `Bearer ${authState.token}` } })
        if (resp) {
            deliveries = await resp.data;
            // console.log(deliveries)
            random = Math.floor(Math.random() * (50 - 1)) + 1;
            randomGuy = deliveries[random];
            console.log(randomGuy)
            getDeliveryUser();
        }
        else {
            console.log('Error' + resp)
        }


    }
    const getDeliveryUser = async () => {
        let name = '';
        const resp = await authenticationAPI.get(`/users/${randomGuy.user_id}`, { headers: { "Authorization": `Bearer ${authState.token}` } })
        if (resp) {
            user = await resp.data.data;
            name = user.name + " " + user.lastname
            setDelivery(name);
            console.log(user)
            createOrder();
        }
        else {
            console.log('Error' + resp)
        }
    }
    const createOrder = async () => {
        order.client_id = authState.clientId
        order.delivery_id = randomGuy.id
        order.calification = '5',
            order.delivery_cost = authState.total / (authState.products.length)
        order.delivery_date = "01/09/2021"
        order.state = 'entregado',
            order.payment_method = "efectivo"
        order.wait_time = "00:40:37"
        order.total_price = "0.84504"
        const resp = await appAPI.post(`/clients/${authState.clientId}/orders`, order, { headers: { "Authorization": `Bearer ${authState.token}` } })
        if (resp) {
            console.log(resp.data)
            userProducts.products = [];
            addCarrito(userProducts)
        }
        else {
            console.log("Error  " + resp)
        }
    }

    return (
        <View style={{ flex: 1 }}>
            <View style={styles.container}>
                <MapView style={styles.map}
                    initialRegion={{
                        latitude: -0.199284,
                        longitude: -78.495631,
                        latitudeDelta: 0.1922,
                        longitudeDelta: 0.1921,
                    }}>
                    <Marker
                        title={`Casa de ${authState.name}`}
                        draggable
                        coordinate={{ latitude: -0.256851, longitude: -78.546232 }}
                    >
                        <Image
                            source={{ uri: 'https://image.flaticon.com/icons/png/512/1946/1946436.png' }}
                            style={{ width: 20, height: 25 }}
                            resizeMode="contain"
                        />
                    </Marker>
                    <Marker
                        title={`Repartidor ${delivery}`}
                        coordinate={{ latitude: -0.199284, longitude: -78.500416 }}
                        pinColor="black"
                    >
                        <Image
                            source={{ uri: 'https://image.flaticon.com/icons/png/512/3202/3202926.png' }}
                            style={{ width: 26, height: 28 }}
                            resizeMode="contain"
                        />
                    </Marker>
                </MapView>
            </View>
            <View style={styles.contenedorEstado}>
                <Text style={{ fontWeight: 'bold', fontSize: 20, textAlign: 'center' }}>
                    Repartidor en camino
                </Text>
                <Text style={{ fontWeight: 'bold', fontSize: 20, textAlign: 'center' }}>
                    Tiempo estimado
                </Text>
                {
                    isLoading && timerCount != 0 ?
                        <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center', top: 90 }}>
                            <ActivityIndicator color="black" size={100} />
                            <Text style={styles.centrar}>{timerCount}</Text>
                        </View> :
                        <View>
                            <Text style={{ fontWeight: 'bold', fontSize: 30, textAlign: 'center', top: 150 }}>
                                !El repartidor ha llegado¡
                            </Text>
                            <TouchableOpacity
                                onPress={() => navigation.goBack()}
                                style={{
                                    backgroundColor: 'black', height: 70, width: '90%', borderRadius: 5, margin: 'auto', left: '5%'
                                }}
                            >
                                <Text style={{ color: 'white', textAlign: 'center', fontSize: 25, marginTop: 15 }}>
                                    Calificar Entrega
                                </Text>
                            </TouchableOpacity>
                        </View>
                }
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        top: 0,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    map: {
        width: Dimensions.get('window').width,
        height: 400,
    },
    contenedorEstado: {
        textAlign: 'center',
        margin: 'auto'

    },
    centrar: {
        textAlign: 'center',
        fontSize: 35,
        top: -25
    }
});