import ClickCounter from "./component/ClickCounter";
import MouseHoverCounter from "./component/MouseHoverCounter";
import User from "./component/User";

function App() {
  return (
    <div>
      <ClickCounter />
      <MouseHoverCounter />
      <User name={ ()=> 'milton' }/>
    </div>
  );
}
export default App;
