import React, { useContext, useEffect, useRef } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { stylesCuenta } from '../../themes/CuentaStyles';
import Icon from 'react-native-vector-icons/Ionicons';
import { EnterpriseModel } from '../../models/enterprise.model';
import { Modalize } from 'react-native-modalize';
import NegocioDetailsScreen from './NegocioDetailsScreen';
import { TapGestureHandler } from 'react-native-gesture-handler';
import { AuthContext } from '../../context/AuthContext/AuthContext';
import { CarritoComponent } from '../../components/CarritoComponent';

export const EnterpriseScreen = ({ route }: any) => {

    const enterprise: EnterpriseModel = route.params;
    const navigation = useNavigation();
    const modalizeRef = useRef<Modalize>(null);
    const { authState, signIn } = useContext(AuthContext);

    const onOpen = () => {
        modalizeRef.current?.open();
    }

    const onClose = () => {
        modalizeRef.current?.close();
        navigation.goBack()
    }
    useEffect(() => {
        const ac = new AbortController();
        onOpen()
        return () => ac.abort();;
    }, [])

    return (
        <>

            <View>
                <View style={{ borderColor: 'white', borderWidth: 2, borderBottomColor: 'white' }}>
                    <ImageBackground source={{ uri: enterprise.img_url }} style={{ height: 200, width: '100%' }}>
                        <TouchableOpacity style={styles.circle} onPress={() => navigation.goBack()}>
                            <Icon style={styles.iconBack} name={'arrow-back'} size={35} color="#000000" />
                        </TouchableOpacity>
                    </ImageBackground>
                </View>
                <View>
                    <Image source={{ uri: 'https://www.desarrollolibre.net/public/images/example//html/geolocalizacion-html5-google-maps.png' }} style={{ height: 300, width: '100%' }}></Image>
                </View>
                <Modalize
                    ref={modalizeRef}
                    snapPoint={700}
                    closeOnOverlayTap={true}
                    alwaysOpen={500}
                    closeSnapPointStraightEnabled={false}
                    disableScrollIfPossible={true}
                >

                    <View style={{ marginTop: 30, flex: 1, bottom: 30 }}>
                        <NegocioDetailsScreen enterprise={enterprise}></NegocioDetailsScreen>
                    </View>
                </Modalize>
            </View>
            <View style={{ top: 245 }}>
                {authState.products.length > 0 && <CarritoComponent />}
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
})
