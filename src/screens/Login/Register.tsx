import React, { useState } from "react";
import {
  Button,
  View,
  StyleSheet,
  TextInput,
  ScrollView,
  Text,
  ToastAndroid
} from "react-native";

export const Register = (props: any) => {
  const datosUsuario = {
    username: "",
    birthdate: "",
    name: "",
    lastname: "",
    email: "",
    password: ""
  };

  const [user, setState] = useState(datosUsuario);
  const [bto, setBto] = useState(false);

  const handleChangeText = (value: string, name: string) => {
    setState({ ...user, [name]: value });
    console.log(user)
  };

  const saveNewUser = async () => {
    if (user.name === "" || user.email === "") {
      alert("El nombre y el email son obligatorios.");
    } else {
      try {
        ToastAndroid.showWithGravityAndOffset(
          "Usuario creado correctamente",
          ToastAndroid.LONG,
          ToastAndroid.TOP,
          25,
          1350)
        setState(datosUsuario)
        setBto(true)
        props.navigation.navigate("Login")
      } catch (error) {
        console.log(error)
      }
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.title}>
        <Text style={{ fontSize: 20 }}>Registrarse</Text>
      </View>
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Nombre usuario"
          onChangeText={(value) => handleChangeText(value, "username")}
          value={user.username}
        />
      </View>
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Fecha nacimiento"
          onChangeText={(value) => handleChangeText(value, "birthdate")}
          value={user.birthdate}
        />
      </View>
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Nombres"
          onChangeText={(value) => handleChangeText(value, "name")}
          value={user.name}
        />
      </View>
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Apellidos"
          onChangeText={(value) => handleChangeText(value, "lastname")}
          value={user.lastname}
        />
      </View>
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Email"
          multiline={true}
          numberOfLines={2}
          onChangeText={(value) => handleChangeText(value, "email")}
          value={user.email}
        />
      </View>
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Contraseña"
          onChangeText={(value) => handleChangeText(value, "password")}
          value={user.password}
        />
      </View>
      <View>
        <Button title="Registrarse" onPress={() => saveNewUser()} />
      </View>
      {bto === true ? <View style={styles.footer}>
        <Button title="Loguearse" onPress={() => props.navigation.navigate("Login")} />
      </View> : <Text></Text>}
      <View>
        <Button title="Login" onPress={() => props.navigation.navigate("Login")} />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  footer: {
    marginTop: 300,
    width: 115,
    marginLeft: 170
  },
  title: {
    marginTop: 30,
    color: 'black',
    marginBottom: 40,
    alignItems: 'center',
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
});

