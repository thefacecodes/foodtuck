import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import { TrashIcon } from "react-native-heroicons/solid";
import { ShopContext } from "./StoreContext";
import { useFonts, Poppins_400Regular } from "@expo-google-fonts/poppins";

const CartItem = ({ item }) => {
  const { state, dispatch } = useContext(ShopContext);
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <View className="flex-row items-center space-x-2 mx-4 mb-2">
      <Image
        source={{
          uri: item.image,
        }}
        className="h-24 w-24"
      />
      <View className="flex-1">
        <Text
          className="font-bold mb-2"
          style={{ fontFamily: "Poppins_400Regular", fontSize: 24 }}
        >
          {item.name}
        </Text>
        <Text
          className=""
          style={{ fontFamily: "Poppins_400Regular", fontSize: 16 }}
        >
          ${item.price.toFixed(2)} x {item.quantity}
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => dispatch({ type: "removeFromCart", payload: item })}
      >
        <Text>
          <TrashIcon color="red" />
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CartItem;
