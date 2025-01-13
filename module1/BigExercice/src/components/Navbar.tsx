import { Link } from "react-router-dom";

const NavBar = () =>(
    <nav>
        <Link to="/">Home Page</Link>
        <Link to="Cinema">Cinema</Link>
        <Link to="MovieList">Movie</Link>
        <Link to="AddMovie">Add Movie </Link>
    </nav>
)

export default NavBar;