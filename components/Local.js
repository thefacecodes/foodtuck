import { View, ScrollView, Text } from "react-native";
import React, { useState } from "react";
import foods from "../foods.json";
import EachFood from "./EachFood";
import { useFonts, Poppins_400Regular } from "@expo-google-fonts/poppins";

const Local = () => {
  const [foodSet, setFoodSet] = useState(foods.products);
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
  });

  // if (!fontsLoaded) {
  //   return null;
  // }
  return (
    <View className="p-4">
      <Text
        className="font-bold"
        style={{ fontFamily: "Poppins_400Regular", fontSize: 24 }}
      >
        Local Dishes
      </Text>
      <Text
        className="text-gray-500 mb-4"
        style={{ fontFamily: "Poppins_400Regular", fontSize: 16 }}
      >
        Lorem ipsum dolor sit amet
      </Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className=""
      >
        {foodSet.map((food) =>
          food.category === "local" || food.category === "vegetables" ? (
            <EachFood key={food.id} food={food} />
          ) : null
        )}
      </ScrollView>
    </View>
  );
};

export default Local;
