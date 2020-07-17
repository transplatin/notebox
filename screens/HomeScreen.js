import React from "react";
import Section from "../components/Section";
import { ScrollView } from "react-native";

const HomeScreen = () => {
  return (
    <ScrollView>
      <Section title="Popular" />
      <Section title="Saved Books" />
      <Section title="Saved Notes" />
    </ScrollView>
  );
};

export default HomeScreen;
