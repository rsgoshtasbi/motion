import * as React from "react";
import { View, StyleSheet, ImageBackground } from "react-native";

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/images/background.png")}
        style={styles.backgroundImage}
      ></ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    flexDirection: "column",
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  profileImageName: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
  },
});
