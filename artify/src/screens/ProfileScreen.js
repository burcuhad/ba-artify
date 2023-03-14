import React, { useEffect,useState } from "react";
import {
    View,
    SafeAreaView,
    Image,
    Text,
    FlatList,
    TouchableOpacity,
    StyleSheet
} from "react-native";
import { getCapturedUserProfilePaintings, getReferencePainting, getPaintings } from "../hooks/dto";
import { Ionicons } from '@expo/vector-icons';

export default function ProfileScreen({navigation}) {
    const [allUserProfilePaintings, setAllUserProfilePaintings] = useState([]);
    const [allPaintings, setAllPaintings] = useState([]);

    useEffect(() => {
        console.log("profile useEffect called");

        // async function fetchUserData() {
        //     setAllUserProfilePaintings(await getCapturedUserProfilePaintings(1));
        // }
    
        // const initPaintings = async() => {
        //     console.log("inside init paintings in profile: ");
        //     const allPaintingsCollection = await getPaintings();
        //     setAllPaintings(allPaintingsCollection);
        // } 

        fetchUserData()
        initPaintings();
    }, []);

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
        <SafeAreaView style = {{marginBottom: 60}}>   
        {/*<TouchableOpacity  onPress={() => {fetchUserData(), initPaintings()}} > 
            <Text>Refresh</Text> 
        </TouchableOpacity> */}
            <Text style={styles.text}>You have {Array.from(new Set(allUserProfilePaintings.map(item => item.painting_name))).map(item => {return {name: item}}).length}/{allPaintings.length} try to catch it all! </Text>
            <View style={{flexDirection: "row"}}>
                <Ionicons name = "refresh" style ={{margin: 30}} size={24} color="black" onPress={() => { fetchUserData(), initPaintings()}} />
                <Text> </Text>
            </View>
            <FlatList
                vertical
                showsHorizontalScrollIndicator = {false}
                showsVerticalScrollIndicator = {false}
                data = { Array.from(new Set(allUserProfilePaintings.map(item => item.painting_name))).map(item => {return {name: item}})}                
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
                                            <View style = {styles.imageContainer}>
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
            </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
        backgroundColor: "pink"
    },
    imageContainer: {
        marginHorizontal: 15,
    },
    title: {
        fontSize: 15, 
        fontWeight: "bold",
        marginLeft: 15,
        marginVertical: 10
    },
    text: {
        alignSelf: "center",
        fontWeight: "bold",
        color: "#CB997E",
        fontSize: 20,
        marginTop: 10,
        marginBottom: 10
    },
      imageList: {
        width: 250,
        height: 200,
        borderRadius: 4,
      },
});
   