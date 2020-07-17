import React from "react";
import { Image,TouchableOpacity } from "react-native";
import { Text } from "galio-framework";
import { useNavigation } from '@react-navigation/native';
import styles from "../constant/Style";

const Book = (props) => {
  const navigation=useNavigation();
  return (
    <TouchableOpacity
       onPress={()=>{navigation.push("Read")}} style={styles.bookContainer}>
      <Image
        source={{
          uri: "https://images-na.ssl-images-amazon.com/images/I/71uAI28kJuL.jpg",
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
