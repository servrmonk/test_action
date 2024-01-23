import { useState } from "react";
import Output from "./Output";

const Greeting = ()=>{
    const [changedText,setChangedText]  = useState(false)
    const changeTextHandler = () =>{
        setChangedText(true)
    }
    return <div>
        <h2>Hello World</h2>
       { !changedText && <Output>It's good to see you</Output>}
       { changedText && <Output>Changed</Output>}
       { !changedText && <p>It's good to see you</p>}
       { changedText && <p>Changed</p>}
        <button onClick={changeTextHandler}>Change Text!</button>
    </div>
    // test we have to write when the button is not clicked and what would be the value and after clicked
}
export default Greeting;