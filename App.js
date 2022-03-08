import ClockList from "./component/ClockList";

function App() {
  const quantities = [1, 2, 3, 4];
  return (
    <>
      <ClockList quantities={quantities} />
    </>
  );
}

export default App;
