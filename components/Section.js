import React from "react";
import { View } from "react-native";
import { Text } from "galio-framework";
import styles from "../constant/Style";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import PreviewList from "./PreviewList";
import getBook from "../hooks/getBook"
import {useNavigation} from "@react-navigation/native"
const Section = (props) => {
  const [getBookList,result,error]=getBook();
  const navigation=useNavigation();
  if (result.length<1){
    return null;
  }
  return (
    <>
      <View style={styles.head}>
        <Text p muted>
          {props.title}
        </Text>
        <TouchableWithoutFeedback onPress={() => navigation.push("BookList") }>
          <Text p color={styles.baseColor}>
            More
          </Text>
        </TouchableWithoutFeedback>
      </View>
      <PreviewList arr={result} />
    </>
  );
};

export default Section;
