import React from 'react';
import { View,StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { TextInput } from 'react-native-gesture-handler';

const SearchBar=({term,onTermChange,onTermSubmit})=>{
    return(
    <View style={styles.backgroundStyle}>
        <Icon name="search" style={styles.iconStyle}/>
        <TextInput 
        style={styles.inputStyle} 
        placeholder='Search' 
        value={term}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
        />
    </View>
    );
};

const styles=StyleSheet.create({
    backgroundStyle:{
        marginTop:10,
        backgroundColor:'#F0EEEE',
        height:50,
        borderRadius:5,
        marginHorizontal:15,
        flexDirection:'row',
        marginBottom:10
    },
    inputStyle:{
        flex:1,
        fontSize:18,    
    },
    iconStyle:{
        color:'blue',
        fontSize:35,
        alignSelf:'center',
        marginHorizontal:15,
    }
});

export default SearchBar;