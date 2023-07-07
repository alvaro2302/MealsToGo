import camelize from "camelize";
import { locations } from "./location.mock";
export const locationRequest = (searchTerm) =>{
    return new Promise((resolve, reject) =>{
      const location = locations[searchTerm];
      console.log("location",location)
      if (!location)
      {
        reject("notfound");
      }
     
      resolve(location);
      
      
    })
}

export const transformLocation = (location) =>{

    const formatedResponse = camelize(location);
    const responseResults = formatedResponse.results[0]
    const {geometry = {} } = responseResults;
    const {lng,lat} = geometry.location;
    return {lat,lng};

}