import { initializeApp } from "firebase/app";
import 'firebase/auth'
import { processResult } from "immer/dist/internal";

const app  =  firebase.initializeApp( {

    apiKey: process.env.APIKEY,
  
    authDomain: process.env.AUTHDOMAIN,
  
    projectId: process.env.PROJECTID,
  
    storageBucket: process.env.STORAGEBUCKET,
  
    messagingSenderId: process.env.MESSAGINGSENDERID,
  
    appId: process.env.APP_ID,
  
    measurementId: process.env.MEASUREMENT_ID
  
});

export default app