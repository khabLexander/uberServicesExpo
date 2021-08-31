import React, { useContext, useEffect, useRef } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, ImageBackground } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/Ionicons';
import { Modalize } from 'react-native-modalize';
import { AuthContext } from '../../context/AuthContext/AuthContext';
import { ProductModel } from 'src/models/product.model';


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
        <View>
            <View style={{ borderColor: 'white', borderWidth: 2, borderBottomColor: 'white' }}>
                <ImageBackground source={{ uri: 'https://www.desarrollolibre.net/public/images/example//html/geolocalizacion-html5-google-maps.png' }} style={{ height: 200, width: '100%' }}>
                    <TouchableOpacity style={styles.circle} onPress={() => navigation.goBack()}>
                        <Icon style={styles.iconBack} name={'arrow-back'} size={35} color="#000000" />
                    </TouchableOpacity>
                </ImageBackground>
            </View>
            <Modalize
                ref={modalizeRef}
                snapPoint={700}
                alwaysOpen={700}
                closeSnapPointStraightEnabled={false}
                disableScrollIfPossible={true}
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
                        <View style={{ bottom: 100 }}>
                            <View
                                style={{ backgroundColor: 'black', height: 70, width: '90%', borderRadius: 5, margin: 'auto' }}
                            >
                                <Text style={{ color: 'white', textAlign: 'center', fontSize: 25, marginTop: 15 }}>Pagar</Text>
                            </View>
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
});
