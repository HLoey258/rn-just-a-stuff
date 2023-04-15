import { View, Text, TextInput, Alert } from "react-native";
import React, { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationContainer } from "@react-navigation/native";

import CostumButton from "../components/CostumButton";

export default function Login({ navigation }) {
  const [name, setName] = useState("");
  const setData = async () => {
    if (name.length == 0) {
      Alert.alert("Warning you must not leave this blank");
    } else {
      try {
        await AsyncStorage.setItem("UserName", name);
        navigation.navigate("Home");
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <View className="flex-1 bg-slate-700 items-center">
      <Text className="flex-1 mt-20 text-white text-3xl">Async Storage </Text>
      <TextInput
        className=" bg-white w-[60%] h-11 rounded-lg mb-5 pl-3"
        placeholder="Enter your name..."
        onChangeText={(value) => {
          setName(value);
        }}
      ></TextInput>
      <CostumButton name="Login" onPressFunctional={setData}></CostumButton>
    </View>
  );
}
