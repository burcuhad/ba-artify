import React, { useState} from "react";  
import {Text, View, Image, Button, TouchableOpacity, StyleSheet} from "react-native";
import QuizTemplate from "../components/QuizTemplate"

export default function QuizHomeScreen({navigation}) {

    return (
        <View style = {styles.container}>
            <QuizTemplate home={true}/>
            <Button
                title="Start"
                onPress={() => {navigation.navigate("QuizQuestion")}}/>
              
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