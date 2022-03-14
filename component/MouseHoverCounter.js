function MouseHoverCounter({ count, incrmentCounter,theme }) {
  const style = theme==='dark' ? {backgroundColor: `#000000`, color: 'white'} : null;
  return (
    <div>
      <h1 onMouseOver={incrmentCounter} style={style}>You have {count} times</h1>
    </div>
  );
}

export default MouseHoverCounter;
