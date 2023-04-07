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
export default function App() {
  const [text, setText] = useState("");
  const [submit, setSubmit] = useState(false);
  const handleSumbmitBtn = () => {
    setSubmit(!submit);
  };
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
        keyboardType="default" // find more in doc
        maxLength={20}
        // editable={false} // this probs will allowed/not you to edit text input
        secureTextEntry={true} // turn text to dot (like password)
      ></TextInput>

      {/* BUTTON */}
      {/* <Button
        title={submit ? "Clear" : "Sumbmit"} // In this component we only can use props to style the component
        onPress={handleSumbmitBtn}
        // disabled={submit}// disable or not the button
        color={"gray"} // change button color 
      ></Button> */}

      {/* TOUCHABLE */}
      {/* <TouchableOpacity
        onPress={handleSumbmitBtn}
        className="p-3 bg-slate-500" // we can style for this component
        activeOpacity={0.2} // set opacity when active
      >
        <Text>{submit ? "Clear" : "Sumbmit"}</Text>
      </TouchableOpacity> */}

      {/* PRESSABLE */}
      <Pressable
        onLongPress={handleSumbmitBtn}
        delayLongPress={2000}
        // delayHoverIn={}
        // delayHoverOut={}
        // onHoverIn={}
        // onHoverOut={}
        // onPressIn={} onPressOut={}
      >
        <Text>sumbmit</Text>
      </Pressable>

      {submit ? (
        <Text className="mt-3">You just input this: {text}</Text>
      ) : null}
    </View>
  );
}
