import ImagePicker from './components/UI/ImagePicker'
import './App.css'

function App() {
   return (
      <div className="App">
         <ImagePicker getImage={(e) => console.log(e)} />
      </div>
   )
}

export default App
