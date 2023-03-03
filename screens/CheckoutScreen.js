import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useContext, useLayoutEffect, useState } from "react";
import { ShopContext } from "../components/StoreContext";
import AddCoupon from "./AddCoupon";
import { useFonts, Poppins_400Regular } from "@expo-google-fonts/poppins";

const CheckoutScreen = ({ navigation }) => {
  const { state, dispatch } = useContext(ShopContext);
  const [coupon, setCoupon] = useState(false);
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
  });

  // if (!fontsLoaded) {
  //   return null;
  // }

  return (
    <SafeAreaView className="flex-1">
      {coupon && <AddCoupon setCoupon={setCoupon} />}
      <ScrollView className="py-4">
        {state.cart.map((item) => (
          <View
            key={item.id}
            className="flex-row items-center space-x-2 mx-4 mb-2"
          >
            <Image
              source={{
                uri: item.image,
              }}
              className="h-24 w-24"
            />
            <View className="flex-1">
              <Text
                className="font-bold mb-2"
                style={{ fontFamily: "Poppins_400Regular", fontSize: 20 }}
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
          </View>
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
        <View className="flex-row justify-between items-center mb-4">
          <Text
            className="font-bold"
            style={{ fontFamily: "Poppins_400Regular", fontSize: 20 }}
          >
            Discount :
          </Text>
          <Text
            className="font-bold"
            style={{ fontFamily: "Poppins_400Regular", fontSize: 20 }}
          >
            {state.coupon
              ? state.coupon?.type === "flat"
                ? `$${state.coupon.discount.toFixed(2)}`
                : `${state.coupon.discount}%`
              : "N/A"}
          </Text>
        </View>
        <View className="flex-row justify-between items-center mb-4">
          <Text
            className="font-bold"
            style={{ fontFamily: "Poppins_400Regular", fontSize: 20 }}
          >
            Coupon :
          </Text>
          <Text
            className="font-bold"
            style={{ fontFamily: "Poppins_400Regular", fontSize: 20 }}
          >
            {state.coupon ? state.coupon?.code : "No coupon added"}
          </Text>
        </View>
        <View className="flex-row justify-between items-center mb-4">
          <Text
            className="font-bold"
            style={{ fontFamily: "Poppins_400Regular", fontSize: 20 }}
          >
            Subtotal :
          </Text>
          <Text
            className="font-bold"
            style={{ fontFamily: "Poppins_400Regular", fontSize: 20 }}
          >
            $
            {state.discount
              ? (state.totalAmount - state.discount).toFixed(2)
              : state.totalAmount.toFixed(2)}
          </Text>
        </View>
        {!state.coupon ? (
          <TouchableOpacity
            onPress={() => setCoupon(true)}
            className="py-2 rounded bg-green-400 mb-2 w-full"
          >
            <Text
              className="text-center font-bold text-white"
              style={{ fontFamily: "Poppins_400Regular", fontSize: 20 }}
            >
              Add Coupon
            </Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => dispatch({ type: "RemoveCoupon" })}
            className="py-2 rounded bg-red-500 mb-2 w-full"
          >
            <Text
              className="text-center font-bold text-white"
              style={{ fontFamily: "Poppins_400Regular", fontSize: 20 }}
            >
              Remove Coupon
            </Text>
          </TouchableOpacity>
        )}
        <TouchableOpacity
          onPress={() => navigation.navigate("CheckoutLoad")}
          className="py-2 rounded bg-[#FF9F0D] w-full"
        >
          <Text
            className="text-center font-bold text-white"
            style={{ fontFamily: "Poppins_400Regular", fontSize: 20 }}
          >
            Proceed to Payment
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default CheckoutScreen;
