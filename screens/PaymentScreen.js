import { SafeAreaView, View, Text } from "react-native";
import React, { useLayoutEffect } from "react";
import MapView from "react-native-maps";
import * as Progress from "react-native-progress";
import { Marker } from "react-native-svg";
import { useFonts, Poppins_400Regular } from "@expo-google-fonts/poppins";

const PaymentScreen = ({ navigation }) => {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
  });
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  // if (!fontsLoaded) {
  //   return null;
  // }
  return (
    <SafeAreaView className="flex-1 pt-6">
      <View className="absolute top-14 left-4 right-4 justify-center bg-white px-4 z-50 py-8 rounded-2xl">
        <Text
          className="text-black font-semibold"
          style={{ fontFamily: "Poppins_400Regular", fontSize: 18 }}
        >
          Your order is on its way!
        </Text>
        <Text
          className="text-black font-extrabold my-2"
          style={{ fontFamily: "Poppins_400Regular", fontSize: 30 }}
        >
          35 minutes
        </Text>
        <Progress.Bar
          className=""
          indeterminate={true}
          width={200}
          color="black"
        />
      </View>
      <MapView
        className="flex-1"
        region={{
          latitude: 6.468039,
          longitude: 3.638842,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        showsUserLocation={true}
      >
        <Marker />
      </MapView>
    </SafeAreaView>
  );
};

export default PaymentScreen;
