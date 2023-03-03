import { View, ImageBackground, Text } from "react-native";
import React, { useEffect, useLayoutEffect } from "react";
import * as Progress from "react-native-progress";
import { useFonts, Poppins_400Regular } from "@expo-google-fonts/poppins";

const LoadingCheckout = ({ navigation }) => {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
  });
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  useEffect(() => {
    setTimeout(() => navigation.navigate("Payment"), 3000);
  }, []);

  // if (!fontsLoaded) {
  //   return null;
  // }

  return (
    <ImageBackground
      source={require("../assets/bg.png")}
      resizeMode="contain"
      className="flex-1 justify-center items-center"
    >
      <View className="absolute bottom-20 justify-center items-center">
        <Progress.Circle
          className="justify-center items-center mb-2"
          borderWidth={5}
          indeterminate={true}
          width={200}
          color="black"
        />
        <Text
          className="text-black"
          style={{ fontFamily: "Poppins_400Regular", fontSize: 18 }}
        >
          Processing
        </Text>
      </View>
    </ImageBackground>
  );
};

export default LoadingCheckout;
