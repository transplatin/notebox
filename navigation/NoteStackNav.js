import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import NoteScreen from "../screens/NoteScreen";
import styles from "../constant/Style";
import BookList from "../screens/BookList";

const Stack = createStackNavigator();

const NoteStackNav = ({ navigation }) => {
  return (
    <Stack.Navigator headerMode="screen" initialRouteName="Note">
      <Stack.Screen
        options={getOption("Notes Library")}
        name="Note"
        component={NoteScreen}
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

export default NoteStackNav;
