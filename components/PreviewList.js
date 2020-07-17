import React from "react";
import { FlatList } from "react-native";
import Book from "./Book";

const PreviewList = (props) => {
  const arr = props.arr;
  return (
    <>
      <FlatList
        data={arr.slice(0,5)}
        horizontal
        initialNumToRender={1}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(arr)=>arr.name}
        renderItem={({ item }) => {
          return <Book name={item.name} />;
        }}
      />
      </>
  );
};

export default PreviewList;
