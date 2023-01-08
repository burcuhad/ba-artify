import React, {useState} from "react";  
import {Text, View, StyleSheet, Button, FlatList, Image} from "react-native";
import ax from "../api/ax";
import SearchBar from "../components/SearchBar";



export default function HomeScreen() {
    const [term, setTerm] = useState("");
    const [results, setResults] = useState([]);

   const getDataApi = async () => {
    try{
        const resp = await ax.get("/paintings").catch();
        console.log(resp.data);
        setResults(resp.data);
    } catch( e) {
        console.log(e);
    }
    
    };

    return (
      <View>
        <SearchBar term = {term} onTermChange={newTerm => setTerm(newTerm)}/>
        <Text>Home Screen</Text>
        <Button
          onPress = { () => getDataApi()}
          title = "Go to Components"
        />
        <FlatList
        showsVerticalScrollIndicator = {false}
        keyExtractor={(painting) => painting.name}
        data = {results}
        renderItem = {({item}) => {
            return (
            <View>
            <Text> {item.name} + {item.painter} </Text>
            <Image
                style={{width: 50, height: 50}}
                source={{uri:item.imageUrl}}/>
            </View>
            
            );
        }}
        />
      </View>
    );
  }
  