import React, { useState, useEffect } from "react";  
import {Text, View, Image, Button, TouchableOpacity, StyleSheet} from "react-native";
import {getQuizData, setQuizData} from "../hooks/dto"

export default function QuizHomeScreen({navigation}) {
    const [allQuestions, setQuestions] = useState([]);

    useEffect( () => {
        //setQuizData()
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
                <Text style = {styles.buttonText}> START</Text>
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
        width: '100%',
        backgroundColor: '#508CA4',
        padding: 16,
        borderRadius: 16,
        alignItems: 'center',
        marginBottom: 30,
    },
    buttonText: {
        fontSize: 20,
        fontWeight: "600",
        color: "white"
    }
});