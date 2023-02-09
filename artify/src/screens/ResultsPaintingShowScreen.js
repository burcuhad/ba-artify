import React, { useState, useRef, useEffect } from "react";  
import {Image, View, StyleSheet, Button, TouchableOpacity, Text, ScrollView, SafeAreaView} from "react-native";
import ResultsDetail from "../components/ResultsDetail";

export default function ResultsPaintingShowScreen({route, navigation}) {
  const painting = route.params;


  return (
    <ScrollView style= {{marginBottom: 20}}>
        <ResultsDetail result={painting.item} list={false}/>
        {painting.item.info ? 
        <Text style = {styles.textStyle}>{painting.item.info} </Text>
        : null}
        {painting.item.tutorial ? 
            <Button
                style = {styles.buttonStyle}
                title= "tutorial"
                onPress={() => navigation.navigate("Tutorial", {item : painting.item})}   
            /> 
        : null}
    <Text> Try now! </Text>
    <Button 
      title={'Upload Your Drawing'} 
      onPress={() => navigation.navigate("CameraScreen", {item : painting.item})} />
  </ScrollView>
  )};
  /*<Button title={'Gallery'} onPress={() => pickImage()} />*/

const styles = StyleSheet.create({ 
buttonStyle: {
  marginTop: 30, 
  backgroundColor: "#E5E4E2",
  height: 40,
  borderRadius: 5,
  marginHorizontal: 15,
  flexDirection: "row",
  marginBottom: 10
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
    flex: 0.1,
    padding: 10,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },

  
});