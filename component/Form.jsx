import React, { useEffect, useRef } from "react";

function Form() {
    const inputRef = useRef(null);
    useEffect( () => {
        inputRef.current.focus();
    });

    return ( 
        <div>
            <p>
                <input type="text" ref={inputRef} placeholder="Please Enter something" />
            </p>
        </div>
     );
}

export default Form;