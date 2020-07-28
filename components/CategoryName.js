import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { Text } from "galio-framework";
import { useNavigation } from "@react-navigation/native";
import { TouchableHighlight } from "react-native-gesture-handler";

const CategoryName = (props) => {
  const navigation = useNavigation();

  return (
    <TouchableHighlight
      onPress={() => navigation.push("BookList",{
        name: props.name,
        cid: props.cid,
        type: props.typee
      })}
      style={styles.container}
    >
      <Text small center color="white">
        {props.name}
      </Text>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ff5f0e",
    margin: 10,
    padding: 10,
    justifyContent: "center",
    borderRadius: 10,
  },
});

export default CategoryName;
