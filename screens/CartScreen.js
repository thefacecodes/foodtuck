import {
  ScrollView,
  View,
  SafeAreaView,
  TouchableOpacity,
  Text,
  Image,
} from "react-native";
import React, { useContext } from "react";
import StoreContext, { ShopContext } from "../components/StoreContext";
import CartItem from "../components/CartItem";
import { useFonts, Poppins_400Regular } from "@expo-google-fonts/poppins";

const CartScreen = ({ navigation }) => {
  const { state, dispatch } = useContext(ShopContext);
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
  });

  // if (!fontsLoaded) {
  //   return null;
  // }

  if (state.cart.length > 0) {
    return (
      <SafeAreaView className="flex-1">
        <ScrollView className="py-4">
          {state.cart.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </ScrollView>
        <View className="bg-white absolute bottom-0 p-4 w-full">
          <View className="flex-row justify-between items-center mb-4">
            <Text
              className="font-bold"
              style={{ fontFamily: "Poppins_400Regular", fontSize: 20 }}
            >
              Total :
            </Text>
            <Text
              className="font-bold"
              style={{ fontFamily: "Poppins_400Regular", fontSize: 20 }}
            >
              ${state.totalAmount.toFixed(2)}
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate("Checkout")}
            className="py-4 rounded bg-[#FF9F0D] w-full"
          >
            <Text
              className="text-center font-bold text-white"
              style={{ fontFamily: "Poppins_400Regular", fontSize: 20 }}
            >
              Proceed to Checkout
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  } else {
    return (
      <SafeAreaView className="flex-1 justify-center items-center bg-white">
        <Image
          height="200"
          width="200"
          objectFit="contain"
          source={require("../assets/wishlist.jpg")}
          className="h-[50vh] w-[80vw]"
        />
        <Text
          className="font-bold"
          style={{ fontFamily: "Poppins_400Regular", fontSize: 30 }}
        >
          Cart is empty
        </Text>
      </SafeAreaView>
    );
  }
};

export default CartScreen;
