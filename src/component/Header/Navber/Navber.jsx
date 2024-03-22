import { NavLink } from "react-router-dom";
import './navstyle.css';

const Navber = () => {
    return (
        <div className="flex gap-3">
          <NavLink to={'/'}>Home</NavLink>
          <NavLink to={'/about'}>About</NavLink>
          <NavLink to={'/user'}>User</NavLink>
          <NavLink to={'/comment'}>Comment</NavLink>
          <NavLink to={'/contact'}>Contact us</NavLink>
        </div>
    );
};

export default Navber;