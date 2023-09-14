import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { Divider } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

export const bottomTabIcons = [
  {
    name: "Home",
    active: "https://img.icons8.com/fluency-systems-filled/144/ffffff/home.png",
    inactive:
      "https://img.icons8.com/fluency-systems-regular/48/ffffff/home.png",
  },
  {
    name: "Search",
    active: "https://img.icons8.com/ios-filled/500/ffffff/search--v1.png",
    inactive: "https://img.icons8.com/ios/500/ffffff/search--v1.png",
  },
  {
    name: "Post",
    active:
      "https://img.icons8.com/fluency-systems-regular/60/ffffff/plus-2-math.png",
    inactive:
      "https://img.icons8.com/fluency-systems-regular/60/ffffff/plus-2-math.png",
  },
  {
    name: "Reels",
    active: "https://img.icons8.com/ios-filled/50/ffffff/instagram-reel.png",
    inactive: "https://img.icons8.com/ios/500/ffffff/instagram-reel.png",
  },
  {
    name: "Profile",
    active:
      "https://instagram.fkhh4-1.fna.fbcdn.net/v/t51.2885-19/44884218_345707102882519_2446069589734326272_n.jpg?_nc_ht=instagram.fkhh4-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=TSeswLI-RrIAX-c-nfg&edm=APIRfOcBAAAA&ccb=7-5&ig_cache_key=YW5vbnltb3VzX3Byb2ZpbGVfcGlj.2-ccb7-5&oh=00_AfDpQ5uvdwrpN_1H0IStTttJ7J6BU30XPEdlxAFjMMDD3A&oe=646632CF&_nc_sid=282002",
    inactive:
      "https://instagram.fkhh4-1.fna.fbcdn.net/v/t51.2885-19/44884218_345707102882519_2446069589734326272_n.jpg?_nc_ht=instagram.fkhh4-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=TSeswLI-RrIAX-c-nfg&edm=APIRfOcBAAAA&ccb=7-5&ig_cache_key=YW5vbnltb3VzX3Byb2ZpbGVfcGlj.2-ccb7-5&oh=00_AfDpQ5uvdwrpN_1H0IStTttJ7J6BU30XPEdlxAFjMMDD3A&oe=646632CF&_nc_sid=282002",
  },
];

const BottomTabs = ({ icons }) => {
  const [activeTab, setActive] = useState("Home");
  const navigation = useNavigation();

  const Icon = ({ icon }) => (
    <TouchableOpacity onPress={() => {navigation.push(icon.name); setActive(icon.name)}} >
      <Image
        source={{
          uri: activeTab === icon.name ? icon.active : icon.inactive,
        }}
        style={[styles.icon, icon.name === "Profile" ? styles.profile : null]}
      />
    </TouchableOpacity>
  );
  return (
    <View style={styles.wrapper}>
      <Divider width={1} orientation="vertical" />
      <View style={styles.bottomTab}>
        {icons.map((icon, index) => (
          <Icon key={index} icon={icon} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  // wrapper:{
  //   position: 'absolute',
  //   width:'100%',
  //   zIndex:999,
  //   // bottom:'2%',
  //   backgroundColor:'#000'
  // },

  bottomTab: {
    flexDirection: "row",
    height: 50,
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 6,
  },
  icon: {
    width: 30,
    height: 30,
  },
  profile: {
    borderRadius: 50,
  },
});

export default BottomTabs;
