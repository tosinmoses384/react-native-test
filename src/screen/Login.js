import React, { useState, useEffect } from "react";

import {
  View,
  StyleSheet,
  Text,
  ActivityIndicator,
  TouchableOpacity
} from "react-native";
import * as Font from "expo-font";
import Inputs from "../Components/Input";
import LinearButton from "../Components/LinearButton";
import { PostData } from "../Api/post";

const Login = ({ navigation }) => {
  const [loaded, setLoaded] = useState(false);
  const [username, setUserNAme] = useState("");
  const [passWord, setPassword] = useState("");
  const [result, setResult] = useState("");

  const load = async () => {
    await Font.loadAsync({
      openSans: require("../../assets/fonts/OpenSans-Bold.ttf")
    }).then(() => {
      setLoaded(true);
    });
  };

  useEffect(() => {
    load();
  }, []);

  const data = { username, passWord };

  return (
    <View style={style.container}>
      {loaded ? (
        <View style={style.containerGroup}>
          <Text style={style.login}>Login</Text>
          <Inputs
            type="emailAddress"
            placeholder="Email Address"
            value={username}
            entry={false}
            onTextChange={text => {
              setUserNAme(text);
            }}
          />
          <Inputs
            type="password"
            placeholder="Password"
            entry={true}
            value={passWord}
            onTextChange={text => {
              setPassword(text);
            }}
          />
          <View style={style.passView}>
            <Text style={style.pass}>Forgot your password? </Text>
            <TouchableOpacity>
              <Text style={style.recover}>Recover</Text>
            </TouchableOpacity>
          </View>
          <View style={style.endView}>
            <Text style={{ color: "white", textAlign: "center" }}>
              Haven't registered?
            </Text>
            <TouchableOpacity>
              <Text
                style={{
                  color: "#3f4aa6",
                  textAlign: "center",
                  marginVertical: 4
                }}
              >
                Click here to register
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                PostData(data);
                navigation.navigate("Profile");
              }}
            >
              <LinearButton />
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <View style={style.indicator}>
          <ActivityIndicator size="large" color="#D75A4Ass" />
        </View>
      )}
    </View>
  );
};

export default Login;

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#181818"
  },
  indicator: {
    flex: 1,
    justifyContent: "center"
  },
  containerGroup: {
    marginTop: 115,
    marginHorizontal: 20,
    justifyContent: "center"
  },
  login: {
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 24,
    lineHeight: 33,
    color: "#FFFFFF",
    fontFamily: "openSans"
  },
  passView: {
    display: "flex",
    flexDirection: "row",
    marginVertical: 4
  },

  pass: {
    color: "#FFFFFF",
    fontSize: 14,
    lineHeight: 19
  },
  recover: {
    color: "#3f4aa6"
  },
  endView: {
    textAlign: "center",
    alignSelf: "center",
    position: "absolute",
    top: "225%"
    // bottom: "200%"
  }
});
