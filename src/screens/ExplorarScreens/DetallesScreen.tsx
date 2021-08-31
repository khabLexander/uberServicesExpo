import React, { useContext, useEffect, useState } from "react";
import { View, Image, TextInput, TouchableOpacity, StyleSheet, Button, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/Ionicons";
import { ProductModel } from '../../models/product.model';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../context/AuthContext/AuthContext';
import { UserModel } from '../../models/user.model';
import { stylesCuenta } from '../../themes/CuentaStyles';


let userProducts: UserModel = { total: 0 };
let products: ProductModel[] = [];
export default function DetallesScreen({ route }: any, props: any) {

    const product: ProductModel = route.params;
    const navigation = useNavigation();
    const [item, setItem] = useState<any>({})
    const [total, setTotal] = useState(0);
    const [cantidad, setCantidad] = useState<number>(1);
    const [productosComprados, setProductosComprados] = useState<ProductModel[]>([])
    const { authState, addCarrito } = useContext(AuthContext);

    useEffect(() => {
        calcularTotal();
    }, [cantidad]);

    const sumar = () => {
        setCantidad(cantidad + 1)
    };
    const restar = () => {
        if (cantidad <= 1) {
            setCantidad(0)
        } else {
            setCantidad(cantidad - 1)
        }
    };
    const agregarProductoCarrito = (product: ProductModel, cantidad) => {
        for (let i = 1; i <= cantidad; i++) {
            products.push(product)
        }
        userProducts.products = products
        userProducts.total += parseInt(product.price) * cantidad
        addCarrito(userProducts)
        console.log(authState.products)
        console.log(authState.total)
        navigation.goBack();
    }
    const calcularTotal = () => {
        const nuevoTotal = item.precio * cantidad;
        setTotal(nuevoTotal);
    };
    const handleChange = (e: number) => {
        if (e < 1) {
            setCantidad(1);
        }
        setCantidad(e);
    };
    return (
        <ScrollView style={{ backgroundColor: 'white' }}>
            <View style={stylesCuenta.bannerTop}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                >
                    <Icon style={stylesCuenta.iconBack} name={'arrow-back'} size={25} color="#000000" />
                </TouchableOpacity>
                <Text style={stylesCuenta.covidTitle}>
                    {product.name}
                </Text>
            </View>
            <View style={styles.container}>
                <Image
                    style={{ width: '100%', height: 250, marginTop: 50 }}
                    source={{ uri: product.img_url }}
                />
                <View style={{
                    left: 20,
                    top: 10,
                    position: 'absolute'
                }}>
                    <Icon onPress={() => props.navigation.goBack()} name={'arrow-back-circle'} size={35} color="white" />
                </View>
                <Text style={{ fontSize: 30, fontWeight: 'bold' }}>
                    {product.name}
                </Text>
                <Text style={{ fontSize: 15, color: '#969292', marginBottom: 10, marginTop: 5 }}>
                    {product.description}
                </Text>
                <View style={styles.separator} />
                <View style={{ flex: 1, flexDirection: 'row', marginVertical: 10 }}>
                    <TouchableOpacity onPress={restar} style={{ marginRight: 10 }}>
                        <Icon name={'remove-circle'} size={35} />
                    </TouchableOpacity>
                    <Text style={{ fontSize: 20, }}>{cantidad}</Text>
                    <TouchableOpacity onPress={sumar} style={{ marginLeft: 10 }} >
                        <Icon name={'add-circle'} size={35} />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity
                    onPress={() => {
                        agregarProductoCarrito(product, cantidad)
                    }}
                    style={{ backgroundColor: 'black', height: 70, width: '90%', borderRadius: 5 }}
                >
                    <Text style={{ color: 'white', textAlign: 'center', fontSize: 25, marginTop: 15 }}>Anadir al carrito</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};
const styles = StyleSheet.create({
    iconBack: {
        marginLeft: 15,
        marginTop: 10,

    },
    title: {
        marginLeft: 15,
        fontSize: 20,
        fontWeight: 'bold'
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: "center",
        backgroundColor: "white",
        // padding: 20,
        // margin: 1,
    },
    separator: {
        marginVertical: 8,
        borderBottomColor: '#737373',
    },
});
