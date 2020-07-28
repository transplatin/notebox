import React, { useState, useEffect } from "react";
import { View, TouchableWithoutFeedback,Picker } from "react-native";
import { Text, Input, Button } from "galio-framework";
import styles from "../constant/Style";
import useRequestBook from "../hooks/useRequestBook";

const RequestBook = ({ navigation }) => {
  const [author, setAuthor] = useState("");
  const [type, setType] = useState("book");
  const [book, setBook] = useState("");
  const [RequestBook, result, error] = useRequestBook();
  console.log(result);

  return (
    <View style={[styles.container, { backgroundColor: styles.baseColor }]}>
      <View style={styles.header}>
        <Text h1 color="white">
          Request Book
        </Text>
      </View>
      <View style={styles.footer}>
        <Input
          value={author}
          onChangeText={(e) => setAuthor(e)}
          style={[styles.input, { marginTop: 80 }]}
          placeholder="Author - E.g R.D. Sharma"
        />
        <Picker
          selectedValue={type}
          style={[styles.input,{color: "grey"}]}
          onValueChange={(type, itemIndex) => setType(type)}
        >
          <Picker.Item label="Book" value="book" />
          <Picker.Item label="Note" value="note" />
        </Picker>
        <Input
          value={book}
          multiline={true}
          numberOfLines={10}
          onChangeText={(e) => setBook(e)}
          style={[styles.input, { height: 200 }]}
          placeholder="Note/Book Name "
        />
        {result.length != 0 ? (
          <Text p color="green">
            Request Submitted
          </Text>
        ) : null}
        {error ? (
          <Text p color="red">
            {error}
          </Text>
        ) : null}

        <Button
          onPress={() => {
            if (verifyDetails(author,book)) {
                RequestBook(author,type, book);
            }
          }}
          color={styles.baseColor}
          style={styles.input}
        >
          Submit Book Request
        </Button>
        <View
          style={{
            flexDirection: "row",
            padding: 10,
          }}
        ></View>
      </View>
    </View>
  );
};

const verifyDetails = (author,book) => {
  if (author == "") {
    alert("Author cannot be empty !");
    return false;
  } else if (book == "") {
    alert("Book name cannot be empty !");
    return false;
  }
  return true;
};
export default RequestBook;
