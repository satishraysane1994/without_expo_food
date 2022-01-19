import { useEffect,useState } from "react";
import yelp from "../api/yelp";

export default()=>{
    const [results,setResults]=useState([]);
    const [errorMessage,setErrorMessage]=useState('');

    const searchApi = async(t)=>{
        console.log("Hi There");
        try{
        const response=await yelp.get('/search',{
            params:{
                limit:50,
                term: t,
                location:'san jose'
            }
        });
        setResults(response.data.businesses);
    } catch(err){
         setErrorMessage('oops Something Went wrong');
    }
   }; 
   /*
   call Search Api when component
   is first rendered.bad code!
   searchApi('pasta');                     */
   
   
        useEffect(() => {
            searchApi('pasta');    
        }, []);

        return [searchApi,results,errorMessage];
};