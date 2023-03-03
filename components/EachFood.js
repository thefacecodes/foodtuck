import { View, Image, Text, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { StarIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";
import { useFonts, Poppins_400Regular } from "@expo-google-fonts/poppins";

const EachFood = ({ food }) => {
  // const [fontsLoaded] = useFonts({
  //   Poppins: require("../assets/fonts/Poppins-Black.ttf"),
  // });
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
  });
  const navigation = useNavigation();

  // if (!fontsLoaded) {
  //   return null;
  // }
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("Food", { food });
      }}
      className="h-56 w-60 rounded-md mr-4 shadow overflow-hidden bg-gray-200 relative"
    >
      <Image
        className="h-3/4 w-full object-cover"
        source={{
          uri: food.image,
        }}
      />
      <View className="px-4 py-2 flex-row justify-between items-center">
        <View>
          <Text
            className="text-lg font-bold"
            style={{ fontFamily: "Poppins_400Regular", fontSize: 20 }}
          >
            {food.name}
          </Text>
          <View className="flex-row ">
            {Array.from({ length: food.ratings }).map((index) => (
              <StarIcon key={index} color={"black"} size={15} />
            ))}
          </View>
        </View>
        <Text
          className="text-2xl font-bold"
          style={{ fontFamily: "Poppins_400Regular", fontSize: 20 }}
        >
          ${food.price}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default EachFood;
