
import { async } from "@firebase/util";
import { addDoc, collection, setDoc ,getDocs, query, where} from "firebase/firestore"; 
import { getFirestore } from 'firebase/firestore'

import db from "../../firebaseConfig"



    

    function insert () {
        const db = getFirestore();
        
    }


    export function savePhotoDB(uri, paintingName, userId) {
        const db = getFirestore();
        
        addDoc(collection(db, "savedPhotos"), {
            imageUrl: uri,
            painting_name: paintingName,
            user_id: userId,  
        })       
    }

    // Get a list of cities from your database
    export async function getPaintings () {
        const db = getFirestore();

        const querySnapshot = await getDocs(collection(db, "paintings"));
        let allPaintings = []
        querySnapshot.forEach((doc) => {
            allPaintings.push(doc.data())
        });
        //console.log(allPaintings)
       return allPaintings;
    }

    export async function selectProfilePaintings(userId) {
        const db = getFirestore();
        const q = query(collection(db, "savedPhotos"), where("user_id", "==", userId));
        const querySnapshot = await getDocs(q);

        let profilePaintings = []
        querySnapshot.forEach((doc) => {
          profilePaintings.push(doc.data());
        });
        return profilePaintings;
    }

    export function selectReferencePainting(paintigName) {
        const db = getFirestore();
        const q = query(collection(db, "paintings"), where("name", "==", paintigName));
        return  getDocs(q).then(
            quer =>{
                const b = []
                quer.forEach((doc) => {
                    const a = {painting_name: doc.data().name,imageUrl: doc.data().imageUrl } 
                    b.push(a)
                });
                return b[0]
            }
        );
    }
    export async function getQuizData(){
        const db = getFirestore();

        const querySnapshot = await getDocs(collection(db, "questions"));
        let allQuestions = []
        querySnapshot.forEach((doc) => {
            allQuestions.push(doc.data())
        });
        //console.log(allPaintings)
       return allQuestions;
    }

    export function addQuestions(){
        const db = getFirestore();
        const questions = [
            {
                q: "question1",
                imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Paul_Gauguin_069.jpg/472px-Paul_Gauguin_069.jpg",
                o_1 : "opt1",
                o_2 : "opt2",
                o_3 : "opt3",
                o_4 : "opt4",
                a : "opt2"
            },
            {
                q: "question2",
                imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Paul_Gauguin_069.jpg/472px-Paul_Gauguin_069.jpg",
                o_1 : "opt1",
                o_2 : "opt2",
                o_3 : "opt3",
                o_4 : "opt4",
                a : "opt3"
            },
            {
                q: "question3",
                imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Paul_Gauguin_069.jpg/472px-Paul_Gauguin_069.jpg",
                o_1 : "opt1",
                o_2 : "opt2",
                o_3 : "opt3",
                o_4 : "opt4",
                a : "opt4"
            }
        ]
        
        for(var i = 0; i < questions.length; ++i) {
            var oneQuestion = questions[i];
            
            addDoc(collection(db, "questions"), 
                oneQuestion  
            )
            console.log("one ", oneQuestion)
        }
    }


