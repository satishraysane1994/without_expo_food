import React,{useState} from 'react';
import { View,Text,StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultList';
import { ScrollView } from 'react-native-gesture-handler';

const SearchScreen=()=>{
    const [term,setTerm]=useState('');
    const [searchApi,results,errorMessage]=useResults();
    
    const filterResultsByPrice=(price)=>{
        //price==='$'||'$$'||'$$$'
        return results.filter(result=>{
            return result.price===price;
        });
    };
   
    /* const [results,setResults]=useState([]);
    const [errorMessage,setErrorMessage]=useState('');

    const searchApi = async()=>{
        console.log("Hi There");
        try{
        const response=await yelp.get('/search',{
            params:{
                limit:50,
                term,
                location:'san jose'
            }
        });
        setResults(response.data.businesses);
    } catch(err){
         setErrorMessage('oops Something Went wrong');
    }
   }; */
   /*
   call Search Api when component
   is first rendered.bad code!
   searchApi('pasta');                     */
   
   /*
        useEffect(() => {
            searchApi('pasta');    
        }, []);
        
        line 59 <Text>We have found {results.length} results</Text>*/


    return(
    //<View style={{flex:1}}>
        <>
        <SearchBar 
        term={term} 
        onTermChange={setTerm}
        onTermSubmit={()=>searchApi(term)}
        />{errorMessage?
        <Text>{errorMessage}</Text>:null}
        
        <ScrollView>
        <ResultsList
         results={filterResultsByPrice('$')} 
         title="Cost Effective"
         
         />
        <ResultsList
         results={filterResultsByPrice('$$')} 
         title="Bit Pricier"
         
         />
        <ResultsList
         results={filterResultsByPrice('$$$')} 
         title="Big Spender"
         
         />
         <ResultsList
         results={filterResultsByPrice('$')} 
         title="Cost Effective"
         
         />
        <ResultsList
         results={filterResultsByPrice('$$')} 
         title="Bit Pricier"
         
         />
        <ResultsList
         results={filterResultsByPrice('$$$')} 
         title="Big Spender"
         
         />
         <ResultsList
         results={filterResultsByPrice('$')} 
         title="Cost Effective"
         
         />
        <ResultsList
         results={filterResultsByPrice('$$')} 
         title="Bit Pricier"
         
         />
        <ResultsList
         results={filterResultsByPrice('$$$')} 
         title="Big Spender"
         
         />
        
        
        </ScrollView>  
    </>
    

    );
};

const styles=StyleSheet.create({});

export default SearchScreen;