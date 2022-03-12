import ClickCounter from "./component/ClickCounter";
import MouseHoverCounter from "./component/MouseHoverCounter";
import Counter from "./component/Counter";

function App() {
  return (
    <div>
      <Counter>
        {(count, incrmentCounter) => (
          <ClickCounter count={count} incrmentCounter={incrmentCounter} />
        )}
      </Counter>

      <Counter>
        {(count, incrmentCounter) => (
          <MouseHoverCounter count={count} incrmentCounter={incrmentCounter} />
        )}
      </Counter>
    </div>
  );
}
export default App;
