import React, { useState } from "react";
import {
  Button,
  View,
  StyleSheet,
  TextInput,
  ScrollView,
  Text,
  ToastAndroid, TouchableOpacity
} from "react-native";
import { stylesLogin } from '@style/LoginStyles';

export const Register = (props:any) => {
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
      return props.navigation.navigate("Login")
    if (user.name === "" || user.email === "") {
        alert("El nombre y el email son obligatorios.");
    } else {
      try {
        // await firebase.db.collection("users").add({
        // name: user.name,
        // email: user.email,
        // phone: user.phone,
        // });
        ToastAndroid.showWithGravityAndOffset(
        "Usuario creado correctamente",
        ToastAndroid.LONG,
        ToastAndroid.TOP,
        25,
        1350)
        setState(datosUsuario)
        setBto(true)
        // props.navigation.navigate("UsersList");
        } catch (error) {
            console.log(error)
        }
      }
    };

    return (
      <ScrollView style={styles.container}>
      <View style ={styles.title}>
      <Text style ={{fontSize: 20}}>Registrarse</Text>
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
      { bto === true ? <View style={styles.footer}>
        <Button title="Ir al inicio" onPress={() => props.navigation.navigate("Inicio")} />
      </View> : <Text></Text> }
      <View>
          <Text>Login AQUI TRABAJA HENRY</Text>
          <TouchableOpacity
                  style={{
                      ...stylesLogin.botonGrande,
                      backgroundColor:'#ffffff'
                      }}
                  onPress={()=> props.navigation.navigate('BottomTabs')}
              >
              <Text style={stylesLogin.botonGrandeTexto}> INICIAR SESIÓN </Text>
          </TouchableOpacity>
          

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

