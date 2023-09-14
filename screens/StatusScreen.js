import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { StatusBar } from "react-native";
import { Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TextInput } from "react-native-gesture-handler";
import { Feather } from '@expo/vector-icons';
import { Animated } from "react-native";

const StatusScreen = ({ route }) => {
  const navigation = useNavigation()
  const { name } = route.params;
  const { imageUri } = route.params;

  useEffect(() => {
    let timer = setTimeout(() => {
      navigation.goBack()
    }, 5000);

    Animated.timing(progress, {
      toValue:5,
      duration:5000,
      useNativeDriver:false
    }).start()
    return () => clearTimeout(timer)
  }, [])

  const [progress, setProgress] = useState(new Animated.Value(0))

  const progressAnimation = progress.interpolate({
    inputRange:[0, 5],
    outputRange:["0%", "100%"]
  })
   return (
    <View
      style={{
        backgroundColor: "black",
        position: "relative",
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <StatusBar
        style={{ backgroundColor: "black", statusbar: "light-content" }}
      />
      <View
        style={{
          width: "95%",
          height: 2,
          position: "absolute",
          backgroundColor: "gray",
          top: 16,
        }}
      >
        <Animated.View
          style={{ backgroundColor: "white", width: progressAnimation, height: "100%" }}
        ></Animated.View>
      </View>
      <View
        style={{
          position: "absolute",
          top: 25,
          left: 10,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          
        }}
      >
        <View style={{ width: 40, height: 40, borderRadius: 50 }}>
          <Image
            source={{ uri: imageUri }}
            style={{
              width: "92%",
              height: "92%",
              resizeMode: "cover",
              borderRadius: 50,
              backgroundColor: "orange",
            }}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            flex:1
          }}
        >
          <Text style={{ color: "white", fontSize: 14, paddingLeft: 8 }}>
            {name}
          </Text>
          <TouchableOpacity style={{marginRight:17}} onPress={() => navigation.goBack()}>
            <AntDesign name="close" size={20} color="white" />
          </TouchableOpacity>
        </View>
      </View>

      <Image source={{uri:imageUri}} style={{ width:'100%', height:"80%", position:'absolute',}}/>
      <View style={{position:'absolute', bottom:0, left:0, flexDirection:'row', alignItems:'center', justifyContent:"space-between"}}>
          <TextInput placeholder="Send message" placeholderTextColor='white' style={{width:'88%', height:50, borderColor:'white', borderRadius:20, borderWidth:1, padding:12, fontSize:16}}/>
          <TouchableOpacity onPress={() => navigation.goBack()}>
          <Feather name="send" size={24} color="white" />
          </TouchableOpacity>
      </View>
    </View>
  );
};

export default StatusScreen;

const styles = StyleSheet.create({});
