import React, {useState, useEffect} from "react";
import { Text, StyleSheet, View , ScrollView} from "react-native";
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList'
const SearchScreen = () => {
  const [term,setTerm] = useState('');
  const [searchApi,results,errorMessage] = useResults();
  const filrerResultsByPrice = (price)=> {
    return results.filter(results => {
      return results.price === price;
    });
  }
  return(
    <>
      <SearchBar term={term} 
      onTermChange={setTerm} 
      onTermSubmit={()=>searchApi(term)}/>
     <Text>{errorMessage}</Text>
     <ScrollView>
     <ResultsList  results={filrerResultsByPrice('$')} title="Cost Effective" />
     <ResultsList  results={filrerResultsByPrice('$$')} title="Bit Pricier" />
     <ResultsList  results={filrerResultsByPrice('$$$')} title="Big Spender" />
     </ScrollView>
     </>
  );  
};

const styles = StyleSheet.create({})

export default SearchScreen;
