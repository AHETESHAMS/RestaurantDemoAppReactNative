import React from 'react';
import {Text, View, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import ResultsDetails from './ResultsDetails.';
import {withNavigation} from 'react-navigation'
const ResultsList = ({title, results, navigation}) => {
    if(!results.length){
        return null;
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal
            data={results}
            keyExtractor={results=>results.id}
            renderItem={({item})=>{
                return (
                <TouchableOpacity onPress={() => navigation.navigate('ResultsShow',{id:item.id})}>
                <ResultsDetails results={item} />
                </TouchableOpacity>
                    );
            }}/>
        </View>
    );
}

const styles=StyleSheet.create({
    container: {
        marginBottom:10
    },
    title : {
        fontSize:18,
        fontWeight:'bold',
        marginLeft:15,
        marginBottom:5
    }
});

export default withNavigation(ResultsList);