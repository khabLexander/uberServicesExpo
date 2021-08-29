import React, { useEffect, useState } from "react";
import { View, Image, TextInput, TouchableOpacity, StyleSheet, Button, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/Ionicons";
export default function DetallesScreen(props: any) {
    const [item, setItem] = useState<any>({})
    const [total, setTotal] = useState(0);
    const [cantidad, setCantidad] = useState<number>(1);
    const { product } = props.route.params;
    useEffect(() => {
        calcularTotal();
    }, [cantidad]);
    useEffect(() => {
        setItem(props.route.params.item)
    }, [])
    const sumar = () => {
        // let nuevaCantidad = parseInt(cantidad + 1);
        // setCantidad(nuevaCantidad);
    };
    const restar = () => {
        if (cantidad > 1) {
            // let nuevaCantidad = parseInt(cantidad - 1);
            // setCantidad(nuevaCantidad);
        }
    };
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
            <View style={styles.container}>
                <Image
                    style={{ width: '100%', height: 250 }}
                    source={{ uri: "https://picsum.photos/200/100" }}
                />
                <View style={{
                    left: 20,
                    top: 10,
                    position: 'absolute'
                }}>
                    <Icon onPress={() => props.navigation.goBack()} name={'arrow-back-circle'} size={35} color="white" />
                </View>
                <Text style={{ fontSize: 30, fontWeight: 'bold' }}>
                    {product.nombre}
                </Text>
                <Text style={{ fontSize: 15, color: '#969292', marginBottom: 10, marginTop: 5 }}>
                    {product.descripcion}
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
                        // const orden = {
                        //     ...detallesplato,
                        //     subtotal: total,
                        //     cantidad,
                        // };

                        // postOrden(orden);
                        props.navigation.navigate("ComidaScreen", { item, cantidad, total });
                    }}
                    style={{ backgroundColor: 'black', height: 70, width: '90%', borderRadius:5  }}
                >
                    <Text style={{ color: 'white', textAlign: 'center', fontSize: 25, marginTop: 15 }}>Anadir al carrito</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};
const styles = StyleSheet.create({

    button: {
        // borderRadius: 100,
        // backgroundColor: 'gray',
        // color: 'black',
        // fontSize: 20,
        // width: 30,
        // textAlign: 'center'
    },
    bannerTop: {
        // width: '100%',
        // height: 56,
        // borderBottomWidth: 0.5,
        // borderBottomColor: '#ab9e96',
        // shadowColor: "#94867e",
        // shadowOffset: {
        //     width: 0,
        //     height: 1,
        // },
        // shadowOpacity: 0.18,
        // shadowRadius: 1.00,
        // elevation: 2,
        // flexDirection: 'row',
        // alignItems: "center",
    },
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
