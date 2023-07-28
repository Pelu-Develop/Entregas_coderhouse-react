import "./App.css";
import NavBar from "./Components/NavBar";
import Container from "./Components/ItemListContainer";

function App() {
  return (
    <div className="App">
      <NavBar quantidade="4" />
      <Container />
    </div>
  );
}

export default App;
