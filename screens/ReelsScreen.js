import {
  Dimensions,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import Reels from "../components/reels/Reels";

const ReelsScreen = () => {
  const widthWindow = Dimensions.get("window").width;
  const heightWindow = Dimensions.get("window").height;
  return (
    <SafeAreaView
      style={{
        width: widthWindow,
        height: heightWindow,
        position: "relative",
        backgroundColor: "black",
      }}
    >
      <View style ={{position:"absolute", flexDirection:"row", alignItems:"center", justifyContent:"space-between", width:'100%', paddingHorizontal:18,zIndex:1}}>
        <Pressable style={{flexDirection:'row', alignItems:"center",}}>
          <Text style={{color:'white', fontSize:25, fontWeight:"bold"}}>Reels</Text>
          <Entypo name="chevron-small-down" size={24} color="white" />
        </Pressable>
        <Pressable>
          <Ionicons name="camera-outline" size={25} color="white" />
        </Pressable>
      </View>

      <Reels />
    </SafeAreaView>
  );
};

export default ReelsScreen;

const styles = StyleSheet.create({});
