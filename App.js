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

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "./Screens/Login";
import Home from "./Screens/Home";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // <View>
    //   <Text>testing</Text>
    // </View>
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          options={{ header: () => null }}
          name="Login"
          component={Login}
        ></Stack.Screen>
        <Stack.Screen
          options={{ header: () => null }}
          name="Home"
          component={Home}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
