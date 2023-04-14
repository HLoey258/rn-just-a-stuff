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

export default function ScreenA({ navigation }) {
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
}
