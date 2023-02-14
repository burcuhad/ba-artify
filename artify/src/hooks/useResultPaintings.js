import React, {useEffect, useState} from "react"; 
import { collection, getDocs } from "firebase/firestore";
import {getPaintings} from "./dto"; 
import dto from "../hooks/dto";

export default function useResultPaintings() {
    const [allPaintings, setAllPaintings] = useState([]);
    const [currentPaintings, setCurrentPaintings] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        initPaintings();
    }, []);

    const initPaintings = async() => {
        console.log("inside init paintings in useResultPaintings")
        const a = await getPaintings()
        setAllPaintings(a);
        setCurrentPaintings(a);
    }
    
    const getCurrentPaintings = searchTerm => {
        console.log("hi")

        if (searchTerm == null || searchTerm == ""){
            setCurrentPaintings(allPaintings);
        } else {
            setCurrentPaintings(allPaintings.filter(item => {
            console.log("item.name" +item.name);
            return item.name.toLowerCase().includes(searchTerm.toLowerCase())
            || item.painter.toLowerCase().includes(searchTerm.toLowerCase());
            }))
        }
    };

  return [currentPaintings, getCurrentPaintings, errorMessage];
};