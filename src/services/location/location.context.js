import  { locationRequest, transformLocation } from "./location.service";
import  React,{useContext,useState,useEffect,useMemo, createContext} from "react";
export const LocationContext = createContext();
export const LocationContextProvider = ({children}) =>{
    const [isLoading,setIsloading] =  useState(false)
    const [keyword,setKeyword] = useState("");
    const [location,setLocation] = useState(null);
    const [error, setError] = useState(null);
    const onSearch =  (searchKeyword) =>{

        setIsloading(true);
        setKeyword(searchKeyword);
        console.log("searchKeyword",searchKeyword.toLowerCase());
        if(!searchKeyword.length)
        {
            return;
        }
        setTimeout(() =>{
            locationRequest(searchKeyword.toLowerCase())
            .then(transformLocation)
            .then((result) =>{
                
                setIsloading(false);
                setLocation(result)
                //console.log("locationString",locationString);
                /*restaurantsRequest(locationString)
                .then(restaurantsTransform)
                .then((results)=>{
                    setIsloading(false);
                    setRestaurants(results);
                    setIsSearch(false)
                    
                })
                */
            
            })
            .catch((error)=>{
                console.log(error);
                setIsloading(false);
                setError(error);
              
            })
        },2000)
       

        
    }
    return (
        <LocationContext.Provider 
            value= {{
                isLoading, 
                error,
                location,
                keyword,
                search:onSearch
                }}>  
            {children} 
        </LocationContext.Provider>
    );
}