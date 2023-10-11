import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <div className="navbar d-flex justify-content-sm-center" style={{ 'backgroundColor': '#3dbee9', 'height': '100px' }}>
      <div className="navbarContainer d-flex align-items-sm-center justify-content-sm-space-between" style={{ 'color': '#ffffff', 'maxWidth': 'max-content' }}>
        <Link className='navbar-brand' to='/' style={{ color: "inherit", textDecoration: "none" }}>
          <span className='logo' style={{ 'fontSize': '50px', 'fontWeight': 'bold' }}>TakeMyExamz</span>
        </Link>
        <div className='navItems'>
          <Link to='/register'>
            <button className='navButton d-inline-block align-items-sm-flex-end justify-content-sm-right cursor-pointer mt-20px ml-50px' style={{ 'backgroundColor': '#3dbee9', 'border': '1px solid #ffffff', 'color': '#ffffff', 'padding': '5px 10px' }}>Register</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
