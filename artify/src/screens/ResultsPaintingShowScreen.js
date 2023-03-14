import React, { useState, useRef, useEffect } from "react";  
import {Image, View, StyleSheet, Button, TouchableOpacity, Text, ScrollView, SafeAreaView} from "react-native";
import ResultsDetail from "../components/ResultsDetail";

export default function ResultsPaintingShowScreen({route, navigation}) {
  const painting = route.params;

  return (
  <View style = {styles.container}>
      <ResultsDetail result={painting.item} list={false}/>
      <ScrollView style = {styles.infoContainer}>
        {painting.item.info ? 
        <Text style = {styles.infoTextStyle}>{painting.item.info} </Text>
        : null}
      </ScrollView>
    
      {painting.item.tutorial ? 
        <TouchableOpacity 
          style = {styles.buttonStyle} 
          onPress = {() => {navigation.navigate("Tutorial", {item : painting.item})}} >
          <Text style = {styles.buttonText}> Tutorial </Text>
        </TouchableOpacity>
      : null}
        <TouchableOpacity 
          style = {styles.buttonStyle} 
          onPress = {() => {navigation.navigate("CameraScreen", {item : painting.item})}} >
          <Text style = {styles.buttonText}> Upload Your Drawing </Text>
        </TouchableOpacity>
    
  </View>
  )};
  /*<Button title={'Gallery'} onPress={() => pickImage()} />*/

const styles = StyleSheet.create({
  container: {
    marginBottom: 15, 
    //backgroundColor : "red",
    flex:1
    //paddingTop: 20,
    //paddingHorizontal: 20,
    //height: "100%"
  },
  infoContainer: {
    //backgroundColor: "blue",
    paddingTop: 5,
    paddingHorizontal: 15,
    
    /*justifyContent: "center",
    alignItems:"center",
    marginHorizontal: 15,
    //flex: 1*/
  },
  infoTextStyle: {
     fontSize: 16,
     textAlign: 'justify'
    // marginTop: 20, 
    // marginBottom: 10,
    // marginHorizontal: 15,
    // textAlign: "justify"
  },
  image: {
    // marginVertical: 24,
    // alignItems: 'center',
  },
  fixedRatio: {
    //flex: 1,
    //aspectRatio: 1,
  },
  buttonContainer: {
    margin: 100,
    //backgroundColor: "green"
  },
  buttonStyle: {
    backgroundColor: "#6B705C",
    borderRadius: 14,
    marginVertical:3,
    marginHorizontal: 15,
    padding: 10,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "600",
    color: "white"
  }
});