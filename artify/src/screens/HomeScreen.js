import React, {useState} from "react";  
import {Text, View, StyleSheet, Button, FlatList, Image, ScrollView} from "react-native";
import SearchBar from "../components/SearchBar";
import useResultPaintings from "../hooks/useResultPaintings";
import ResultPaintingsList from "../components/ResultPaintingsList";

export default function HomeScreen({navigation}) {
  const [term, setTerm] = useState("");
  const [getDataApi, results, errorMessage] = useResultPaintings();

  const filterResultsByCategory = (category) => {
    return results.filter(result => {
      return result.category === category;
    });
  };
  
  return (
    <>
      <SearchBar 
        term = {term} 
        onTermChange = {newTerm => setTerm(newTerm)} 
        onTermSubmit = {() => getDataApi(term)}
      />
      {errorMessage ? <Text> {errorMessage} </Text> : null}

      <ScrollView style= {{marginBottom: 20}}>
        <ResultPaintingsList  
          results = {filterResultsByCategory("Expressionism")} 
          title="Expressionism"
          navigation={navigation}
        />
        <ResultPaintingsList  
          results = {filterResultsByCategory("Baroque")} 
          title="Baroque"
          navigation={navigation}
        />
        <ResultPaintingsList  
          results = {filterResultsByCategory("Symbolism")} 
          title="Symbolism"
          navigation={navigation}
        />
        <ResultPaintingsList  
          results = {filterResultsByCategory("Renaissance")} 
          title="Renaissance"
          navigation={navigation}
        />
        <ResultPaintingsList  
          results = {filterResultsByCategory("Neo-Impressionism")} 
          title="Neo-Impressionism"
          navigation={navigation}
        />
      </ScrollView>
    </>

  );
};


  

