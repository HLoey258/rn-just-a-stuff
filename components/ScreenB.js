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

export default function ScreenB() {
  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-lg text-black p-4">This is screen B</Text>
    </View>
  );
}
