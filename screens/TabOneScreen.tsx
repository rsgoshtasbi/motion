import * as React from "react";
import { View, StyleSheet, ImageBackground, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AgendaScreen from "./AgendaScreen";

export default function TabOneScreen() {
  return (
    <ImageBackground
      source={require("../assets/images/background.png")}
      style={styles.backgroundImage}
    >
      <SafeAreaView style={{ opacity: 0 }} />
      <View
        style={{
          flex: 1,
          backgroundColor: "transparent",
          marginBottom: 100,
          marginTop: 5,
        }}
      >
        <AgendaScreen />
      </View>
    </ImageBackground>
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
  },
  profileImageName: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
  },
});
