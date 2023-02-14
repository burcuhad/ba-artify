import { async } from "@firebase/util";
import { addDoc, deleteDoc, collection, setDoc ,getDocs, query, where} from "firebase/firestore"; 
import { getFirestore } from 'firebase/firestore'
import db from "../../firebaseConfig"

    /**
     * @returns all paintings from "paintings" collection in firebase database 
     */
    export async function getPaintings() {
        const db = getFirestore();

        const querySnapshot = await getDocs(collection(db, "paintings"));
        let allPaintings = []
        querySnapshot.forEach((doc) => {
            allPaintings.push(doc.data())
        });
        //console.log(allPaintings)
       return allPaintings;
    }
    
    /**
     * 
     * @param {*} userId 
     * @returns all camera captured paintings from the given user
     */
    export async function getCapturedUserProfilePaintings(userId) {
        const db = getFirestore();
        const q = query(collection(db, "savedPhotos"), where("user_id", "==", userId));
        const querySnapshot = await getDocs(q);

        let profilePaintings = []
        querySnapshot.forEach((doc) => {
          profilePaintings.push(doc.data());
        });
        return profilePaintings;
    }

    export function getReferencePainting(paintigName) {
        const db = getFirestore();
        const q = query(collection(db, "paintings"), where("name", "==", paintigName));
        return  getDocs(q).then(
            quer =>{
                const b = []
                quer.forEach((doc) => {
                    const a = {painting_name: doc.data().name,imageUrl: doc.data().imageUrl} 
                    b.push(a)
                });
                return b[0]
            }
        );
    }

    /**
     * saves user captured photo to "savedPhotos" collection in firebase database
     * @param {*} uri is the location of the camera captured photo on the phone 
     * @param {*} paintingName is the original name of the painting that is captured 
     * @param {*} userId 
     */
    export function savePhotoDB(uri, paintingName, userId) {
        const db = getFirestore();
        
        addDoc(collection(db, "savedPhotos"), {
            imageUrl: uri,
            painting_name: paintingName,
            user_id: userId,  
        });   
    }
    
    /**
     * deletes captured photo from the "savedPhotos" collection in database and from the user profile
     * @param {*} imageUrl is the location of the photo on the phone to be deleted
     */
    export async function deletePhotoDB(imageUrl) {
        const db = getFirestore();

        const d = query(collection(db, "savedPhotos"), where("imageUrl", "==", imageUrl));
        const docSnap = await getDocs(d);

        docSnap.forEach((doc) => {
            deleteDoc(doc.ref).then(() => {
                console.log("Entire Document has been deleted successfully.")
            }).catch(error => {
                console.log("error with delete ", error );
            });
        });
    }

    /**
     *     * adds quiz test questions to firebase database to "questions" collection
     */
    export function setQuizData() {
        const db = getFirestore();
        const questions = [
            {
                q: "Which art movement has artist Edvard Munch's famous art The Scream influenced?",
                imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Edvard_Munch%2C_1893%2C_The_Scream%2C_oil%2C_tempera_and_pastel_on_cardboard%2C_91_x_73_cm%2C_National_Gallery_of_Norway.jpg/1920px-Edvard_Munch%2C_1893%2C_The_Scream%2C_oil%2C_tempera_and_pastel_on_cardboard%2C_91_x_73_cm%2C_National_Gallery_of_Norway.jpg",
                o_1 : "Symbolism",
                o_2 : "Expressionism",
                o_3 : "Baroque",
                o_4 : "Cubism",
                a : "Expressionism"
            },
            {
                q: "The Night Watch is one of the most famous Baroque, Dutch Golden Age paintings. Who is the artist of this work?",
                imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/The_Night_Watch_-_HD.jpg/1200px-The_Night_Watch_-_HD.jpg",
                o_1 : "Dirck Hals",
                o_2 : "Jan de Bray",
                o_3 : "Rembrandt van Rijn",
                o_4 : "Aert de Gelder",
                a : "Rembrandt van Rijn"
            },
            {
                q: "Which of the following artists is not know for their work in Neo-Impressionism paintings?",
                imageUrl: "https://upload.wikimedia.org/wikipedia/commons/e/ee/Paul_Signac_-_Capo_di_Noli.jpg",
                o_1 : "Henri Matisse",
                o_2 : "George Seurat",
                o_3 : "Paul Signac",
                o_4 : "Sandro Boticelli",
                a : "Sandro Boticelli"
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

    /**
     * @returns the quiz questions from the "questions" collection from firebase database
     */
    export async function getQuizData() {
        const db = getFirestore();

        const querySnapshot = await getDocs(collection(db, "questions"));
        let allQuestions = []
        querySnapshot.forEach((doc) => {
            allQuestions.push(doc.data())
        });
        //console.log(allPaintings)
        return allQuestions;
    }