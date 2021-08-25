import React, { useContext } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { stylesCuenta } from "../../themes/CuentaStyles";
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../../context/AuthContext";
import Icon from "react-native-vector-icons/Ionicons";
import { Ionicons } from "@expo/vector-icons";

export const CuentaScreen = () => {
  const navigation = useNavigation();
  const { authState, signIn } = useContext(AuthContext);

  return (
    <View>
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
          {authState.nombre} {authState.apellido}
        </Text>
      </View>

      <View>
        <TouchableOpacity
          style={stylesCuenta.optionsAccount}
          onPress={() => navigation.navigate("C19SeguridadScreen")}
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
        <TouchableOpacity
          style={stylesCuenta.optionsAccount}
          onPress={() => navigation.navigate("FavoritoScreen")}
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
          onPress={() => navigation.navigate("MetodoPagoScreen")}
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
        <TouchableOpacity style={stylesCuenta.optionsAccount}>
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
        <TouchableOpacity style={stylesCuenta.optionsAccount}>
          <Icon
            style={{ marginLeft: 20 }}
            name={"settings"}
            size={25}
            color="#000000"
          />
          <Text style={stylesCuenta.textOptions}>Configuración</Text>
        </TouchableOpacity>
      </View>
      {/* <TouchableOpacity
                    style={{
                        backgroundColor:'#ffffff'
                        }}
                    onPress={()=> navigation.navigate('LoginScreen')}
                >
                <Text style={stylesCuenta.botonGrandeTexto}> CERRAR SESIÓN </Text>
            </TouchableOpacity>         */}
    </View>
  );
};
