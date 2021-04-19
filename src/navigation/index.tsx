import React from "react";
// Utils
import { SafeAreaProvider } from "react-native-safe-area-context";
// Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
// Screens
import HomeScreen from "screens/Home";
import WelcomeScreen from "screens/Welcome";
// Types
import { RootStackParamList } from "./types";

const Stack = createStackNavigator<RootStackParamList>();

const Navigation: React.FC = () => (
  <SafeAreaProvider>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" headerMode="none" mode="card">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  </SafeAreaProvider>
);

export default Navigation;
