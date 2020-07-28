import React, { useState, useEffect } from "react";
import { Text } from "galio-framework";
import { FlatList, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import GridComponent from "../components/GridComponent";
import getBookCategory from "../hooks/getBookCategory";
import getBook from "../hooks/getBook";
import CategoryName from "../components/CategoryName";
const HomeScreen = () => {
  const [type, setType] = useState({ name: "All Notes", type: "All Notes" });
  const [loadCategory, result, error] = getBookCategory();
  const [BookList, resultBL, errorBL] = getBook(type.type, 0);
  return (
    <>
      <StatusBar backgroundColor="transparent" />
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={result}
        renderItem={({ item }) => {
          return (
            <CategoryName
              typee="note"
              name={item.name}
              type={item.type}
              cid={item.cid}
            />
          );
        }}
        keyExtractor={(result) => result.cid.toString()}
      />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          marginVertical: 3,
          padding: 10,
          backgroundColor: "#ffffff",
        }}
      >
        <Text h4 center muted>
          {type.name}
        </Text>
      </View>
      {errorBL ? (
        <Text p center color="orange">
          {errorBL}
        </Text>
      ) : null}
      <FlatList
        data={resultBL}
        numColumns={3}
        style={{ marginTop: 10 }}
        contentContainerStyle={{ width: "100%", alignItems: "center" }}
        renderItem={({ item }) => {
          return (
            <GridComponent
              heading={item.name}
              descr={item.descr}
              type={item.type}
              link={item.link}
              url={item.url}
              bid={item.bid}
            />
          );
        }}
        keyExtractor={(result) => result.bid}
      />
    </>
  );
};

export default HomeScreen;
