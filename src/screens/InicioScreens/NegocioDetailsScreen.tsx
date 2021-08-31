import React, { useContext, useEffect, useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { EnterpriseModel } from '../../models/enterprise.model';
import { CategoryModel } from '../../models/category.model';
import { appAPI } from '../../api/appAPI';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../context/AuthContext/AuthContext';
import { ActivityIndicator } from 'react-native-paper';
import { ProductModel } from '../../models/product.model';


let categories: CategoryModel[];
let products: ProductModel[];


interface Props {
    enterprise: EnterpriseModel
}

const NegocioDetailsScreen = ({ enterprise }: Props) => {
    const navigation = useNavigation();
    const { authState, signIn } = useContext(AuthContext);
    const [isLoadingCat, setIsLoadingCat] = useState(true);
    const [isLoadingPro, setIsLoadingPro] = useState(true);

    useEffect(() => {
        const ac = new AbortController();
        getEnterpriseCagegories()
        getEnterpriseProducts()
        return () => ac.abort();;
    }, [])

    const clean = () => {
        categories = [];
        products = [];
    }
    const getEnterpriseCagegories = async () => {
        const resp = await appAPI.get(`/enterprises/${enterprise.id}/categories`, { headers: { "Authorization": `Bearer ${authState.token}` } })
        if (resp) {
            categories = resp.data.data;
            setIsLoadingCat(false)
        }
        else {
            console.log('Error' + resp)
        }
    }
    const getEnterpriseProducts = async () => {
        const resp = await appAPI.get(`/enterprises/${enterprise.id}/products`, { headers: { "Authorization": `Bearer ${authState.token}` } })
        if (resp) {
            products = resp.data.data;
            setIsLoadingPro(false)
        }
        else {
            console.log('Error' + resp)
        }
    }
    return (
        <View style={styles.modalContainer}>
            <Text style={styles.title}>{enterprise.name}</Text>
            <View style={styles.iconStar}>
                <Icon name={'star-sharp'} size={18} ></Icon>
            </View>
            <View style={{ bottom: 8, left: 25, }}>
                <Text style={{ fontSize: 15 }}>{enterprise.calification}.{(Math.random() * (9 - 1 + 1) + 1).toFixed(0)}
                    ({enterprise.ranking} calificaciones)
                </Text>
                {
                    isLoadingCat ?
                        <View style={{ flex: 1 }}>
                            <ActivityIndicator color="black" size={10} />
                        </View> :
                        <View style={{ marginTop: 10 }}>
                            {
                                categories.map(category => (
                                    <View key={category.id}>
                                        <Text
                                            style={{ justifyContent: 'space-around' }}
                                        >
                                            <Icon name={'pricetag-sharp'} size={18} color={'#4AD811'}></Icon>
                                            {category.name}
                                        </Text>
                                    </View>

                                ))
                            }
                        </View>
                }
            </View>
            <View>
                <TouchableOpacity style={styles.textContainer}>
                    <Text style={{ fontSize: 16 }}>Abierto hasta {enterprise.time_open} PM </Text>
                    <Text style={{ fontSize: 16, }}>Toca para ver los horarios, direccion y mas </Text>
                    <View style={{ left: 340, bottom: 30 }}>
                        <Icon name={'chevron-forward-outline'} size={30}></Icon>
                    </View>
                </TouchableOpacity>
                <View style={{ left: 100, top: 28 }}>
                    <Icon name={'cash-outline'} color={'#4AD811'} size={22}></Icon>
                </View>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Productos</Text>
                {
                    isLoadingPro ?
                        <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}>
                            <ActivityIndicator color="black" size={50} />
                        </View> :
                        products.map(product => (
                            <TouchableOpacity
                                key={product.id}
                                style={{ flexDirection: 'row', marginTop: 30 }}
                                onPress={() => navigation.navigate('DetallesScreen' as never, product as never)}
                            >
                                <View
                                >
                                    <Text style={{ fontWeight: '900' }}>{product.name.toUpperCase()}</Text>
                                    <Text>${product.price}</Text>
                                    <Text style={styles.description}>{product.description}</Text>
                                </View>
                                <Image style={styles.imageMenu} source={{ uri: product.img_url }}></Image>
                            </TouchableOpacity>

                        ))
                }



            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    title: {
        fontSize: 25,
        fontWeight: 'bold',

    },
    modalContainer: {
        top: 20,
        left: 20,
        flex: 1,

    },
    iconStar: {
        top: 10,
    },
    textContainer: {
        top: 10
    },
    imageMenu: {
        position: 'absolute',
        right: 20,
        resizeMode: 'contain',
        width: 100,
        height: 100,
        top: 30
    },
    description: {
        width: '26%'
    }
});

export default NegocioDetailsScreen
