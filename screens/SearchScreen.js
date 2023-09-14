import {
  Dimensions,
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";
import HeaderSearch from "../components/search/HeaderSearch";
import SearchContent from "../components/search/SearchContent";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

const SearchScreen = () => {
  const [image, setImage] = useState(null);
  const widthWindow = Dimensions.get("window").width;
  const heightWindow = Dimensions.get("window").height;
  const getImage = (data) => {
    setImage(data);
  };

  return (
    <View
      style={{
        backgroundColor: "black",
        position: "relative",
        width: "100%",
        height: "100%",
        opacity: 0.9,
      }}
    >
      <StatusBar barStyle={"light-content"} backgroundColor="black" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <HeaderSearch />

        <SearchContent image={getImage} />
      </ScrollView>

      {image ? (
        <View
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            zIndex: 1,
            backgroundColor: "rgba(52,52,52,52)",
            opacity: 0.8,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <StatusBar backgroundColor="#525252" barStyle={"dark-content"} />
          <View
            style={{
              position: "absolute",
              backgroundColor: "black",
              // top: heightWindow / 5,
              // left: widthWindow / 60,

              width: 350,
              height: 440,
              zIndex: 1,
              elevation: 50,
              borderRadius: 20,
            }}
          >
            <View
              style={{
                paddingHorizontal: 15,
                paddingVertical: 15,
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Image
                source={image}
                style={{ width: 30, height: 30, borderRadius: 20 }}
              />
              <View>
                <Text style={{ color: "white", paddingLeft: 5 }}>
                  Name_User
                </Text>
              </View>
            </View>
            <Image source={image} style={{ width: "100%", height: "75%" }} />
            <View style={{ flexDirection: "row" ,justifyContent:"space-between", paddingHorizontal:14, paddingTop:10}}>
              <AntDesign name="hearto" size={24} color="white" />
              <MaterialCommunityIcons
                name="account-circle-outline"
                size={24}
                color="white"
              />
              <Entypo name="paper-plane" size={24} color="white" />
              <Entypo name="dots-three-vertical" size={24} color="white" />
            </View>
          </View>
        </View>
      ) : null}
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({});
