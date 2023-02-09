import React, { useState, useRef, useEffect } from "react";  
import {Image, View, StyleSheet, Button, TouchableOpacity, Text, ScrollView, Dimensions, SafeAreaView} from "react-native";
import ResultsDetail from "../components/ResultsDetail";
import { launchCamera, launchImageLibrary } from "react-native-image-picker"
import { Camera } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';

export default function CameraScreen({route, navigation}) {
    const painting = route.params;
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [hasGalleryPermission, setHasGalleryPermission] = useState(null);
  const [cameraType, setCameraType] = useState(Camera.Constants.Type.back);

  const [isPreview, setIsPreview] = useState(false);
  const [isCameraReady, setIsCameraReady] = useState(false);
  const [isGalleryReady, setIsGalleryReady] = useState(false);
  const cameraRef = useRef();

  const permisionFunction = async () => {
    const cameraPermission = await Camera.requestCameraPermissionsAsync();
    setHasCameraPermission(cameraPermission.status === 'granted');

    const galleryPermission = await ImagePicker.requestMediaLibraryPermissionsAsync();
    setHasGalleryPermission(galleryPermission.status === 'granted');

    console.log("First img perm: " + galleryPermission.status + ", camera perm: " + cameraPermission.status);

    if (galleryPermission.status !== 'granted' && cameraPermission.status !== 'granted') {
      alert('Permission for media access needed.');
    }
  };
  
  useEffect(() => {
      permisionFunction();
  }, []);

  const onCameraReady = () => {
    setIsCameraReady(true);
  };
  
  const takePicture = async () => {
    if (cameraRef.current) {
      const options = { quality: 0.5, base64: true, skipProcessing: true };
      const data = await cameraRef.current.takePictureAsync(options);
      const source = data.uri;
      if (source) {
        await cameraRef.current.pausePreview();
        setIsPreview(true);
        console.log("picture: ", source);
        console.log("picture: ", source.uri);

      }
    }
  }

  const switchCamera = () => {
    if (isPreview) {
      return;
    }
    setCameraType((prevCameraType) =>
    prevCameraType === Camera.Constants.Type.back
           ? Camera.Constants.Type.front
           : Camera.Constants.Type.back
    );
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

  if(hasGalleryPermission === false ) {
    return <Text> No access to internal storage</Text>
  }
  console.log("gallery permission: " + hasGalleryPermission + ", camera perm: " + hasCameraPermission)

  const cancelPreview = async () => {
    await cameraRef.current.resumePreview();
    setIsPreview(false);
  };

  const renderCancelPreviewButton = () => (
    <TouchableOpacity onPress={cancelPreview} style={styles.closeButton}>
      <View style={[styles.closeCross, { transform: [{ rotate: "45deg" }] }]} />
      <View style={[styles.closeCross, { transform: [{ rotate: "-45deg" }] }]} />
    </TouchableOpacity>
  );

  const renderCaptureControl = () => (
    <View style={styles.control}>
      <TouchableOpacity disabled={!isCameraReady} onPress={switchCamera}>
        <Text style={styles.text}>{"Flip"}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.7}
        disabled={!isCameraReady}
        onPress={takePicture}
        style={styles.capture}
      />
    </View>
  );

  if (hasCameraPermission === null) {
    return <View />;
  }
  if (hasCameraPermission === false) {
    return <Text style={styles.text}> No access to camera</Text>;
  }

  return (
  <SafeAreaView style={styles.container}>
    <Camera
      ref={cameraRef}
      style={styles.container}
      type={cameraType}
      flashMode={Camera.Constants.FlashMode.off}
      onCameraReady={onCameraReady}
      onMountError={(error) => {
        console.log("camera error", error);
      }}
    />
    <View style={styles.container}>
      {isPreview && renderCancelPreviewButton()}
      {!isPreview && renderCaptureControl()}
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
    media: {
       ...StyleSheet.absoluteFillObject,
     },
    closeCross: {
    width: "68%",
    height: 1,
    backgroundColor: "black",
     },
    control: {
    position: "absolute",
    flexDirection: "row",
    bottom: 38,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
     },
    capture: {
    backgroundColor: "#f5f6f5",
    borderRadius: 5,
    height: captureSize,
    width: captureSize,
    borderRadius: Math.floor(captureSize / 2),
    marginHorizontal: 31,
     },
    recordIndicatorContainer: {
    flexDirection: "row",
    position: "absolute",
    top: 25,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
    opacity: 0.7,
     },
    recordTitle: {
    fontSize: 14,
    color: "#ffffff",
    textAlign: "center",
     },
    recordDot: {
    borderRadius: 3,
    height: 6,
    width: 6,
    backgroundColor: "#ff0000",
    marginHorizontal: 5,
     },
    text: {
    color: "#fff",
     },
});