import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import BottomTabNav from "./navigation/BottomTabNav";
import RegisterStackNav from "./navigation/RegisterStackNav";
import styles from "./constant/Style";
import ReadBook from "./screens/ReadBook";
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen
          options={{ headerShown: false }}
          name="Auth"
          component={RegisterStackNav}
        />
        <Stack.Screen
          options={getOption("Main")}
          options={{ headerShown: false }}
          name="Main"
          component={BottomTabNav}
        />
        <Stack.Screen
          options={getOption("Read")}
          name="Read"
          component={ReadBook}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const getOption = (name) => {
  return {
    title: name,
    headerStyle: {
      backgroundColor: styles.baseColor,
    },
    animationEnabled: true,
    headerShown: true,
    transition: "fadeIn",
    headerTitleAlign: "center",
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontSize: 25,
      color: "white",
    },
  };
};

