import React, { useEffect, useState } from "react";
import { View, Image, TextInput, StyleSheet, Button, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
export default props => {
    const [item, setItem] = useState({})
    const [total, setTotal] = useState(0);
    const [cantidad, setCantidad] = useState(1);
    useEffect(() => {
        calcularTotal();
    }, [cantidad]);
    useEffect(() => {
        setItem(props.route.params.item)
    }, [])
    const sumar = () => {
        let nuevaCantidad = parseInt(cantidad + 1);
        setCantidad(nuevaCantidad);
    };
    const restar = () => {
        if (cantidad > 1) {
            let nuevaCantidad = parseInt(cantidad - 1);
            setCantidad(nuevaCantidad);
        }
    };
    const calcularTotal = () => {
        const nuevoTotal = item.precio * cantidad;
        setTotal(nuevoTotal);
    };
    const handleChange = e => {
        if (e < 1) {
            setCantidad(1);
        } else {
            setCantidad(e);
        }
    };
    return (
        < View style={styles.container} >
            <ScrollView>
                <View style={styles.container}>
                    <Image style={{ height: 200 }} source={{ uri: "https://picsum.photos/200" }} />
                    <Text>Detalles</Text>
                    <Text>{item.nombre}</Text>
                    <Text>{item.descripcion}</Text>
                    <Text note>{item.categoria}</Text>
                    <Text> $ {item.precio}</Text>
                    <Text>{total}</Text>
                </View>
                <View>
                    <Button
                        onPress={() => {
                            // const orden = {
                            //     ...detallesplato,
                            //     subtotal: total,
                            //     cantidad,
                            // };

                            // postOrden(orden);
                            props.navigation.navigate("Local",{item,cantidad,total});
                        }}
                        title='Ordenar'
                    />
                </View>
                <View>
                    <Button onPress={restar} title='-' />
                    <TextInput
                        style={styles.input}
                        value={cantidad.toString()}
                        placeholder="1"
                        keyboardType="numeric"
                        onChangeText={handleChange}
                    />
                    <Button onPress={sumar} title='+' />

                </View>
            </ScrollView>
        </View >
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    input: {
        width: "30%",
        textAlign: "center",
        backgroundColor: "#fff",
        color: "#000",
        margin: 5
    },
});
