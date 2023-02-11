
import { addDoc, collection, setDoc } from "firebase/firestore"; 
import { getFirestore } from 'firebase/firestore'
import { v4 as uuidv4 } from 'uuid';

export default function dto() {
    const insert = async () => {
        const db = getFirestore();
        const docRef = await addDoc(collection(db, "test"), {
            name: "Tokyo",
            country: "Japan"
          });
          console.log("Document written with ID: ", docRef.id);
    }

    const selectPaintings = () => {
    
    }

  

// Get a list of cities from your database
    async function getCities() {
        
    }

    return [insert, selectPaintings];
}