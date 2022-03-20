import { useState, useCallback } from "react";
import Titile from "./component/Titile";
import ShowCount from "./component/ShowCount";
import Button from "./component/Button";

export default function App() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const incrmentByOne = useCallback(() => {
    setCount1((prevSate) => prevSate + 1);
  }, []);

  const incrmentByFive = useCallback(() => {
    setCount2((prevSate) => prevSate + 5);
  }, []);

  return (
    <div>
      <Titile />
      <ShowCount count={count1} title={"Counter 1"} />
      <Button handleClick={incrmentByOne}>Increment by one</Button>
      <hr />

      <ShowCount count={count2} title={"setCount 2"} />
      <Button handleClick={incrmentByFive}>Increment by Five</Button>
    </div>
  );
}
