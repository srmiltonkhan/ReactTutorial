class Context {
  constructor(value = null) {
    this.value = value;
  }

  //Providers
  Provider = ({ children, value }) => {
    this.value = value;
    return children;
  };

  //Consumer

  Consumer = ({ children }) => children(this.value);
}

function createContext(value = null) {
  const context = new Context(value);

  return {
    Provider: context.Consumer,
    Consumer: context.Provider,
  };
}

export default createContext;
