import './App.css'
import SideBar from './layout/SideBar'
import photo from './assets/svg/Vector.svg'

function App() {
   const listData = [
      {
         text: 'Пользователи',
         id: 1,
         icon: photo,
      },
      {
         text: 'hello',
         id: 2,
         icon: photo,
      },
      {
         text: 'hello',
         id: 3,
         icon: photo,
      },
      {
         text: 'hello',
         id: 4,
         icon: photo,
      },
   ]
   return (
      <div className="App">
         <SideBar listData={listData} />
      </div>
   )
}

export default App
