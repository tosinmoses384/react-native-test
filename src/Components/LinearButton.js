import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const LinearButton = () => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <LinearGradient
        colors={["#EB5757", "#BB6BD9"]}
        start={[-0.012, 0.3234]}
        end={[1.0371, 1.0371]}
        style={{ padding: 15, alignItems: "center", borderRadius: 5 }}
      >
        <Text style={style.button}>Login</Text>
      </LinearGradient>
    </View>
  );
};

export default LinearButton;

const style = StyleSheet.create({
  button: {
    width: 360,
    backgroundColor: "transparent",
    fontSize: 16,
    lineHeight: 22,
    color: "#fff",
    textAlign: "center",
    fontFamily: "openSans"
  }
});
