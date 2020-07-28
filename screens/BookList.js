import React,{useState,useEffect} from "react";
import { View } from "react-native";
import BookNail from "../components/BookNail";
import { FlatList } from "react-native-gesture-handler";
import getBook from "../hooks/getBook";

const BookList = (props) => {
  const cid = props.route.params.cid;
  const type = props.route.params.type;
  const [save,setSave]=useState("unsaved");
  useEffect(()=>{
    if (type == "Saved Books" || type == "Saved Notes") {
      setSave("saved")
    } 
  },[])


  const [BookList, result, error] = getBook(type, cid);

  return (
    <FlatList
      data={result}
      keyExtractor={(result) => result.bid.toString()}
      renderItem={({ item }) => {
        return (
          <BookNail
            name={item.name}
            url={item.url}
            link={item.link}
            type={item.type}
            saved={save}
            bid={item.bid}
            descr={item.descr}
            uploader={item.uploader}
          />
        );
      }}
    />
  );
};

export default BookList;
