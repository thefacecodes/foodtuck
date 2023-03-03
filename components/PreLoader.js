import { SafeAreaView, View, Text, Image } from "react-native";
import React, { useEffect } from "react";
import * as Progress from "react-native-progress";
import { useFonts, Poppins_400Regular } from "@expo-google-fonts/poppins";

const PreLoader = ({ setLoader }) => {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
  });

  useEffect(() => {
    setTimeout(() => setLoader(false), 3000);
  }, []);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <SafeAreaView className="bg-black space-y-4 text-white justify-center flex-1 items-center">
      <Image source={require("../assets/Foodtuck.png")} />
      <View className="absolute bottom-12 items-center space-y-6">
        <Progress.Bar
          className=""
          indeterminate={true}
          width={200}
          color="white"
        />
        <Text
          className="text-white"
          style={{ fontFamily: "Poppins_400Regular", fontSize: 16 }}
        >
          &copy; {new Date().getFullYear()} Powered by The Face
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default PreLoader;
