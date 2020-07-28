import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ProfileScreen from "../screens/ProfileScreen";
import styles from "../constant/Style";
import FeedBack from "../screens/FeedBack"

const Stack = createStackNavigator();

const BookStackNav = ({ navigation }) => {
  return (
    <Stack.Navigator headerMode="screen" initialRouteName="Profile">
      <Stack.Screen
        options={getOption("Your Profile")}
        name="Profile"
        component={ProfileScreen}
      />
       <Stack.Screen
        options={getOption("Feedback")}
        name="Feedback"
        component={FeedBack}
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
    animationEnabled: false,
    transition: "fadeIn",
    headerTitleAlign: "center",
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontSize: 25,
      color: "white",
    },
  };
};

export default BookStackNav;
