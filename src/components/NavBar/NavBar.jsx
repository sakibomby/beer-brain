import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';

export default function NavBar({user, setUser}) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
    }

    return(
        <nav>
            <Link to="/mybeerlist"><button>My Beer List</button></Link>
            &nbsp; | &nbsp;
            <Link to="/beers"><button>Beers</button></Link>
            &nbsp; | &nbsp;
            <Link to="" onClick={handleLogOut}><button>Log Out</button></Link>
        </nav>
    );
}