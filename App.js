import Emoji from "./component/composition/Emoji";
import Text from "./component/composition/Text";
function App() {
  return <Emoji>{({ addEmoji }) => <Text addEmoji={addEmoji} />}</Emoji>;
}
export default App;
