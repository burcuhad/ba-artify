import React, { useEffect,useState } from "react";
import {
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Alert
} from "react-native";

import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
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

  const AsyncAlert = (title, msg) => new Promise((resolve) => {
    Alert.alert(
      title,
      msg,
      [
        {
          text: 'ok',
          onPress: () => {
            resolve('YES');
          },
        },
      ],
      { cancelable: false },
    );
  })

  const deleteImage = async() => {
    //Alert.alert("Delete this post from your profile?");
    await AsyncAlert()
    await deletePhotoDB(painting.item.imageUrl)
  };

  return (
      <View style = {styles.container}>
        <Image
          //resizeMode={list ? undefined: "contain"}
          style={styles.imageSingle}
          source={{uri: painting.item.imageUrl}}
        />
        
        {painting.item.user_id ? 
          <View style={styles.control}>
            <FontAwesome5 name="share-alt" size={24} color="black" 
              onPress={() => shareImage()} 
            />
            <Ionicons name="ios-trash-bin-sharp" size={24} color="black" 
              onPress={() => {
                deleteImage() 
                navigation.navigate("Profile") 
              }}
            />
          </View>
        : null}
        </View>
    );
}
const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  control: {
    marginTop: 20,
    marginBottom: 12,
    paddingHorizontal: 50,
    padding: 20,
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    backgroundColor: "#E5E4E2",
    borderRadius: 15,
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