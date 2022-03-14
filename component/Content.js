import Counter from "./Counter";
import MouseHoverCounter from "./MouseHoverCounter";

export default function Content({ theme }) {
  return (
    <div>
      <h1>This is a content</h1>
      <Counter>
        {(count, incrmentCounter) => {
          return (
        
            (
                <MouseHoverCounter
                  count={count}
                  incrmentCounter={incrmentCounter}
                  theme={theme}
                />
              )
         
          );
        }}
      </Counter>
    </div>
  );
}
