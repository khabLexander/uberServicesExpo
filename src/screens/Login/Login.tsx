import React, { useContext, useState } from "react";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import { SocialIcon, Input, Button } from "react-native-elements";
import { LoginModel } from "../../models/login.model";
import { View, StyleSheet, ScrollView, Text } from "react-native";
import { AuthContext } from "../../context/AuthContext/AuthContext";
import { UserModel } from '../../models/user.model';
import { authenticationAPI } from "../../api/authenticationAPI";

export const Login = (props: any) => {
  const login: LoginModel = {
    username: "",
    password: "",
    deviceName: "mipc",
  };
  const { authState, signIn } = useContext(AuthContext);
  const [user, setState] = useState(login);
  const handleChangeText = (value: string, name: string) => {
    setState({ ...user, [name]: value });
  };

  const saveNewUser = async () => {
    console.log(user);
    
    authenticationAPI.post('/auth/login', user)
      .then(function (response) {
        console.log(response)
        const user = saveToken(response.data.data.user, response.data.token);
        signIn(user);
        props.navigation.navigate("BottomTabs");
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  const saveToken = (user: UserModel, token: string) => {
    const userLoged = {
      ...user,
      token
    }
    return userLoged;
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.title}>
        <Text style={{ fontSize: 20 }}>Loguearse</Text>
      </View>
      <View>
        <Input
          placeholder="Email"
          leftIcon={<MaterialIcons name="email" size={24} color="black" />}
          multiline={true}
          numberOfLines={2}
          onChangeText={(value) => handleChangeText(value, "username")}
          value={user.username}
        />
        <Input
          placeholder="Contraseña"
          leftIcon={<Ionicons name="key" size={24} color="black" />}
          onChangeText={(value) => handleChangeText(value, "password")}
          value={user.password}
        />
        <View style={{ marginBottom: 70, backgroundColor: "red" }}>
          <Button title="Ingresar" onPress={() => saveNewUser()} />
        </View>
        <SocialIcon
          title="+ Crear cuenta"
          button
          onPress={() => props.navigation.navigate("Register")}
          style={styles.btn}
        />
        <SocialIcon
          title="Sign In With Facebook"
          button
          type="facebook"
          style={styles.btn}
        />
        <SocialIcon
          title="Sign In With Twitter"
          button
          type="twitter"
          style={styles.btn}
        />
        <SocialIcon
          title="Sign In With Instagram"
          button
          light
          type="instagram"
          style={styles.btn}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  footer: {
    marginTop: 300,
    width: 115,
    marginLeft: 170,
  },
  title: {
    marginTop: 30,
    color: "black",
    marginBottom: 40,
    alignItems: "center",
  },
  container: {
    flex: 1,
    padding: 35,
  },
  inputGroup: {
    flex: 1,
    padding: 0,
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  loader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
  },
  btn: {
    height: 40,
  },
});
