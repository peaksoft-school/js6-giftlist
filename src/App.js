import "./App.css";
import IconButton from "./components/UI/IconButton";
import controlls from './assets/svg/Vector (1).svg'

function App() {
  return (
    <div className="App">
      <IconButton>
        <img src={controlls} />
      </IconButton>
    </div>
  );
}

export default App;
