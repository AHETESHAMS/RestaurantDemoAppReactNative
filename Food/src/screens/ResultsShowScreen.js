import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, FlatList, Image} from 'react-native';
import yelp from '../api/yelp';
const ResultsShowScreen = ({navigation})=> {
    const[results, setResults] = useState(null); 
    const id = navigation.getParam('id');
    const getResults= async (id) => {
    const response = await yelp.get(`/${id}`);
    setResults(response.data);
   };

   useEffect(()=> {
    getResults(id);
   }, []);
   if(!results){
       return null;
   }
   return (
       <View>
            <Text style={styles.text}>{results.name}</Text>
            <FlatList
            data={results.photos}
            keyExtractor={(photo)=>photo}
            renderItem={({item})=>{
                return <Image style={styles.image} source={{uri:item}}/>
            }}/>
       </View>
   );
};

const styles = StyleSheet.create({
    image: {
        width:240,
        height:120,
        marginBottom:15,
        alignSelf:'center'
    },
    text: {
        fontSize:18,
        fontWeight:'bold',
        marginLeft:15,
        marginBottom:15,
        marginTop:15
    }
});

export default ResultsShowScreen;