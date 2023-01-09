import React, {useEffect, useState} from "react"; 
import ax from "../api/ax";

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
                      "category": "Renaissance"
                  },
                  {
                      "name": "The Creation of Adam",
                      "painter": "Michelangelo",
                      "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Michelangelo_-_Creation_of_Adam_%28cropped%29.jpg/405px-Michelangelo_-_Creation_of_Adam_%28cropped%29.jpg",
                      "category": "Renaissance"
                  },
                  {
                      "name": "The Birth of Venus",
                      "painter": "Sandro Botticelli",
                      "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Sandro_Botticelli_-_La_nascita_di_Venere_-_Google_Art_Project_-_edited.jpg/2880px-Sandro_Botticelli_-_La_nascita_di_Venere_-_Google_Art_Project_-_edited.jpg",
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
                      "category": "Baroque"
                  },
                  {
                      "name": "The Kiss",
                      "painter": "Gustav Klimt",
                      "imageUrl": "https://www.belvedere.at/sites/default/files/jart-images/_445339522104_2.jpg",
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