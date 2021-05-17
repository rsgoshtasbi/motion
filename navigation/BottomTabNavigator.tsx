/**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import TabOneScreen from "../screens/TabOneScreen";
import TabThreeScreen from "../screens/TabThreeScreen";
import TabTwoScreen from "../screens/TabTwoScreen";
import {
  BottomTabParamList,
  TabOneParamList,
  TabTwoParamList,
  TabThreeParamList,
} from "../types";

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: Colors[colorScheme].tint,
        style: {
          backgroundColor: "transparent",
          position: "absolute",
          borderTopWidth: 0,
        },
        labelStyle: {
          color: "white",
        },
      }}
    >
      <BottomTab.Screen
        name="Schedule"
        component={TabOneNavigator}
        options={{
          tabBarIcon: () => (
            <TabBarIcon name="ios-calendar-outline" color={"white"} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Home"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: () => (
            <TabBarIcon name="ios-person-circle-outline" color={"white"} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Buy"
        component={TabThreeNavigator}
        options={{
          tabBarIcon: () => (
            <TabBarIcon name="ios-cart-outline" color={"white"} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof Ionicons>["name"];
  color: string;
}) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator<TabOneParamList>();

function TabOneNavigator() {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="TabOneScreen"
        component={TabOneScreen}
        options={{ headerTitle: "Schedule", headerTransparent: true }}
      />
    </TabOneStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="TabTwoScreen"
        component={TabTwoScreen}
        options={{ headerTitle: "Home", headerTransparent: true }}
      />
    </TabTwoStack.Navigator>
  );
}

const TabThreeStack = createStackNavigator<TabThreeParamList>();

function TabThreeNavigator() {
  return (
    <TabThreeStack.Navigator>
      <TabThreeStack.Screen
        name="TabThreeScreen"
        component={TabThreeScreen}
        options={{ headerTitle: "Buy", headerTransparent: true }}
      />
    </TabThreeStack.Navigator>
  );
}
