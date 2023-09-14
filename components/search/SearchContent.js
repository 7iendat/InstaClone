import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

const SearchContent = ( props) => {
  const widthWindow = Dimensions.get("window").width;
  const heightWindow = Dimensions.get("window").height;

  const dataContents = [
      
        require("../../storage/images/image1.jpg"),
        require("../../storage/images/image2.jpg"),
        require("../../storage/images/image3.jpg"),
        require("../../storage/images/image4.jpg"),
        require("../../storage/images/image5.jpg"),
     
        require("../../storage/images/image6.jpg"),
        require("../../storage/images/image7.jpg"),
        require("../../storage/images/image8.jpg"),
        require("../../storage/images/image9.jpg"),
        require("../../storage/images/image10.jpg"),
   
        require("../../storage/images/image11.jpg"),
        require("../../storage/images/image12.jpg"),
        require("../../storage/images/image13.jpg"),
        require("../../storage/images/image14.jpg"),
        require("../../storage/images/image15.jpg"),
        require("../../storage/images/image16.jpg"),
        require("../../storage/images/image11.jpg"),
        require("../../storage/images/image12.jpg"),
        require("../../storage/images/image13.jpg"),
        require("../../storage/images/image14.jpg"),
        require("../../storage/images/image15.jpg"),
        require("../../storage/images/image16.jpg"),
   
  ];
  return (
    <View style ={{top:60 ,flexDirection:"row", flexWrap:"wrap"}}>
        {dataContents.map((imageUri, index) => {
            return (
                <TouchableOpacity style={{paddingBottom:2}} onLongPress={() => props.image(imageUri)} onPressOut={() => props.image(null)}>
                    <Image source={ imageUri} style = {{width:widthWindow / 3, height:widthWindow / 3, resizeMode:'cover'}}/>
                </TouchableOpacity>
            )
        })}
    </View>
  );
};

export default SearchContent;

const styles = StyleSheet.create({});
