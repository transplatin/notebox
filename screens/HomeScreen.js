import React from "react";
import Section from "../components/Section";
import { ScrollView } from "react-native";

const HomeScreen = () => {

  return (
    <ScrollView>
      <Section type="Saved Books" />
      <Section type="Saved Notes" />
    </ScrollView>
  );
};

export default HomeScreen;
