import React from "react";
import { View, TextInput, StyleSheet } from "react-native";

const Inputs = ({
  name,
  type,
  placeholder,
  entry,
  onTextChange,
  endEditing,
  value
}) => {
  return (
    <View>
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={style.input}
        name={name}
        value={value}
        textContentType={type}
        placeholder={placeholder}
        secureTextEntry={entry}
        onChangeText={onTextChange}
        onEndEditing={endEditing}
      />
    </View>
  );
};

export default Inputs;

const style = StyleSheet.create({
  input: {
    fontFamily: "openSans",
    borderBottomWidth: 0.7,
    borderBottomColor: "#C8C8C8",
    paddingVertical: 10,
    fontSize: 14,
    lineHeight: 19,
    color: "#C4C4C4",
    marginTop: 22.9
  }
});
