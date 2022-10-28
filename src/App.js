import './App.css'
import ChangePassword from './components/authorization/ChangePassword'
// import ChangePassword from './components/authorization/ChangePassword'
import AppRoutes from './routes/AppRoutes'

function App() {
   return (
      <div style={{ background: 'red' }}>
         <AppRoutes />
         <ChangePassword />
      </div>
   )
}

export default App
