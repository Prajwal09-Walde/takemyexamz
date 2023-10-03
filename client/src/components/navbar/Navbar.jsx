import {Link} from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
    return (
        <div className="navbar">
           <div className="navbarContainer">
              <Link to='/' style={{color: "inherit", textDecoration: "none"}}>
                <span className='logo'>TakeMyExamz</span>
              </Link>
           </div> 
           <div className='navItems'>
               <Link to='/register'>
                 <button className='navButton'>Register</button>
               </Link> 
           </div>
        </div>
    );
}

export default Navbar;
