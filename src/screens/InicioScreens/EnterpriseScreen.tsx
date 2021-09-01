import React, { useContext, useEffect, useRef, useState } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Image, ImageBackground, Dimensions } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { stylesCuenta } from '../../themes/CuentaStyles';
import Icon from 'react-native-vector-icons/Ionicons';
import { EnterpriseModel } from '../../models/enterprise.model';
import { Modalize } from 'react-native-modalize';
import NegocioDetailsScreen from './NegocioDetailsScreen';
import { TapGestureHandler } from 'react-native-gesture-handler';
import { AuthContext } from '../../context/AuthContext/AuthContext';
import { CarritoComponent } from '../../components/CarritoComponent';
import MapView, { Marker } from 'react-native-maps';
import { DirectionsBurned } from '../../context/DirectionsBurned';
import { ActivityIndicator } from 'react-native-paper';
export interface Cordinates {
    latitude?: number,
    longitude?: number
}

// let cordinates: Cordinates = {};
export const EnterpriseScreen = ({ route }: any) => {

    const enterprise: EnterpriseModel = route.params;
    const navigation = useNavigation();
    const modalizeRef = useRef<Modalize>(null);
    const { authState, signIn } = useContext(AuthContext);
    const [cordinates, setCoordinates] = useState<Cordinates>();
    const [isLoading, setIsLoading] = useState(true);

    const onOpen = () => {
        modalizeRef.current?.open();
    }

    const onClose = () => {
        modalizeRef.current?.close();
        navigation.goBack()
    }
    useEffect(() => {
        getCordinates()
        const ac = new AbortController();
        onOpen()
        return () => ac.abort();;
    }, [])

    const getCordinates = () => {
        const element = DirectionsBurned.find(element => element.name === enterprise.name)
        // cordinates.latitude = element.coordinates.latitude
        // cordinates.longitude = element.coordinates.longitude
        setCoordinates({ latitude: element.coordinates.latitude, longitude: element.coordinates.longitude })
        setIsLoading(false)
    }
    return (
        <>

            <View style={{ flex: 1 }}>
                <View style={{ borderColor: 'white', borderWidth: 2, borderBottomColor: 'white' }}>
                    <ImageBackground source={{ uri: enterprise.img_url }} style={{ height: 200, width: '100%', top: 30 }}>
                        <TouchableOpacity style={styles.circle} onPress={() => navigation.goBack()}>
                            <Icon style={styles.iconBack} name={'arrow-back'} size={35} color="#000000" />
                        </TouchableOpacity>
                    </ImageBackground>
                </View>
                {
                    isLoading ?
                        <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}>
                            <ActivityIndicator color="black" size={100} />
                        </View> :
                        <View style={styles.container}>
                            <MapView style={styles.map}
                                initialRegion={{
                                    latitude: cordinates.latitude,
                                    longitude: cordinates.longitude,
                                    latitudeDelta: 0.0012,
                                    longitudeDelta: 0.0011,
                                }} >
                                <Marker
                                    draggable
                                    coordinate={{ latitude: cordinates.latitude, longitude: cordinates.longitude }}
                                    pinColor="black"
                                />
                            </MapView>
                        </View>
                }

                <Modalize

                    ref={modalizeRef}
                    snapPoint={300}
                    closeOnOverlayTap={false}
                    modalHeight={1300}
                    alwaysOpen={300}
                    closeSnapPointStraightEnabled={false}
                >
                    <View style={{
                        top: 20, left: 120, width: 200
                    }}>
                        {authState.products.length > 0 && <CarritoComponent />}
                    </View>
                    <View style={{ marginTop: 30, flex: 1, bottom: 30 }}>
                        <NegocioDetailsScreen enterprise={enterprise}></NegocioDetailsScreen>
                    </View>
                </Modalize>

            </View>
        </>
    )
}

const styles = StyleSheet.create({
    circle: {
        top: 5,
        backgroundColor: 'white',
        borderRadius: 100,
        width: 40,
        height: 40,
        left: 10
    },
    iconBack: {
        position: 'absolute',
        marginLeft: 5
    },
    container: {
        position: 'absolute',
        top: 235,
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    map: {
        width: Dimensions.get('window').width,
        height: 400,
    },
})
