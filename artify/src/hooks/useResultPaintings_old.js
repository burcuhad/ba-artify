import React, {useEffect, useState} from "react"; 
import ax from "../api/ax";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function useResultPaintings() {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const getDataApi = async searchTerm => {
        console.log("hi")
        try {
            /*const response = await ax.get("/paintings").catch();
            console.log(response.data);
            console.log(searchTerm);
            const data = response.data */

            const response = JSON.parse(String.raw`{
              "data": [
                {
                    "name": "Mona Lisa",
                    "painter": "Leonardo Da Vinci",
                    "imageUrl": "https://cdn.pariscityvision.com/library/image/5449.jpg",
                    "tutorial": "https://www.youtube.com/watch?v=5EnahZm9Cp8&t=391s",
                    "info": "The Mona Lisa is a half-length portrait painting by Italian artist Leonardo da Vinci. Considered an archetypal masterpiece of the Italian Renaissance, it has been described as the best known, the most visited, the most written about, the most sung about, the most parodied work of art in the world. The painting's novel qualities include the subject's enigmatic expression, the monumentality of the composition, the subtle modelling of forms, and the atmospheric illusionism.",
                    "category": "Renaissance"
                },
                {
                    "name": "The Creation of Adam",
                    "painter": "Michelangelo",
                    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Michelangelo_-_Creation_of_Adam_%28cropped%29.jpg/405px-Michelangelo_-_Creation_of_Adam_%28cropped%29.jpg",
                    "info": "The Creation of Adam (Italian: Creazione di Adamo) is a fresco painting by Italian artist Michelangelo, which forms part of the Sistine Chapel's ceiling, painted c. 1508–1512. It illustrates the Biblical creation narrative from the Book of Genesis in which God gives life to Adam, the first man. The fresco is part of a complex iconographic scheme and is chronologically the fourth in the series of panels depicting episodes from Genesis.The painting has been reproduced in countless imitations and parodies. Michelangelo's Creation of Adam is one of the most replicated religious paintings of all time.",
                    "category": "Renaissance"
                },
                {
                    "name": "The Birth of Venus",
                    "painter": "Sandro Botticelli",
                    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Sandro_Botticelli_-_La_nascita_di_Venere_-_Google_Art_Project_-_edited.jpg/2880px-Sandro_Botticelli_-_La_nascita_di_Venere_-_Google_Art_Project_-_edited.jpg",
                    "info": "The Birth of Venus (Italian: Nascita di Venere) is a painting by the Italian artist Sandro Botticelli, probably executed in the mid 1480s. It depicts the goddess Venus arriving at the shore after her birth, when she had emerged from the sea fully-grown (called Venus Anadyomene and often depicted in art). The painting is in the Uffizi Gallery in Florence, Italy.",
                    "category": "Renaissance"
                },
                {
                    "name": "The Last Supper",
                    "painter": "Leonardo Da Vinci",
                    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/%C3%9Altima_Cena_-_Da_Vinci_5.jpg/525px-%C3%9Altima_Cena_-_Da_Vinci_5.jpg",
                    "category": "Renaissance"
                },
                {
                    "name": "The Scream",
                    "painter": "Edvard Munch",
                    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Edvard_Munch%2C_1893%2C_The_Scream%2C_oil%2C_tempera_and_pastel_on_cardboard%2C_91_x_73_cm%2C_National_Gallery_of_Norway.jpg/1920px-Edvard_Munch%2C_1893%2C_The_Scream%2C_oil%2C_tempera_and_pastel_on_cardboard%2C_91_x_73_cm%2C_National_Gallery_of_Norway.jpg",
                    "tutorial": "https://www.youtube.com/watch?v=NpDm7iizAgg",
                    "info": "The Scream is a composition created by Norwegian artist Edvard Munch in 1893. The agonized face in the painting has become one of the most iconic images of art, seen as symbolizing the anxiety of the human condition. Munch's work, including The Scream, would go on to have a formative influence on the Expressionist movement.",
                    "category": "Expressionism"
                },
                {
                    "name": "Les Demoiselles d’Avignon",
                    "painter": "Pablo Picasso",
                    "year": 1907,
                    "imageUrl": "https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Les_Demoiselles_d%27Avignon.jpg/1920px-Les_Demoiselles_d%27Avignon.jpg",
                    "category": "Cubism"
                },
                {
                    "name": "Girl with a Pearl Earring",
                    "painter": "Johannes Vermeer",
                    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/1665_Girl_with_a_Pearl_Earring.jpg/800px-1665_Girl_with_a_Pearl_Earring.jpg",
                    "info": "Girl with a Pearl Earring is an oil painting by Dutch Golden Age painter Johannes Vermeer, dated c. 1665. Going by various names over the centuries, it became known by its present title towards the end of the 20th century after the earring worn by the girl portrayed there. The work has been in the collection of the Mauritshuis in The Hague since 1902 and has been the subject of various literary and cinematic treatments.",
                    "category": "Baroque"
                },
                {
                    "name": "The Kiss",
                    "painter": "Gustav Klimt",
                    "imageUrl": "https://www.belvedere.at/sites/default/files/jart-images/_445339522104_2.jpg",
                    "info": "The Kiss (in German Der Kuss) is an oil-on-canvas painting with added gold leaf, silver and platinum by the Austrian Symbolist painter Gustav Klimt. It was painted at some point in 1907 and 1908, during the height of what scholars call his 'Golden Period'. It was exhibited in 1908 under the title Liebespaar (the lovers) as stated in the catalogue of the exhibition. The painting depicts a couple embracing each other, their bodies entwined in elaborate beautiful robes decorated in a style influenced by the contemporary Art Nouveau style and the organic forms of the earlier Arts and Crafts movement. The painting now hangs in the Österreichische Galerie Belvedere museum in the Belvedere, Vienna, and is considered a masterpiece of Vienna Secession (local variation of Art Nouveau) and Klimt's most popular work after Portrait of Adele Bloch-Bauer I.[6] It is considered by many as a famous work of art.",
                    "category": "Symbolism"
                },
                {
                    "name": "The Night Watch",
                    "painter": "Rembrandt van Rijn",
                    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/The_Night_Watch_-_HD.jpg/1200px-The_Night_Watch_-_HD.jpg",
                    "category": "Baroque"
                },
                {
                    "name": "Viva la Vida, Watermelons",
                    "painter": "Frida Kahlo",
                    "imageUrl": "https://www.fridakahlo.org/images/paintings/viva-la-vida-watermelons.jpg",
                    "category": "Symbolism"
                },
                {
                    "name": "Delightful Land",
                    "painter": "Paul Gauguin",
                    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Paul_Gauguin_069.jpg/472px-Paul_Gauguin_069.jpg",
                    "category": "Symbolism"
                },
                {
                    "name": "Death and Life",
                    "painter": "Gustav Klimt",
                    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Death_and_Life_-_Gustav_Klimt.jpg/450px-Death_and_Life_-_Gustav_Klimt.jpg",
                    "category": "Symbolism"
                },
                {
                    "name": "Luxury, Calm and Pleasure",
                    "painter": "Henri Matisse",
                    "imageUrl": "https://upload.wikimedia.org/wikipedia/en/thumb/0/07/Matisse-Luxe.jpg/1090px-Matisse-Luxe.jpg?20130206194026",
                    "info": "Luxe, Calme et Volupté is a 1904 oil painting by the French artist Henri Matisse. Both foundational in the oeuvre of Matisse and a pivotal work in the history of art, Luxe, Calme et Volupté is considered the starting point of Fauvism. This painting is a dynamic and vibrant work created early on in his career as a painter. It displays an evolution of the Neo-Impressionist style mixed with a new conceptual meaning based in fantasy and leisure that had not been seen in works before.",
                    "category": "Neo-Impressionism"
                },
                {
                    "name": "Capo di Noli",
                    "painter": "Paul Signac",
                    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/e/ee/Paul_Signac_-_Capo_di_Noli.jpg",
                    "category": "Neo-Impressionism"
                },
                {
                    "name": "A Sunday Afternoon on the Island of La Grande Jatte",
                    "painter": "Georges Seurat",
                    "tutorial": "https://www.youtube.com/watch?v=Sf0kZqQFZAw",
                    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/A_Sunday_on_La_Grande_Jatte%2C_Georges_Seurat%2C_1884.jpg/1200px-A_Sunday_on_La_Grande_Jatte%2C_Georges_Seurat%2C_1884.jpg",
                    "category": "Neo-Impressionism"
                },
                {
                    "name": "Portrait of Eduard Kosmack",
                    "painter": "Egon Schiele",
                    "imageUrl": "https://sammlung.belvedere.at/internal/media/dispatcher/94300/full",
                    "category": "Expressionism"
                },
                {
                    "name": "Composition 8",
                    "painter": "Wassily Kandinsky",
                    "imageUrl": "https://k2k6p3n8.stackpathcdn.com/wp-content/uploads/2019/12/Wassily-Kandinksy-Komposition-VIII-1923.webp",
                    "category": "Expressionism",
                    "tutorial": "https://www.youtube.com/watch?v=KI-acYNqHa4"
                },
                {
                    "name": "Sitting Woman with Legs Drawn Up",
                    "painter": "Egon Schiele",
                    "imageUrl": "https://www.egon-schiele.com/images/paintings/sitting-woman-with-legs-drawn-up.jpg",
                    "category": "Expressionism"
                },
                {
                    "name": "The Milkmaid",
                    "painter": "Johannes Vermeer",
                    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Johannes_Vermeer_-_Het_melkmeisje_-_Google_Art_Project.jpg/803px-Johannes_Vermeer_-_Het_melkmeisje_-_Google_Art_Project.jpg",
                    "category": "Baroque"
                },
                {
                    "name": "The Anatomy Lesson of Dr. Nicolaes Tulp",
                    "painter": "Rembrandt van Rijn",
                    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Rembrandt_-_The_Anatomy_Lesson_of_Dr_Nicolaes_Tulp.jpg/2560px-Rembrandt_-_The_Anatomy_Lesson_of_Dr_Nicolaes_Tulp.jpg",
                    "category": "Baroque"
                }
              ]
          }`)
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