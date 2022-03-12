function MouseHoverCounter({ count, incrmentCounter }) {
  return (
    <div>
      <h1 onMouseOver={incrmentCounter}>You have {count} times</h1>
    </div>
  );
}

export default MouseHoverCounter;
