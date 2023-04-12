import { useState } from "react";
import {
  Alert,
  Button,
  FlatList,
  Modal,
  Pressable,
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  View,
} from "react-native";
export default function App() {
  const [text, setText] = useState("");
  const [submit, setSubmit] = useState(false);
  const [warning, setWarning] = useState(false);

  const handleSumbmitBtn = () => {
    if (text.length > 3) {
      setSubmit(!submit);
    } else {
      setWarning(!warning);
      // ALERT COMPONENT

      // Alert.alert( // the choice will be display form left to right
      //   "Warning",
      //   "You must enter at least 3 more characters",
      //   [
      //     {
      //       text: "Do not",
      //       onPress: () => {
      //         console.warn("Do not pressed");
      //       },
      //     },
      //     {
      //       text: "OK",
      //       onPress: () => {
      //         console.warn("OK pressed");
      //       },
      //     },
      //     {
      //       text: "Cancel",
      //       onPress: () => {
      //         console.warn("Cancel pressed");
      //       },
      //     },
      //   ],
      //   {
      //     cancelable: true, // this cancel able will allow you to close the toast message when click outside
      //     onDismiss: () => {
      //       console.warn("alert dimissed");
      //     },
      //   }
      // );
      // ToastAndroid.show("Hello this is a toast", 2000); // use the .show to present the toast 2000 is duration
      // OR YOU CAN USE THIS
      // ToastAndroid.show(
      //   "This is a normal toast with short and long",
      //   ToastAndroid.LONG // display for 3.5s
      //   // ToastAndroid.SHORT // display for 2s
      // );
      // ToastAndroid.showWithGravity(
      //   "hello this is a toast message with gravity",
      //   2000,
      //   ToastAndroid.CENTER // display the toast at center of the page
      // );
    }
  };
  const handleTextChange = (input) => {
    return setText(input);
  };
  return (
    <View className="mt-10 flex-1 items-center">
      <Modal
        visible={warning}
        transparent
        onRequestClose={() => {
          // active when press back arrow in androoid
          setWarning(false);
        }}
        animationType="fade" // can be fade or slide or...
        hardwareAccelerated // use this prob to incease performance in android
      >
        <View className="flex-1 justify-center items-center bg-[#00000099]">
          <View
            id="modal"
            className="bg-white w-60 h-60  items-center border-2 rounded-xl"
          >
            <Text className="text-black text-lg mb-2 p-3 bg-yellow-300 w-full text-center rounded-t-lg ">
              WARNING
            </Text>
            <Text className="text-black text-md text-center">
              You must enter atleast more 3 characters
            </Text>
            <Pressable
              onPress={() => {
                setWarning(false);
              }}
            >
              <Text className="top-20 p-2 bg-green-300 rounded-xl pl-5 pr-5">
                OK
              </Text>
            </Pressable>
          </View>
        </View>
      </Modal>
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
      <Button
        title={submit ? "Clear" : "Sumbmit"} // In this component we only can use props to style the component
        onPress={handleSumbmitBtn}
        // disabled={submit}// disable or not the button
        color={"gray"} // change button color
      ></Button>

      {/* TOUCHABLE */}
      {/* <TouchableOpacity
        onPress={handleSumbmitBtn}
        className="p-3 bg-slate-500" // we can style for this component
        activeOpacity={0.2} // set opacity when active
      >
        <Text>{submit ? "Clear" : "Sumbmit"}</Text>
      </TouchableOpacity> */}

      {/* PRESSABLE */}
      {/* <Pressable
        onLongPress={handleSumbmitBtn}
        delayLongPress={2000}
        // delayHoverIn={}
        // delayHoverOut={}
        // onHoverIn={}
        // onHoverOut={}
        // onPressIn={} onPressOut={}
      >
        <Text>sumbmit</Text>
      </Pressable> */}

      {submit ? (
        <Text className="mt-3">You just inputdsafdsaf this: {text}</Text>
      ) : null}
    </View>
  );
}
