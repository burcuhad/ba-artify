import React from "react";  
import {Text, View, StyleSheet, TouchableOpacity, Image} from "react-native";

export default function QuizTemplate({home}) {

    if(home) {
        return (
            <View>
                <Image
                    style={styles.imageHome}
                    source={{uri: "https://duquets.files.wordpress.com/2011/12/art-history-collage.jpg"}}
                />
            </View>
        );
    }

    return (
        <View style = {styles.container}>
            <Text> Quiz Template Single Question Vew </Text>
        </View>
      );
};


const styles = StyleSheet.create({
    container: {
        paddingTop: 40
    },     
    imageHome: {
        alignself:"center",
        width: '100%',
        height: undefined,
        aspectRatio: 1,
        borderRadius: 4,
        marginVertical: 10
    },
});