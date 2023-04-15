import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

export default function CostumButton({ name, onPressFunctional }) {
  return (
    <View className="flex-1">
      <TouchableOpacity
        className=" pt-4 pr-9 pl-9 pb-4 mb-3 bg-green-300 rounded-md border-2 text-sm text-center"
        hitSlop={{ top: 10, bottom: 10, right: 10, left: 10 }}
        android_ripple={{ color: "#00f" }}
        onPress={onPressFunctional}
      >
        <Text>{name}</Text>
      </TouchableOpacity>
    </View>
  );
}
