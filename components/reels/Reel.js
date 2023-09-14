import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useRef } from "react";
import { Video } from 'expo-av';
import { Pressable } from "react-native";
import { useState } from "react";

const Reel = ({ item,index,  currentIndex }) => {
  console.log("current", item);
  const widthWindow = Dimensions.get("window").width;
  const heightWindow = Dimensions.get("window").height;
  const video = useRef(null);
  const onBuffer = (buffer) => {
    console.log("buffering", buffer);
  };
  const onError = (error) => {
    console.log("error", error);
  };
  const [status, setStatus] = useState({});
  console.log("status", status.isPlaying)
  return (
    <View
      style={{ width: widthWindow, height: heightWindow, position: "relative" }}
    >
      <Pressable
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
        }}
      >
        <Video
          ref={video}
          onBuffer={onBuffer}
          onError={onError}
          isLooping
          shouldPlay ={index == currentIndex ? true : false}
          onPlaybackStatusUpdate={status => setStatus(() => status)}
          resizeMode="cover"
          source={item.video}
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
          }}
        />
      </Pressable>
    </View>
  );
};

export default Reel;

const styles = StyleSheet.create({});
