import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import ForumScreen from "../screens/ForumScreen";
import BookScreen from "../screens/BookScreen";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const BottomTab = createBottomTabNavigator();

const BottomTabNav = ({ navigation }) => {
  return (
    <BottomTab.Navigator
      screenOptions={({ route }) => setOptions(route)}
      tabBarOptions={{
        activeTintColor: "teal",
        inactiveTintColor: "gray",
      }}
      initialRouteName="Home"
    >
      <BottomTab.Screen name="Home" icon="home" component={HomeScreen} />
      <BottomTab.Screen name="Books" component={BookScreen} />
      <BottomTab.Screen name="Forum" component={ForumScreen} />
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
      case "Forum":
        iconName = focused ? "newspaper" : "newspaper";
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
