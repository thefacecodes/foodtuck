import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Text, View } from "react-native";
import PreLoader from "./components/PreLoader";
import StackScreens from "./components/StackScreens";
import StoreContext from "./components/StoreContext";
import ShopList from "./screens/ShopList";

export default function App() {
  const [loader, setLoader] = useState(true);

  return (
    <StoreContext>
      <StatusBar hidden={true} />
      {loader ? <PreLoader setLoader={setLoader} /> : <StackScreens />}
    </StoreContext>
  );
}
