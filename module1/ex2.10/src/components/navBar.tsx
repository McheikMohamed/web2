import { Link } from "react-router-dom";


const NavBar = () =>(
    <nav>
        <Link to="/" className="LinkNav">Home</Link>
        <Link to="/Cinema" className="LinkNav">Cinema</Link>
        <Link to="/Movies" className="LinkNav">Movies</Link>
        <Link to="/AddMovie">Add Movie</Link>
    </nav>
)

export default NavBar;