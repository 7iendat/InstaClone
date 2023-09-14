import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { EvilIcons } from "@expo/vector-icons";
import { TextInput } from "react-native-gesture-handler";

const HeaderSearch = () => {
  return (
    <View
      style={{
        position: "absolute",
        width: "100%",
        backgroundColor: "black",
        height: 60,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-start",
          paddingHorizontal: 5,
          borderRadius: 12,
          height: "70%",
          width: "88%",
          opacity: 0.6,
          backgroundColor:"gray"
        }}
      >
        <EvilIcons name="search" size={24} color="white" />
        <TextInput
          placeholder="Search"
          placeholderTextColor="white"
          style={{ padding: 12 }}
        />
      </View>
    </View>
  );
};

export default HeaderSearch;

const styles = StyleSheet.create({});
