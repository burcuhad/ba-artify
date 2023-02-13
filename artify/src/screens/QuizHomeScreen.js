import React, { useState, useEffect } from "react";  
import {Text, View, Image, Button, TouchableOpacity, StyleSheet} from "react-native";
import QuizTemplate from "../components/QuizTemplate"
import {getQuizData,addQuestions} from "../hooks/dto"


export default function QuizHomeScreen({navigation}) {

    const [allQuestions, setQuestions] = useState([]);


    useEffect( () => {
        const fetchQuestions = async() => {
            setQuestions(await getQuizData());
        }
        fetchQuestions()
    }, []);

    return (
        <View style = {styles.container}>
            <Text style={styles.text} >
                Test what you've learned!
            </Text>
            <View style= {styles.insideContainer}>
                <Image
                    style={styles.imageHome}
                    //source={{uri: "https://duquets.files.wordpress.com/2011/12/art-history-collage.jpg"}}
                    source={require('../image/artist.png')}
                    //source={require('../image/burnout2.png')}
                />   
            </View>
            <TouchableOpacity 
                style= {styles.button} 
                onPress={() => {navigation.navigate("QuizQuestion", {
                    allQuestions : allQuestions,
                    currentQuestionIndex: 0,
                    correctAnswersCount: 0
                })}}>
                <Text style = {styles.buttonText}> Start</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        paddingHorizontal: 20,
        height: "100%"
    },
    insideContainer: {
        justifyContent: "center",
        alignItems:"center",
        flex: 1
    },
    imageHome: {
      alignself:"center",
      width: '100%',
      height: undefined,
      aspectRatio: 1,
      borderRadius: 4,
      marginBottom: 400
    },
    text: {
        alignSelf: "center",
        fontWeight: "bold",
        color: "#CB997E",
        fontSize: 20,
        marginBottom: 200
    },
    button: {
        alignSelf: "center",
        width: "100%",
        backgroundColor: "#6B705C",
        padding: 15,
        borderRadius: 14,
        marginBottom: 40
    },
    buttonText: {
        fontSize: 20,
        fontWeight: "600",
        color: "white"
    }
});