class Context {
  constructor(value = null) {
    this.value = value;
  }


//Providers
Provider = ({children,value}) => {
    this.value = value;
}

}