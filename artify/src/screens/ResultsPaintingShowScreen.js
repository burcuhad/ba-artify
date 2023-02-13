import React, { useState, useRef, useEffect } from "react";  
import {Image, View, StyleSheet, Button, TouchableOpacity, Text, ScrollView, SafeAreaView} from "react-native";
import ResultsDetail from "../components/ResultsDetail";

export default function ResultsPaintingShowScreen({route, navigation}) {
  const painting = route.params;

  return (
  <ScrollView style= {styles.container}>
    <ResultsDetail result={painting.item} list={false}/>
    <View style = {styles.insideContainer}>
      {painting.item.info ? 
      <Text style = {styles.textStyle}>{painting.item.info} </Text>
      : null}
      {painting.item.tutorial ? 
          <TouchableOpacity 
            style = {styles.button} 
            onPress = {() => {navigation.navigate("Tutorial", {item : painting.item})}} >
            <Text style = {styles.buttonText}> Tutorial </Text>
        </TouchableOpacity>
      : null}
      <TouchableOpacity 
        style = {styles.button} 
        onPress = {() => {navigation.navigate("CameraScreen", {item : painting.item})}} >
        <Text style = {styles.buttonText}> Upload Your Drawing </Text>
      </TouchableOpacity>
    </View>

  </ScrollView>
  )};
  /*<Button title={'Gallery'} onPress={() => pickImage()} />*/

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingHorizontal: 20,
    height: "100%"
  },
  insideContainer: {
      justifyContent: "center",
      alignItems:"center",
      marginHorizontal: 15,
      flex: 1
  },
  textStyle: {
    fontSize: 15,
    marginTop: 20, 
    marginBottom: 10,
    marginHorizontal: 15,
    textAlign: "justify"
  },
  image: {
      marginVertical: 24,
      alignItems: 'center',
  }, container: {
      flex: 1,
  },
  fixedRatio: {
    flex: 1,
    aspectRatio: 1,
  },
  button: {
    alignSelf: "center",
    width: "100%",
    backgroundColor: "#6B705C",
    padding: 15,
    borderRadius: 14,
    marginBottom: 20,
    padding: 10,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "600",
    color: "white"
  }
});