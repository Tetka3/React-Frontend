import "./Navbar.scss";
import {Link} from "react-router-dom";

const Navbar = () => {
    return(
        <div className="navbar">
            <div className="left">
                <span>My Books</span> 
            </div>
            <div className="right">
                <li>Log In</li>
                <li><Link to="/add" style={{textDecoration: 'none'}}>Add a Book</Link></li>
                <li>About</li>                
            </div>
        </div>
    )
}
export default Navbar