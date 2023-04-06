import { useState } from "react";
import {
  FlatList,
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
export default function App() {
  const [text, setText] = useState("");

  const handleTextChange = (input) => {
    return setText(input);
  };
  return (
    <View className="mt-10 flex-1 items-center">
      <Text className="text-center mb-3">Please input your name:</Text>
      <TextInput
        multiline // 2 line allowed
        className="border-solid bg-slate-500 border-2 w-[40%] text-center rounded-md p-3 mb-5" // using text-center to center the value that you input
        placeholder="Your name here..."
        onChangeText={handleTextChange}
        keyboardType="numeric" // find more in doc
        maxLength={20}
        // editable={false} // this probs will allowed/not you to edit text input
        secureTextEntry={true} // turn text to dot (like password)
      ></TextInput>
      <Text className="">You just input this: {text}</Text>
    </View>
  );
}
