import React, { useState, useEffect } from "react";
import { View, StyleSheet, FlatList, TouchableOpacity, Image, Text } from "react-native";
import { ListItem, Avatar } from "react-native-elements";
import Icon from "react-native-vector-icons/Ionicons";
import CarritoModal from "./CarritoModal";
const menuMock = [
    {
        nombre: 'Hamburguesa de queso',
        categoria: 'Viveres',
        precio: 12,
        id: 'ASDF',
        descripcion: 'Hamburguesa de queso',
        enterpriseId: '',
        imgUrl: '',
        likeCounter: ''
    },
    {
        nombre: 'Hamburguesa de queso',
        categoria: 'Viveres',
        precio: 12,
        id: 'ASD56F',
        descripcion: 'Hamburguesa de queso',
        enterpriseId: '',
        imgUrl: '',
        likeCounter: ''
    }, {
        nombre: 'Hamburguesa de queso',
        categoria: 'Viveres',
        precio: 12,
        id: 'AS555DF',
        descripcion: 'Hamburguesa de queso',
        enterpriseId: '',
        imgUrl: '',
        likeCounter: ''
    },
    {
        nombre: 'Hamburguesa de queso',
        categoria: 'Viveres',
        precio: 12,
        id: 'ASD555555',
        descripcion: 'Hamburguesa de queso',
        enterpriseId: '',
        imgUrl: '',
        likeCounter: ''
    },
    {
        nombre: 'Hamburguesa de queso',
        categoria: 'Viveres',
        precio: 12,
        id: 'A5S555DF',
        descripcion: 'Hamburguesa de queso',
        enterpriseId: '',
        imgUrl: '',
        likeCounter: ''
    },
    {
        nombre: 'Hamburguesa de queso',
        categoria: 'Viveres',
        precio: 12,
        id: 'AS767DF',
        descripcion: 'Hamburguesa de queso',
        enterpriseId: '',
        imgUrl: '',
        likeCounter: ''
    },

];
export default (props: any) => {
    const { local } = props.route.params;
    const [hayOrden, setHayOrden] = useState(true)
    function renderItem(product: any) {
        return (
            <View>
                <TouchableOpacity
                    style={styles.product}
                    onPress={() => {
                        props.navigation.navigate('DetallesScreen', { product })
                    }}
                >
                    <View style={{ flex: 1, flexDirection: 'column' }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{product.nombre}</Text>
                        <Text style={{ fontSize: 14 }}>${product.precio}</Text>
                        <Text style={{ fontSize: 13, color: '#969292' }}>{product.descripcion}</Text>
                    </View>
                    <Image
                        style={{ width: 100, height: 100, }}
                        source={{ uri: "https://picsum.photos/200/" }}
                    />
                </TouchableOpacity>

            </View>
        );
    }
    return (
        <View style={styles.container} >
            <View style={styles.bannerTop}>
                <TouchableOpacity
                    onPress={() => props.navigation.goBack()}
                >
                    <Icon style={styles.iconBack} name={'arrow-back'} size={25} color="#000000" />
                </TouchableOpacity>
                <Text style={styles.title}>
                    {local.nombre}
                </Text>
            </View>
            <View>
                <Text style={{ fontSize: 30, fontWeight: 'bold' }}>{local.nombre}</Text>
                <Text style={{ fontWeight: 'bold' }}> <Icon name={'star'} size={15} color="#000000" /> Calificacion: {local.calification} . {local.categoria} </Text>
            </View>
            <Text style={{ marginVertical: 35 }}>Productos</Text>
            <FlatList
                data={menuMock}
                renderItem={({ item }) => renderItem(item)}
                keyExtractor={(item, index) => index.toString()}
            />
                {hayOrden && <CarritoModal/>}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        // alignItems: "center",
        // justifyContent: "center",
        marginBottom: 10
    },
    bannerTop: {
        width: '100%',
        height: 56,
        borderBottomWidth: 0.5,
        borderBottomColor: '#ab9e96',
        shadowColor: "#94867e",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.00,
        elevation: 2,
        flexDirection: 'row',
        alignItems: "center",
    },
    iconBack: {
        marginLeft: 15
    },
    title: {
        marginLeft: 15,
        fontSize: 20,
        fontWeight: 'bold'
    },
    item: {
        margin: 10
    },
    product: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: "space-around",
        margin: 10,
    },
});