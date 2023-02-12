import React , { useEffect } from "react";  
import {Text, View, StyleSheet, TouchableOpacity, Image} from "react-native";
import QuizTemplate from "../components/QuizTemplate"
import dto from "../hooks/dto";

export default function QuizQuestionScreen({navigation}) {
    
  const [insert, selectPaintings, getPaintings] = dto();

    const getQuiz = async() => {

    };

    useEffect(() => {
        getQuiz();
    }, []);

    return (
        <View style = {styles.container}>
            <Image
            style={styles.imageHome}
            source={{uri: "https://duquets.files.wordpress.com/2011/12/art-history-collage.jpg"}}
            />
            <View style={styles.containerTop}> 
                <Text style = {styles.question}> This the question </Text>
            </View>
            <View style = {styles.answerOptions}>
                <TouchableOpacity style = {styles.answerButton}> 
                    <Text style = {styles.answerOption}> Option 1 </Text>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.answerButton}> 
                    <Text style = {styles.answerOption}> Option 1 </Text>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.answerButton}> 
                    <Text style = {styles.answerOption}> Option 1 </Text>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.answerButton}> 
                    <Text style = {styles.answerOption}> Option 1 </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.containerBottom}>
                <TouchableOpacity style = {styles.button}> 
                    <Text style = {styles.buttonText}> Previous </Text>
                </TouchableOpacity>                
                <TouchableOpacity style = {styles.button}> 
                    <Text style = {styles.buttonText}> Next </Text>
                </TouchableOpacity>
                {/*<TouchableOpacity style = {styles.button}> 
                    <Text style = {styles.buttonText}> End </Text>
                </TouchableOpacity>*/}
            </View>
        </View> 
    );
};

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
        justifyContent: "space-between",
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
        backgroundColor: "#CB997E",
        paddingHorizontal: 12,
        borderRadius: 12,
        fontWeight: "400"
    },     
    button: {
        alignItems: "center",
        backgroundColor: "#6B705C",
        padding: 12,
        paddingHorizontal: 15,
        borderRadius: 14,
        marginBottom: 30
    },
    buttonText: {
        fontSize: 13,
        fontWeight: "600",
        color: "white"
    }
});