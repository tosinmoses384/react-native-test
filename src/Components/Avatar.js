import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const Avatar = () => {
  return (
    <View style={style.container}>
      <View style={style.avatarContainerGroup}>
        <Image
          source={require("../../assets/avatar.png")}
          style={style.image}
        />
        <View>
          <Text
            style={{ color: "white", fontSize: 16, fontFamily: "openSans" }}
          >
            Mark Lee
          </Text>
          <Text
            style={{ color: "#969699", fontSize: 14, fontFamily: "openSans" }}
          >
            Female
          </Text>
          <Text
            style={{
              color: "#969699",
              fontSize: 12,
              fontFamily: "openSans",
              marginVertical: 4
            }}
          >
            Actress
          </Text>
        </View>
      </View>
      <Text style={style.edit}>Edit</Text>
    </View>
  );
};

export default Avatar;
const style = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#181818",
    marginHorizontal: 18,
    height: 70
  },
  image: {
    marginRight: 9
  },
  avatarContainerGroup: {
    display: "flex",
    flexDirection: "row"
  },
  edit: {
    color: "rgba(255, 0, 0, 0.8)",
    fontFamily: "openSans",
    marginLeft: "auto",
    fontSize: 12,
    lineHeight: 16,
    fontWeight: "bold"
  }
});
