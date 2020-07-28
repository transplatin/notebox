import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import BookScreen from "../screens/BookScreen";
import styles from "../constant/Style";
import BookList from "../screens/BookList";

const Stack = createStackNavigator();

const BookStackNav = ({ navigation }) => {
  return (
    <Stack.Navigator headerMode="screen" initialRouteName="Book">
      <Stack.Screen
        options={getOption("Book Library")}
        name="Book"
        component={BookScreen}
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
    animationEnabled: false ,
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
