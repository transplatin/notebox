import React from "react";
import {  Text } from "galio-framework";
import {
  TouchableWithoutFeedback,
  View,
  StyleSheet,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as StoreReview from "expo-store-review";

const IconButton = (props) => {
  if (props.iconname == "google-play") {
    StoreReview.requestReview();
  }
  return (
    <TouchableWithoutFeedback onPress={()=>props.function()}>
      <View style={styles.container}>
        <MaterialCommunityIcons
          name={props.iconname}
          size={40}
          color="#ffa41b"
        />
        <Text p bold style={{ marginLeft: 30 }}>
          {props.text}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};
const styles = StyleSheet.create({
  container: {
    height: 50,
    width: "90%",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
});

export default IconButton;
