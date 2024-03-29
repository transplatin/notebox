import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import styles from "../constant/Style";
import BookList from "../screens/BookList";

const Stack = createStackNavigator();

const HomeStackNav = ({ navigation }) => {
  return (
    <Stack.Navigator headerMode="screen" initialRouteName="Home">
      <Stack.Screen
        options={getOption("Welcome")}
        name="Home"
        component={HomeScreen}
      />
      <Stack.Screen
        options={({route})=>getOption(route.params.name)}
        name="BookList"
        component={BookList}
      />
    </Stack.Navigator>
  );
};

const getOption = (name) => {
  return {
    title: name,
    headerStyle: {
      backgroundColor: styles.baseColor,
    },
    animationEnabled: true ,
    transition: "fadeIn",
    headerTitleAlign: "center",
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontSize: 25,
      color: "white",
    },
  };
};

export default HomeStackNav;
