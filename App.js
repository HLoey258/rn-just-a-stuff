import { useState } from "react";
import {
  Button,
  FlatList,
  Pressable,
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

// Now we re going to try some tab navigation
// to use tab nav you must npm this below:
// install bottom tab navigate:
// npm install @react-navigation/bottom-tabs

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import {
  BottomTabBarHeightContext,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs"; // this is what you install: bottom tab navigate

import ScreenA from "./components/ScreenA";
import ScreenB from "./components/ScreenB";
import FontAwesome5 from "react-native-vector-icons";

const Stack = createNativeStackNavigator();
// const bottomTab = createBottomTabNavigator();
// const bottomTab = createMaterialBottomTabNavigator(); // bottom tab with effect
const bottomTab = createMaterialTopTabNavigator(); // slide tab you can slide it
export default function App() {
  return (
    <NavigationContainer>
      {/* change the variable that you defined it before: stack -> bottomTab */}
      <bottomTab.Navigator
        screenOptions={({ route }) => {
          tabBarIcon: ({ focused, size, color }) => {
            let iconName;
            if (route.name === "ScreenA") {
              iconName = "autoprefixer";
              size = focused ? 25 : 30;
            } else if (route.name === "ScreenB") {
              iconName = "btc";
              size = focused ? 25 : 30;
            }
            return <FontAwesome5 name={iconName}></FontAwesome5>;
          };
        }}
        // tabBarOptions={{
        //   activeTintColor: "#f0f",
        //   inactiveTintColor: "#555",
        //   activeBackgroundColor: "#fff",
        //   inactiveBackgroundColor: "#ccc",
        // }}
      >
        {/* if we use the prop "options" in stack.navigator => both header will not display, ortherwise none of screen has */}
        {/* we can add icon into the bottom tab by using react-native-vector 
          npm install --save react-native-vector-icons
          then go to https://github.com/oblador/react-native-vector-icons 
          if you are coding for android flatform 

          Edit android/app/build.gradle ( NOT android/build.gradle ) and add the following
          apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"

         */}
        <bottomTab.Screen
          options={{ header: () => null }}
          name="ScreenA"
          component={ScreenA}
          // the component that you imported
        ></bottomTab.Screen>
        <bottomTab.Screen name="ScreenB" component={ScreenB}></bottomTab.Screen>
      </bottomTab.Navigator>
    </NavigationContainer>
  );
}
