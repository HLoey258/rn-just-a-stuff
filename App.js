import { useState } from "react";
import {
  FlatList,
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
export default function App() {
  const [items, setItem] = useState([
    { key: "1", name: "item 1" },
    { key: "2", name: "item 2" },
    { key: "3", name: "item 3" },
    { key: "4", name: "item 4" },
    { key: "5", name: "item 5" },
    { key: "6", name: "item 6" },
    { key: "8", name: "item 7" },
    { key: "9", name: "item 7" },
    { key: "10", name: "item 7" },
    { key: "11", name: "item 7" },
    { key: "12", name: "item 7" },
    { key: "13", name: "item 7" },
    { key: "14", name: "item 7" },
  ]);
  const [refreshing, setRefreshing] = useState(false);

  const refresh = () => {
    setRefreshing(true);
    setItem([...items, { key: 60, item: "item 60" }]);
    setRefreshing(false);
    alert("refreshing");
  };
  return (
    <FlatList
      keyExtractor={(items, index) => index.toString()}
      data={items}
      renderItem={(
        { item } // only accept key as string, and the name of object for item must have difference name
      ) => (
        <View>
          <Text className="p-5 m-5">{item.name}</Text>
        </View>
      )}
    ></FlatList>
    // <ScrollView
    //   refreshControl={
    //     <RefreshControl
    //       onRefresh={refresh}
    //       refreshing={refreshing}
    //     ></RefreshControl>
    //   }
    // >
    // <View id="wrapper" className="pt-10 items-stretch ">
    //   {items.map((listItem) => {
    //     return (
    //       <Text
    //         className="bg-slate-400 text-center m-4 p-6"
    //         key={listItem.key}
    //       >
    //         {listItem.item}
    //       </Text>
    //     );
    //   })}
    // </View>
    // </ScrollView>
  );
}
