import { useEffect, useState } from "react";

function Incrment() {
    const [count, setCount] = useState(0)
    const [text, setText] = useState('')
    const [date, setDate] = useState(new Date())


    const  hangleChange = () =>{
        setCount( (prevState) => prevState + 1 )
    }

    useEffect( () => {
        console.log("Count only rendered")
        document.title = `Clicked ${count}`
    }, [count])

    const tick = () => {
        setDate( new Date())
    }

  

    useEffect( () => {
       let interval = setInterval(tick, 1000);

       return () => {
           console.log("Component will unmount")
           clearInterval(interval)
       }
     
    },[])


    return ( 
        <div>
            <h2>{count}</h2>

            <p>Date: {date.toLocaleTimeString()}</p>

            <input type="text" value={text}  onChange = {(e) => setText(e.target.value)} />
            <button type="button" onClick={hangleChange}>Click to Increment</button>
        </div>
     );
}

export default Incrment;