import Counter from "./Counter";
import MouseHoverCounter from "./MouseHoverCounter";
import themeContext from "../contexts/themeContext";

export default function Content() {
  return (
    <div>
      <h1>This is a content</h1>
      <Counter>
        {(count, incrmentCounter) => {
          return (
            <themeContext.Consumer>
              {({ theme }) => (
                <MouseHoverCounter
                  count={count}
                  incrmentCounter={incrmentCounter}
                  theme={theme}
                />
              )}
            </themeContext.Consumer>
          );
        }}
      </Counter>
    </div>
  );
}
