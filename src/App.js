import './App.css'
import SideBar from './layout/SideBar'

function App() {
   const listData = [
      {
         text: 'Пользователи',
         id: 1,
      },
      {
         text: 'hello',
         id: 2,
      },
      {
         text: 'hello',
         id: 3,
      },
      {
         text: 'hello',
         id: 4,
      },
   ]
   return (
      <div className="App">
         <SideBar listData={listData} />
      </div>
   )
}

export default App
