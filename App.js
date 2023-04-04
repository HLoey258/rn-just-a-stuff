import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";
export default function App() {
  return (
    <TailwindProvider>
      <View id="wrapper" className="pt-10 items-stretch">
        <View id="top" className="flex-row justify-between ">
          <Text className="p-5 items-center text-center bg-red-500 flex-2 ">
            1
          </Text>
          <Text className="p-5 items-center text-center bg-green-500 flex-1">
            2
          </Text>
          <Text className="p-5 items-center text-center bg-yellow-500 flex-1">
            3
          </Text>
        </View>
        <View id="middle-top" className="flex-col justify-between ">
          <Text className="p-5 items-center text-center bg-gray-500">4</Text>
          <Text className="p-5 items-center text-center bg-blue-500">5</Text>
        </View>
        <View id="bottom" className="flex-row justify-between h-full">
          <Text className="p-5 items-center text-center bg-white-500 flex-1">
            6
          </Text>
          <Text className="p-5 items-center text-center bg-orange-500 flex-1">
            7
          </Text>
        </View>
      </View>
    </TailwindProvider>
  );
}
