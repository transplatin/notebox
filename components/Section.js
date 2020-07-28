import React,{useEffect} from "react";
import { View } from "react-native";
import { Text } from "galio-framework";
import styles from "../constant/Style";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import PreviewList from "./PreviewList";
import getBook from "../hooks/getBook"
import {useNavigation} from "@react-navigation/native"
const Section = (props) => {
  const [getBookList,result,error]=getBook(props.type,"0");
  const navigation=useNavigation();
  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      getBookList();
    });
    return unsubscribe;
  }, [navigation]);
  if (result.length<1){
 
    return <><Text p  center muted>No {props.type} found, please go to library.</Text></>;
  }
  return (
    <>
      <View style={styles.head}>
        <Text p muted>
          {props.type}
        </Text>
        <TouchableWithoutFeedback onPress={() => navigation.push("BookList",
        {
          name: props.type,
          type: props.type,
          cid: "0"
        }) }>
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
