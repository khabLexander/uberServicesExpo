import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { stylesCuenta } from "../../themes/CuentaStyles";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons";
import { styles, colores } from "../../themes/BottomTabStyles";

export const MetodoPagoScreen = (props: any) => {
  const navigation = useNavigation();
  return (
    <View>
      <View style={stylesCuenta.bannerTop}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon
            style={stylesCuenta.iconBack}
            name={"arrow-back"}
            size={25}
            color="#000000"
          />
        </TouchableOpacity>
        <Text style={stylesCuenta.covidTitle}>Métodos de pago</Text>
      </View>
      <Text style={stylesCuenta.pagoTitle}>Pago</Text>
      <Text style={stylesCuenta.metodoPagoLetter}>Métodos de pago</Text>

      {/* Se despliega dinamicamente los metodos de pago acorde 
                    al usuario y sus métodos de pago */}
      <View style={{ flexDirection: "column" }}>
        <TouchableOpacity
          style={{ flexDirection: "row" }}
          onPress={() => props.navigation.navigate("EfectivoScreen")}
        >
          <Icon
            style={stylesCuenta.iconBack}
            name={"cash-outline"}
            size={40}
            color="#000000"
          />
          <Text style={{ fontSize: 20, marginLeft: "10%", marginTop: "2%" }}>
            Efectivo
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ flexDirection: "row" }}
          onPress={() => props.navigation.navigate("TarjetaScreen")}
        >
          <Icon
            style={stylesCuenta.iconBack}
            name={"card-outline"}
            size={40}
            color="#000000"
          />
          <Text style={{ fontSize: 20, marginLeft: "10%", marginTop: "2%" }}>
            Tarjeta
          </Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity>
        <Text style={stylesCuenta.addMetodPay}>Agregar método de pago</Text>
      </TouchableOpacity>
      <View style={{ borderBottomColor: "black", borderBottomWidth: 1 }} />
      <Text style={stylesCuenta.metodoPagoLetter}>Cupones</Text>
      <TouchableOpacity
        style={{ flexDirection: "row", width: "100%" }}
        onPress={() => props.navigation.navigate("CuponesScreen")}
      >
        <Icon
          style={stylesCuenta.iconBack}
          name={"pricetag-sharp"}
          size={40}
          color="#000000"
        />
        <Text style={{ fontSize: 20, marginLeft: "10%", marginTop: "2%" }}>
          Cupones
        </Text>
        <Text
          style={{
            fontSize: 20,
            position: "absolute",
            right: "5%",
            marginTop: "2%",
          }}
        >
          0
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => props.navigation.navigate("AgregarCuponScreen")}
      >
        <Text style={stylesCuenta.addMetodPay}>Agregar código de cupón</Text>
      </TouchableOpacity>
    </View>
  );
};
