import { async } from "@firebase/util";import React , { useEffect, useState } from "react";  
import {Text, View, ScrollView, StyleSheet, TouchableOpacity, Image} from "react-native";

export default function QuizQuestionScreen({route, navigation}) {
    const [isAnsCorrect, setIsAnsCorrect] = useState(-1);
    const [selectedAnswer, setSelectedAnswer] = useState(0);

    const par = route.params
    const currentQuestion = par.allQuestions[par.currentQuestionIndex]

    const isAnswerCorrect = (a,b) => {
        console.log("answer", a,b)
        //if (isAnsCorrect === -1) {
            if (a === b ) {
                setIsAnsCorrect(1)
            } else {
                setIsAnsCorrect(0)
            }
        //}
    }
    useEffect( () => {
        setIsAnsCorrect(-1)
    }, []);

    console.log("isAns", isAnsCorrect)

    const change = (newAnswer) => {
       setSelectedAnswer(newAnswer);
    }

    return (
        <ScrollView style = {styles.container}>
            <Image
            style={styles.imageHome}
            source={{uri: currentQuestion.imageUrl }}
            />
            <View style={styles.containerTop}> 
                <Text style = {styles.question}> {currentQuestion.q} </Text>
            </View>
            <View style = {styles.answerOptions}>
                <TouchableOpacity
                    style = {selectedAnswer=== 1 ? styles.selectedAnswerButton : styles.answerButton} 
                    onPress={() =>{ isAnswerCorrect(currentQuestion.a, currentQuestion.o_1), change(1)  }}
                > 
                    <Text style = {styles.answerOption}> {currentQuestion.o_1} </Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style = {selectedAnswer=== 2 ? styles.selectedAnswerButton : styles.answerButton} 
                    onPress={() =>{ isAnswerCorrect(currentQuestion.a, currentQuestion.o_2), change(2)  }}
                > 
                    <Text style = {styles.answerOption}> {currentQuestion.o_2} </Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style = {selectedAnswer=== 3 ? styles.selectedAnswerButton : styles.answerButton} 
                    onPress={() =>{ isAnswerCorrect(currentQuestion.a, currentQuestion.o_3), change(3)  }}
                > 
                    <Text style = {styles.answerOption}> {currentQuestion.o_3} </Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style = {selectedAnswer=== 4 ? styles.selectedAnswerButton : styles.answerButton} 
                    onPress={() =>{ isAnswerCorrect(currentQuestion.a, currentQuestion.o_4), change(4)  }}
                > 
                    <Text style = {styles.answerOption}> {currentQuestion.o_4} </Text>
                </TouchableOpacity>
                <Text>Current correct {par.correctAnswersCount }</Text>
            </View>
            <View style={styles.containerBottom}>
                {/*<TouchableOpacity style = {styles.button}> 
                    <Text style = {styles.buttonText}> Previous </Text>
                </TouchableOpacity>   */}
                {((par.allQuestions.length -1) === par.currentQuestionIndex)
                    ?
                    <TouchableOpacity 
                        style = {styles.button}
                        onPress={() => {
                            navigation.navigate("QuizResult",{allQuestions: par.allQuestions, correctAnswersCount : par.correctAnswersCount})}
                        }
                    > 
                        <Text style = {styles.buttonText}> End </Text>
                    </TouchableOpacity>
                    :
                    <TouchableOpacity 
                        style = {styles.button}
                        onPress={() => {
                            setIsAnsCorrect(-1)
                            navigation.navigate("QuizQuestion", {
                            allQuestions : par.allQuestions,
                            currentQuestionIndex: par.currentQuestionIndex + 1,
                            correctAnswersCount: par.correctAnswersCount + isAnsCorrect
                        })}}
                    > 
                        <Text style = {styles.buttonText}> Next </Text>
                    </TouchableOpacity>
                }             
                
                {/**/}
            </View>
        </ScrollView> 
    );
};
//TODO when alle fragen sind fertig allQuestions.lengt-1 <= par.currentQuestionIndex
const styles = StyleSheet.create({
    container: {
        marginVertical: 20,
        padding: 12,
        height: "100%"
    },
    containerTop: {
        paddingVertical: 14,
    },    
    containerBottom: {
        marginBottom: 12,
        paddingVertical: 14,
        justifyContent: "flex-end",
        flexDirection: "row"
    },
    imageHome: {
        alignself:"center",
        width: '100%',
        height: undefined,
        aspectRatio: 1,
        borderRadius: 4,
    },
    question: {
        fontSize: 25
    },
    answerOptions: {
        paddingVertical: 14,
        flex: 1,
    }, 
    answerOption: {
        fontSize: 19,
        color: "white"
    },
    answerButton: {
        paddingVertical: 10,
        marginVertical: 2,
        backgroundColor: "#bdc9a3",
        paddingHorizontal: 12,
        borderRadius: 12,
        fontWeight: "400"
    },  
    selectedAnswerButton: {
        paddingVertical: 10,
        marginVertical: 2,
        backgroundColor: "#87A878",
        paddingHorizontal: 12,
        borderRadius: 12,
        fontWeight: "400"
    },   
    button: {
        alignItems: "center",
        backgroundColor: "#508CA4",
        padding: 15,
        paddingHorizontal: 25,
        borderRadius: 14,
        marginBottom: 30
    },
    buttonText: {
        fontSize: 13,
        fontWeight: "600",
        color: "white"
    }
});