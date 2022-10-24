import './App.css'
import Sidebar from './layout/SideBar'

function App() {
   const list = [
      {
         text: 'text',
         path: '/',
         id: '1',
      },
   ]
   return (
      <div className="App">
         <Sidebar listData={list} />
      </div>
   )
}

export default App
