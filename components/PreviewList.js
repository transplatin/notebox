import React from "react";
import {View } from "react-native";
import Book from "./Book";

const PreviewList = (props) => {
  const arr = props.arr.slice(0,3);

  return (
    <View style={{flexDirection: "row"}}>
             { arr.map((item, key)=>(
              <Book name={item.name} descr={item.descr} type={item.type} link={item.link} url={item.url} bid={item.bid} key={item.bid} />)
         )}
      </View>
  );
};

export default PreviewList;
