import * as React from "react";
import { View, StyleSheet, ImageBackground, ScrollView } from "react-native";
import { PricingCard } from "react-native-elements";

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/images/background.png")}
        style={styles.backgroundImage}
      >
        <ScrollView style={{ flex: 1, marginTop: 100, marginBottom: 100 }}>
          <PricingCard
            color="red"
            title="Summer Special"
            price="$280"
            info={[
              "20 Classes",
              "$14/class",
              "Expiration: 90 days from purchase",
            ]}
            button={{ title: "PURCHASE", icon: "" }}
            onButtonPress={() => console.log("purchased")}
          />
          <PricingCard
            color="#4f9deb"
            title="1x Week"
            price="$0"
            info={[
              "20 Classes",
              "$14/class",
              "Expiration: 90 days from purchase",
            ]}
            button={{ title: "PURCHASE", icon: "" }}
            onButtonPress={() => console.log("purchased")}
          />
          <PricingCard
            color="#4f9deb"
            title="2x Week"
            price="$0"
            info={[
              "20 Classes",
              "$14/class",
              "Expiration: 90 days from purchase",
            ]}
            button={{ title: "PURCHASE", icon: "" }}
            onButtonPress={() => console.log("purchased")}
          />
          <PricingCard
            color="#4f9deb"
            title="3x Week"
            price="$0"
            info={[
              "20 Classes",
              "$14/class",
              "Expiration: 90 days from purchase",
            ]}
            button={{ title: "PURCHASE", icon: "" }}
            onButtonPress={() => console.log("purchased")}
          />
          <PricingCard
            color="#4f9deb"
            title="4x Week"
            price="$0"
            info={[
              "20 Classes",
              "$14/class",
              "Expiration: 90 days from purchase",
            ]}
            button={{ title: "PURCHASE", icon: "" }}
            onButtonPress={() => console.log("purchased")}
          />
          <PricingCard
            color="#4f9deb"
            title="5x Week"
            price="$0"
            info={[
              "20 Classes",
              "$14/class",
              "Expiration: 90 days from purchase",
            ]}
            button={{ title: "PURCHASE", icon: "" }}
            onButtonPress={() => console.log("purchased")}
          />
        </ScrollView>
      </ImageBackground>
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
