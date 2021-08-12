import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { stylesCuenta } from '@style/CuentaStyles';
// import { stylesCuenta } from '../../themes/CuentaStyles';
import { ScrollView } from 'react-native-gesture-handler';
// import { styles } from '../../themes/BottomTabStyles';
import { useNavigation } from '@react-navigation/native';

export const C19SeguridadScreen = () => {
    const navigation = useNavigation();

    return (
        <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>

            <View style={stylesCuenta.bannerTop}>
                <TouchableOpacity
                    onPress={()=>navigation.goBack()}
                >
                    <Icon style={stylesCuenta.iconBack} name={'arrow-back'} size={25} color="#000000" />
                </TouchableOpacity>
                <Text style={stylesCuenta.covidTitle}>
                    COVID-19 : Centro de seguridad
                </Text>
            </View>
            <View style={{ marginLeft: '4%', marginRight: '3%' }} >
                <Text style={{ fontSize: 35, marginBottom: 22 }}>
                    COVID-19 {"\n"}
                    Centro de Seguridad
                </Text>
                <Image
                    style={{ width: 380, height: 180, marginBottom: 30  }}
                    source={require('../../assets/img/c19Primera.png')}
                />
                <Text style={{ fontSize: 30, marginBottom:10 }}>
                    Protegiendo a la comunidad {"\n"}
                    durante el COVID-19
                </Text>
                <Text style={{opacity:0.7, paddingTop:10, fontSize:15}}>
                    Uber está trabajando en estrecha colaboración con las autoridades de 
                    salud pública para brindar orientación que lo ayude a protegerse a sí 
                    mismo y a otros
                </Text>
                <Image
                    style={{ width: 75, height: 75, marginBottom: 30, marginTop:15 }}
                    source={require('../../assets/img/c19Segunda.png')}
                />
                <Text style={{paddingTop:10, fontSize:15,fontWeight:'bold'}}>
                    "Dejar en la puerta la entrega" 
                </Text>
                <Text style={{opacity:0.7, paddingTop:20, fontSize:15}}>
                Seleccione esta opción de entrega sin contacto al finalizar la compra 
                (puede ser obligatoria en su área). Lávese las manos después de recibir 
                su pedido de comida y antes de comerlo. 
                </Text>
                <Image
                    style={{ width: 75, height: 75, marginBottom: 30, marginTop:15 }}
                    source={require('../../assets/img/c19tercera.png')}
                />
                <Text style={{paddingTop:10, fontSize:15,fontWeight:'bold'}}>
                    "Dejar en la puerta la entrega" 
                </Text>
                <Text style={{opacity:0.7, paddingTop:20, fontSize:15}}>
                Compartimos regularmente las mejores prácticas de las autoridades de 
                salud pública con nuestros socios de restaurantes y repartidores. 
                </Text>
                <Image
                    style={{ width: 75, height: 75, marginBottom: 30, marginTop:15 }}
                    source={require('../../assets/img/c19cuarta.png')}
                />
                <Text style={{paddingTop:10, fontSize:15, fontWeight:'bold'}}>
                    "Dejar en la puerta la entrega" 
                </Text>

                <Text style={{opacity:0.7, paddingTop:20, fontSize:15, marginBottom:50}}>
                Uber está ayudando a los repartidores con iniciativas locales que pueden 
                incluir acceso a máscaras y apoyo financiero, de acuerdo con nuestra política
                 de respuesta COVID-19. 
                </Text>

                <Text style={{paddingTop:10, fontSize:20, fontWeight:'bold', opacity:0.6}}>
                    WHO`s COVID-19 advice
                </Text>
                <View style={stylesCuenta.hairline} />

                <TouchableOpacity style={stylesCuenta.bottonLearnMore}>
                    <Text style={{color:'white', textAlign:'center'}}>
                        Aprender más
                    </Text>
                </TouchableOpacity>
            </View>

        </ScrollView>

    )
}
