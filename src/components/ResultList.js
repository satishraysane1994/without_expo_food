import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    TouchableOpacity
} from 'react-native';
import { withNavigation } from 'react-navigation';
import ResultsDetail from './ResultsDetail';

const ResultsList=({title,results,navigation})=>{
    if(!results.length){
        return null;
    }
    return( 
            <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={results=>results.id}
        renderItem={({item})=> {
            return (
            <TouchableOpacity onPress={()=>navigation.navigate('ResultShow',{id:item.id})}>  
            <ResultsDetail result={item}/>
            </TouchableOpacity>
            );
        }}
        />
      
    </View>
    );
};
//<Text>Results:{results.length}</Text>
const styles =StyleSheet.create({
    title:{
        fontSize:18,
        fontWeight:'bold',
        marginLeft:15,
        marginBottom:5

    },
    container:{
         marginBottom:5           
    }
});

export default withNavigation(ResultsList);