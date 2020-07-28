import React from "react";
import { TouchableOpacity, Image, StyleSheet, Dimensions } from "react-native";
import { Text } from "galio-framework";
import { useNavigation } from "@react-navigation/native";
const _Width = Math.round(Dimensions.get("window").width);
const GridComponent = (props) => {
  const navigate = useNavigation();
  return (
    <TouchableOpacity
      onPress={() =>
        navigate.push("Read", {
          name: props.heading,
          bid: props.bid,
          type: props.type,
          descr: props.descr,
          link: props.link,
          url: props.url,
        })
      }
      style={styles.container}
    >
      <Image
        resizeMode="stretch"
        style={styles.gridImage}
        source={{
          uri: props.link,
        }}
      />
      <Text small center muted style={{ padding: 2 }}>
        {props.heading}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    elevation: 2,
    width: _Width / 3.3,
    backgroundColor: "white",
    margin: 5,
  },
  gridImage: {
    height: 140,
    width: _Width / 3.3,
    resizeMode: "cover",
  },
});

export default GridComponent;
