import React, { useState } from "react";
import Increment from "./component/Incrment";

export default function App(){
  const [show , setShow] = useState(true);
  return (
    <>
      <div>{show && <Increment/>}</div>
      <p>
        <button type="button" onClick={ () => setShow( (prevShow) => !prevShow)}>
          {show? 'Hide Button': 'Show button'}
        </button>
      </p>
    </>
  );
}