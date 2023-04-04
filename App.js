import { useState } from "react";
import {
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
export default function App() {
  const [items, setItem] = useState([
    { key: 1, item: "item 1" },
    { key: 2, item: "item 2" },
    { key: 3, item: "item 3" },
    { key: 4, item: "item 4" },
    { key: 5, item: "item 5" },
    { key: 6, item: "item 6" },
    { key: 8, item: "item 7" },
    { key: 9, item: "item 7" },
    { key: 10, item: "item 7" },
    { key: 11, item: "item 7" },
    { key: 12, item: "item 7" },
    { key: 13, item: "item 7" },
    { key: 14, item: "item 7" },
  ]);
  const [refreshing, setRefreshing] = useState(false);

  const refresh = () => {
    setRefreshing(true);
    setItem([...items, { key: 60, item: "item 60" }]);
    setRefreshing(false);
    alert("refreshing");
  };
  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          onRefresh={refresh}
          refreshing={refreshing}
        ></RefreshControl>
      }
    >
      <View id="wrapper" className="pt-10 items-stretch ">
        {items.map((listItem) => {
          return (
            <Text
              className="bg-slate-400 text-center m-4 p-6"
              key={listItem.key}
            >
              {listItem.item}
            </Text>
          );
        })}
      </View>
    </ScrollView>
  );
}
