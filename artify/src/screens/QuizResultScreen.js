import React from "react";  
import {Text, View, StyleSheet, TouchableOpacity, Image} from "react-native";

export default function QuizResultScreen({route,navigation}) {
    const par = route.params

    return (
        <View style = {styles.container}>
            <Text style = {styles.title}>RESULTS </Text>
            <Text style={styles.scoreValue}> {par.correctAnswersCount} </Text>
            <View style={styles.insideContainer}>
                {(par.correctAnswersCount > 1) ? 
                <Image 
                    style={styles.imagePreview} 
                    source={require('../image/success.png')}
                    resizeMode="contain"  
                />
                : 
                <Image 
                    style={styles.imagePreview} 
                    source = {{uri: "https://cdni.iconscout.com/illustration/free/thumb/concept-about-business-failure-1862195-1580189.png"}} 
                    resizeMode="contain"
                />
                }
            </View>

            <View>
                <TouchableOpacity style={styles.button} onPress={() => {navigation.navigate("HomeGallery")}}>
                    <Text style={styles.buttonText}> GO TO HOME </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => {navigation.navigate("QuizHome")}}>
                    <Text style={styles.buttonText}> GO TO QUIZ </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        paddingHorizontal: 20,
        height: '100%',
    },
    insideContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
    },
    imagePreview: {
        height: 300,
        width: 300,
      },
      button: {
        width: '100%',
        backgroundColor: '#508CA4',
        padding: 16,
        borderRadius: 16,
        alignItems: 'center',
        marginBottom: 30,
      },
      title: {
        fontSize: 24,
        fontWeight:'800',
        alignSelf:'center'
      },
      buttonText: {
        fontSize: 18,
        fontWeight: '600',
        color: 'white',
      },
      scoreValue:{
        fontSize: 24,
        fontWeight:'800',
        alignSelf:'center'
      }
});