import React, { useState, useRef, useEffect } from "react";  
import {Image, View, StyleSheet, Button, TouchableOpacity, Text, Dimensions, SafeAreaView} from "react-native";
import { Camera } from 'expo-camera';
import { shareAsync } from 'expo-sharing';
import * as ImagePicker from 'expo-image-picker';
import * as MediaLibrary from 'expo-media-library'

export default function CameraScreen({route, navigation}) {
  const painting = route.params;
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [hasGalleryPermission, setHasGalleryPermission] = useState(null);
  const [hasMediaLibraryPermission, setHasMediaLibraryPermission] = useState(null);
  const [cameraType, setCameraType] = useState(Camera.Constants.Type.back);
  const [photo, setPhoto] = useState(null);
  const [deneme, setDeneme] = useState(null);

  const [isPreview, setIsPreview] = useState(false);
  const [isCameraReady, setIsCameraReady] = useState(false);
  const [isGalleryReady, setIsGalleryReady] = useState(false);
  const cameraRef = useRef();

  const permisionFunction = async () => {
    const cameraPermission = await Camera.requestCameraPermissionsAsync();
    setHasCameraPermission(cameraPermission.status === 'granted');

    const galleryPermission = await ImagePicker.requestMediaLibraryPermissionsAsync();
    setHasGalleryPermission(galleryPermission.status === 'granted');

    const mediaLibraryPermission = await MediaLibrary.requestPermissionsAsync();
    setHasMediaLibraryPermission(mediaLibraryPermission.status === 'granted');

    //console.log("First img perm: " + galleryPermission.status + ", camera perm: " + cameraPermission.status);
    if (galleryPermission.status !== 'granted' && cameraPermission.status !== 'granted') {
      alert('Permission for media access needed.');
    }
  };
  
  useEffect(() => {
      permisionFunction();
  }, []);

  const takePicture = async () => {
    if (cameraRef.current) {
      const options = { quality: 0.5, base64: true, exif: false, skipProcessing: true };
      const data = await cameraRef.current.takePictureAsync(options);
      const source = data.uri;
      setPhoto(data);
      setDeneme("data:image/jpg;base64," + data.base64);
      /*if (source) {
        await cameraRef.current.pausePreview();
        setIsPreview(true);
      }      */
    }   
  };


    


  const onCameraReady = () => {
    setIsCameraReady(true);
  };

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
  console.log("hasMediaLibraryPermission: " + hasMediaLibraryPermission + ", gallery permission: " + hasGalleryPermission + ", camera perm: " + hasCameraPermission)

  const cancelPreview = async () => {
    await cameraRef.current.resumePreview();
    setIsPreview(false);
  };

  const renderCancelPreviewButton = () => (
    <View style={styles.controlForUpload}>
      <TouchableOpacity onPress={cancelPreview} style={styles.closeButton}>
        <View style={[styles.closeCross, { transform: [{ rotate: "45deg" }] }]} />
        <View style={[styles.closeCross, { transform: [{ rotate: "-45deg" }] }]} />
      </TouchableOpacity>
      <TouchableOpacity onPress={upload}>
        <Text style={styles.text}>{"Upload"}</Text>
      </TouchableOpacity>
    </View>    
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
        style={styles.captureButton}
      />
    </View>
  );

  if (hasCameraPermission === null) {
    return <View />;
  }
  if (hasCameraPermission === false) {
    return <Text style={styles.text}> No access to camera</Text>;
  }

  if(photo) {
    const sharePhoto = () => {
      shareAsync(photo.uri).then(() => {
        setPhoto(undefined);
      })
    };

    const savePhoto = () => {
      MediaLibrary.saveToLibraryAsync(photo.uri).then(() => {
        setPhoto(undefined);
      })
    };
    return (
      <SafeAreaView style={styles.container}>
        <Image style={styles.previewImage} source={{ uri: "data:image/jpg;base64," + photo.base64 }} />
        
        <Button title="Share" onPress={sharePhoto}/>
        <Button title="Upload" onPress={() => navigation.navigate("Profile", {deneme})}/>
        {hasMediaLibraryPermission ? <Button title="Save in Camera Roll" onPress={savePhoto}/> : undefined}
        <Button title="Discard" onPress={() => setPhoto(undefined)}/>
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
        onCameraReady={onCameraReady}
        onMountError={(error) => {
          console.log("camera error", error);
        }}
      />
      <View style={styles.container}>
        {isPreview && renderCancelPreviewButton()}
        {!isPreview && renderCaptureControl()}
      </View>
    <Text> no img</Text>
    </View>

  </SafeAreaView>
  );
  }

  const WINDOW_HEIGHT = Dimensions.get("window").height;
  const closeButtonSize = Math.floor(WINDOW_HEIGHT * 0.032);
  const captureSize = Math.floor(WINDOW_HEIGHT * 0.09);
   
const styles = StyleSheet.create({
  container: {
    /*flex: 1,
     alignItems: "center",
    justifyContent: "center"*/
      ...StyleSheet.absoluteFillObject,
  },
  cameraview: {
    height: 400,
    width: "95%",

    backgroundColor: "green",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center"
  },
  previewImage: {
    alignSelf: "stretch",
    flex: 1
    /*height: "90%",
    width: "90%",
    padding: 10*/
  },
  camera: {
    height: "95%",
    width: "95%",
    backgroundColor: "blue",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center"
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
  controlForUpload: {
    position: "relative",
    flexDirection: "row",
    top: 38,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  control: {
    position: "absolute",
    flexDirection: "row",
    bottom: 38,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  captureButton: {
    backgroundColor: "#f5f6f5",
    borderRadius: 5,
    height: captureSize,
    width: captureSize,
    borderRadius: Math.floor(captureSize / 2),
    marginHorizontal: 31,
  },
  text: {
    color: "#fff",
  },
});