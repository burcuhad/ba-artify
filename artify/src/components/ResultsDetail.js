import React from "react";  
import {Text, View, StyleSheet, FlatList, Image} from "react-native";

export default function ResultsDetail({result, list}) {
    return (
      <View style = {styles.container}>
        <Image
          //resizeMode={list ? undefined: "contain"}
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
    paddingTop: 20,
    paddingHorizontal: 20
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
  },
  name: {
    fontWeight: "bold",
    fontSize: 16
  }
});