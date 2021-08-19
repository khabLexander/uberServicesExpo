import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { ListItem, Avatar } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";
const menuMock = [
    {
        nombre: 'AASDASD',
        categoria: 'SADFSDF',
        precio: 12,
        id: 'ASDF',
        descripcion: 'Hamburguesa de queso'
    },
    {
        nombre: 'FGHFGH',
        categoria: 'GHGH',
        id: '4334SD',
        precio: 12,
        descripcion: 'Hamburguesa de queso'
    },
    {
        nombre: 'SDFSFRE',
        precio: 12,
        categoria: 'DFGDFGY6',
        id: '435GGGT45',
        descripcion: 'Hamburguesa de queso'
    },
    {
        nombre: 'AASDASD',
        precio: 12,
        categoria: 'SADFSDF',
        id: '332ASDF',
        descripcion: 'Hamburguesa de queso'
    },
    {
        nombre: 'FGHFGH',
        precio: 12,
        categoria: 'GHGH',
        id: '43323234SD',
        descripcion: 'Hamburguesa de queso'
    },
    {
        nombre: 'SDFSFRE',
        precio: 12,
        categoria: 'DFGDFGY6',
        id: '435GGGT233245',
        descripcion: 'Hamburguesa de queso'
    }
];
export default (props) => {
    const { local } = props.route.params;
    const [menu, setMenu] = useState([])
    useEffect(() => {
        console.log(local)
        setMenu(menuMock)

    }, [])
    return (

        <View style={styles.container}>
            <ScrollView>
                {menu.map((item) => {
                    return (
                        <ListItem
                            key={item.id}
                            bottomDivider
                            onPress={() => {
                                console.log(item)
                                props.navigation.navigate('Detalles', { item })
                            }}
                        >
                            <ListItem.Chevron />
                            <Avatar
                                source={{
                                    uri:
                                        "https://picsum.photos/200",
                                }}
                                rounded
                            />
                            <ListItem.Content>
                                <ListItem.Title>{item.nombre}</ListItem.Title>
                                <ListItem.Subtitle>{item.precio}</ListItem.Subtitle>
                            </ListItem.Content>
                        </ListItem>
                    );
                })}

            </ScrollView>
        </View>


    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});