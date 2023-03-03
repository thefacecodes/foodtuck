import {
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Text,
} from "react-native";
import React, { useContext, useEffect, useLayoutEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";
import { ArrowLeftIcon, StarIcon } from "react-native-heroicons/solid";
import { ShopContext } from "../components/StoreContext";
import { useFonts, Poppins_400Regular } from "@expo-google-fonts/poppins";

const SingleFood = ({ navigation }) => {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
  });

  const {
    params: { food },
  } = useRoute();
  const { state, dispatch } = useContext(ShopContext);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const addToCart = () => {
    console.log("Added to cart");
    dispatch({ type: "AddToCart", payload: { ...food, quantity: 1 } });
  };

  const inCart = state.cart.find((item) => item.id === food.id);

  const increaseQuantity = () => {
    dispatch({ type: "UpdateCart", payload: food });
  };

  const reduceQuantity = () => {
    {
      inCart.quantity > 1
        ? dispatch({ type: "reduceQuantity", payload: food })
        : dispatch({ type: "removeFromCart", payload: food });
    }
  };

  // if (!fontsLoaded) {
  //   return null;
  // }

  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <Image
          source={{
            uri: food.image,
          }}
          className="w-full h-64"
        />
        <TouchableOpacity
          className="h-[50px] w-[50px] flex justify-center items-center shadow bg-gray-300 rounded-full absolute left-4 top-8"
          onPress={() => navigation.goBack()}
        >
          <Text className="">
            <ArrowLeftIcon size={24} color={"black"} />
          </Text>
        </TouchableOpacity>
        <View className="p-4">
          <Text
            className="font-bold"
            style={{ fontFamily: "Poppins_400Regular", fontSize: 28 }}
          >
            {food.name}
          </Text>
          <Text
            className="my-4 text-gray-500"
            style={{ fontFamily: "Poppins_400Regular", fontSize: 16 }}
          >
            {food.description}
          </Text>
          <Text
            className="bg-gray-300 justify-self-start self-start text-black capitalize rounded p-2"
            style={{ fontFamily: "Poppins_400Regular", fontSize: 14 }}
          >
            {food.category}
          </Text>
          <Text
            className="font-bold my-4"
            style={{ fontFamily: "Poppins_400Regular", fontSize: 28 }}
          >
            ${food.price.toFixed(2)}
          </Text>
          <View className="flex-row ">
            {Array.from({ length: food.ratings }).map((index) => (
              <StarIcon key={index} color={"#FF9F0D"} size={25} />
            ))}
          </View>
        </View>
      </ScrollView>
      {inCart ? (
        <View className="flex-row items-center m-4 space-x-2 justify-between">
          <TouchableOpacity
            onPress={reduceQuantity}
            className="bg-[#FF9F0D] flex-1 h-[40px] justify-center items-center"
          >
            <Text
              style={{ fontFamily: "Poppins_400Regular", fontSize: 20 }}
              className=""
            >
              -
            </Text>
          </TouchableOpacity>
          <Text
            style={{ fontFamily: "Poppins_400Regular", fontSize: 20 }}
            className="flex-1 text-center"
          >
            {inCart.quantity}
          </Text>
          <TouchableOpacity
            onPress={increaseQuantity}
            className="bg-[#FF9F0D] flex-1 h-[40px] justify-center items-center"
          >
            <Text
              style={{ fontFamily: "Poppins_400Regular", fontSize: 20 }}
              className="text-center"
            >
              +
            </Text>
          </TouchableOpacity>
        </View>
      ) : (
        <TouchableOpacity
          onPress={addToCart}
          className="absolute bottom-3 justify-center items-center mx-4 h-[40px] rounded bg-[#FF9F0D] w-11/12"
        >
          <Text
            className="text-center justify-center items-center font-bold text-white"
            style={{ fontFamily: "Poppins_400Regular", fontSize: 20 }}
          >
            Add to Cart
          </Text>
        </TouchableOpacity>
      )}
    </SafeAreaView>
  );
};

export default SingleFood;
