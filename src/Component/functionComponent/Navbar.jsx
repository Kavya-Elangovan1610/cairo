import "../../CSS/Navbar.css"
import { Link} from "react-router-dom"
const Navbar=() =>{
    return(
        <ol>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
            <li><Link to='/login'>login</Link></li>
        </ol>
    )
}
export default Navbar;
