import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Entypo } from "@expo/vector-icons";

const Sections = ({ sectionName, action }) => {
  return (
    <View style={style.container}>
      <Text style={style.section}>{sectionName}</Text>
      {action === "Edit" ? (
        <Text style={style.edit}>{action}</Text>
      ) : action === "10" ? (
        <View style={style.notification}>
          <Text style={style.badge}>{action}</Text>
          <Entypo
            name="chevron-thin-right"
            size={24}
            style={{ color: "#fff" }}
          />
        </View>
      ) : (
        <Text style={style.section}>{action}</Text>
      )}
    </View>
  );
};

export default Sections;

const style = StyleSheet.create({
  container: {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    display: "flex",
    flexDirection: "row",
    marginBottom: 7.5
  },
  section: {
    color: "#fff",
    paddingHorizontal: 17,
    paddingVertical: 11
  },
  edit: {
    color: "rgba(253, 0, 0, 0.8)",
    fontFamily: "openSans",
    fontSize: 14,
    lineHeight: 19,
    paddingHorizontal: 17,
    paddingVertical: 11,
    marginLeft: "auto"
  },
  notification: {
    fontFamily: "openSans",
    fontSize: 14,
    lineHeight: 19,
    paddingHorizontal: 17,
    paddingVertical: 11,
    marginLeft: "auto",
    display: "flex",
    flexDirection: "row"
  },
  badge: {
    backgroundColor: "#FF0000",
    fontFamily: "openSans",
    fontSize: 14,
    lineHeight: 19,
    paddingHorizontal: 8,
    paddingVertical: 4,
    color: "#fff",
    borderRadius: 5
  }
});
