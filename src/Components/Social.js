import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const Social = ({ connected, src, name }) => {
  return (
    <View>
      <Text style={connected === "1.2k" ? style.connected2 : style.connected1}>
        {connected}
      </Text>
      <View style={style.social}>
        <Image source={src} style={style.image} />
        <Text style={style.name}>{name}</Text>
      </View>
    </View>
  );
};

export default Social;

const style = StyleSheet.create({
  connected1: {
    color: "#fff",
    textAlign: "center",
    fontFamily: "openSans",
    fontSize: 12,
    lineHeight: 16
  },
  connected2: {
    color: "#fff",
    textAlign: "center",
    fontFamily: "openSans",
    fontSize: 18,
    lineHeight: 20
  },
  social: {
    display: "flex",
    flexDirection: "row",
    alignSelf: "center",
    marginTop: 9
  },
  image: {
    marginRight: 5
  },
  name: {
    color: "#fff",
    fontSize: 12,
    fontFamily: "openSans",
    lineHeight: 16
  }
});
