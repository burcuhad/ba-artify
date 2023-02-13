import React from "react";  
import {Text, View, StyleSheet, TouchableOpacity, Image} from "react-native";

export default function QuizResultScreen({route,navigation}) {
    const par = route.params

    return (
        <View style = {styles.container}>
            <View>
                {
                (par.correctAnswersCount > 1) ?
                <Image source = {{uri: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Happy_face.svg"}} />
                :
                <Image source = {{uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Face-sad.svg/640px-Face-sad.svg.png"}} />
                }
            </View>
            <View>
                <Text>All done!</Text>
            </View>
            <View>
                <TouchableOpacity onPress={() => {navigation.navigate("HomeGallery")}}>
                    <Text> Back Home </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginLeft: 15,
        marginRight: 15
    }
});