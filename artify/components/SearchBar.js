import React from "react";  
import {Text, View, TextInput, StyleSheet} from "react-native";



export default function SearchBar({term, onTermChange}) {
    return (
      <View style={styles.background}>
        <TextInput 
            placeholder="Filter"
            autoCapitalize = "none"
            autoCorrect = {false}
            value={term}
            onChangeText={newTerm => onTermChange(newTerm)}
        />
      </View>
    );
  }

const styles = StyleSheet.create({
    background: {
        backgroundColor: "#F0EEEE"
    }
});
  