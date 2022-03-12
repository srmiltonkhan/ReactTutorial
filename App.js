import ClickCounter from "./component/ClickCounter";
import MouseHoverCounter from "./component/MouseHoverCounter";
import Counter from "./component/Counter";

function App() {
  return (
    <div>
      {/* <User render={ (isLoggedIn)=> (isLoggedIn ? 'milton': 'Guest') }/> */}
      <Counter
        render={(count, incrmentCounter) => (
          <MouseHoverCounter count={count} incrmentCounter={incrmentCounter} />
        )}
      />
      <Counter
        render={(count, incrmentCounter) => (
          <ClickCounter count={count} incrmentCounter={incrmentCounter} />
        )}
      />
    </div>
  );
}
export default App;
