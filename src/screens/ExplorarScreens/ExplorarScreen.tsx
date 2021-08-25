import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  SafeAreaView,
  StyleSheet,
  Image,
  Text,
  FlatList,
  View,
  TouchableOpacity,
} from "react-native";
import LocalScreen from "./LocalScreen";
const CATEGORIESMOCK = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    name: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    name: "Second Item",
  },
  {
    id: "58694a0f-3da1-47091f-bd96-145571e29d72",
    name: "Third Item",
  },
  {
    id: "bd7acbea-c1b1-0946c2-aed5-3ad53abb28ba",
    name: "First Item",
  },
  {
    id: "3ac68afc-c6059-48d3-a4f8-fbd91aa97f63",
    name: "Second Item",
  },
  {
    id: "58694a0f-3da81-471f-bd96-145571e29d72",
    name: "Third Item",
  },
  {
    id: "bd7acbea-777c1b1-46c2-aed5-3ad53abb28ba",
    name: "First Item",
  },
  {
    id: "3ac68afc-c605-433338d3-a4f8-fbd91aa97f63",
    name: "Second Item",
  },
  {
    id: "58694a0f-4545453da1-471f-bd96-145571e29d72",
    name: "Third Item",
  },
  {
    id: "bd7ac4545bea-c1b1-46c2-aed5-3ad53abb28ba",
    name: "First Item",
  },
  {
    id: "3ac3568afc-c605-48d3-a4f8-fbd91aa97f63",
    name: "Second Item",
  },
  {
    id: "3458694a0f-3da1-471f-bd96-145571e29d72",
    name: "Third Item",
  },
];

export default function ExplorarScreen(props: any) {
  const [categories, setCategories] = useState<{}[]>();
  const [selectedCategory, setSelectedCategory] = useState<{}>();
  const navigation = useNavigation();
  useEffect(() => {
    setCategories(CATEGORIESMOCK);
    setSelectedCategory(CATEGORIESMOCK[0]);
  }, []);
  function renderItem(item: any) {
    return (
      <TouchableOpacity
        style={[styles.divCategorie, { backgroundColor: item.color }]}
        onPress={() => {
          setSelectedCategory(item);
          props.navigation.navigate("LocalScreen", { category: item });
        }}
      >
        <Image
          style={{ width: 100, height: 80 }}
          resizeMode="contain"
          source={{ uri: "https://picsum.photos/150" }}
        />
        <Text style={{ fontWeight: "bold", fontSize: 12 }}>{item.name}</Text>
      </TouchableOpacity>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        horizontal={true}
        data={categories}
        renderItem={({ item }) => renderItem(item)}
        keyExtractor={(item, index) => index.toString()}
      />
      <LocalScreen selectedCategory={selectedCategory} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  divCategorie: {
    backgroundColor: "red",
    margin: 5,
    alignItems: "center",
    borderRadius: 10,
    padding: 10,
  },
  nameCatg: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
});
