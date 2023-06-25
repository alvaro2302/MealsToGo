import { mocks } from "./mock/index.js";
import camelize from "camelize";
const restaurantsRequest = (location = "37.7749295,-122.4194155") => {
    return new Promise((resolve, reject) => {
        const mock = mocks[location];
        if (!mock)
        {
            reject("not found")
        }
        resolve(mock)
    })
}
restaurantsRequest("51.219448,4.402464")
    .then((result) => {
        console.log(camelize(result));
    })
    .catch((error) => {
        console.log(error);
    })
