import React, { useEffect,useState} from "react";
import {
    View,
    Button,
    Image,
    Text,
    FlatList,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
} from "react-native";
import ResultPaintingsList from "../components/ResultPaintingsList";
import {selectProfilePaintings, selectReferencePainting,getPaintings} from "../hooks/dto"; 


export default function ProfileScreen({route}) {
    //console.log("in profile: ", route.params.uri)
    const [allUserProfilePaintings, setUserProfilePaintings] = useState([]);
    const [allPhotos, setAll] = useState([]);

    useEffect(() => {
        fetchdata()
        initPaintings();
    }
    , []);

    async function fetchdata() {
        setUserProfilePaintings(await selectProfilePaintings(1));
    }
    const initPaintings = async() => {
        console.log("inside init paintings ")
        const a = await getPaintings()
        setAll(a);
    } 


    
        const filterResultsByName =  (userPaintings,paintingName,allPaintings) => {
            const f = userPaintings.filter(result => {
              return result.painting_name === paintingName;
            });
            console.log("f",f)
            console.log("l",userPaintings)
            console.log("pain", paintingName)
            //const referencedPainting = await selectReferencePainting(paintingName);
            console.log("referencedPainting: ", allPaintings)
            const a = allPaintings.filter(item => {
                return item.name === paintingName;
            })
            return a.concat(f)
          };
    

    return (
        <View>
            <Text>You have {Array.from(new Set(allUserProfilePaintings.map(item => item.painting_name))).map(item => {return {name: item}}).length} from {allPhotos.length} try to catch it all! </Text>
            <FlatList
                vertical
                showsHorizontalScrollIndicator = {false}
                data={ Array.from(new Set(allUserProfilePaintings.map(item => item.painting_name))).map(item => {return {name: item}})}                
                keyExtractor={(item) => item.name}
                renderItem = {({item}) => {
                    return (
                        <View>
                            <Text>{item.name}</Text>
                            <FlatList
                                horizontal
                                showsHorizontalScrollIndicator = {false}
                                data={filterResultsByName(allUserProfilePaintings, item.name,allPhotos)}
                                keyExtractor={(item) => item.imageUrl}
                                renderItem = {({item}) => {
                                    return (
                                        <View style = {styles.container}>
                                            <Image style={styles.imageList} source={{ uri: item.imageUrl }} />
                                        </View>
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
    imageHome: {
        alignself:"center",
        width: "100%",
        height: undefined,
        aspectRatio: 1,
    },container: {
        paddingTop: 20,
        paddingHorizontal: 20
      },
      imageList: {
          width: 250,
          height: 200,
          borderRadius: 4,
          marginBottom: 5
      },
});
   