import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";
export default function App() {
  const [item, setItems] = useState([
    { key: 1, item: "item 1" },
    { key: 2, item: "item 2" },
    { key: 3, item: "item 3" },
    { key: 4, item: "item 4" },
    { key: 5, item: "item 5" },
    { key: 6, item: "item 6" },
    { key: 7, item: "item 7" },
  ]);
  return (
    <TailwindProvider>
      <ScrollView>
        <View id="wrapper" className="pt-10 items-stretch">
          {}
        </View>
      </ScrollView>
    </TailwindProvider>
  );
}
