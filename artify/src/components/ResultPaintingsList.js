import React from "react";  
import {Text, View, StyleSheet, FlatList, Image, TouchableOpacity} from "react-native";
import ResultsDetail from "./ResultsDetail";


export default function ResultPaintingsList({ title, results, navigation }) {
    if (!results.length) {
        return null;
    }
    
    return (
        <View style = {styles.container}>
            <Text style={styles.title}> {title} </Text>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator = {false}
                data={results}
                keyExtractor={(painting) => painting.name}
                renderItem = {({item}) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate("ResultsShow", {item : item})}>                       
                            <ResultsDetail result={item} list={true}/>
                        </TouchableOpacity>
                    )
                }}
            />        
</View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 10
    },
    title: {
        fontSize: 18, 
        fontWeight: "bold",
        marginLeft: 15,
        marginBottom: 5
    }
});