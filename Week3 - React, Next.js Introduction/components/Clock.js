import { useState, useEffect } from "react";
import ClockContainer from "./ClockContainer";

export default function Clock({locale}){

  // let useStateArray = useState(new Date());
  // let date = useStateArray[0];
  // let setDate = useStateArray[1];

  let [date, setDate] = useState(null); // shorthand for the above code

  useEffect(()=>{

    setDate(new Date());
    let interval = setInterval(()=>{
      setDate(new Date());
    },1000);

    return ()=>{ // put any clean up code here (ie: clear the interval)
      clearInterval(interval);
    };
    
  },[]) // empty "dependency array", so that it only renders when the client-side JS kicks in (Hydrated)

  return (
    <>
      <ClockContainer clockOutput = {
        <>
          Locale: {locale} - {date?.toLocaleTimeString(locale)}
        </>
      } />
      
    </>
  )
}

Clock.defaultProps = {
  locale: "en-CA"
}