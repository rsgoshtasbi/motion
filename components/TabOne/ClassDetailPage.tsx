import React, { useState, useEffect } from "react";
import { StyleSheet, View, ImageBackground, Text, Alert } from "react-native";
import { Avatar, SpeedDial, Card, Chip } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

const ClassDetailPage = (props) => {
  const navigation = useNavigation();

  const [bookable, setBookable] = useState(props.route.params.bookable);
  const [open, setOpen] = React.useState(false);
  const [visible, setVisible] = useState(false);

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  console.log(props);
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/images/background.png")}
        style={styles.backgroundImage}
      >
        <View style={{ flex: 1, marginTop: 100, marginBottom: 100 }}>
          {/* Header */}
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              backgroundColor: "rgba(52, 52, 52, 0.1)",
              borderRadius: 100,
            }}
          >
            <Avatar
              rounded
              source={require("../../assets/images/profile_picture.png")}
              size={100}
              containerStyle={{ flex: 1, paddingLeft: 10, alignSelf: "center" }}
            />
            <View style={styles.profileImageName}>
              <Text
                style={{ fontWeight: "bold", fontSize: 24, color: "white" }}
              >
                Ryan Hall
              </Text>
            </View>
          </View>

          {/* Tags */}
          <View
            style={{
              flex: 0.5,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              paddingTop: 10,
            }}
          >
            <Chip
              title="Chest & Back"
              buttonStyle={{ backgroundColor: "white" }}
              titleStyle={{ color: "black" }}
              containerStyle={{ paddingEnd: 10 }}
            />
            <Chip
              title="Indoors"
              buttonStyle={{ backgroundColor: "white" }}
              titleStyle={{ color: "black" }}
              containerStyle={{ paddingEnd: 10 }}
            />
            <Chip
              title="50 mins"
              buttonStyle={{ backgroundColor: "white" }}
              titleStyle={{ color: "black" }}
              containerStyle={{ paddingEnd: 10 }}
            />
          </View>

          {/* Description */}
          <View style={{ flex: 4, flexDirection: "row" }}>
            <Card containerStyle={{ borderRadius: 10 }}>
              <Card.Title>Chest and Back</Card.Title>
              <Card.Divider />
              <Text style={{ marginBottom: 10 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
              </Text>
            </Card>
          </View>
          <View style={{ flex: 1 }} />
        </View>

        <SpeedDial
          isOpen={open}
          icon={{ name: "info", color: "#fff" }}
          openIcon={{ name: "close", color: "#fff" }}
          onOpen={() => setOpen(!open)}
          onClose={() => setOpen(!open)}
          containerStyle={{ marginBottom: 50 }}
        >
          <SpeedDial.Action
            icon={{ name: "share", color: "#fff" }}
            title="Share"
            onPress={() => console.log("sharing online")}
          />
          {bookable && (
            <SpeedDial.Action
              icon={{ name: "add-circle-outline", color: "#fff" }}
              title="Book Class"
              onPress={() => console.log("sharing online")}
            />
          )}
          {!bookable && (
            <SpeedDial.Action
              icon={{ name: "cancel", color: "#fff" }}
              title="Cancel Class"
              onPress={() => {
                Alert.alert(
                  "Cancel Class?",
                  "No refund if within 24hrs of class",
                  [
                    {
                      text: "Cancel",
                      onPress: () => setOpen(!open),
                    },
                    {
                      text: "Ok",
                      onPress: () => navigation.goBack(),
                    },
                  ]
                );
              }}
            />
          )}
        </SpeedDial>
      </ImageBackground>
    </View>
  );
};

export default ClassDetailPage;

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
