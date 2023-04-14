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
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ header: () => null }}
          name="Login"
          component={ScreenA}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
