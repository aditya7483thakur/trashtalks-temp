import {
  Image,
  ImageBackground,
  Pressable,
  StatusBar,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function StartingScreen({ navigation }) {
  return (
    <>
      <StatusBar style="auto" />
      <SafeAreaView
        style={{ flex: 1, backgroundColor: "transparent", paddingTop: 0 }}
      >
        <ImageBackground
          source={require("../assets/Slice 4.png")}
          className="flex-1 justify-around items-center h-full w-full "
          resizeMode="cover"
        >
          <View className="">
            <Text className="text-white text-4xl text-center w-72">
              Best Personal AI Assistant
            </Text>
          </View>
          <Image
            source={require("../assets/bot.png")}
            className=" h-1/2 w-full "
            resizeMode="contain"
          />
          <Text className="text-slate-400 text-lg">
            Nice to meet you ! How can I help you ?
          </Text>
          <Pressable
            onPress={() => navigation.navigate("HomeScreen")}
            className="bg-white w-11/12 rounded-3xl h-[7%] justify-center items-center"
          >
            <Text className=" font-bold text-lg">Let's start chatting</Text>
          </Pressable>
        </ImageBackground>
      </SafeAreaView>
    </>
  );
}
