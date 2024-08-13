import React, { useState, useRef } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
  ImageBackground,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const ChattingScreen = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState("");
  const flatListRef = useRef(null);

  const sendMessage = () => {
    if (inputText.trim() !== "") {
      setMessages((prevMessages) => [
        ...prevMessages,
        { id: Date.now().toString(), text: inputText },
      ]);
      setInputText("");
    }
  };

  const renderItem = ({ item }) => (
    <View
      style={{
        backgroundColor: "#E1FFC7",
        padding: 10,
        borderRadius: 20,
        marginVertical: 5,
        alignSelf: "flex-start",
      }}
    >
      <Text>{item.text}</Text>
    </View>
  );

  return (
    <>
      <StatusBar />
      <SafeAreaView style={{ flex: 1 }}>
        <ImageBackground
          source={require("../assets/Slice 4.png")}
          style={{ flex: 1 }}
          resizeMode="cover"
        >
          <View className="h-full justify-between">
            <TextInput className="bg-white" />
            <TextInput className="bg-white" />
          </View>
        </ImageBackground>
      </SafeAreaView>
    </>
  );
};

export default ChattingScreen;
