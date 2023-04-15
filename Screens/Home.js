import {
  View,
  Text,
  useAnimatedValue,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { TextInput } from "react-native-paper";
import CostumButton from "../components/CostumButton";

export default function Home({ navigation, route }) {
  const [name, setName] = useState("");

  // to run the getData function when home.js open in app we use useEffect to run the function when the page load
  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    try {
      AsyncStorage.getItem("UserName").then((value) => {
        if (value != null) {
          setName(value);
        }
      });
    } catch (error) {
      conesole.log(error);
    }
  };
  const updateData = async () => {
    // when you change the data or add new data use async
    if (name.length == 0) {
      Alert.alert("You must fill this blank");
    } else {
      try {
        await AsyncStorage.setItem("UserName", name);
        Alert.alert("Your data have been updated");
      } catch (error) {
        console.log(error);
      }
    }
  };
  const removeData = async () => {
    try {
      await AsyncStorage.removeItem("UserName");
      Alert.alert("Your data have been removed");
      navigation.navigate("Login");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View className="flex-1 justify-center items-center bg-slate-700">
      <Text className="text-white text-2xl mb-6">Welcome {name}</Text>
      <TextInput
        className="bg-white w-[60%] rounded-lg mb-6"
        onChangeText={(value) => setName(value)}
      ></TextInput>
      <CostumButton name="Update" onPressFunctional={updateData}></CostumButton>
      <CostumButton name="Remove" onPressFunctional={removeData}></CostumButton>
    </View>
  );
}
