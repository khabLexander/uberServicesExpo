import React, { useState,useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { ListItem, Avatar } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";
const localesMock = [
    {
        nombre: 'AASDASD',
        telefono: '3323243',
        categoria: 'SADFSDF',
        id: 'ASDF'
    },
    {
        nombre: 'FGHFGH',
        telefono: '6767',
        categoria: 'GHGH',
        id: '4334SD'
    },
    {
        nombre: 'SDFSFRE',
        telefono: '776767',
        categoria: 'DFGDFGY6',
        id: '435GGGT45'
    },
    {
        nombre: 'AASDASD',
        telefono: '3323243',
        categoria: 'SADFSDF',
        id: '332ASDF'
    },
    {
        nombre: 'FGHFGH',
        telefono: '6767',
        categoria: 'GHGH',
        id: '43323234SD'
    },
    {
        nombre: 'SDFSFRE',
        telefono: '776767',
        categoria: 'DFGDFGY6',
        id: '435GGGT233245'
    }
];
export default function LocalScreen (props:any) {
    const [category, setCategory] = useState<{}>({})
    const [locales, setLocales] = useState<{}[]>([]);
    useEffect(() => {
        setCategory(props.selectedCategory)
        setLocales(localesMock)
    }, [])
    return (
        <View style={styles.container}>
            <ScrollView>
                {locales.map((local:any) => {
                    return (
                        <ListItem
                            key={local.id}
                            bottomDivider
                            onPress={() => {
                                props.navigation.navigate('Comida', { local })
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
                                <ListItem.Title>{local.nombre}</ListItem.Title>
                                <ListItem.Subtitle>{local.telefono}</ListItem.Subtitle>
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