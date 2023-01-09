import React from "react";  
import {Text, View, TextInput, StyleSheet} from "react-native";
import {Feather} from "@expo/vector-icons";

export default function SearchBar({term, onTermChange, onTermSubmit}) {
    return (
      <View style = {styles.background} >
        <Feather name = "search" style = {styles.iconStlye} />
        <TextInput
          style = {styles.inputStyle} 
          placeholder="Search"
          autoCapitalize = "none"
          autoCorrect = {false}
          value = {term}
          onChangeText = {onTermChange}
          onEndEditing = {onTermSubmit}
        />
      </View>
    );
};

const styles = StyleSheet.create({
  background: {
      marginTop: 10, 
      backgroundColor: "#E5E4E2",
      height: 40,
      borderRadius: 5,
      marginHorizontal: 15,
      flexDirection: "row",
      marginBottom: 10
  }, 
  inputStyle: {
    flex: 1,
    fontSize: 18,
    borderRadius: 5,
    backgroundColor:"#E5E4E2"
  },
  iconStlye: {
    fontSize: 35,
    alignSelf: "center",
    marginHorizontal: 15
  }
});
  