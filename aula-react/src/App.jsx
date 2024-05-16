import "./App.css"
import { Header } from "./Components/Header"
import { Lista } from "./Components/Lista"
import {Footer} from "./Components/Footer"
function App() {
  

  return (
    <>
      <div className="container">
       <Header title="Projeto React" subTitle="Sistema" />
       <Lista/>
       <Footer/>
      </div>
    </>
  )
}

export default App
