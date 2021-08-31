import React, { useRef } from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Image, Dimensions, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import { Modalize } from 'react-native-modalize';
const { width, height } = Dimensions.get('screen')

function CarritoModal() {
    const modalizeRef = useRef<Modalize>(null);
    const onOpen = () => {
        modalizeRef.current?.open();
    }
    const renderItem = (producto) => {
        return (
            <View style={{
                flex: 1, flexDirection: 'row', marginHorizontal: 10,
                marginVertical: 15, justifyContent: 'space-between', borderBottomWidth: 2, borderStyle: 'solid', borderBottomColor: 'lightgray', height: 50, paddingVertical: 10
            }}>
                <View style={{ backgroundColor: 'lightgray', width: 20, height: 20, }}>
                    <Text style={{ margin: 'auto', fontSize: 13 }}>
                        1
                    </Text>
                </View>
                <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Pizza Familiar</Text>
                <Text style={{ fontSize: 15, fontWeight: 'bold' }}>
                    <Icon name={'pricetag-sharp'} size={20} color={'#4AD811'} />
                    $22
                </Text>
            </View>
        )
    }
    return (
        <>
            <View >
                <TouchableOpacity
                    onPress={onOpen}
                    style={{ backgroundColor: 'black', height: 70, width: '90%', borderRadius: 5, margin: 'auto', }}
                >
                    <Text style={{ color: 'white', textAlign: 'center', fontSize: 25, marginTop: 15 }}>Ver carrito</Text>
                </TouchableOpacity>
            </View>

            <Modalize
                ref={modalizeRef}
                snapPoint={400}
                modalHeight={700}
                HeaderComponent={
                    <View style={{
                        width: '100%',
                        height: 70,
                        backgroundColor: 'white',
                        borderBottomWidth: 2, borderStyle: 'solid', borderBottomColor: 'lightgray',
                    }}>
                        <Text style={{ textAlign: 'center', fontSize: 25, marginTop: 15 }}>
                            Pizza Hut
                        </Text>
                    </View>
                }
                FooterComponent={
                    <View>
                        <View style={{ marginBottom: 10 }}>
                            <TouchableOpacity
                                style={{ backgroundColor: 'black', height: 70, width: '90%', borderRadius: 5, margin: 'auto' }}
                            >
                                <Text style={{ color: 'white', textAlign: 'center', fontSize: 25, marginTop: 15 }}>Pagar</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                }
                flatListProps={
                    {
                        data: [
                            { cantidad: 1, nombre: 'Pizza Familiar', precio: 22, id: '1' },
                            { cantidad: 1, nombre: 'Pizza Mediana', precio: 22, id: '2' },
                            { cantidad: 1, nombre: 'Pizza Lovers', precio: 22, id: '3' },
                            { cantidad: 1, nombre: 'Pizza cilindrica', precio: 22, id: '4' },
                        ],
                        renderItem: renderItem,
                        keyExtractor: item => item.id
                    }
                }

            >
            </Modalize>
        </>
    )

}

export default CarritoModal
