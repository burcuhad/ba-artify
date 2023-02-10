import React from "react";  
import {Text, View, StyleSheet, TouchableOpacity, Image} from "react-native";

export default function QuizQuestionScreen({navigation}) {
        return (
            <View>
                <Text > q1</Text>
            </View>
        );

    };

    const styles = StyleSheet.create({
        container: {
            marginLeft: 15,
            marginRight: 15
        },
        imageSingle: {
          alignself:"center",
          width: '100%',
          height: undefined,
          aspectRatio: 1,
          borderRadius: 4,
          marginBottom: 5,
          marginRight: 10
      },
        name: {
            fontWeight: "bold",
            fontSize: 16
        }
    
    });