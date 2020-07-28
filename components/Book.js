import React from "react";
import { Image, TouchableOpacity } from "react-native";
import { Text } from "galio-framework";
import { useNavigation } from "@react-navigation/native";
import styles from "../constant/Style";

const Book = (props) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => 
        navigation.push("Read", {
          name: props.name,
          bid: props.bid,
          type: props.type,
          descr: props.descr,
          link: props.link,
          url: props.url,
        })
      }
      style={styles.bookContainer}
    >
      <Image
        source={{
          uri: props.link,
        }}
        style={styles.bookImage}
      />
      <Text small center muted>
        {props.name}
      </Text>
    </TouchableOpacity>
  );
};

export default Book;
