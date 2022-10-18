import './App.css'
import SideBar from './layout/SideBar'
import photo from './assets/svg/Vector.svg'

function App() {
   const listData = [
      {
         text: 'Пользователи',
         id: 1,
         icon: photo,
         path: '/posts',
      },
      {
         text: 'Статистика',
         id: 2,
         icon: photo,
         path: '/main',
      },
   ]
   return (
      <div className="App">
         <SideBar listData={listData} />
      </div>
   )
}

export default App
