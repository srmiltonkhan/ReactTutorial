import { useEffect, useState } from "react";

function Incrment() {
    const [count, setCount] = useState(0)
    const [text, setText] = useState('')

    const  hangleChange = () =>{
        setCount( (prevState) => prevState + 1 )
    }

    useEffect( () => {
        console.log("redndred")
        document.title = `Clicked ${count}`
    }, [count])
    return ( 
        <div>
            <h2>{count}</h2>
            <input type="text" value={text}  onChange = {(e) => setText(e.target.value)} />
            <button type="button" onClick={hangleChange}>Click to Increment</button>
        </div>
     );
}

export default Incrment;