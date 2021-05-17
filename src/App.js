import logo from "./logo.svg";
import "./App.css";

function App() {
  
  function formateName(username) {
    return username.toUpperCase();
  }

  function greetings(username) {
    if (username) {
      return <h1>Hello {formateName(username)}</h1>;
    } 
    else {
      return <h1>Hello Stranger!</h1>;
    }
  }

  const name = "Renuka Prsad";
  const element = <h1>Hello {formateName(name)}</h1>;

  return greetings('Gnapika');
}

export default App;
