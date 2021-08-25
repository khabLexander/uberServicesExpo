import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { stylesCuenta } from "../../themes/CuentaStyles";
import { Ionicons } from "@expo/vector-icons";

export const FavoritoScreen = () => {
  const navigationn = useNavigation();

  return (
    <View>
      <View style={stylesCuenta.bannerTop}>
        <TouchableOpacity onPress={() => navigationn.goBack()}>
          <Ionicons
            style={stylesCuenta.iconBack}
            name="arrow-back-sharp"
            size={25}
            color="#000000"
          />
        </TouchableOpacity>
        <Text style={stylesCuenta.covidTitle}>Tus favoritos</Text>
      </View>
    </View>
  );
};
