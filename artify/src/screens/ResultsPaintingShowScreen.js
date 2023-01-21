import React, { useState, useEffect } from "react";  
import {Image, View, StyleSheet, Button, TouchableOpacity, Text } from "react-native";
import ResultsDetail from "../components/ResultsDetail";
import { launchCamera, launchImageLibrary } from "react-native-image-picker"
import { Camera } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';

export default function ResultsPaintingShowScreen({route, navigation}) {
  const painting = route.params;
  const [cameraPermission, setCameraPermission] = useState(null);
  const [galleryPermission, setGalleryPermission] = useState(null);
  
  const [camera, setCamera] = useState(null);
  const [image, setImage] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  const permisionFunction = async () => {
    
    const cameraPermission = await Camera.requestCameraPermissionsAsync();
    setCameraPermission(cameraPermission.status === 'granted');

    const imagePermission = await ImagePicker.requestMediaLibraryPermissionsAsync();
    setGalleryPermission(imagePermission.status === 'granted');

    console.log("First img perm: " + imagePermission.status + ", camera perm: " + cameraPermission.status);

    if (imagePermission.status !== 'granted' && 
    cameraPermission.status !== 'granted') 
      {
        alert('Permission for media access needed.');
      }
  };
  useEffect(() => {
      permisionFunction();
  }, []);
  
  const takePicture = async () => {
    if (camera) {
      const data = await camera.takePictureAsync(null);
      console.log(data.uri);
      setImage(data.uri);
    }
  };
  
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets);
    }

  };

  if(galleryPermission === false ) {
    return <Text> No access to internal storage</Text>
  }
  console.log("img permission: " + galleryPermission + ", camera perm: " + cameraPermission)

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ResultsDetail result={painting.item} list={false}/>
        {painting.item.tutorial ? 
            <Button
                style = {styles.buttonStyle}
                title= "tutorial"
                onPress={() => navigation.navigate("Tutorial", {item : painting.item})}   
            /> 
        : null}
      <View style={styles.cameraContainer}>
        <Camera
          ref={(ref) => setCamera(ref)}
          style={styles.fixedRatio}
          type={type}
          ratio={'1:1'}
        />
      </View>
    <Button title={'Take Picture'} onPress={takePicture} />
    <Button title={'Gallery'} onPress={() => pickImage()} />
    {image && <Image source={{ uri: image }} style={{ flex: 1/2 }} />}
    <Text> Here </Text>
  </View>
  )};
  

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
image: {
    marginVertical: 24,
    alignItems: 'center',
}, container: {
    flex: 1,
  },
  cameraContainer: {
    flex: 1,
    flexDirection: 'row',
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