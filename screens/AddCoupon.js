import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useContext, useState } from "react";
import { ShopContext } from "../components/StoreContext";
import coupons from "../coupons.json";
import { XCircleIcon } from "react-native-heroicons/solid";
import { useFonts, Poppins_400Regular } from "@expo-google-fonts/poppins";

const AddCoupon = ({ setCoupon }) => {
  const [enteredCoupon, updateCoupon] = useState("");
  const { state, dispatch } = useContext(ShopContext);
  const [couponError, setError] = useState("");
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
  });
  const addCoupon = () => {
    if (enteredCoupon) {
      const valid = coupons.coupons.find((each) => each.code === enteredCoupon);
      if (valid) {
        dispatch({ type: "ADD_COUPON", payload: valid });
        setCoupon(false);
      } else {
        setError("Invalid coupon code!");
      }
    } else {
      setError("Input coupon code");
    }
  };

  // if (!fontsLoaded) {
  //   return null;
  // }
  return (
    <View className="absolute backdrop-blur-md z-50 top-0 bottom-0 left-0 right-0">
      <View className="bg-white absolute bottom-0 rounded-t-3xl px-4 py-12 w-full">
        <TouchableOpacity
          onPress={() => setCoupon(false)}
          className="absolute top-6 right-6"
        >
          <Text>
            <XCircleIcon color="black" />
          </Text>
        </TouchableOpacity>
        <Text
          className="text-black font-bold mb-2"
          style={{ fontFamily: "Poppins_400Regular", fontSize: 24 }}
        >
          Add Coupon
        </Text>
        <Text
          className=""
          style={{ fontFamily: "Poppins_400Regular", fontSize: 16 }}
        >
          Input your coupon code here if you have, if you don't, you can use the
          coupon codes "THEFACE" or "FOODTUCKS" to get a discount off your
          purchases.
        </Text>
        {couponError && (
          <Text
            className="text-red-500 font-semibold my-2"
            style={{ fontFamily: "Poppins_400Regular", fontSize: 16 }}
          >
            {couponError}
          </Text>
        )}
        <TextInput
          value={enteredCoupon}
          onChangeText={(e) => updateCoupon(e)}
          className="h-[45px] border-gray-400 my-4 px-2 border-2"
          style={{ fontFamily: "Poppins_400Regular", fontSize: 16 }}
          placeholder="Enter your coupon code here.."
        />
        <TouchableOpacity
          onPress={addCoupon}
          className="py-2 rounded bg-green-400 mb-2 w-full"
        >
          <Text
            className="text-center font-bold text-white"
            style={{ fontFamily: "Poppins_400Regular", fontSize: 20 }}
          >
            Add Coupon
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddCoupon;
