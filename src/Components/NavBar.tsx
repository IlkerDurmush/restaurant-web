import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons'

const NavBar = () => {
  return (
    <>
        <header>
            <nav className="bg-transparent flex justify-between w-[100%] p-4 text-white font-mont relative drop-shadow-2xl">
              <span className="w-16 flex items-center font-alexbush text-5xl hover:text-gray-200"><Link to={"/"}>Tetriano</Link></span>
                <ul className="flex items-center gap-[4vw] ">
                  <li className="hover:text-gray-200"><Link to={"/"}>Home</Link></li> 
                  <li className="hover:text-gray-200"><Link to={"/menu"}>Menu</Link></li>  
                  <li className="hover:text-gray-200"><Link to={"/reservation"}>Reservation</Link></li>   
                </ul>
                <span className="flex items-center fa-lg"><FontAwesomeIcon icon={faBasketShopping}/></span>
            </nav>
        </header>
    </>
  )
}

export default NavBar