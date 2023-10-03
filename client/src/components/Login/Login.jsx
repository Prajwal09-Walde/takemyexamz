import { useState} from 'react';
import './login.css';
import { Link } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    
    return (
        <div className='Login'>
           <div className='loginContainer'>
             <form>
               <div className='loginItems'>
                    <label>Email:  </label>
                    <input
                        type='text'
                        placeholder='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
               </div>
               <br/>
               <div className='loginItems'>
                    <label>Password:  </label>
                    <input
                        type='password'
                        placeholder='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
               </div>
               <br/>
               <div>
                <Link to='/userDashboard'>
                  <button className='loginButton'>Login as User</button>
                </Link>
                <Link to='/adminDashboard'>
                  <button className='loginButton'>Login as Admin</button>
                </Link>
               </div>
             </form>
           </div> 
        </div>
    );
}

export default Login;
