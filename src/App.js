import "./App.css";
import NavBar from "./Components/NavBar";
import ItemListContainer from "./Components/ItemListContainer";
import ItemDetailContainer from "./Components/ItemDetailContainer";
function App() {
  return (
    <div className="App">
      <NavBar quantidade="4" />
      <ItemListContainer />
      <ItemDetailContainer />
    </div>
  );
}

export default App;
