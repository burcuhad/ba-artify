import React, {useEffect, useState} from "react"; 
import { collection, getDocs } from "firebase/firestore";
import {getPaintings, setPaintings} from "./dto"; 
import dto from "../hooks/dto";

export default function useResultPaintings() {
    const [allPaintings, setAllPaintings] = useState([]);
    const [currentPaintings, setCurrentPaintings] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        addAllPaintings()
        initPaintings();
    }, []);

    const addAllPaintings = async() => {
        console.log("inside set paintings in useResult")
        setPaintings()
    }

    const initPaintings = async() => {
        console.log("inside init paintings in useResultPaintings")
        const allPaintings = await getPaintings()
        setAllPaintings(allPaintings);
        setCurrentPaintings(allPaintings);
    }
    
    const getCurrentPaintings = searchTerm => {
        if (searchTerm == null || searchTerm == "") {
            setCurrentPaintings(allPaintings);
        } else {
            setCurrentPaintings(allPaintings.filter(item => {
            console.log("item.name" + item.name);
            return item.name.toLowerCase().includes(searchTerm.toLowerCase())
            || item.painter.toLowerCase().includes(searchTerm.toLowerCase());
            }))
        }
    };

  return [currentPaintings, getCurrentPaintings, errorMessage];
};