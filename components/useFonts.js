import * as Font from "expo-font";

export default useFont = async () =>
  await Font.loadAsync({
    Poppins: require("../assets/fonts/Poppins-Black.ttf"),
  });
