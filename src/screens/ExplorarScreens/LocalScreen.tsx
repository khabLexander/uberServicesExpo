import React, { useState, useEffect, useRef } from "react";
import { View, StyleSheet, FlatList, TouchableOpacity, Image, Text, Dimensions } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import { Modalize } from 'react-native-modalize';
import ComidaScreen from "./ComidaScreen";
const localesMock = [
    {
        nombre: 'Pizza Hut',
        telefono: '3323243',
        categoria: 'Viveres',
        id: 'ASD2F',
        address: '',
        calification: '5',
        country: '',
        img_url: '',
        ranking: '',
        timeOpen: '',
        timeClose: ''
    },
    {
        nombre: 'Pizza Hut',
        telefono: '3323243',
        categoria: 'Viveres',
        id: 'ASD33F',
        address: '',
        calification: '5',
        country: '',
        img_url: '',
        ranking: '',
        timeOpen: '',
        timeClose: ''
    },
    {
        nombre: 'Pizza Hut',
        telefono: '3323243',
        categoria: 'Viveres',
        id: 'AS34DF',
        address: '',
        calification: '5',
        country: '',
        img_url: '',
        ranking: '',
        timeOpen: '',
        timeClose: ''
    },
    {
        nombre: 'Pizza Hut',
        telefono: '3323243',
        categoria: 'Viveres',
        id: 'AS545F',
        address: '',
        calification: '5',
        country: '',
        img_url: '',
        ranking: '',
        timeOpen: '',
        timeClose: ''
    },
    {
        nombre: 'Pizza Hut',
        telefono: '3323243',
        categoria: 'Viveres',
        id: 'AS5656DF',
        address: '',
        calification: '5',
        country: '',
        img_url: '',
        ranking: '',
        timeOpen: '',
        timeClose: ''
    },
    {
        nombre: 'Pizza Hut',
        telefono: '3323243',
        categoria: 'Viveres ',
        id: '7878',
        address: '',
        calification: '5',
        country: '',
        img_url: '',
        ranking: '',
        timeOpen: '',
        timeClose: ''
    }
];
// const {width,height}=Dimensions.get('screen')
export default function LocalScreen(props: any) {
    const modalizeRef = useRef<Modalize>(null);

    const onOpen = () => {
        modalizeRef.current?.open();
    }

    const onClose = () => {
        modalizeRef.current?.close();
    }
    const { category } = props.route.params;
    function renderItem(item: any) {
        return (
            <View
                style={styles.item}
            >
                <TouchableOpacity
                    onPress={() => {
                        props.navigation.navigate('ComidaScreen', { local: item })
                    }}
                >
                    <Image
                        style={{ width: '100%', height: 250, }}
                        source={{ uri: "https://picsum.photos/200/100" }}
                    />
                    <View style={{
                        right: 20,
                        top: 10,
                        position: 'absolute'
                    }}>
                        <Icon name={'heart-outline'} size={30} color="white" />
                    </View>
                    <Text style={styles.title}>{item.nombre}</Text>
                    <Text style={{ fontSize: 15 }}>
                        <Icon name={'star'} size={15} color="#000000" />
                        calificacion: {item.calification}
                    </Text>
                </TouchableOpacity>

            </View>
        );
    }
    return (
        <View style={styles.container}>
            <View style={styles.bannerTop}>
                <TouchableOpacity
                    onPress={() => props.navigation.goBack()}
                >
                    <Icon style={styles.iconBack} name={'arrow-back'} size={25} color="#000000" />
                </TouchableOpacity>
                <Text style={styles.title}>
                    { }
                </Text>
            </View>
            <FlatList
                data={localesMock}
                renderItem={({ item }) => renderItem(item)}
                keyExtractor={(item, index) => index.toString()}
            />

        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        // alignItems: "center",
        // justifyContent: "center",
        // margin: 10
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
        fontSize: 20,
        fontWeight: 'bold'
    },
    item: {
        margin: 10,
        position: "relative"
    },
});