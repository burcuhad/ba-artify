import React from "react";  
import {Text, View, StyleSheet, Button} from "react-native";
import ResultsDetail from "../components/ResultsDetail";

export default function ResultsPaintingShowScreen({route, navigation}) {
    const painting = route.params;
    //console.log(painting)

    return <View>
        <ResultsDetail result={painting.item} list={false}/>
        {painting.item.tutorial ? 
        
        <Button
            style = {styles.buttonStyle}
            title= "tutorial"
            onPress={() => navigation.navigate("Tutorial", {item : painting.item})}   
        /> 
        
        : null}
    </View>
};

const styles = StyleSheet.create({ 
    buttonStyle: {
        marginTop: 30, 
        backgroundColor: "#E5E4E2",
        height: 40,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: "row",
        marginBottom: 10
    }
});