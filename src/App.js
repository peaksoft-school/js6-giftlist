import './App.css'
import SignIn from './components/authorization/SignIn'
import AppRoutes from './routes/AppRoutes'

function App() {
   return (
      <div style={{ background: 'red' }}>
         <AppRoutes />
         <SignIn />
      </div>
   )
}

export default App
