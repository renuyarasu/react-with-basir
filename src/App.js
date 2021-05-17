import logo from "./logo.svg";
import "./App.css";

function App() {
  function formateName(username) {
    return username.toUpperCase();
  }

  function greetings(username) {
    if (username) {
      return <h1>Hello {formateName(username)}</h1>;
    } else {
      return <h1>Hello Stranger!</h1>;
    }
  }

  const name = "Renuka Prsad";
  const imgPath = "./logo512.png";
  const img = <img src={imgPath} width="200" height="200" />;
  const element = (
    <div>
      <h1>Hello {name}</h1>;
      {img}
    </div>
  );

  return element;
}

export default App;
