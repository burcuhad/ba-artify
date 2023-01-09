import React, {useEffect, useState} from "react"; 
import ax from "../api/ax";

export default function useResultPaintings() {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const getDataApi = async searchTerm => {
        console.log("hi")
        try {
            const response = await ax.get("/paintings", {params: {name: searchTerm}}).catch();
            console.log(response.data);
            setResults(response.data);
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