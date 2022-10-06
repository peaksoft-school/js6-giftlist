import './App.css'
import HolidayCard from './components/UI/HolidayCard'
import mothersDay from './assets/images/Rectangle8.png'

function App() {
   return (
      <div className="App">
         <HolidayCard src={mothersDay} date="12.04.22" title="День матери" />
      </div>
   )
}

export default App
