    var paintingsData = [
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
            "info": "The Last Supper is a mural painting by the Italian High Renaissance artist Leonardo da Vinci, dated to c. 1495–1498. The painting represents the scene of the Last Supper of Jesus with the Twelve Apostles, as it is told in the Gospel of John – specifically the moment after Jesus announces that one of his apostles will betray him.[1] Its handling of space, mastery of perspective, treatment of motion and complex display of human emotion has made it one of the Western world's most recognizable paintings and among Leonardo's most celebrated works. Some commentators consider it pivotal in inaugurating the transition into what is now termed the High Renaissance.",                
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
            "info": "Les Demoiselles d'Avignon (The Young Ladies of Avignon, originally titled The Brothel of Avignon)[2] is a large oil painting created in 1907 by the Spanish artist Pablo Picasso. Part of the permanent collection of the Museum of Modern Art in New York, it portrays five nude female prostitutes in a brothel on Carrer d'Avinyó, a street in Barcelona, Spain. Each figure is depicted in a disconcerting confrontational manner and none is conventionally feminine. The women appear slightly menacing and are rendered with angular and disjointed body shapes. The far left figure exhibits facial features and dress of Egyptian or southern Asian style. The two adjacent figures are shown in the Iberian style of Picasso's native Spain, while the two on the right are shown with African mask-like features. The ethnic primitivism evoked in these masks, according to Picasso, moved him to \"liberate an utterly original artistic style of compelling, even savage force.\" In this adaptation of primitivism and abandonment of perspective in favor of a flat, two-dimensional picture plane, Picasso makes a radical departure from traditional European painting. This proto-cubist work is widely considered to be seminal in the early development of cubism and modern art.",    
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
            "info": "The Kiss (in German Der Kuss) is an oil-on-canvas painting with added gold leaf, silver and platinum by the Austrian Symbolist painter Gustav Klimt. It was painted at some point in 1907 and 1908, during the height of what scholars call his 'Golden Period'. It was exhibited in 1908 under the title Liebespaar (the lovers) as stated in the catalogue of the exhibition. The painting depicts a couple embracing each other, their bodies entwined in elaborate beautiful robes decorated in a style influenced by the contemporary Art Nouveau style and the organic forms of the earlier Arts and Crafts movement. The painting now hangs in the Österreichische Galerie Belvedere museum in the Belvedere, Vienna, and is considered a masterpiece of Vienna Secession (local variation of Art Nouveau) and Klimt's most popular work after Portrait of Adele Bloch-Bauer I. It is considered by many as a famous work of art.",
            "category": "Symbolism"
        },
        {
            "name": "The Night Watch",
            "painter": "Rembrandt van Rijn",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/The_Night_Watch_-_HD.jpg/1200px-The_Night_Watch_-_HD.jpg",
            "info": "The Night Watch (Dutch: De Nachtwacht), is a 1642 painting by Rembrandt van Rijn. It is in the collection of the Amsterdam Museum but is prominently displayed in the Rijksmuseum as the best-known painting in its collection. The Night Watch is one of the most famous Dutch Golden Age paintings. The painting is famous for three things: its colossal size (363 by 437 centimetres (12 by 14+1⁄2 feet)), the dramatic use of light and shadow (tenebrism) and the perception of motion in what would have traditionally been a static military group portrait. The painting was completed in 1642, at the peak of the Dutch Golden Age. It depicts the eponymous company moving out, led by Captain Frans Banninck Cocq (dressed in black, with a red sash) and his lieutenant, Willem van Ruytenburch (dressed in yellow, with a white sash). With effective use of sunlight and shade, Rembrandt leads the eye to the three most important characters among the crowd: the two men in the centre (from whom the painting gets its original title), and the woman in the centre-left background carrying a chicken. Behind them, the company's colours are carried by the ensign, Jan Visscher Cornelissen. The figures are almost life-size.        Rembrandt has displayed the traditional emblem of the arquebusiers in a natural way, with the woman in the background carrying the main symbols. She is a kind of mascot herself; the claws of a dead chicken on her belt represent the clauweniers (arquebusiers), the pistol behind the chicken represents clover and she is holding the militia's goblet. The man in front of her is wearing a helmet with an oak leaf, a traditional motif of the arquebusiers. The dead chicken is also meant to represent a defeated adversary. The colour yellow is often associated with victory.",
            "category": "Baroque"
        },
        {
            "name": "Viva la Vida, Watermelons",
            "painter": "Frida Kahlo",
            "imageUrl": "https://www.fridakahlo.org/images/paintings/viva-la-vida-watermelons.jpg",
            "info": "",    
            "category": "Symbolism"
        },
        {
            "name": "Delightful Land",
            "painter": "Paul Gauguin",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Paul_Gauguin_069.jpg/472px-Paul_Gauguin_069.jpg",
            "info": "In this print Gauguin reimagines the Biblical story of the Fall. Eve is now a native Tahitian woman, the Garden of Eden a lush tropical paradise, the devilish serpent a fantastical winged lizard, and the apple from the Tree of Knowledge an exotic flower from a peacock-like plant. The right-hand border of the print is patterned much like the carved house-posts that Gauguin encountered in Tahiti. Adding to the cultural mix, Gauguin based Eve's statuesque figure on photographs of sculpted frieze from a Javanese Buddhist temple. The composition derives from an earlier painting by the artist (1892; Ohara Museum of Art, Kurashiki, Japan) which he further reworked in a series of drawings and monotypes.",    
            "category": "Symbolism"
        },
        {
            "name": "Death and Life",
            "painter": "Gustav Klimt",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Death_and_Life_-_Gustav_Klimt.jpg/450px-Death_and_Life_-_Gustav_Klimt.jpg",
            "info": "Death and Life is an oil on canvas painting by Austrian painter Gustav Klimt. The painting was started in 1908 and completed in 1915. It is created in an Art Nouveau (Modern) style by use of allegorical painting genre during Golden phase. The painting measures 178 by 198 centimeters and is now housed at the Leopold Museum in Vienna.",    
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
            "info:": "Capo di Noli is an oil on canvas painting of 1898 by the French artist Paul Signac. It depicts a cape on the Italian Riviera, close to Genoa. Signac hiked there from Saint-Tropez two years before the painting was completed, and of his intentions he wrote he wanted to take every corner of the canvas to the absolute extreme in terms of colour ",
            "category": "Neo-Impressionism"
        },
        {
            "name": "A Sunday Afternoon on the Island of La Grande Jatte",
            "painter": "Georges Seurat",
            "tutorial": "https://www.youtube.com/watch?v=Sf0kZqQFZAw",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/A_Sunday_on_La_Grande_Jatte%2C_Georges_Seurat%2C_1884.jpg/1200px-A_Sunday_on_La_Grande_Jatte%2C_Georges_Seurat%2C_1884.jpg",
            "info": "A Sunday Afternoon on the Island of La Grande Jatte was painted from 1884 to 1886 and is Georges Seurat's most famous work. A leading example of pointillist technique, executed on a large canvas, it is a founding work of the neo-impressionist movement. Seurat's composition includes a number of Parisians at a park on the banks of the River Seine. It is in the collection of the Art Institute of Chicago.",    
            "category": "Neo-Impressionism"
        },
        {
            "name": "Portrait of Eduard Kosmack",
            "painter": "Egon Schiele",
            "imageUrl": "https://sammlung.belvedere.at/internal/media/dispatcher/94300/full",
            "info": "",    
            "category": "Expressionism"
        },
        {
            "name": "Composition 8",
            "painter": "Wassily Kandinsky",
            "imageUrl": "https://k2k6p3n8.stackpathcdn.com/wp-content/uploads/2019/12/Wassily-Kandinksy-Komposition-VIII-1923.webp",
            "info": "Kandinsky regarded Composition 8 as the high point of his postwar achievement. In this work circles, triangles, and linear elements create a surface of interacting geometric forms. The importance of circles in this painting foreshadows the dominant role they would play in many subsequent works.",
            "category": "Expressionism",
            "tutorial": "https://www.youtube.com/watch?v=KI-acYNqHa4"
        },
        {
            "name": "Sitting Woman with Legs Drawn Up",
            "painter": "Egon Schiele",
            "imageUrl": "https://www.egon-schiele.com/images/paintings/sitting-woman-with-legs-drawn-up.jpg",
            "info": "Seated Woman with Bent Knees is a 1917 painting in gouache, watercolor, and black crayon on paper by the Austrian Expressionist artist Egon Schiele. As its name suggests, the piece features a woman, depicted in a seated pose. Schiele's wife, Edith, served as the model for Seated Woman, which utilizes a limited color palette, empty background, and sharp, edgy lines. Like many of Schiele\'s other works, the piece employs a distinct style that subverts conventional representations of beauty and instead blends an ugly, distorted feeling with a sensual and erotic aesthetic. The piece is now in the National Gallery Prague, Czech Republic.",
            "category": "Expressionism"
        },
        {
            "name": "The Milkmaid",
            "painter": "Johannes Vermeer",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Johannes_Vermeer_-_Het_melkmeisje_-_Google_Art_Project.jpg/803px-Johannes_Vermeer_-_Het_melkmeisje_-_Google_Art_Project.jpg",
            "category": "Baroque",
            "info": "The Milkmaid, sometimes called The Kitchen Maid, is an oil-on-canvas painting of a \"milkmaid\", in fact, a domestic kitchen maid, by the Dutch artist Johannes Vermeer. It is now in the Rijksmuseum in Amsterdam, the Netherlands, which regards it as \"unquestionably one of the museum's finest attractions\". The exact year of the painting's completion is unknown, with estimates varying by source. The Rijksmuseum estimates it as circa 1658. According to the Metropolitan Museum of Art in New York City, it was painted in about 1657 or 1658. The \"Essential Vermeer\" website gives a broader range of 1658–1661.", 
        },
        {
            "name": "The Anatomy Lesson of Dr. Nicolaes Tulp",
            "painter": "Rembrandt van Rijn",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Rembrandt_-_The_Anatomy_Lesson_of_Dr_Nicolaes_Tulp.jpg/2560px-Rembrandt_-_The_Anatomy_Lesson_of_Dr_Nicolaes_Tulp.jpg",
            "category": "Baroque",
            "info": "The Anatomy Lesson of Dr. Nicolaes Tulp is a 1632 oil painting on canvas by Rembrandt housed in the Mauritshuis museum in The Hague, the Netherlands. The painting is regarded as one of Rembrandt's early masterpieces. In the work, Nicolaes Tulp is pictured explaining the musculature of the arm to a group of doctors. Some of the spectators are various doctors who paid commissions to be included in the painting. The painting is signed in the top-left hand corner Rembrandt. f[ecit] 1632. This may be the first instance of Rembrandt signing a painting with his forename (in its original form) as opposed to the monogram RHL (Rembrandt Harmenszoon of Leiden), and is thus a sign of his growing artistic confidence."

        }
    ];

        


    const addPaintings = () => {
        const db = getFirestore();
        for(var i = 0; i < paintingsData.length; ++i) {
            var onePainting = paintingsData[i];
            
            addDoc(collection(db, "paintings"), 
                onePainting  
            )
                console.log("one ", onePainting)
        }
    }