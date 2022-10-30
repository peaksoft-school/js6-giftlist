import './App.css'
// import SignIn from './components/authorization/SignIn'
import SignUp from './components/authorization/SignUp'
import AppRoutes from './routes/AppRoutes'

function App() {
   return (
      <div style={{ background: 'red' }}>
         <AppRoutes />
         <SignUp />
         {/* <SignIn /> */}
      </div>
   )
}

export default App
