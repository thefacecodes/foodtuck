import {
  View,
  Image,
  ScrollView,
  ImageBackground,
  SafeAreaView,
  Text,
} from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import foods from "../foods.json";
import EachFood from "../components/EachFood";
import Appetizers from "../components/Appetizers";
import Drinks from "../components/Drinks";
import Local from "../components/Local";
import Food from "../components/Food";
import { ShoppingCartIcon } from "react-native-heroicons/solid";
import { useFonts, Poppins_400Regular } from "@expo-google-fonts/poppins";

const ShopList = ({ navigation }) => {
  const [foodSet, setFoodSet] = useState(foods.products);
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
  });
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitle: "FoodTuck by The Face",
      headerTitleStyle: { fontFamily: "Poppins_400Regular", fontSize: 22 },
      headerRight: () => (
        <ShoppingCartIcon
          name="reorder-three"
          color={"#000000"}
          size={25}
          onPress={() => navigation.navigate("Cart")}
        />
      ),
    });
  }, []);

  return (
    <SafeAreaView>
      <ScrollView>
        <ImageBackground
          className="h-48 justify-center items-end border-2 object-contain"
          source={require("../assets/homebg.png")}
        >
          <View className="px-4">
            <Image
              source={require("../assets/Foodtuck.png")}
              className="mb-2"
            />
            <Text
              className="text-white"
              style={{ fontFamily: "Poppins_400Regular", fontSize: 12 }}
            >
              Home of sweetness and delicacies...
            </Text>
          </View>
        </ImageBackground>
        <View>
          <Drinks />
          <Appetizers />
          <Food />
          <Local />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ShopList;
