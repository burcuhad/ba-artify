import React from "react";  
import {Text, View, StyleSheet, ScrollView} from "react-native";
import YoutubePlayer from 'react-native-youtube-iframe';
import WebView from "react-native-webview";
import ResultsDetail from "../components/ResultsDetail";

export default function TutorialScreen({route, navigation}) {
    const painting = route.params;


    return (
        <View style = {styles.container}>
            <ResultsDetail result={painting.item} list={true}/>

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