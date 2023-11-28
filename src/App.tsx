import { Route, Routes} from "react-router-dom"
import Home from "./Pages/Home"
import Menu from "./Pages/Menu"
import Reservation from "./Pages/Reservation"
import NavBar from "./Components/NavBar"
import Footer from "./Components/Footer"

function App() {

  return (
    <div className="w-screen h-screen bg-gradient-to-t from-amber-500 to-orange-400 font-mont">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/menu" element={<Menu />}></Route>
        <Route path="/reservation" element={<Reservation />}></Route>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
