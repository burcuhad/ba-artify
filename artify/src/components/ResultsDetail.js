import React from "react";  
import {Text, View, StyleSheet, FlatList, Image} from "react-native";

export default function ResultsDetail({result, list}) {

    return (
        <View style = {styles.container}>
          <Image
            style={list ? styles.imageList: styles.imageSingle}
            source={{uri: result.imageUrl}}
          />
          <Text style = {styles.name}> {result.name} </Text>
          <Text > {result.painter} </Text>
        </View>
      );
};


const styles = StyleSheet.create({
    container: {
        marginLeft: 15,
        marginRight: 15
    },
    imageList: {
        width: 250,
        height: 200,
        borderRadius: 4,
        marginBottom: 5
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