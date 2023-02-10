import React, { useState} from "react";
import {
    View,
    Button,
    Text,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
} from "react-native";

export default function ProfileScreen({route}) {
    //console.log("in profile: ", route.params)
    const loc = route.params
    return (
        <View>
            <Text> hello {loc} </Text>
        </View>
        
    );
};
   