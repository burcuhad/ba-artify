import { toFormData } from "axios";
import React, { useState} from "react";  
import {Text, View, Image, FlatList, StyleSheet} from "react-native";
import useResultPaintings from "../hooks/useResultPaintings";

export default function QuizScreen({navigation}) {
    const [ items] = useResultPaintings();



    toFormData:/**
    Interview fragen erstellne und schicken 
    10 leute 
    jugendliche und jjunge erwaschene
    
    */
    
    console.log("111111111111 " + getMona)

   /* const getMona = (ml) =>  {
      return items.filter(item => {
        return item.name === ml;
      });
    };*/

    //console.log("111111111111 " + getMona("Mona Lisa").name)
    
    //source={{uri: getMona("Mona Lisa").imageUrl}}
    
    return (
        <View style = {styles.container}>
 
            <Text>
                Quiz Screen
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginLeft: 15,
        marginRight: 15
    },
    imageSingle: {
      alignself:"center",
      width: '100%',
      height: undefined,
      aspectRatio: 1,
      borderRadius: 4,
      marginBottom: 5,
      marginRight: 10
  },
    name: {
        fontWeight: "bold",
        fontSize: 16
    }

});