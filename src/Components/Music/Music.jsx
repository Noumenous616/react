import React from 'react';
import s from './Music.module.css';
import { AudioPlayerProvider } from "react-use-audio-player"
import AudioPlayer from "./AudioPlayer";
import { arrayShift } from 'redux-form';

const Music = () => {
    return (
        <div>
            Music + {withoutRepeater(arr)}
        </div>
    )
}

const arr = [1, 1, 1, 2, 2, 3, 4, 4, 4, 5, 5, 6 ,6, 7, 8, 9, 9, 9, 9]

let withoutRepeater = (arr) => {
    const uniqueValues = [];
    const obj = {};

    for(let i=0; i < arr.length; i++) {
        const currentItem = arr[i];
       if(!(currentItem in obj)) {
           obj[currentItem] = 0;

       } else {
           obj[currentItem] += 0;
       }
    }
    const keys = Object.keys(obj);
    keys.forEach(key => {
        if (obj[key] === 0) {
            uniqueValues.push(key)
        }
    })
 return uniqueValues;
}





export default Music;