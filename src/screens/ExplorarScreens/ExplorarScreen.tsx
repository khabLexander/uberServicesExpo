import React, { useState, useEffect, useContext } from "react";
import { appAPI } from '../../api/appAPI';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../context/AuthContext/AuthContext';
import { CategoryModel } from '../../models/category.model';
import { CarritoComponent } from '../../components/CarritoComponent';

import { DrawerScreenProps } from '@react-navigation/drawer';
import {
  StyleSheet,
  Image,
  Text,
  FlatList,
  View,
  TouchableOpacity,
} from "react-native";
let categories: CategoryModel[] = [];
interface Props extends DrawerScreenProps<any, any> { };

export default function ExplorarScreen(category: CategoryModel, props) {
  const navigation = useNavigation();
  const { authState, signIn } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    getCategories();
  }, [])

  const getCategories = async () => {
    const resp = await appAPI.get('/categories', { headers: { "Authorization": `Bearer ${authState.token}` } })
    if (resp) {
      categories = resp.data.data;
      setIsLoading(false)
    }
    else {
      console.log('Error' + resp)
    }
  }

  function renderItem(category: CategoryModel) {
    return (
      <View style={styles.button}>


        <TouchableOpacity

          onPress={() => {
            navigation.navigate('LocalScreen' as never, category as never);
          }}
        >
          <Image
            style={{ width: '100%', height: 200, }}
            source={{ uri: category.img_url }}
          />
          <View style={{
            right: '50%',
            top: '50%',
            position: 'absolute',
          }}>
            <Text style={{ fontSize: 20, color: 'black', fontWeight: 'bold' }}>{category.name}</Text>
          </View>

        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={{ alignSelf: 'flex-start', fontSize: 30, textAlign: 'center' }}>Todas las categorias</Text>
      <FlatList
        numColumns={2}
        data={categories}
        renderItem={({ item }) => renderItem(item)}
        keyExtractor={(item, index) => index.toString()}
      />
      {authState.products.length > 0 && <CarritoComponent />}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    // alignItems: "center",
    justifyContent: "space-between",
    textAlign: 'center'
  },
  button: {
    flex: 1,
    flexDirection: 'column',
    margin: 10,
    borderRadius: 6,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,

    elevation: 15,
  },
});
