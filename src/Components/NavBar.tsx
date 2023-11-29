import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons'

const NavBar = () => {
  return (
    <>
        <header>
            <nav className="bg-transparent 
                            flex justify-between 
                            w-[100%] p-4 
                            text-white 
                            font-mont 
                            relative 
                            drop-shadow-2xl">
              <span className="flex items-center font-alexbush text-5xl hover:text-gray-200 select-none item"><Link to={"/"}>Tetriano</Link></span>
                <ul className="flex items-center gap-[4vw] select-none">
                  <li className="item"><Link to={"/"}>Home</Link></li> 
                  <li className="item"><Link to={"/menu"}>Menu</Link></li>  
                  <li className="item"><Link to={"/reservation"}>Reservation</Link></li>   
                </ul>
                <span className="flex items-center fa-lg hover:text-gray-200"><Link to={"/basket"}><FontAwesomeIcon icon={faBasketShopping}/></Link></span>
            </nav>
        </header>
    </>
  )
}

export default NavBar