import { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  return (
    <div className='Login'>
      <h1 className='font-weight-bold align-text-sm-right align-items-sm-center justify-content-center' style={{ 'marginTop': '30px', 'marginLeft': '450px' }}>Login</h1>
      <div className='container d-flex align-items-sm-center justify-contents-sm-center' style={{ 'backgroundColor': '#3dbee9', 'height': '350px', 'maxWidth': '30%', 'borderRadius': '10px' }}>
        <div className='loginList'>
          <form className='form-group'>
            <div className='loginListItems d-block flex-sm-column justify-content-sm-center align-items-sm-center text-align-sm-center' style={{ 'gap': '20px', 'border': 'none', 'outline': 'none' }}>
              <label className='align-text-sm-left' style={{ 'marginLeft': '10px' }}>Email:  </label>
              <input
                type='text'
                className='form-control d-block align-items-sm-center justify-content-sm-center'
                style={{ 'maxWidth': '600px' }}
                placeholder='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <br />
            <div className='loginItems d-block flex-sm-column justify-content-sm-center align-items-sm-center text-align-sm-center' style={{ 'gap': '20px', 'border': 'none', 'outline': 'none' }}>
              <label className='align-text-sm-left' style={{ 'marginLeft': '10px' }}>Password:  </label>
              <input
                type='password'
                className='form-control d-block'
                style={{ 'maxWidth': '600px' }}
                placeholder='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <br />
            <div>
              <Link to='/userDashboard'>
                <button className='loginButton border-none cursor-pointer d-block-inline' style={{ 'backgroundColor': '#2723dc', 'color': '#ffffff', 'margin': '10px', 'padding': '5px', 'marginLeft': '10px', 'border': 'none' }}>Login as User</button>
              </Link>
              <Link to='/adminDashboard'>
                <button className='loginButton border-none cursor-pointer d-block-inline' style={{ 'backgroundColor': '#2723dc', 'color': '#ffffff', 'margin': '10px', 'padding': '5px', 'marginLeft': '10px', 'border': 'none' }}>Login as Admin</button>
              </Link>
            </div>
          </form>
        </div>
      </div >
    </div >
  );
}

export default Login;
