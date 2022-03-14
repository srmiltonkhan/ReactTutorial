export default function ClickCounter({ count, incrmentCounter }) {
  return (
    <div>
      <button type="button" onClick={incrmentCounter}>
        Clicked {count} times
      </button>
    </div>
  );
}
