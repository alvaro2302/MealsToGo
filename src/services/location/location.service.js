import camelize from "camelize";
import { locations } from "./location.mock";
export const locationRequest = (searchTerm) =>{
    return new Promise(() =>{
      const location = locations[searchTerm];
      if (!location)
      {
        reject("notfound");
      }
      resolve(location);
    })
}

export const transformLocation = (location) =>{

    const formatedResponse = camelize(location);
    const {geometry = {} } = formatedResponse.results;
    const {lng,lat} = geometry.location;
    return {lat,lng};

}