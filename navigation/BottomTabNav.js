import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeStackNav from "./HomeStackNav";
import ProfileScreen from "../screens/ProfileScreen";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import styles from "../constant/Style"
import BookStackNav from "./BookStackNav";
import NoteStackNav from "./NoteStackNav";

const BottomTab = createBottomTabNavigator();

const BottomTabNav = ({ navigation }) => {
  return (
    <BottomTab.Navigator
      screenOptions={({ route }) => setOptions(route)}
      tabBarOptions={{
        activeTintColor: styles.baseColor,
        inactiveTintColor: "gray",
      }}
      initialRouteName="Home"
    >
      <BottomTab.Screen name="Home" icon="home" component={HomeStackNav} />
      <BottomTab.Screen name="Books" component={BookStackNav} />
      <BottomTab.Screen name="Notes" component={NoteStackNav} />
      <BottomTab.Screen name="Profile" component={ProfileScreen} />
    </BottomTab.Navigator>
  );
};

const setOptions = (route) => ({
  tabBarIcon: ({ focused, color, size }) => {
    let iconName;

    switch (route.name) {
      case "Home":
        iconName = focused ? "home" : "home";
        break;
      case "Books":
        iconName = focused
          ? "book-open-page-variant"
          : "book-open-page-variant";
        break;
      case "Notes":
        iconName = focused ? "note" : "note";
        break;
      case "Profile":
        iconName = focused ? "account" : "account";
        break;
    }

    // You can return any component that you like here!
    return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
  },
});

export default BottomTabNav;
