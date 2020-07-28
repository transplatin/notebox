import React, { Component } from "react";
import PDFReader from "rn-pdf-reader-js";

const ReadBook = ({route}) => {
  return (
    <>
      <PDFReader
        withPinchZoom
        source={{
          uri: route.params.url,
        }}
      />
    </>
  );
};
export default ReadBook;
