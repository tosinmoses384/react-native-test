import React from "react";
import { withNavigation } from "react-navigation";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import Avatar from "../Components/Avatar";
import Social from "../Components/Social";
import Sections from "../Components/Sections";
import Gallery from "../Components/Gallery";

const Profile = () => {
  return (
    <ScrollView style={style.container}>
      <View>
        <Avatar />
      </View>

      <View style={style.socialContainer}>
        <Social
          connected="1.2k"
          name="Youtube"
          src={require(`../../assets/youtube.png`)}
        />
        <Social
          connected="+Connect"
          name="Facebook"
          src={require(`../../assets/facebook.png`)}
        />
        <Social
          connected="Connecting..."
          name="Instagram"
          src={require(`../../assets/instagram.png`)}
        />
      </View>
      <Sections sectionName="Introduction" action="Edit" />
      <Text style={style.text}>
        I mean, you already have a blog post you want to write. Can't you just
        dive in and write it? Why all the pomp and circumstance with this
        dag-blasted introduction?
      </Text>
      <Sections sectionName="Notification" action="10" />
      <Sections sectionName="Gallery" />
      <View
        style={{
          position: "relative",
          left: 15
        }}
      >
        <View style={style.gallery}>
          <Gallery />
          <Gallery />
          <Gallery />
          <Gallery />
          <Gallery />
          <Gallery />
        </View>
      </View>
    </ScrollView>
  );
};

export default withNavigation(Profile);

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#181818"
  },
  socialContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 46,
    marginHorizontal: 30
  },
  text: {
    fontSize: 12,
    color: "#969699",
    lineHeight: 16,
    width: 340,
    textAlign: "justify",
    alignSelf: "center",

    marginBottom: 20.5
  },
  gallery: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignContent: "center",
    marginTop: 25,
    marginLeft: 3
  }
});
