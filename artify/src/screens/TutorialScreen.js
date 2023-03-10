import React from "react";  
import {View, StyleSheet} from "react-native";
import WebView from "react-native-webview";

export default function TutorialScreen({route}) {
    const painting = route.params;

    return (
        <View style = {styles.container}>
            <WebView
                style = {{  marginTop: 20, width: 320, height: 100 }}
                javaScriptEnabled = {true}
                domStorageEnabled = {true}
                source = {{ uri: painting.item.tutorial }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        marginTop: 20,
        marginBottom: 20
    }
});