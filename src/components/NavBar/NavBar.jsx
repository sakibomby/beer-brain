import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';

export default function NavBar({user, setUser}) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
    }

    return(
        <nav>
            <Link to="/mybeerlist">My Beer List</Link>
            &nbsp; | &nbsp;
            <Link to="/beers">Beers</Link>
            &nbsp; | &nbsp;
            <span>Welcome, {user.name}</span>
            &nbsp; | &nbsp;
            <Link to="" onClick={handleLogOut}>Log Out</Link>
        </nav>
    );
}