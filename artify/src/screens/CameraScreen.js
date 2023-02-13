import React, { useState, useRef, useEffect } from "react";  
import {Text, Image, View, SafeAreaView, Button, TouchableOpacity,Dimensions, StyleSheet, Alert} from "react-native";
import { Camera } from 'expo-camera';
import { shareAsync } from 'expo-sharing';
import * as MediaLibrary from 'expo-media-library'
import {savePhotoDB} from "../hooks/dto";

export default function CameraScreen({route, navigation}) {
  const currentPainting = route.params.item;

  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [hasMediaLibraryPermission, setHasMediaLibraryPermission] = useState(null);

  const [cameraType, setCameraType] = useState(Camera.Constants.Type.back);
  const [photo, setPhoto] = useState(null);
  const cameraRef = useRef();


  const permisionFunction = async () => {
    const cameraPermission = await Camera.requestCameraPermissionsAsync();
    setHasCameraPermission(cameraPermission.status === 'granted');

    const mediaLibraryPermission = await MediaLibrary.requestPermissionsAsync();
    setHasMediaLibraryPermission(mediaLibraryPermission.status === 'granted');

    if (mediaLibraryPermission.status !== 'granted' && cameraPermission.status !== 'granted') {
      alert('Permission for media access needed.');
    }
  };
  
  useEffect(() => {
      permisionFunction();
  }, []);

  console.log("hasMediaLibraryPermission: " + hasMediaLibraryPermission + ", camera perm: " + hasCameraPermission)
  
  const switchCamera = () => {
    setCameraType((prevCameraType) =>
    prevCameraType === Camera.Constants.Type.back
           ? Camera.Constants.Type.front
           : Camera.Constants.Type.back
    );
  };

  const takePicture = async () => {
    if (cameraRef.current) {
      const options = { quality: 0.5, base64: true, exif: false, skipProcessing: true };
      const data = await cameraRef.current.takePictureAsync(options);
      setPhoto(data);
      console.log("takePictureAsync data: ", data.uri)
    }   
  };

  if(photo) {
    const sharePhoto = () => {
      shareAsync(photo.uri);
    };

    const savePhoto = async () => {
      await MediaLibrary.saveToLibraryAsync(photo.uri);
      
      Alert.alert("Saved in device camera roll!")
    };

    return (
      <SafeAreaView style={styles.container}>
        <Image style={styles.previewImage} source={{ uri: photo.uri }} />
        <Button title="Share" onPress={sharePhoto}/>
        <Button title="Upload" onPress={() => {
          navigation.navigate("Profile", photo)
          console.log(currentPainting)
          savePhotoDB(photo.uri, currentPainting.name, 1);
        }}/>
        {hasMediaLibraryPermission ? <Button title="Save in Camera Roll" onPress={savePhoto}/> : undefined}
        <TouchableOpacity onPress={() => setPhoto(undefined)} style={styles.closeButton}>
        <View style={[styles.closeCross, { transform: [{ rotate: "45deg" }] }]} />
        <View style={[styles.closeCross, { transform: [{ rotate: "-45deg" }] }]} />
      </TouchableOpacity>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Camera
          ref={cameraRef}
          style={styles.container}
          type={cameraType}
          flashMode={Camera.Constants.FlashMode.off}
          onMountError={(error) => {
            console.log("camera error", error);
          }}
        />
        <View style={styles.container}>
          <View style={styles.control}>
            <TouchableOpacity  onPress={switchCamera}>
              <Text style={styles.text}>{"Flip"}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={takePicture}
              style={styles.captureButton}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
    );
  }

const WINDOW_HEIGHT = Dimensions.get("window").height;
const closeButtonSize = Math.floor(WINDOW_HEIGHT * 0.032);
const captureSize = Math.floor(WINDOW_HEIGHT * 0.09);
   
const styles = StyleSheet.create({
  container: {
      ...StyleSheet.absoluteFillObject,
  },
  control: {
    position: "absolute",
    flexDirection: "row",
    bottom: 38,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  previewImage: {
    alignSelf: "stretch",
    flex: 1
  },
  captureButton: {
    backgroundColor: "#f5f6f5",
    borderRadius: 5,
    height: captureSize,
    width: captureSize,
    borderRadius: Math.floor(captureSize / 2),
    marginHorizontal: 31,
  },
  closeButton: {
    position: "absolute",
    top: 35,
    left: 15,
    height: closeButtonSize,
    width: closeButtonSize,
    borderRadius: Math.floor(closeButtonSize / 2),
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#c4c5c4",
    opacity: 0.7,
    zIndex: 2,
  },
  closeCross: {
    width: "68%",
    height: 1,
    backgroundColor: "black",
  },
  text: {
    color: "#fff",
  },
});