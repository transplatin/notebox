import React, { Component } from "react";
import { StatusBar } from "react-native";
import PDFReader from "rn-pdf-reader-js";

const ReadBook = (props) => {
  return (
    <>
      <PDFReader
        withPinchZoom
        source={{
          uri:
            "https://s3.ap-south-1.amazonaws.com/physicswallahalakhpandey.com-production/class-11+Physics/Ch-01/11+Phys+HW01.pdf",
        }}
      />
    </>
  );
};
export default ReadBook;
