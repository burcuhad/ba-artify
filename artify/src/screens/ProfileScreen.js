import React, { useEffect,useState } from "react";
import {
    View,
    Image,
    Text,
    FlatList,
    TouchableOpacity,
    StyleSheet
} from "react-native";
import { getCapturedUserProfilePaintings, getReferencePainting, getPaintings } from "../hooks/dto"; 

export default function ProfileScreen({navigation}) {
    const [allUserProfilePaintings, setAllUserProfilePaintings] = useState([]);
    const [allPaintings, setAllPaintings] = useState([]);

    useEffect(() => {
        console.log("profile useEffect called");
        fetchUserData()
        initPaintings();
    }
    , []);

    async function fetchUserData() {
        setAllUserProfilePaintings(await getCapturedUserProfilePaintings(1));
    }

    const initPaintings = async() => {
        console.log("inside init paintings in profile: ");
        const allPaintingsCollection = await getPaintings();
        setAllPaintings(allPaintingsCollection);
    } 

    const filterResultsByName =  (allUserProfilePaintings, paintingName, allPaintings) => {
        const referencedUserCapturedPainting = allUserProfilePaintings.filter(result => {
            return result.painting_name === paintingName;
        });
        //console.log("referencedUserCapturedPainting: ", referencedUserCapturedPainting)
        //console.log("allUserProfilePaintings: ", allUserProfilePaintings)
        //console.log("pain", paintingName)
        //const referencedPainting = await getReferencePainting(paintingName);
        //console.log("referencedPainting: ", allPaintings)
        const referencedOriginalPaintings = allPaintings.filter(item => {
            return item.name === paintingName;
        })
        //console.log("referencedOriginalPaintings: ", referencedOriginalPaintings)
        return referencedOriginalPaintings.concat(referencedUserCapturedPainting)
        };
    
    return (
        <View style = {styles.container}>
            <Text style={styles.text}>You have {Array.from(new Set(allUserProfilePaintings.map(item => item.painting_name))).map(item => {return {name: item}}).length}/{allPaintings.length} try to catch it all! </Text>
            <FlatList
                vertical
                showsHorizontalScrollIndicator = {false}
                showsVerticalScrollIndicator = {false}
                data={ Array.from(new Set(allUserProfilePaintings.map(item => item.painting_name))).map(item => {return {name: item}})}                
                keyExtractor={(item) => item.name}
                renderItem = {({item}) => {
                    return (
                        <View>
                            <Text style={styles.title}>{item.name}</Text>
                            <FlatList
                                horizontal
                                showsHorizontalScrollIndicator = {false}
                                showsVerticalScrollIndicator = {false}
                                data={filterResultsByName(allUserProfilePaintings, item.name, allPaintings)}
                                keyExtractor={(item) => item.imageUrl}
                                renderItem = {({item}) => {
                                    return (
                                        <TouchableOpacity onPress={() => navigation.navigate("ProfileShowSingle", {item : item})}>
                                            <View style = {styles.container}>
                                                <Image style={styles.imageList} source={{ uri: item.imageUrl }} />
                                            </View>
                                        </TouchableOpacity>
                                    )
                                }}
                            />
                        </View> 
                    )
                }}
            />       
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 10,
        paddingTop: 10,
        paddingHorizontal: 10,
        paddingBottom: 30,
    },
    title: {
        fontSize: 18, 
        fontWeight: "bold",
        marginLeft: 15,
        marginBottom: 5
    },
    text: {
        alignSelf: "center",
        fontWeight: "bold",
        color: "#CB997E",
        fontSize: 20,
        marginBottom: 30
    },
    imageHome: {
        alignself:"center",
        width: "100%",
        height: undefined,
        aspectRatio: 1,
    },
      imageList: {
          width: 250,
          height: 200,
          borderRadius: 4,
          marginBottom: 5
      },
});
   