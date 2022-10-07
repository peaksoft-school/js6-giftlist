import './App.css'
import Modal from './components/UI/modals/Modal'

function App() {
   const open = true
   return (
      <div className="App">
         <Modal isOpen={open}>
            <div>hello</div>
            <div>hello</div>
            <div>hellавыфавыфавфыавыфавыфавыфавыфавыфавыфo</div>
            <div>hello</div>
            <div>hello</div>
            <div>helвыфваыфаыфаывавываываыlo</div>
            <div>hello</div>
            <button>withа</button>
         </Modal>
      </div>
   )
}

export default App
