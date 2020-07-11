import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../screens/Login";
import SignUp from "../screens/SignUp";
import ForgetPass from "../screens/ForgetPass";

const Stack = createStackNavigator();

const RegisterStackNav = ({ navigation }) => {
  return (
    <Stack.Navigator headerMode="screen" initialRouteName="Register">
      <Stack.Screen
        options={getOption("Welcome")}
        name="Login"
        component={Login}
      />
      <Stack.Screen
        options={getOption("SignUp")}
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
      backgroundColor: "tomato",
    },
    animationEnabled: false,
    headerTitleAlign: "center",
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontSize: 25,
      color: "white"
    },
  };
};

export default RegisterStackNav;
