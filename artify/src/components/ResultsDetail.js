import React from "react";  
import {Text, View, StyleSheet, Image} from "react-native";

export default function ResultsDetail({result, list}) {
    return (
      <View style = {styles.container}> 
        <Image
          style={list ? styles.imageList: styles.imageSingle}
          source={{uri: result.imageUrl}}
        />
        <View 
        style={list ? styles.textContainer: styles.textContainerSingle} >
          <View style = {styles.paintingTextContainer}>
            <Text 
              //numberOfLines={1}
              //adjustsFontSizeToFit={true} 
              style = {styles.name}
            >{result.name}</Text>
          </View>
          <Text>{result.painter}</Text>
        </View>

      </View>
    );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 5,
    paddingHorizontal: 15,
  },
  imageContainer: {
    width: 250,
  },  
  textContainer: {
    width: 250,
  },
  textContainerSingle: {
    //width: 250,
  },
  paintingTextContainer: {
    //height: 30,
  },
  imageList: {
    width: 250,
    height: 200,
    borderRadius: 4,
    marginBottom: 5,
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