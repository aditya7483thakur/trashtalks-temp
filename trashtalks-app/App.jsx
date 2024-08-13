import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";
import StartingScreen from "./screens/StartingScreen";
import ChattingScreen from "./screens/ChattingScreen";
// import AnotherScreen from "./screens/AnotherScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="StartingScreen"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="StartingScreen" component={StartingScreen} />
        <Stack.Screen name="ChattingScreen" component={ChattingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
