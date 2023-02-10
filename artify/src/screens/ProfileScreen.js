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
    const loc = route.params.name
    return (
        <View>
            <Text> hello {loc} </Text>
        </View>
        
    );
};
   