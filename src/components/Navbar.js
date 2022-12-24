import { Link } from "react-router-dom";
import { useTheme } from '../hooks/useTheme'

import './Navbar.css'
import Searchbar from'./Searchbar'



const Navbar = () => {
    const { color} = useTheme()
    return ( 
        <div className="navbar" style={{background: color}}>
            <nav>
                <Link to="/" className="brand">
                    <h1>G@M3-hub</h1>
                </Link>
                <Searchbar/>
                <Link to="/create">Add New Game</Link>
            </nav>
        </div>
     );
}
 
export default Navbar;