import React, { useContext } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { stylesCuenta } from "../../themes/CuentaStyles";
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../../context/AuthContext/AuthContext";
import Icon from "react-native-vector-icons/Ionicons";
import axios from "axios";
import { appAPI } from '../../api/appAPI';
import { CarritoComponent } from '../../components/CarritoComponent';


export const CuentaScreen = (props: any) => {
  const navigation = useNavigation();
  const { authState, signIn } = useContext(AuthContext);

  const getCategories = () => {
    appAPI
      .get('/categories', { headers: { "Authorization": `Bearer ${authState.token}` } })
      .then(function (response) {
        console.log(response)
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <View style={{ flex: 1, height: '100%' }}>
      <View style={stylesCuenta.bannerTop}>
        <View style={stylesCuenta.imgUser}>
          <Icon
            style={stylesCuenta.iconUser}
            name={"person"}
            size={25}
            color="#bdb4af"
          />
        </View>
        <Text style={stylesCuenta.nameUser}>
          {authState.name} {authState.lastname}
        </Text>
      </View>

      <View>
        <TouchableOpacity
          style={stylesCuenta.optionsAccount}
          onPress={() => props.navigation.navigate("C19SeguridadScreen")}
        >
          <Icon
            style={{ marginLeft: 20 }}
            name={"shield"}
            size={25}
            color="#000000"
          />
          <Text style={stylesCuenta.textOptions}>
            COVID-19: Centro de seguridad
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={stylesCuenta.optionsAccount}
          onPress={() => props.navigation.navigate('FavoritesScreen')}
        >
          <Icon
            style={{ marginLeft: 20 }}
            name={"heart"}
            size={25}
            color="#000000"
          />
          <Text style={stylesCuenta.textOptions}>Tus favoritos</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={stylesCuenta.optionsAccount}
          onPress={() => props.navigation.navigate("MetodoPagoScreen")}
        >
          <Icon
            style={{ marginLeft: 20 }}
            name={"card"}
            size={25}
            color="#000000"
          />
          <Text style={stylesCuenta.textOptions}>Pago</Text>
        </TouchableOpacity>
        <TouchableOpacity style={stylesCuenta.optionsAccount}>
          <Icon
            style={{ marginLeft: 20 }}
            name={"help-buoy"}
            size={25}
            color="#000000"
          />
          <Text style={stylesCuenta.textOptions}>Ayuda</Text>
        </TouchableOpacity>
        <TouchableOpacity style={stylesCuenta.optionsAccount}
          onPress={() => getCategories()}
        >
          <Icon
            style={{ marginLeft: 20 }}
            name={"briefcase"}
            size={25}
            color="#000000"
          />
          <Text style={stylesCuenta.textOptions}>
            Realiza entregas con UberServices
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={stylesCuenta.optionsAccount}
          onPress={() => props.navigation.navigate('Login')}
        >
          <Icon
            style={{ marginLeft: 20 }}
            name={"settings"}
            size={25}
            color="#000000"
          />
          <Text style={stylesCuenta.textOptions}>Cerrar Sesión</Text>
        </TouchableOpacity>
      </View>
      <View style={{ bottom: -190 }}>
        {authState.products.length > 0 && <CarritoComponent />}
      </View>

    </View>
  );
};
