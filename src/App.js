import './App.css'
import SignUp from './components/authorization/SignUp'
import AppRoutes from './routes/AppRoutes'

function App() {
   return (
      <div style={{ background: 'red' }}>
         <AppRoutes />
         <SignUp />
      </div>
   )
}

export default App
