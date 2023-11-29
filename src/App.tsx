import { Route, Routes} from "react-router-dom"
import Home from "./Pages/Home"
import Menu from "./Pages/Menu"
import Reservation from "./Pages/Reservation"
import NavBar from "./Components/NavBar"
import Footer from "./Components/Footer"
import Basket from "./Pages/Basket"


function App() {

  return (
    <div className="w-full min-h-screen max-h-full bg-gradient-to-t from-amber-500 to-orange-400 font-mont flex flex-col no-scrollbar">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/menu" element={<Menu />}></Route>
        <Route path="/reservation" element={<Reservation />}></Route>
        <Route path="/basket" element={<Basket/>}></Route>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
