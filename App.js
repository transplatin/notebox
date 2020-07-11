import React from "react";
import { StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import BottomTabNav from "./navigation/BottomTabNav";
import RegisterStackNav from "./navigation/RegisterStackNav";

const Stack = createStackNavigator();

export default function App() {

  return (
    <NavigationContainer style={styles.container}>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen
          options={{ headerShown: false }}
          name="Main"
          component={RegisterStackNav}
        />
        <Stack.Screen
          options={getOption("Home")}
          name="Home"
          component={BottomTabNav}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const getOption = (name) => {
  return {
    title: name,
    headerStyle: {
      backgroundColor: "teal",
    },
    animationEnabled: false,
    headerTitleAlign: "center",
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontSize: 25,
      color: "white",
    },
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
