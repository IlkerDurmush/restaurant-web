import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
        <header>
            <nav className="bg-orange-500 flex justify-between w-[100%] p-4 text-white">
              <span className="w-16"><Link to={"/"}>Tetriano</Link></span>
                <ul className="flex items-center gap-[4vw]">
                  <li><Link to={"/"}>Home</Link></li> 
                  <li><Link to={"/menu"}>Menu</Link></li>  
                  <li><Link to={"/reservation"}>Reservation</Link></li>   
                </ul>
                <span>Basket</span>
            </nav>
        </header>
    </>
  )
}

export default NavBar