import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../screens/Login";
import SignUp from "../screens/SignUp";
import ForgetPass from "../screens/ForgetPass";
import styles from "../constant/Style"

const Stack = createStackNavigator();

const RegisterStackNav = ({ navigation }) => {
  return (
    <Stack.Navigator headerMode="screen" initialRouteName="Login">
      <Stack.Screen
        options={getOption("Welcome")}
        name="Login"
        component={Login}
      />
      <Stack.Screen
        options={getOption("Join")}
        name="SignUp"
        component={SignUp}
      />
      <Stack.Screen
        options={getOption("Forget")}
        name="Forget"
        component={ForgetPass}
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
    animationEnabled: true,
    transition: "fadeIn",
    headerTitleAlign: "center",
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontSize: 25,
      color: "white"
    },
  };
};

export default RegisterStackNav;
