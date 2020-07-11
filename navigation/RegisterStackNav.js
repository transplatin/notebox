import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../screens/Login";
import SignUp  from "../screens/SignUp";
import ForgetPass from "../screens/ForgetPass";

const Stack = createStackNavigator();

const RegisterStackNav = ({navigation}) => {
  return (
    <Stack.Navigator initialRouteName="Register">
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Forget" component={ForgetPass} />
    </Stack.Navigator>
  );
};

export default RegisterStackNav;
