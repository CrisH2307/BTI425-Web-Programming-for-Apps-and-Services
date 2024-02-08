import { useState } from "react"

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

export default function RandomConsole(){

    const [randArray, setRandArray] = useState([]);

    function addRandom(e){
        let rand = getRandomInt(10);
        //setRandArray(randArray.push(rand)); // this will not work properly
        setRandArray([...randArray, rand]); // when updating an existing object or array, we need to create a new object / array
        console.log(randArray);
    }

    return (<>
        <button onClick={addRandom}>Add New Random Number to the Array (Console)</button>
    </>)
}