import React, {useState,useEffect,useMemo, createContext, useContext,} from "react";

import { restaurantsRequest,restaurantsTransform } from "./restaurants.service";
import { LocationContext } from "../location/location.context";

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = ({children}) => {
    const [restaurants,setRestaurants] = useState([]);
    const [isLoading,setIsloading] = useState(false);
    const [error, setError] = useState(null);
    const {location} = useContext(LocationContext);

    const retrieveRestaurants = (locationPosition) =>{
        console.log("locationRestaurants",locationPosition);
        setRestaurants([]);
        setIsloading(true);
        setTimeout(() =>{
            restaurantsRequest(locationPosition)
            .then(restaurantsTransform)
            .then((results)=>{
                setIsloading(false);
                setRestaurants(results);
                
            })
            .catch((error) => {
                setIsloading(false);
                setError(error);
            })
        },2000)
    }
    useEffect(() =>{
       
        if(location)
        {
            const locationString = location.lat +","+ location.lng;
            retrieveRestaurants(locationString);
        }
           
        
           
    
        
    }, [location])
    return (
            <RestaurantsContext.Provider value= {{restaurants, isLoading,error,setRestaurants,setIsloading,setError}}>  
                {children} 
            </RestaurantsContext.Provider>
        );
};