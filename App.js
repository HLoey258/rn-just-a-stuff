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
// to use react navigate npm this
// npm install @react-navigation/native
// depend on what are you using for react native project such as react native cli or expo
// expo: npx expo install react-native-screens react-native-safe-area-context
// reactnative cli: npm install react-native-screens react-native-safe-area-context
// then go to react/stack
// install: npm install @react-navigation/native-stack
// IMPORT REACT NATIVE NAVIGATOR
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const ScreenA = ({ navigation }) => {
  const handleClick = () => {
    navigation.navigate("ScreenB");
  };
  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-lg text-black p-4">This is screen A</Text>
      <Pressable
        className="p-6 bg-orange-200 rounded-xl rounded-2"
        onPress={handleClick}
      >
        <Text>Change to screen B</Text>
      </Pressable>
    </View>
  );
};

const ScreenB = () => {
  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-lg text-black p-4">This is screen B</Text>
    </View>
  );
};
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ header: () => null }}
          name="ScreenA"
          component={ScreenA}
        ></Stack.Screen>
        <Stack.Screen name="ScreenB" component={ScreenB}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
