import React, {useEffect, useState} from "react"; 
import ax from "../api/ax";

export default function useResultPaintings() {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const getDataApi = async searchTerm => {
        console.log("hi")
        try {
            const response = await ax.get("/paintings").catch();
            console.log(response.data);
            console.log(searchTerm);
            if (searchTerm == null || searchTerm == ""){
              setResults(response.data);
            }else{
              setResults(response.data.filter(item => {
                console.log("item.name" +item.name);
                return item.name.toLowerCase().includes(searchTerm.toLowerCase())
                || item.painter.toLowerCase().includes(searchTerm.toLowerCase());
              }))
            } 
        } catch(e) {
            console.log(e);
            setErrorMessage("Something went wrong");
        }
  };

  useEffect(() => {
    getDataApi();
  }, [])

  return [getDataApi, results, errorMessage];
};