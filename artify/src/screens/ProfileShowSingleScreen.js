import React, { useEffect,useState } from "react";
import {
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Alert
} from "react-native";

import { AntDesign } from '@expo/vector-icons';
import { shareAsync } from 'expo-sharing';
import { deletePhotoDB } from "../hooks/dto";

export default function ProfileShowSingleScreen({route, navigation}) {
  const painting = route.params;
  console.log("painting.item.imageUrl ", painting.item.imageUrl)

  const shareImage = () => {
    console.log("inside share ")
    shareAsync(painting.item.imageUrl);
  };

  const deleteImage = async() => {
    //Alert.alert("Delete this post from your profile?");
    await deletePhotoDB(painting.item.imageUrl)
  };

  return (
      <View style = {styles.container}>
        <Image
          //resizeMode={list ? undefined: "contain"}
          style={styles.imageSingle}
          source={{uri: painting.item.imageUrl}}
        />
        
          <View style={styles.control}>
            <AntDesign name="sharealt" size={24} color="black" 
              onPress={() => shareImage()} 
            />
            <AntDesign name="delete" size={24} color="black" 
              onPress={() => {
                deleteImage() 
                navigation.navigate("Profile") 
              }}
            />
          </View>
        </View>
    );
}
const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingHorizontal: 20
  },
  control: {
    marginBottom: 12,
    paddingHorizontal: 50,
    paddingVertical: 45,
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    flexDirection: "row"
  },
  containerImage: {
      resizeMode: "contain"
  },
  imageSingle: {
    alignself:"center",
    marginTop: 60,
    width: '100%',
    height: undefined,
    aspectRatio: 1,
    borderRadius: 4,
    marginBottom: 5,
  },
});