import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Entypo } from "@expo/vector-icons";

const Gallery = () => {
  return (
    <View style={style.container}>
      <Image source={require("../../assets/Frame.png")} />
      <Text style={style.likes}>
        <Entypo name="heart" style={{ color: "red" }} />
        (15000)
      </Text>
    </View>
  );
};

export default Gallery;

const style = StyleSheet.create({
  container: {
    flexBasis: "33.3333%"
    // marginLeft: 5
    // alignSelf: "center"
  },
  likes: {
    color: "#4E5567",
    fontFamily: "openSans",
    fontSize: 10
  }
});
