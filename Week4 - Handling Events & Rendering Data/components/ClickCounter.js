import { useState } from "react";

export default function ClickCounter({start}){

    const [numTimes, setNumTimes] = useState(start);

    function clickHandler(e, msg){ // e is always the "event" object
        setNumTimes(numTimes + 1);
        console.log(msg)
    }

    return (<>
        <button onClick={e => clickHandler(e, "I was clicked!")} >Clicked {numTimes} times</button>
    </>);
}

ClickCounter.defaultProps = {
    start: 0
}