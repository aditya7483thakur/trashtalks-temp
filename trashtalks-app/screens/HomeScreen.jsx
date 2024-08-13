import {
  ImageBackground,
  Pressable,
  StatusBar,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

const prompts = [
  "Do you know me ??",
  "I love You, my buddy!",
  "I got a new girlfriend.",
];

export default function HomeScreen({ navigation }) {
  return (
    <>
      <StatusBar />
      <SafeAreaView style={{ flex: 1 }}>
        <ImageBackground
          source={require("../assets/Slice 4.png")}
          className="flex-1 justify-center items-center h-full w-full "
          resizeMode="cover"
        >
          <View className="h-1/2 justify-center flex-row p-6 gap-2">
            <View
              style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
              className="h-full w-1/2 rounded-3xl justify-center items-center"
            >
              <Text className="text-white">HII</Text>
            </View>
            <View className="h-full w-1/2 flex justify-between pl-1">
              <View
                style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                className="h-[48%] w-full rounded-3xl justify-center items-center"
              >
                <Text className="text-white">HII</Text>
              </View>
              <View
                style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                className="h-[48%] w-full rounded-3xl justify-center items-center"
              >
                <Text className="text-white">HII</Text>
              </View>
            </View>
          </View>
          <View className="h-1/2 justify-center p-4">
            <Text className="text-white font-semibold text-lg mb-2">
              Try Now
            </Text>

            {prompts.map((prompt, index) => {
              return (
                <Pressable
                  onPress={() => navigation.navigate("ChattingScreen")}
                  key={index}
                  style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                  className="h-[25%] w-full rounded-3xl flex-row justify-between items-center my-2 p-4 px-10"
                >
                  <FontAwesome6 name="robot" size={22} color="white" />
                  <Text className="text-white flex-1 text-center text-base">
                    {prompt}
                  </Text>
                  <AntDesign name="arrowright" size={24} color="white" />
                </Pressable>
              );
            })}
          </View>
        </ImageBackground>
      </SafeAreaView>
    </>
  );
}
