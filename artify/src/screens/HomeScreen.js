import React, { useState } from "react";  
import {Text, ScrollView} from "react-native";
import SearchBar from "../components/SearchBar";
import useResultPaintings from "../hooks/useResultPaintings";
import ResultPaintingsList from "../components/ResultPaintingsList";

export default function HomeScreen({navigation}) {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPaintings, getCurrentPaintings, errorMessage] = useResultPaintings();

  const filterResultsByCategory = (category) => {
    return currentPaintings.filter(result => {
      return result.category === category;
    });
  };
  
  return (
    <>
      <SearchBar 
        term = {searchTerm} 
        onTermChange = {newTerm => {setSearchTerm(newTerm); getCurrentPaintings(newTerm) }} 
        onTermSubmit = {() => getCurrentPaintings(searchTerm)}
      />
      {errorMessage ? <Text> {errorMessage} </Text> : null}

      {/** <Button title ="insert" onPress={() => insert() } /> */}  

      <ScrollView showsVerticalScrollIndicator={false} style= {{marginBottom: 20}}>
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


  

