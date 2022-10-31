import './App.css'
import AppRoutes from './routes/AppRoutes'
import { BreadCrumbs } from './components/UI/BreadCrumbs'
import { RolePaths } from './utils/constants/general'

function App() {
   return (
      <div>
         <AppRoutes />
         Hello
         <BreadCrumbs translate={RolePaths} />
      </div>
   )
}

export default App
