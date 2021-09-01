import React, { useContext, useEffect, useRef } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, ImageBackground, Dimensions, Image } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/Ionicons';
import { Modalize } from 'react-native-modalize';
import { AuthContext } from '../../context/AuthContext/AuthContext';
import { ProductModel } from 'src/models/product.model';
import MapView, { Marker } from 'react-native-maps';
import { UserModel } from '../../models/user.model';



export const OrderScreen = () => {

    const modalizeRef = useRef<Modalize>(null);
    const navigation = useNavigation();
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
        return () => ac.abort();
    }, [])

    const renderItem = (pro) => {
        let product: ProductModel = pro.item
        return (
            <View style={{
                flex: 1, flexDirection: 'row', marginHorizontal: 10,
                marginVertical: 15, justifyContent: 'space-between', borderBottomWidth: 2, borderStyle: 'solid', borderBottomColor: 'lightgray', height: 50, paddingVertical: 10
            }}>
                <View style={{ backgroundColor: 'lightgray', width: 20, height: 20, }}>
                    <Text style={{ margin: 'auto', fontSize: 13 }}>
                        *
                    </Text>
                </View>
                <Text style={{ fontSize: 15, fontWeight: 'bold' }}>{product.name}</Text>
                <Text style={{ fontSize: 15, fontWeight: 'bold' }}>
                    <Icon name={'pricetag-sharp'} size={20} color={'#4AD811'} />
                    ${product.price}
                </Text>
            </View>
        )
    }
    return (
        <View style={{ flex: 1 }}>
            <View style={{ borderColor: 'white', borderWidth: 2, borderBottomColor: 'white' }}>
                <View style={{ top: 20, height: 200, width: '100%' }}>

                    <View style={styles.container}>
                        <MapView style={styles.map}
                            initialRegion={{
                                latitude: -0.199810,
                                longitude: -78.494451,
                                latitudeDelta: 0.0922,
                                longitudeDelta: 0.0421,
                            }}>
                            <Marker
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
                                title={`Casa de ${authState.name}`}
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
                    <TouchableOpacity style={styles.circle} onPress={() => navigation.goBack()}>
                        <Icon style={styles.iconBack} name={'arrow-back'} size={35} color="#000000" />
                    </TouchableOpacity>
                </View>

            </View>
            <Modalize
                ref={modalizeRef}
                snapPoint={300}
                alwaysOpen={300}
                modalHeight={1300}
                closeSnapPointStraightEnabled={false}
                HeaderComponent={
                    <View style={{
                        width: '100%',
                        height: 70,
                        backgroundColor: 'white',
                        borderBottomWidth: 2, borderStyle: 'solid', borderBottomColor: 'lightgray',
                    }}>
                        <Text style={{ textAlign: 'center', fontSize: 25, marginTop: 15 }}>
                            TOTAL : {authState.total}$
                        </Text>
                    </View>
                }
                FooterComponent={
                    <TouchableOpacity
                        onPress={() => navigation.navigate('BuyScreen' as never)}
                    >
                        <View
                            style={{ left: 25, bottom: 5, backgroundColor: 'black', height: 70, width: '90%', borderRadius: 5, margin: 'auto' }}
                        >
                            <Text style={{ color: 'white', textAlign: 'center', fontSize: 25, marginTop: 15 }}>Pagar</Text>
                        </View>
                    </TouchableOpacity>


                }
                flatListProps={
                    {
                        data: authState.products,
                        renderItem: renderItem,
                        keyExtractor: (item, index) => index.toString()
                    }
                }

            >

            </Modalize>
        </View>
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
        top: 0,
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    map: {
        width: Dimensions.get('window').width,
        height: 400,
    },
});
