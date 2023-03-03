import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ShopList from "../screens/ShopList";
import SingleFood from "../screens/SingleFood";
import CartScreen from "../screens/CartScreen";
import LoadingCheckout from "../screens/LoadingCheckout";
import CheckoutScreen from "../screens/CheckoutScreen";
import PaymentScreen from "../screens/PaymentScreen";
import { useFonts, Poppins_400Regular } from "expo-font";

function StackScreens() {
  const Stack = createNativeStackNavigator();
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
  });

  // if (!fontsLoaded) {
  //   return null;
  // }
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={ShopList} />
        <Stack.Screen name="Food" component={SingleFood} />
        <Stack.Screen
          name="Cart"
          component={CartScreen}
          options={{
            title: "Cart",
            headerStyle: {
              backgroundColor: "#ffffff",
            },
            headerTintColor: "#000000",
            headerTitleStyle: {
              fontWeight: "bold",
              fontFamily: "Poppins_400Regular",
              fontSize: 22,
            },
          }}
        />
        <Stack.Screen name="CheckoutLoad" component={LoadingCheckout} />
        <Stack.Screen
          name="Checkout"
          component={CheckoutScreen}
          options={{
            title: "Checkout",
            headerStyle: {
              backgroundColor: "#ffffff",
            },
            headerTintColor: "#000000",
            headerTitleStyle: {
              fontWeight: "bold",
              fontFamily: "Poppins_400Regular",
              fontSize: 22,
            },
          }}
        />
        <Stack.Screen name="Payment" component={PaymentScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackScreens;
