import { useState } from "react";

function Todo() {
    const [todo, setTodo] = useState("");
    const [warning, setWarning] = useState(null);

    const handleInput = (e) =>{
        const inputValue = e.target.value;
        const updatingWarning = inputValue.includes('.js')?'You need Javascript': null;


        setTodo(inputValue)
        setWarning(updatingWarning)
    }

    return (  
        <>
            <h1>{todo}</h1>
            <p>
                <textarea value={todo} onChange = {handleInput}/>
            </p>
            <hr />

            <p>{warning || 'Good Choice'}</p>
        </>
    );
}

export default Todo;