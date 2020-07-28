import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import BottomTabNav from "./navigation/BottomTabNav";
import RegisterStackNav from "./navigation/RegisterStackNav";
import styles from "./constant/Style";
import ReadBook from "./screens/ReadBook";
import SaveMark from "./components/SaveMark";
import FeedBack from "./screens/FeedBack";
import RequestBook from "./screens/RequestBook";
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      <Stack.Navigator initialRouteName="Auth">
        <Stack.Screen
          options={{ headerShown: false }}
          name="Auth"
          component={RegisterStackNav}
        />
        <Stack.Screen
          options={getOption("Main")}
          options={{ headerShown: false }}
          name="Main"
          component={BottomTabNav}
        />
        <Stack.Screen
          options={({ route }) => getOption(route.params)}
          name="Read"
          component={ReadBook}
        />
        <Stack.Screen
          options={getOption("Feedback")}
          options={{ headerShown: false }}
          name="Feedback"
          component={FeedBack}
        />
        <Stack.Screen
          options={getOption("Request Book")}
          options={{ headerShown: false }}
          name="Request"
          component={RequestBook}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const getOption = (params) => {
  return {
    title: params.name,
    headerStyle: {
      backgroundColor: styles.baseColor,
    },
    animationEnabled: true,
    headerShown: true,
    headerRight: () => (
      <SaveMark
        name={params.name}
        url={params.url}
        type={params.type}
        bid={params.bid}
        link={params.link}
        descr={params.descr}
      />
    ),
    transition: "fadeIn",
    headerTitleAlign: "center",
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontSize: 25,
      color: "white",
    },
  };
};
