import * as React from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  ScrollView,
  Text,
  Dimensions,
  Alert,
} from "react-native";
import { ListItem, Avatar, Button } from "react-native-elements";
import { SpeedDial } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

export default function TabTwoScreen() {
  const navigation = useNavigation();
  const [open, setOpen] = React.useState(false);
  const list = [
    {
      name: "Ryan Hall",
      avatar_url:
        "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
      subtitle: "5:00 - 5:50pm",
    },
    {
      name: "Amy Green",
      avatar_url:
        "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
      subtitle: "6:00 - 6:50pm",
    },
    {
      name: "Amy Green",
      avatar_url:
        "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
      subtitle: "6:00 - 6:50pm",
    },
    {
      name: "Amy Green",
      avatar_url:
        "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
      subtitle: "6:00 - 6:50pm",
    },
    {
      name: "Amy Green",
      avatar_url:
        "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
      subtitle: "6:00 - 6:50pm",
    },
  ];

  const something = () => {
    console.log("something pressed");
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/images/background.png")}
        style={styles.backgroundImage}
      >
        {/* Profile Image */}
        <View
          style={{
            flex: 0.33,
            flexDirection: "row",
            backgroundColor: "rgba(52, 52, 52, 0.1)",
            borderRadius: 100,
            marginTop: 100,
          }}
        >
          <Avatar
            rounded
            source={require("../assets/images/profile_picture.png")}
            size={100}
            containerStyle={{ flex: 1, paddingLeft: 10, alignSelf: "center" }}
          />
          <View style={styles.profileImageName}>
            <Text style={{ fontWeight: "bold", fontSize: 24, color: "white" }}>
              Rashid Goshtasbi
            </Text>
            <Text style={{ fontSize: 14, color: "white" }}>
              50/100 classes available
            </Text>
          </View>
        </View>

        {/* List of today's classes signed up for */}
        <View style={styles.currentClasses}>
          <ScrollView>
            {list.map((l, i) => (
              <ListItem
                key={i}
                bottomDivider
                style={{ paddingBottom: 5 }}
                containerStyle={{ borderRadius: 50 }}
                onPress={() =>
                  navigation.navigate("ClassDetailPage", { bookable: false })
                }
                underlayColor={"transparent"}
              >
                <Avatar
                  source={require("../assets/images/profile_picture.png")}
                  rounded
                />
                <ListItem.Content>
                  <ListItem.Title style={{ marginTop: 2 }}>
                    {l.name}
                  </ListItem.Title>
                  <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle>
                </ListItem.Content>
                <ListItem.Chevron color={"black"} size={20} />
              </ListItem>
            ))}
          </ScrollView>
        </View>

        {/* Current News
        <Text style={styles.text}>MOTION CURRENT NEWS HERE</Text>
        <View style={{ height: 10 }}></View>
        <Text style={styles.text}>MOTION SOCIAL MEDIA HERE</Text> */}
        <SpeedDial
          isOpen={open}
          icon={{ name: "pin-drop", color: "#fff" }}
          openIcon={{ name: "close", color: "#fff" }}
          onOpen={() => setOpen(!open)}
          onClose={() => setOpen(!open)}
          containerStyle={{ marginBottom: 50 }}
        >
          <SpeedDial.Action
            icon={{ name: "location-city", color: "#fff" }}
            title="Motion Irvine"
            onPress={() => console.log("Motion Irvine")}
          />
          <SpeedDial.Action
            icon={{ name: "beach-access", color: "#fff" }}
            title="Motion San Diego"
            onPress={() => console.log("Motion San Diego")}
          />
        </SpeedDial>
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
  profileImage: {
    height: 100,
    width: 100,
    justifyContent: "center",
    alignSelf: "center",
    borderRadius: 50,
  },
  profileImageName: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  currentClasses: {
    flex: 2,
    margin: 10,
  },
  text: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000a0",
    borderWidth: 10,
  },
  title: {
    fontSize: 18,
  },
  headerContainer: {
    marginTop: 50,
    marginHorizontal: 10,
  },
  // rest of the styles
  svgCurve: {
    position: "absolute",
    width: Dimensions.get("window").width,
  },
  headerText: {
    fontSize: 30,
    fontWeight: "bold",
    // change the color property for better output
    color: "#fff",
    textAlign: "center",
    marginTop: 35,
  },
});
