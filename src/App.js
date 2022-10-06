import './App.css'
import GiftCard from './components/UI/GiftCard'
import iphone from './assets/images/bookedCards/iphone.png'

function App() {
   return (
      <div className="App">
         <GiftCard leftImg={iphone} />
      </div>
   )
}

export default App
